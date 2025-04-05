import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInput from '../atoms/CustomTextInput';
import WordCounter from '../atoms/WordCounter';
import ClearAllButton from '../atoms/ClearAllButton';

export default function DiaryEditorBlock({ text, onChangeText, onClear }) {
  return (
    <View style={styles.container}>
      <CustomTextInput 
        value={text} 
        onChangeText={onChangeText} 
        placeholder="Write your diary entry here..." 
        placeholderTextColor='#b9bbb6'
      />
      <View style={styles.bottomRow}>
        <ClearAllButton onClear={onClear} />
        <WordCounter text={text} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
