import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CustomTextInput({ value, onChangeText, placeholder, style, placeholderTextColor }) {
  return (
    <TextInput 
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      multiline
      style={[styles.input, style]}
    />
  );
}


const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 16,
    backgroundColor: "hsla(0, 0.00%, 100.00%, 0.05)",
    height:300,
    color:'#d9dddc',
  },
});
