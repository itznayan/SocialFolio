import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Avatar from './Avatar';
import { useAuth } from './auth/AuthContext';
import { useRouter } from 'expo-router';
export default function Header() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <View className="h-[8%] px-4">
      {/* Ensure full height usage and center alignment */}
      <View className="flex-1 flex-row items-center justify-between ">
        {/* Title */}
        <Text className="font-[logoFont] text-3xl tracking-[-1]">SocialFolio</Text>
        {/* Right-aligned text with padding */}
        <View className="flex h-full flex-row items-center  py-1">
          <Pressable onPress={() => router.push('notification')}>
            <AntDesign className="px-4" name="hearto" size={28} color="black" />
          </Pressable>
          <Pressable onPress={() => router.push('userProfile')}>
            <Avatar uri={user?.image} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
