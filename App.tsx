import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import GlobalContext from './src/context';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });


  if (!fontsLoaded) {
    return <AppLoading />
  };

  
  return (
    <GlobalContext>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </GlobalContext>
  );
}

