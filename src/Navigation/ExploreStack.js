import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {
  ExploreScreen,
  HomeScreen,
  ProductDetailsScreen,
  SearchScreen,
} from '../Screens';
const Stack = createNativeStackNavigator();

export default function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={navigationStrings.EXPLORE}
        component={ExploreScreen}
      />
      <Stack.Screen name={navigationStrings.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
}
