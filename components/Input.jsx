import { View, TextInput } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function Input({ icon, placeholder, ...props }) {
  return (
    <View className="my-3 flex-row items-center justify-start rounded-3xl border border-black/20 bg-black/10 px-6 py-2">
      <AntDesign name={icon} size={24} color="black" />

      <TextInput
        placeholder={placeholder}
        className="text-2xl"
        style={{ marginLeft: 10 }}
        {...props}
      />
    </View>
  );
}
