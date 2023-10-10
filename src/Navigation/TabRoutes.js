import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, ProfileScreen, ExploreScreen} from '../Screens/index';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import ExploreStack from './ExploreStack';
import FavoriteScreen from '../Screens/Favorites/FavoriteScreen';
import SettingScreen from '../Screens/Setting/SettingScreen';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        // tabBarShowLabel: false,
        // tabBarActiveBackgroundColor: 'green',
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          borderRadius: 50,
          bottom: 20,
          marginHorizontal: 10,
        },
      }}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={HomeStack}
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
        name={navigationStrings.EXPLORE}
        component={ExploreStack}
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
      <Tab.Screen
        name={navigationStrings.FAVOURITE}
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Fontisto
                name="favorite"
                size={30}
                color={focused ? 'red' : null}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.SETTING}
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Feather
                name="settings"
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
