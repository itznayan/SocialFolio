import React from 'react';
import { View, Image } from 'react-native';
import { getUserImgSrc } from '../service/getImageService';

export default function Avatar({ uri }) {
  return (
    <View
      style={{
        height: '35', // Adjust size as needed
        width: '35',
        borderRadius: 10, // Ensures full rounded
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#dadada', // Gray border
        backgroundColor: '#f3f4f6', // Optional background in case image doesn't load
      }}>
      <Image
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="contain"
        source={getUserImgSrc(uri)}
      />
    </View>
  );
}
