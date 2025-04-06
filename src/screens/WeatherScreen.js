import React, { useState, useEffect, useCallback } from 'react';
import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import HomeLayout from '../components/templates/HomeLayout';
import WeatherCard from '../components/organisms/WeatherCard';
import ForecastList from '../components/organisms/ForecastList';
import { fetchWeather } from '../services/weatherService';
import iconMapping from '../utils/weatherIcon';
import * as Location from 'expo-location';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  // Reminder inisialisasi location dengan null, bukan dummy data 
  const [location, setLocation] = useState(null);
  const [locationDenied, setLocationDenied] = useState(false);

  const getWeatherRecommendation = (weatherData) => {
    if (!weatherData) {
      return (
        <Text style={styles.recommendation}>
          Weather's playing hide and seek... Try again later 😅{'\n'}
          <Text style={styles.highlight}>Wind Speed: n/a</Text>
        </Text>
      );
    }
    console.log(weatherData);

    const { temp, windspeed, description, isDay } = weatherData;
    const desc = description.toLowerCase();
    let baseMessage = '';
    
    if (desc.includes('rain')) {
      baseMessage = isDay
        ? "☔ It's raining cats, dogs, and maybe lizards. Grab that umbrella, champ!"
        : "🌧️ It's raining tonight. Cozy up inside and keep that umbrella handy!";
    } else if (windspeed > 15) {
      baseMessage = isDay
        ? "💨 Wind's going wild out there. Hold onto your hat... or your wig."
        : "💨 It's a blustery night—watch out for flying leaves and papers!";
    } else if (typeof temp === 'number') {
      if (temp >= 33) {
        baseMessage = isDay
          ? "🔥 It's hotter than your ex's new fling. Stay cool, hydrate, and maybe chill indoors."
          : "🔥 Even at night, it's scorching—make sure you keep cool!";
      } else if (temp >= 28 && temp <= 32) {
        baseMessage = isDay
          ? "🌤️ It's a beautiful day. Go touch some grass!"
          : "🌙 The night is calm and clear. Perfect for stargazing!";
      } else if (temp >= 26 && temp <= 27) {
        baseMessage = isDay
          ? "😌 It’s that kinda day where everything feels just right."
          : "🌙 Chill night ahead—kick back and relax.";
      } else if (temp <= 25) {
        baseMessage = isDay
          ? "🥶 It's giving fridge energy. Bundle up, penguin!"
          : "😴 It's a chilly night. Snuggle up under a warm blanket!";
      } else {
        baseMessage = isDay
          ? "🌤️ It's a nice day, enjoy it!"
          : "🌙 Enjoy your night!";
      }
    } else {
      baseMessage = "Weather's playing hide and seek... Try again later 😅";
    }
    
  
    return (
      <Text style={styles.recommendation}>
        {baseMessage}
        {'\n'}
        <Text style={styles.highlight}>Current Wind Speed : {windspeed} km/h</Text>
      </Text>
    );
  };

  // Minta izin dan dapatkan lokasi device user
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        setLocationDenied(true);
        // Optional: Set fallback location misal koordinat default
        // setLocation({ latitude: -8.65, longitude: 115.2167 });
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
    })();
  }, []);

  const loadWeatherData = useCallback(async () => {
    // Pastikan location sudah ada sebelum fetch data
    if (!location) return;

    try {
      if (!refreshing) setLoading(true);
      const data = await fetchWeather(location.latitude, location.longitude);
      setWeatherData(data);
      setForecastData(data.forecast);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [refreshing, location]);

  useEffect(() => {
    loadWeatherData();
  }, [loadWeatherData]);

  const onRefresh = () => {
    setRefreshing(true);
    loadWeatherData();
  };
  const navigation = useNavigation();

  return (
    <HomeLayout>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* Tampilkan info jika permission lokasi ditolak */}
      {locationDenied && (
  <View style={styles.alertContainer}>
    <View style={styles.alertRow}>
      <Image
        source={iconMapping['01d']}
        style={styles.iconSide}
        resizeMode="contain"
      />

      <View style={styles.textBlock}>
        <Text style={styles.alertTolak}>
          Oops, location's blocked.{'\n'}Mind giving permission so we can show the weather?
        </Text>
      </View>

      <Image
        source={iconMapping['01n']}
        style={styles.iconSide}
        resizeMode="contain"
      />
    </View>
  </View>
)}




      <FlatList
        data={[{}]}
        keyExtractor={() => 'dummy'}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#000000']}
            tintColor="#fff"
          />
        }
        renderItem={() =>
          loading ? (
            <ActivityIndicator size="large" color="#fff" style={{ marginTop: 50 }} />
          ) : (
            <View style={styles.content}>
              <WeatherCard weatherData={weatherData} />

              {/* Rekomendasi Cuaca */}
              {weatherData && (
                <Text style={styles.recommendationText}>
                  {getWeatherRecommendation(weatherData)}
                </Text>
              )}

              {/* UV Index */}
              <Text style={styles.alertText}>
                🌞 UV Index : {weatherData?.uvIndex ?? 'n/a'}
              </Text>

              {/* Daily Forecast */}
              {forecastData && <ForecastList forecastData={forecastData} />}

              {/* Hourly Forecast */}
              {weatherData?.hourly && (
                <View style={styles.hourlyContainer}>
                  <Text style={styles.hourlyTitle}>Hourly weather forecast :</Text>
                  <FlatList
                    data={weatherData.hourly}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                      <View style={styles.hourlyItem}>
                        <Text style={styles.hourlyText}>{item.hour}</Text>
                        <Text style={styles.hourlyText}>{item.temp}°C</Text>
                        <Text style={styles.hourlyText}>{item.description}</Text>
                      </View>
                    )}
                  />
                </View>
              )}
            </View>
          )
        }
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('GetStarted')}>
          <Image source={require('../../assets/icons/left.png')} style={styles.leftIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Weather')}>
          <Image source={require('../../assets/icons/wea.png')} style={styles.weatherIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Diary')}>
          <Image source={require('../../assets/icons/diary.png')} style={styles.diaryIcon} />
        </TouchableOpacity>
      </View>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  highlight: {
    fontWeight: 'bold',
    color: 'magenta',
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },
  navButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  recommendationText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  alertContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  
  alertRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  
  iconSide: {
    width: 40,
    height: 40,
    marginHorizontal: 12,
  },
  
  textBlock: {
    maxWidth: '65%',
  },
  
  alertTolak: {
    color: 'magenta',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 22,
  },
  alertText: {
    color: 'violet',
    fontSize: 16,
    textAlign: 'center',
  },
  hourlyContainer: {
    marginTop: 1,
    width: '100%',
    paddingLeft: 20,
  },
  hourlyTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  hourlyItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  hourlyText: {
    color: 'white',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerButton: {
    padding: 10,
  },
  leftIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  weatherIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  diaryIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
