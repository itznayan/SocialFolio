import { View, Text, Pressable, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useRouter } from 'expo-router';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { supabase } from '~/lib/supabase';
export default function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);

    // Validation
    if (!email || !password || !name) {
      Alert.alert('Error', 'Please fill in all fields.');
      setLoading(false);
      return;
    }

    // Signup user
    const {
      data: { user, session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    // console.log('session', session);
    // console.log('error', error);
    // Handle errors during signup
    if (error) {
      Alert.alert('Error', error.message);
      setLoading(false);
      return;
    }

    // Handle email verification required case
    if (!user) {
      Alert.alert('Success', 'Account created. Please check your email for verification!');
      setLoading(false);
      return;
    }

    // Handle errors during profile insertion
    if (profileError) {
      Alert.alert('Error saving profile', profileError.message);
    } else {
      Alert.alert('Success', 'Account created successfully. Please verify your email!');
    }

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
        <View className="my-8">
          <Text className="text-5xl font-semibold leading-[1.3] text-gray-700">Let's</Text>
          <Text className="text-5xl font-semibold leading-[1.3] text-gray-700">Get Started</Text>
        </View>
        <Text className="mx-2 mb-4 text-xl text-gray-600">
          Please fill details to create an account
        </Text>
        <View className="mx-2">
          <Input
            onChangeText={(name) => setName(name)}
            value={name}
            icon={'user'}
            autoCapitalize={'none'}
            placeholder={'Enter your name'}
          />
          <Input
            onChangeText={(text) => setEmail(text)}
            value={email}
            icon={'home'}
            autoCapitalize={'none'}
            placeholder={'Enter your email'}
          />
          <Input
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            autoCapitalize={'none'}
            icon={'lock'}
            placeholder={'Enter your password'}
          />
        </View>

        <View className="my-8 flex justify-center">
          <Button onPress={() => signUpWithEmail()}>
            {loading ? <ActivityIndicator size={40} color={'white'} /> : 'Signup'}
          </Button>
        </View>
        <View>
          <Link href={'/login'}>
            <Text className="mx-16 text-center text-2xl">
              Have an account? <Text className="font-medium text-blue-700">Login</Text>
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
