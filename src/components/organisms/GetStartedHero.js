// src/components/organisms/GetStartedHero.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from '../atoms/CustomText';
// Pastikan path ke file 'getstarted.png' bener:
import getStartedPng from '../../../assets/icons/getstarted.png';

export default function GetStartedHero() {
  return (
    <View style={styles.container}>
      <Image source={getStartedPng} style={styles.image} />
      <CustomText style={styles.title}>Weather</CustomText>
      <CustomText style={styles.subtitle}>ForeCasts</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  image: {
    width: 240,
    height: 240,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 2,
  },
});
