import React from 'react';
import { View, StyleSheet } from 'react-native';
import BoldToggleButton from '../atoms/BoldToggleButton';

export default function EditorToolbar({ isBold, onToggleBold }) {
  return (
    <View style={styles.toolbar}>
      <BoldToggleButton isBold={isBold} onToggle={onToggleBold} />
      {/* Jika nantinya mau tambahin tombol italic, underline, dll, bisa di sini */}
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
