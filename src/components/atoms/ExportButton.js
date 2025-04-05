import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ExportButton({ onPress, label }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label || 'Export'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9b5de5',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
