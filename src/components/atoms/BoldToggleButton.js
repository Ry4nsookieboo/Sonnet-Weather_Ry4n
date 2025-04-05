import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BoldToggleButton({ isBold, onToggle }) {
  return (
    <TouchableOpacity
      style={[styles.button, isBold && styles.active]}
      onPress={onToggle}
    >
      <Text style={styles.text}>B</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  active: {
    backgroundColor: '#9b5de5',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
