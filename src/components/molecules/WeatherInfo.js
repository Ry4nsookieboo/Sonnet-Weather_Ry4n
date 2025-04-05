// src/components/molecules/WeatherInfo.js
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../atoms/Text';
import iconMapping from '../../utils/weatherIcon';

const WeatherInfo = ({ iconName, temperature, windspeed, description, date = new Date() }) => {
  const formattedDate = date.toLocaleDateString('en-EN', { //bahasa tgl n
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
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  date: {
    fontSize: 18,
    color: '#fff',
  },
  label: {
    fontSize: 12,
    color: '#eee',
    marginBottom:1,
    fontStyle: 'italic',
  },  
  windText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 4,
  },  
  icon: {
    width: 100,
    height: 90,
    alignItems:'left',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  tempText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'capitalize',
    marginTop: 4,
  },
});

export default WeatherInfo;