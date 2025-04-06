// src/components/molecules/GetStartedButton.js
import React from 'react';
import CustomButton from '../atoms/CustomButton';

export default function GetStartedButton({ onPress }) {
  return (
    <CustomButton 
      label="Get Start" 
      onPress={onPress} 
      style={{ backgroundColor: '#FFBD2E' }} // warna kuning, dsb
    />
  );
}
