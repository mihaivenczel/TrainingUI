import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {roots} from '.';
import LoginScreen from '../screens/LoginScreen';
import AccountScreen from '../screens/AccountScreen';
import HomeNavigator from './HomeNavigator';

const Stack = createStackNavigator();

const defaultNavigationOptions = () => ({
  gestureEnabled: false,
  headerShown: false,
});

const MainStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={defaultNavigationOptions}
      initialRouteName={roots.Login}>
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.Login}
        component={LoginScreen}
      />
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.Home}
        component={HomeNavigator}
      />
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.Account}
        component={AccountScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
