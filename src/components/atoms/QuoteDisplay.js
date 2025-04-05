import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuoteDisplay({ quoteText, author }) {
  return (
    <View style={styles.container}>
      <Text style={styles.quote}>"{quoteText}"</Text>
      {author && <Text style={styles.author}>- {author}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f0eaff',
    borderRadius: 10,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#444',
    textAlign: 'center',
  },
  author: {
    fontSize: 14,
    textAlign: 'right',
    color: '#888',
    marginTop: 6,
  },
});
