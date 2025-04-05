import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ClearAllButton({ onClear }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onClear}>
      <Text style={styles.text}>Clear All</Text>
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
  text: {
    fontSize: 16,
  },
});
