import { View, Text, Pressable, Alert, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useAuth } from '../../components/auth/AuthContext';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import UserAvatar from '../../components/UserAvatar';
import UserDetailCard from '../../components/UserDetailCard';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function UserProfile() {
  const { user } = useAuth();
  const router = useRouter();

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
      <View className="flex-1 items-center px-2 py-6">
        <View>
          <UserAvatar />
          <Text className="py-4 text-center text-3xl font-semibold text-neutral-800">
            {user && user?.name}
          </Text>
        </View>
        <ScrollView className="w-full flex-1 px-8 py-14">
          <View className="">
            <UserDetailCard
              icon={<AntDesign name="mail" size={24} color="black" />}
              value={user.email}
            />
            <UserDetailCard
              icon={<Feather name="phone" size={24} color="black" />}
              value={user.phoneNumber}
            />
            <UserDetailCard
              icon={<MaterialCommunityIcons name="map-marker-outline" size={24} color="black" />}
              value={user.address}
            />
            <UserDetailCard
              icon={
                <MaterialCommunityIcons
                  name="card-account-details-outline"
                  size={24}
                  color="black"
                />
              }
              value={user.bio}
              isDescription={true}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
