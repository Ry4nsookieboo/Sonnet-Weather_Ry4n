import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HomeLayout from '../components/templates/HomeLayout';
import WeatherCard from '../components/organisms/WeatherCard';

const HomeScreen = () => {
  // Buat state dummy data untuk percobaan
  const [weatherData, setWeatherData] = useState({
    temp: 28,
    description: 'Cerah Berawan',
  });

  // Di sini nanti lo bisa tambahkan useEffect untuk fetch data API
  useEffect(() => {
    // fetchWeatherData();
  }, []);

  return (
    <HomeLayout>
      <ScrollView contentContainerStyle={styles.container}>
        <WeatherCard weatherData={weatherData} />
      </ScrollView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;