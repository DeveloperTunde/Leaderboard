import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
};



export default MainNavigation;
