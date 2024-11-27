import { View, Text, Pressable, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useRouter } from 'expo-router';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { supabase } from '~/lib/supabase';
import { useToast } from 'react-native-toast-notifications';

export default function login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    // console.log(error);
    if (!error) {
      toast.show('Sign In....', { duration: 600, animationType: 'slide-in' });
    }
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mx-6 my-2 flex-1">
        <Pressable onPress={() => router.back()}>
          <View className="my-4 flex size-16 items-center justify-center rounded-3xl bg-gray-300">
            <AntDesign name="caretleft" size={24} color="black" />
          </View>
        </Pressable>
        <View className="my-10">
          <Text className="text-5xl font-semibold leading-[1.3] text-gray-700">Hey,</Text>
          <Text className="text-5xl font-semibold leading-[1.3] text-gray-700">Welcome Back</Text>
        </View>
        <Text className="mx-2 mb-4 text-xl text-gray-600">Please login to continue</Text>
        <View className="mx-2">
          <Input
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize={'none'}
            icon={'home'}
            placeholder={'Enter your email'}
          />
          <Input
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            icon={'lock'}
            autoCapitalize={'none'}
            placeholder={'Enter your password'}
          />
        </View>
        <View className="mx-6 mt-4 flex items-end">
          <Text className="text-xl font-medium text-black/80">Forgot Password?</Text>
        </View>
        <View className="my-8 flex justify-center">
          <Button onPress={signInWithEmail}>
            {' '}
            {loading ? <ActivityIndicator size={40} color={'white'} /> : 'Login'}
          </Button>
        </View>
        <View>
          <Link href={'/signUp'}>
            <Text className="mx-16 text-center text-2xl">
              Don't have an account? <Text className="font-medium text-blue-700">Sign up</Text>
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
