import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export default function ClearAllButton({ onClear }) {
  const handlePress = () => {
      Alert.alert(
        'Reset Diary',
        'Are you sure you want to start a new diary entry?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Yes', onPress: onClear },
        ]
      );
    };
    
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>Clear All</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'violet',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});
