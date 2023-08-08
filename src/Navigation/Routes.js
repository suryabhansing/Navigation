import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, ProfileScreen, ExploreScreen} from '../Screens/index';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={navigationStrings.HOME}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={navigationStrings.HOME} component={HomeScreen} />
        <Tab.Screen
          name={navigationStrings.PROFILE}
          component={ProfileScreen}
        />
        <Tab.Screen
          name={navigationStrings.EXPLORE}
          component={ExploreScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
