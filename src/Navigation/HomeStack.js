import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {HomeScreen, ProductDetailsScreen} from '../Screens';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.HOME} component={HomeScreen} />
      <Stack.Screen
        name={navigationStrings.PRODUCT_DETAILS}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
}
