import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {
  EditProfileScreen,
  HomeScreen,
  ProductDetailsScreen,
  ProfileScreen,
} from '../Screens';
const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={navigationStrings.PROFILE}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={navigationStrings.EDIT_PROFILE}
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
}
