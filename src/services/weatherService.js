export const fetchWeather = async (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode,uv_index_max&hourly=temperature_2m,weathercode&timezone=auto`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch weather data');
    const data = await response.json();

    const { temperature, weathercode, is_day } = data.current_weather;
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

    // Hourly (hanya 24 jam pertama)
    const hourly = hourlyTimes.slice(0, 24).map((timeStr, index) => {
      const hour = new Date(timeStr).getHours().toString().padStart(2, '0') + ':00';
      const temp = Math.round(hourlyTemps[index]);
      const code = hourlyCodes[index];
      const description = weatherMapping[code]?.description || 'Unknown';
      return { hour, temp, description };
    });

    // UV Index & Rekomendasi Payung
    const uvIndex = uv_index_max[0];
    const getWeatherRecommendation = (data) => {
      if (!data || !data.current_weather) return null;
    
      const { windspeed, temperature, weathercode } = data.current_weather;
    
      // Contoh logic dasar dulu bro
      if (weathercode >= 61 && weathercode <= 65) {
        return '☔ Bawa payung bro, hujan nanggung tuh!';
      }
    
      if (windspeed > 20) {
        return '💨 Berangin bro, hati-hati kelilipan daun kehidupan!';
      }
    
      if (temperature >= 32) {
        return '🥵 Panas banget bro, minum yang banyak ya!';
      }
    
      if (temperature <= 18) {
        return '❄️ Dingin bro, pake jaket biar gak masuk angin!';
      }
    
      return '🌤️ Cuaca santai, bawa hati yang tenang aja bro~';
    };
    

    


    return {
      temp: Math.round(temperature),
      description: current.description,
      icon: current.icon,
      forecast,
      hourly,
      uvIndex,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
