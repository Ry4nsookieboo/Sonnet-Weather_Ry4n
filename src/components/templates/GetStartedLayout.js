// src/components/templates/GetStartedLayout.js
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export default function GetStartedLayout({ children }) {
  return (
    <LinearGradient
      colors={['#1F315E', '#6E348E']} // gradient dark ke bright, bisa disesuaikan
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
