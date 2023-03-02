import React, { useEffect } from 'react'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'
import { ThemeProvider } from 'styled-components'
import { Dashboard, Register } from './src/screens'
import { customTheme } from './src/global'

export default function App() {

  const [ isLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  useEffect(() => {
    const showSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    showSplashScreen();

  }, [])

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };

    if (isLoaded) hideSplashScreen();
  }, [isLoaded]);


  if (!isLoaded) return null;
  return (
    <ThemeProvider theme={customTheme}>
       <Register />
    </ThemeProvider>
  )
}
