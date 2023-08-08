import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, ProfileScreen, ExploreScreen} from '../Screens/index';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <Image />;
          },
        }}
      />
      <Tab.Screen name={navigationStrings.PROFILE} component={ProfileScreen} />
      <Tab.Screen name={navigationStrings.EXPLORE} component={ExploreScreen} />
    </Tab.Navigator>
  );
}

export default TabRoutes;
