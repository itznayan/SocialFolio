import { View, Text, Button, Alert } from 'react-native';
import React from 'react';
import { useAuth, AuthProvider } from '../../components/auth/AuthContext';
import { supabase } from '../../lib/supabase';
export default function home() {
  const { setAuth } = useAuth();
  const handleSignOut = async () => {
    setAuth(null);
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View>
      <Text>home</Text>
      <Button onPress={handleSignOut} title="signout" />
    </View>
  );
}
