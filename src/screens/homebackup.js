// src/screens/HomeScreen.js
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import HomeLayout from '../components/templates/HomeLayout';
import WeatherCard from '../components/organisms/WeatherCard';
import { fetchWeather } from '../services/weatherService';

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getLocationAndWeather = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    const weather = await fetchWeather(latitude, longitude);
    setWeatherData(weather);
  };

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        await getLocationAndWeather(); // ini harus lo panggil
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    loadWeatherData();
  }, []);
  

  return (
    <HomeLayout>
      <ScrollView contentContainerStyle={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <WeatherCard weatherData={weatherData} />
        )}
      </ScrollView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default HomeScreen;





import * as Location from 'expo-location';
import React, { useState, useEffect, useCallback } from 'react';
import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomeLayout from '../components/templates/HomeLayout';
import WeatherCard from '../components/organisms/WeatherCard';
import { fetchWeather } from '../services/weatherService';

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getLocationAndWeather = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const weather = await fetchWeather(latitude, longitude);
      setWeatherData(weather);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const loadWeatherData = async () => {
    setLoading(true);
    await getLocationAndWeather();
    setLoading(false);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getLocationAndWeather();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    loadWeatherData();
  }, []);

  return (
    <HomeLayout>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.refreshWrapper}>
          <TouchableOpacity onPress={onRefresh}>
            <Ionicons name="refresh" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.refreshText}>Refresh</Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <WeatherCard weatherData={weatherData} />
        )}
      </ScrollView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 40,
  },
  refreshWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  refreshText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
