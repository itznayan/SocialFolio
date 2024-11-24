import { View, Text, TouchableOpacity } from 'react-native';

export default function Button({ children, ...props }) {
  return (
    <TouchableOpacity {...props}>
      <View className="rounded-3xl bg-blue-600">
        <Text className="px-2 py-4 text-center text-3xl font-medium text-white">{children}</Text>
      </View>
    </TouchableOpacity>
  );
}
