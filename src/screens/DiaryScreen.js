// src/screens/DiaryScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DiaryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ini Diary Screen 📝</Text>
      <Button title="Balik ke Home" onPress={() => navigation.goBack()} />
    </View>
  );
}
