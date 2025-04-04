// src/components/molecules/WeatherInfo.js
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../atoms/Text';
import iconMapping from '../../utils/weatherIcon';

const WeatherInfo = ({ iconName, temperature, description, date = new Date() }) => {
  const formattedDate = date.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{formattedDate}</Text>
      <Image
        source={iconMapping[iconName] || iconMapping['02n']}
        style={styles.icon}
      />
      <Text style={styles.label}>current temp </Text>
      <Text style={styles.tempText}>{temperature}°C</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'left',
  },
  date: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: '#eee',
    marginBottom:1,
    fontStyle: 'italic',
  },  
  
  icon: {
    width: 100,
    height: 100,
    alignItems: 'left',
    resizeMode: 'contain',
    marginBottom: 0,
  },
  tempText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'capitalize',
    marginTop: 4,
  },
});

export default WeatherInfo;