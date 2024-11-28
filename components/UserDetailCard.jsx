import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const UserDetailCard = ({ icon, value, isDescription }) => {
  return (
    <View className="my-2 flex-row  items-center rounded-2xl bg-white p-4 shadow-md shadow-black/40">
      {/* Icon */}
      <View className="mr-3 flex h-10 w-10 items-center justify-center rounded-full ">{icon}</View>

      {/* User Detail */}
      <ScrollView className="flex-1">
        <Text
          style={{ height: isDescription ? 100 : 20 }}
          className="px-4 text-lg font-medium text-gray-600">
          {value}
        </Text>
      </ScrollView>
    </View>
  );
};

export default UserDetailCard;
