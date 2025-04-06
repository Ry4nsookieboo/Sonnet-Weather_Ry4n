// src/screens/GetStartedScreen.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GetStartedLayout from '../components/templates/GetStartedLayout';
import GetStartedHero from '../components/organisms/GetStartedHero';
import GetStartedButton from '../components/molecules/GetStartedButton';

export default function GetStartedScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Weather');
  };

  return (
    <GetStartedLayout>
      <View style={styles.content}>
        <GetStartedHero />
        <GetStartedButton onPress={handlePress} />
      </View>

      {/* Footer khusus Get Started */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/left.png')} style={styles.leftIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Weather')}>
          <Image source={require('../../assets/icons/wea.png')} style={styles.weatherIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Diary')}>
          <Image source={require('../../assets/icons/diary.png')} style={styles.diaryIcon} />
        </TouchableOpacity>
      </View>
    </GetStartedLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // semi-transparan buat efek cool
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerButton: {
    padding: 10,
  },
  leftIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  weatherIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  diaryIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
