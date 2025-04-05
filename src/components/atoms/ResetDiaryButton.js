// src/components/atoms/ResetDiaryButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export default function ResetDiaryButton({ onReset }) {
  const handlePress = () => {
    Alert.alert(
      'Reset Diary',
      'Are you sure you want to start a new diary entry?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: onReset },
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>Reset Diary</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ff6b6b',
    marginRight: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
});
