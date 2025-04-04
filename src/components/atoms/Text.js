import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

const Text = ({ children, style, ...props }) => {
  return <RNText style={[styles.text, style]} {...props}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default Text;
