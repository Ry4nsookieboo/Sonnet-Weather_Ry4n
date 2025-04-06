// src/components/atoms/CustomText.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CustomText({ children, style, ...props }) {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
