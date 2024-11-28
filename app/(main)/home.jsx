import { View, Text, Button, Alert, Pressable } from 'react-native';
import React from 'react';
import { useAuth } from '../../components/auth/AuthContext';
import { signOutService } from '../../service/signOutService';
import { useToast } from 'react-native-toast-notifications';
import Header from '../../components/Header';

export default function Home() {
  const { setAuth, user } = useAuth();
  const toast = useToast();

  // console.log('user', user);

  const handleSignOut = async () => {
    const success = await signOutService(setAuth, Alert);
    if (success) {
      toast.show('Signed Out Successfully!', {
        duration: 600,
        animationType: 'slide-in',
      });
    }
  };

  return (
    <View className="flex-1">
      <Header />
      <View className="p-4">
        <Text className="text-xl text-black">Home</Text>
        <Button onPress={handleSignOut} title="Sign Out" />
      </View>
    </View>
  );
}
