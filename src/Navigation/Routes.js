import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  HomeScreen,
  ProfileScreen,
  ExploreScreen,
  ProductDetailsScreen,
} from '../Screens/index';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from './MainStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabRoutes from './TabRoutes';
import CustomDrawer from '../components/CustomDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          // drawerStyle: {
          //   backgroundColor: 'white',
          //   borderRadius: 10,
          //   width: '90%',
          // },
          // drawerType: 'slide',
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen component={TabRoutes} name={navigationStrings.HOME} />
        <Drawer.Screen
          component={ProductDetailsScreen}
          name={navigationStrings.PRODUCT_DETAILS}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
