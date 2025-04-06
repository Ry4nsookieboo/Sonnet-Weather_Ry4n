// src/components/atoms/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ label, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFC107',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  label: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
