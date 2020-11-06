import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {roots} from '.';
import HomeScreen from '../screens/HomeScreen';
import TabBar from './components/TabBar';

const defaultNavigationOptions = () => ({
  gestureEnabled: false,
  headerShown: false,
});

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={defaultNavigationOptions}
      initialRouteName={roots.Home}
      tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.Home}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
