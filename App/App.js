import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Login1 from './screens/Login1';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    black: require('./assets/fonts/Poppins-Black.ttf'),
    regular: require('./assets/fonts/Montserrat-Regular.ttf'),
    regularBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    mediumItalic: require('./assets/fonts/Poppins-MediumItalic.ttf'),
    semiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    semiBoldItalic: require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    monterrat: require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name="Đăng Nhập"
            component={Login}
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
            name='Home'
            component={Home}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
