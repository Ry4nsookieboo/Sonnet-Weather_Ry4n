import React from 'react';
import { View, StyleSheet } from 'react-native';
import ExportButton from '../atoms/ExportButton';
import QuoteDisplay from '../atoms/QuoteDisplay';

export default function BottomActionBlock({ onExport, quoteText, author }) {
  return (
    <View style={styles.container}>
      <QuoteDisplay quoteText={quoteText} author={author} />
      <ExportButton onPress={onExport} label="Export Diary" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
});
