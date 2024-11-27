import '../global.css';
import { Stack, useRouter } from 'expo-router';
import { useAuth, AuthProvider } from '../components/auth/AuthContext';
import { supabase } from '~/lib/supabase';
import { useEffect, useState } from 'react';
import { ToastProvider } from 'react-native-toast-notifications';
import { StatusBar, Text } from 'react-native';
import { getUserData } from '../service/userService';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    logoFont: require('../assets/fonts/logo1.ttf'),
  });
};

const MainLayout = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <AuthProvider>
      <ToastProvider>
        <StatusBar backgroundColor={'white'} />
        <Layout />
      </ToastProvider>
    </AuthProvider>
  );
};

function Layout() {
  const { setAuth, setUserData, handleUserDetails } = useAuth();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      // console.log('session is', session?.user.id);

      if (session) {
        //valid user
        setAuth(session?.user);
        updateUserData(session?.user);
        router.push('/(main)/home');
      } else {
        setAuth(null);
        router.push('/');
      }
    });
  }, []);

  const updateUserData = async (user) => {
    //for getting user Data of Profile

    let res = await getUserData(user?.id);
    // console.log('got userData : ', res);
    if (res.success) setUserData(res.data);
    handleUserDetails(res);
  };
  return <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }} />;
}
export default MainLayout;
