import { View, Text, TouchableOpacity } from 'react-native';

export default function Button({ children, ...props }) {
  return (
    <TouchableOpacity {...props}>
      <View className="flex h-16 justify-center rounded-3xl bg-blue-600">
        <Text className="py-2 text-center text-3xl font-medium text-white">{children}</Text>
      </View>
    </TouchableOpacity>
  );
}
