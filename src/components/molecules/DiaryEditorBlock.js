import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInput from '../atoms/CustomTextInput';
import WordCounter from '../atoms/WordCounter';
import EditorToolbar from './EditorToolbar';

export default function DiaryEditorBlock({ text, onChangeText, isBold, onToggleBold }) {
  return (
    <View style={styles.container}>
      <EditorToolbar isBold={isBold} onToggleBold={onToggleBold} />
      <CustomTextInput 
        value={text} 
        onChangeText={onChangeText} 
        placeholder="Write your diary entry here..." 
        placeholderTextColor='#b9bbb6'
        style={isBold ? styles.boldText : null}
      />
      <WordCounter text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  boldText: {
    fontWeight: 'bold',
    
  },
});
