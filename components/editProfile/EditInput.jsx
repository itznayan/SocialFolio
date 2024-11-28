import { View, TextInput, Text } from 'react-native';
import React from 'react';

export default function EditInput({
  value,
  placeholder,
  icon,
  onChangeText,
  isDescription,
  error,
}) {
  return (
    <View>
      <View className="my-2 flex-row items-center justify-start rounded-3xl bg-white px-6 py-2 shadow-md shadow-gray-700">
        {icon}
        <TextInput
          className="w-full text-xl text-neutral-700"
          style={{
            marginLeft: 10,
            height: isDescription ? 100 : '',
          }}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          multiline={isDescription}
        />
      </View>
      {error && (
        <Text style={{ marginHorizontal: 20, color: 'red' }} className="text-sm">
          {error}
        </Text>
      )}
    </View>
  );
}
