// src/components/templates/GetStartedLayout.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GetStartedLayout({ children }) {
  return (
    <LinearGradient
      colors={['#3B1877', '#3B1877', '#802BB1']} // contoh gradasi
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
