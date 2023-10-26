import React from 'react';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import MyNavigator from './Navigation';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./screens/fuentes/RobotoMono-VariableFont_wght.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MyNavigator></MyNavigator>
  );
}