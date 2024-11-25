import '../global.css';
import { Redirect, Stack, useRouter } from 'expo-router';
import { useAuth, AuthProvider } from '../components/auth/AuthContext';
import { supabase } from '~/lib/supabase';
import { useEffect } from 'react';

const MainLayout = () => {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
};

function Layout() {
  const { setAuth } = useAuth();
  const router = useRouter();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      // console.log('session is', session?.user);

      if (session) {
        //valid user
        router.push('/home/home');
      } else {
        router.push('/');
      }
    });
  });

  return <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }} />;
}
export default MainLayout;
