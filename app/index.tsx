import { View, Text, Image, SafeAreaView } from 'react-native';
import LoginPic from '../assets/img/login.png';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import Button from '../components/Button';
import { Link, useRouter } from 'expo-router';
export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View className="flex-1 items-center">
        <Image
          source={LoginPic}
          resizeMode="contain"
          style={{ width: '100%', height: 400, marginTop: 60 }}
        />
        <View className="flex">
          <Animated.Text className="py-2 text-center text-5xl font-semibold text-black">
            SocialFolio !
          </Animated.Text>
          <Animated.Text className="mx-16 text-center text-2xl text-black">
            A Social App Where Every Post Tells A Story
          </Animated.Text>
        </View>
        <View className="mt-10 flex px-8 py-4">
          <Button onPress={() => router.push('/signUp')}>Getting started</Button>
          <Link href={'/login'} className="mt-4" asChild>
            <Text className="text-xl font-normal">
              Already have an account? <Text className="font-semibold text-blue-600">Login</Text>
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
