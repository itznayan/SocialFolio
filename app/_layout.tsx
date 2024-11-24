import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(login)/login" />
      <Stack.Screen name="(signup)/signUp" />
    </Stack>
  );
}
