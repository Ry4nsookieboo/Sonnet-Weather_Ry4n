// src/components/templates/HomeLayout.js
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

const HomeLayout = ({ children }) => {
  return (
    <LinearGradient
      // Susunan warna gradient (dark ke bright)
      colors={['#1F315E', '#6E348E']}
      // Atur posisi start dan end gradient (opsional)
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Tambahkan padding kalau butuh jarak untuk konten
    padding: 16,
  },
});

export default HomeLayout;
