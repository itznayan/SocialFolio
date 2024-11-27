import { View, Text, Pressable, Alert } from 'react-native';
import React from 'react';
import { useAuth } from '../../components/auth/AuthContext';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function UserProfile() {
  const { user, userDetails } = useAuth();
  const router = useRouter();

  console.log(userDetails);

  const handleBack = () => {
    router.back(); // Go back to the previous screen
  };

  const handleLogout = () => {
    // Show confirmation alert
    Alert.alert(
      'Confirm Logout', // Title of the alert
      'Are you sure you want to log out?', // Message for the alert
      [
        {
          text: 'Cancel', // Cancel button
          onPress: () => console.log('Logout canceled'), // Handle cancel
          style: 'cancel', // Optional styling for the cancel button
        },
        {
          text: 'Logout', // Confirm logout button
          onPress: () => {
            // Handle logout logic here
            console.log('Logging out');
            // Add your logout logic, such as calling a logout service
          },
          style: 'destructive', // Optional styling for the logout button (usually red)
        },
      ],
      { cancelable: false } // Makes the alert non-dismissible by tapping outside
    );
  };

  return (
    <View className="flex-1 ">
      <View className="flex-row items-center justify-between  p-4">
        {/* Back button */}
        <Pressable onPress={handleBack}>
          <Feather name="chevrons-left" size={36} color="black" />
        </Pressable>

        {/* Profile title */}
        <Text className="flex-1 text-center text-3xl font-semibold text-gray-800">Profile</Text>

        {/* Logout button */}
        <Pressable onPress={handleLogout}>
          <MaterialCommunityIcons name="logout" size={34} color="#B22222" />
        </Pressable>
      </View>

      {/* Additional profile content here */}
      <View className="flex-1 items-center justify-center">
        <Text>Profile content goes here</Text>
      </View>
    </View>
  );
}
