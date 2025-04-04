// src/components/organisms/WeatherCard.js
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import WeatherInfo from '../molecules/WeatherInfo';

const WeatherCard = ({ weatherData }) => {
  return (
    <View style={styles.container}>
      <BlurView intensity={10} tint="light" style={styles.blurContainer}>
        <WeatherInfo 
          iconName={weatherData.icon}
          temperature={weatherData.temp}
          description={weatherData.description}
        />
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: '10',//jarak atas card weather
      margin: 12,
      borderRadius: 16,
      overflow: 'hidden',
    },
    blurContainer: {
      padding: 20,
      borderRadius: 16,
      backgroundColor: "hsla(0, 0.00%, 100.00%, 0.05)", //transparan
    },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default WeatherCard;