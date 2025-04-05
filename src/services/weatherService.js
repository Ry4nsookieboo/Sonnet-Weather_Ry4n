export const fetchWeather = async (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode,uv_index_max&hourly=temperature_2m,weathercode&timezone=auto`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch weather data');
    const data = await response.json();

    const { temperature, weathercode, is_day, windspeed } = data.current_weather;
    const {
      time,
      temperature_2m_max,
      weathercode: dailyCodes,
      uv_index_max,
    } = data.daily;

    const { time: hourlyTimes, temperature_2m: hourlyTemps, weathercode: hourlyCodes } = data.hourly;

    const weatherMapping = {
      0: { description: 'Clear sky', icon: '01d' },
      1: { description: 'Mainly clear', icon: '01d' },
      2: { description: 'Partly cloudy', icon: '02d' },
      3: { description: 'Overcast', icon: '03d' },
      45: { description: 'Fog', icon: '03d' },
      48: { description: 'Rime fog', icon: '03d' },
      51: { description: 'Light drizzle', icon: '04d' },
      53: { description: 'Moderate drizzle', icon: '04d' },
      55: { description: 'Dense drizzle', icon: '04d' },
      61: { description: 'Slight rain', icon: '04d' },
      63: { description: 'Moderate rain', icon: '04d' },
      65: { description: 'Heavy rain', icon: '05a' },
      80: { description: 'Slight rain showers', icon: '04d' },
      81: { description: 'Moderate rain showers', icon: '04d' },
      82: { description: 'Violent rain showers', icon: '05a' },
      95: { description: 'Thunderstorm', icon: '05b' },
      96: { description: 'Thunderstorm with slight hail', icon: '05c' },
      99: { description: 'Thunderstorm with heavy hail', icon: '05c' },
    };

    let current = weatherMapping[weathercode] || { description: 'Unknown', icon: '01d' };
    if (!is_day && current.icon.endsWith('d')) {
      current.icon = current.icon.replace('d', 'n');
    }

    const forecast = time.map((date, i) => {
      const code = dailyCodes[i];
      const mapping = weatherMapping[code] || { description: 'Unknown', icon: '01d' };
      return {
        date,
        temp: Math.round(temperature_2m_max[i]),
        description: mapping.description,
        icon: mapping.icon,
      };
    });

    const now = new Date();
// Filter data hourly yang waktunya setelah sekarang dan ambil 24 jam pertama
const upcomingHourly = [];
for (let i = 0; i < hourlyTimes.length; i++) {
  const timeObj = new Date(hourlyTimes[i]);
  if (timeObj > now) {
    upcomingHourly.push({ time: hourlyTimes[i], index: i });
    if (upcomingHourly.length >= 24) break;
  }
}

const hourly = upcomingHourly.map(item => {
  const hour = new Date(item.time).getHours().toString().padStart(2, '0') + ':00';
  const temp = Math.round(hourlyTemps[item.index]);
  const code = hourlyCodes[item.index];
  const description = weatherMapping[code]?.description || 'Unknown';
  return { hour, temp, description };
});

    // UV Index
    const uvIndex = uv_index_max[0];

    return {
      temp: Math.round(temperature),
      description: current.description,
      icon: current.icon,
      forecast,
      hourly,
      uvIndex,
      isDay: is_day,
      windspeed,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
