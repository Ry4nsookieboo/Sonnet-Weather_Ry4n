// src/components/organisms/GetStartedHero.js
import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomText from '../atoms/CustomText';
import iconMapping from '../../utils/weatherIcon';

export default function GetStartedHero() {
  // Ambil jam sekarang sebagai default
  const hour = new Date().getHours();
  const defaultIsDay = hour >= 6 && hour < 18;

  const [isDayManual, setIsDayManual] = useState(defaultIsDay);

  const toggleDayNight = () => {
    setIsDayManual((prev) => !prev);
  };

  const iconKey = isDayManual ? '02d' : '02n';
  const dynamicIcon = iconMapping[iconKey];

  return (
    <View style={styles.container}>
      {/* Icon cuaca bisa di-tap buat ganti day/night */}
      <TouchableOpacity onPress={toggleDayNight}>
        <Image
          source={dynamicIcon}
          style={styles.sun}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Image
        source={iconMapping['17a']}
        style={styles.house}
        resizeMode="contain"
      />

      <CustomText style={styles.title}>Sonnet Weather</CustomText>
      <CustomText style={styles.subtitle}>Your personalized weather forecast</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    marginBottom: -20,
  },
  sun: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  house: {
    marginBottom: 0, //siapa tau kepikiran desain baru biar gk repot wkwk
  },
  title: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 8,
    color: 'yellow',
  },
});
