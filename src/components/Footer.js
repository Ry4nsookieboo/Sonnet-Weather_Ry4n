import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
        <Image
          source={require('../../assets/diary.png')}
          style={[
            styles.icon,
            {
              tintColor: route.name === 'Diary' ? '#9b5de5' : '#ccc',
            },
          ]}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
        <Image
          source={require('../../assets/wea.png')}
          style={[
            styles.icon,
            {
              tintColor: route.name === 'Weather' ? '#9b5de5' : '#ccc',
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
