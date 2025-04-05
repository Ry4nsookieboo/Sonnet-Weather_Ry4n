import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomTextInput from '../atoms/CustomTextInput';
import WordCounter from '../atoms/WordCounter';
import ClearAllButton from '../atoms/ClearAllButton';


export default function DiaryEditorBlock({ text, onChangeText, onClear }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Journal :</Text>
      <Text style={styles.title}>Capturing Life's Moments</Text>
      <CustomTextInput 
        value={text} 
        onChangeText={onChangeText} 
        placeholder="Write your diary entry here..." 
        placeholderTextColor='#b9bbb6'
      />

<WordCounter text={text} />
      <View style={styles.bottomRow}>
        <ClearAllButton onClear={onClear} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  title: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -10,
  },
});
