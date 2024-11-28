import { View, Text, Pressable, Alert, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../components/auth/AuthContext';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { getUserImgSrc } from '../../service/getImageService';
import AntDesign from '@expo/vector-icons/AntDesign';
import EditInput from '../../components/editProfile/EditInput';
import Button from '../../components/Button';
import { updateUserData } from '../../service/userService';
import { useToast } from 'react-native-toast-notifications';

export default function EditProfile() {
  const toast = useToast();
  const { user: curUser, updateUser } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: '',
    phoneNumber: '',
    image: null,
    bio: '',
    address: '',
  });

  useEffect(() => {
    if (curUser) {
      setUser({
        name: curUser.name || '',
        phoneNumber: curUser.phoneNumber || '',
        bio: curUser.bio || '',
        address: curUser.address || '',
        image: curUser.image || '',
      });
    }
  }, [curUser]);

  const handleBack = () => {
    router.back(); // Go back to the previous screen
  };

  const onPickImage = async () => {
    // Add logic for picking images from device
    Alert.alert('Pick Image', 'Image picking functionality is not implemented yet.');
  };

  const validateInputs = () => {
    const validationErrors = {};
    if (!user.name.trim()) validationErrors.name = 'Name is required.';
    if (!user.phoneNumber.trim() || !/^\+?[0-9]{10,15}$/.test(user.phoneNumber))
      validationErrors.phoneNumber = 'A valid phone number is required.';
    if (!user.address.trim()) validationErrors.address = 'Address is required.';
    if (!user.bio.trim()) validationErrors.bio = 'Bio cannot be empty.';

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const onSubmit = async () => {
    if (!validateInputs()) {
      Alert.alert('Error', 'Please fix the highlighted errors and try again.');
      return;
    }

    setLoading(true);

    try {
      const userData = { ...user };
      await updateUserData(curUser?.id, userData);
      toast.show('Profile updated successfully.', { duration: 600 });
      router.back(); // Navigate back after successful update
      updateUser(userData);
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between p-4">
        {/* Back button */}
        <Pressable onPress={handleBack}>
          <Feather name="chevrons-left" size={36} color="black" />
        </Pressable>

        {/* Profile title */}
        <Text className="flex-1 text-center text-3xl font-semibold text-gray-800">
          Edit Profile
        </Text>
      </View>

      <View className="flex-1 items-center px-2 py-6">
        {/* Profile Image */}
        <View>
          <View className="relative h-44 w-44">
            <View className="h-44 w-44 overflow-hidden rounded-full bg-white shadow-xl shadow-gray-700">
              <Image
                className="h-full w-full"
                resizeMode="contain"
                source={getUserImgSrc(user?.image)}
              />
            </View>
            <Pressable
              onPress={onPickImage}
              style={{ right: 25, bottom: 6 }}
              className="absolute rounded-full bg-white p-1 shadow shadow-black">
              <AntDesign name="camerao" size={24} color="black" />
            </Pressable>
          </View>
        </View>

        {/* Instructions */}
        <Text className="py-4 text-center text-xl font-medium text-gray-700">
          Please fill your profile details
        </Text>

        {/* Input Fields */}
        <ScrollView className="w-full flex-1 px-8 py-4">
          <View>
            {/* Name Input */}
            <EditInput
              value={user.name}
              icon={<AntDesign name="user" size={24} color="black" />}
              placeholder="Enter Name"
              onChangeText={(text) => setUser({ ...user, name: text })}
              error={errors.name}
            />

            {/* Phone Number Input */}
            <EditInput
              value={user.phoneNumber}
              icon={<Feather name="phone" size={24} color="black" />}
              placeholder="Enter Phone Number"
              onChangeText={(text) => setUser({ ...user, phoneNumber: text })}
              error={errors.phoneNumber}
            />

            {/* Address Input */}
            <EditInput
              value={user.address}
              icon={<MaterialCommunityIcons name="map-marker-outline" size={24} color="black" />}
              placeholder="Enter Address"
              onChangeText={(text) => setUser({ ...user, address: text })}
              error={errors.address}
            />

            {/* Bio Input */}
            <EditInput
              value={user.bio}
              icon={
                <MaterialCommunityIcons
                  name="card-account-details-outline"
                  size={24}
                  color="black"
                />
              }
              placeholder="Enter Bio"
              onChangeText={(text) => setUser({ ...user, bio: text })}
              error={errors.bio}
              isDescription
            />
          </View>

          {/* Submit Button */}
          <View className="flex-1 items-center justify-center">
            <View style={{ width: 200, marginTop: 20 }}>
              <Button onPress={onSubmit} disabled={loading}>
                {loading ? 'Updating...' : 'Update'}
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
