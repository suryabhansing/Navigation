import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, ProfileScreen, ExploreScreen} from '../Screens/index';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
