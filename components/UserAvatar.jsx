import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { getUserImgSrc } from '../service/getImageService';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

export default function UserAvatar({ uri }) {
  const router = useRouter();
  return (
    <View className="relative h-44 w-44">
      {/* 180px = 44 tailwind units */}
      <View className="h-44 w-44 overflow-hidden rounded-full bg-white shadow-xl shadow-gray-700">
        <Image className="h-full w-full" resizeMode="contain" source={getUserImgSrc(uri)} />
      </View>
      <Pressable
        onPress={() => router.push('editProfile')}
        style={{ right: 25, bottom: 6 }}
        className="absolute rounded-full bg-white p-1 shadow shadow-black">
        <AntDesign name="edit" size={24} color="black" />
      </Pressable>
    </View>
  );
}
