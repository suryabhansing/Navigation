import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, ProfileScreen, ExploreScreen} from '../Screens/index';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name="home"
                size={30}
                color={focused ? 'red' : null}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name="account-circle"
                size={30}
                color={focused ? 'red' : null}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.EXPLORE}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name="shield-search"
                size={30}
                color={focused ? 'red' : null}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
