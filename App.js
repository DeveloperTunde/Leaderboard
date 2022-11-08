// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './src/navigation/MainNavigation';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
}

export default App;