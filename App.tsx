import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import pagina2 from './src/screen/pagina2';
import pagina1 from './src/screen/pagina1';
import MainStackNavigator from './src/navegador/MainStackNavigator';



export default function App() {
  return(
  <MainStackNavigator />
  )
  
}

