import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Login from './App/Screens/LoginScreen/Login';
import Login1 from './App/Screens/LoginScreen/Login1';
import TabNavigation from './App/Navigations/TabNavigation';
import SignUp from './App/Screens/SignUpScreen/SignUp';
import Editprofile from './App/Screens/ProfileScreen/Editprofile';
import Start from './App/Screens/startScreen/Start';
import Course from './App/Screens/CoursesScreen/Course';
import Alphabelt from './App/Screens/AlphabeltScreen/Alphabelt';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Start"
            component={Start}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Login1'
            component={Login1}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Editprofile'
            component={Editprofile}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Alphabelt'
            component={Alphabelt}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Home'
            component={TabNavigation} // Sử dụng TabNavigation làm màn hình chính
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Course'
            component={Course}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
