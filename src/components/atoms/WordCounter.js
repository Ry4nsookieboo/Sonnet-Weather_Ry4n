import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function WordCounter({ text }) {
  const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  return <Text style={styles.counter}>{wordCount} words</Text>;
}

const styles = StyleSheet.create({
  counter: {
    marginTop: 0,
    color: '#fff',
    fontSize: 14,
    alignSelf: 'flex-end',
  },
});
