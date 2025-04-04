import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/WeatherScreen';
import DiaryScreen from './src/screens/DiaryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Weather">
        <Stack.Screen
          name="Weather"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Diary"
          component={DiaryScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
