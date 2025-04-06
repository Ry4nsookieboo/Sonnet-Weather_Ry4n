// src/components/molecules/GetStartedButton.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function GetStartedButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Image
        source={require('../../../assets/icons/getstarted.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,    // sesuaikan dengan desain PNG lo
    height: 250,   // sesuaikan dengan desain PNG lo
    resizeMode: 'contain',
  },
});
