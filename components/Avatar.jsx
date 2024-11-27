import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { getUserImgSrc } from '../service/getImageService';

export default function Avatar({ uri, onPress }) {
  return (
    <View
      style={{
        height: '40', // Adjust size as needed
        width: '40',
        borderRadius: 40, // Ensures full rounded
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#A9A9A9', // Gray border
        backgroundColor: '#f3f4f6', // Optional background in case image doesn't load
      }}>
      <Image
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
        source={getUserImgSrc(uri)}
      />
    </View>
  );
}
