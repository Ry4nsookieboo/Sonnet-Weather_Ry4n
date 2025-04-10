// src/components/organisms/ForecastList.js
import React from 'react';
import { FlatList, StyleSheet, Image, View } from 'react-native';
import { BlurView } from 'expo-blur';
import Text from '../atoms/Text';
import iconMapping from '../../utils/weatherIcon';

const ForecastItem = ({ item }) => {
  const formattedDate = new Date(item.date).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
    year: "2-digit",
  });

  return (
    <BlurView intensity={20} tint="light" style={styles.forecastItem}>
      <Text style={styles.date}>{formattedDate}</Text>
      <Image
        source={iconMapping[item.icon] || iconMapping['01d']}
        style={styles.icon}
      />
      <Text style={styles.temp}>{item.temp}°C</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.detail}>UV : {item.uvIndex ?? 'n/a'}</Text>
      <Text style={styles.detail}>Wind : {item.windspeed ?? 'n/a'}</Text>
    </BlurView>
  );
};


const ForecastList = ({ forecastData }) => {
  return (
    <FlatList
      data={forecastData}
      horizontal
      showsHorizontalScrollIndicator={true}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => <ForecastItem item={item} />}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  forecastItem: {
    backgroundColor: 'hsla(0, 0.00%, 100.00%, 0.04)', // Acrylic look
    borderRadius: 16,
    padding: 12,
    marginRight: 10,
    width: 120,
    alignItems: 'center',
  },
  date: {
    color: '#fff',
    marginBottom: 6,
    fontSize: 12,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginVertical: 0,
  },
  temp: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
    detail: {
      color: '#fff',
      fontSize: 12,
      marginTop: 2,
    },
});

export default ForecastList;
