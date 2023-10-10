import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabRoutes from './TabRoutes';
import CustomDrawer from '../components/CustomDrawer';
import CartScreen from '../Screens/Cart/CartScreen';
import AboutScreen from '../Screens/About/AboutScreen';
import HelpScreen from '../Screens/Help/HelpScreen';
import FeedbackScreen from '../Screens/Feedback/FeedbackScreen';

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'white',
          },
          drawerType: 'front',
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen component={TabRoutes} name={navigationStrings.HOME} />
        <Drawer.Screen component={CartScreen} name={navigationStrings.CART} />
        <Drawer.Screen component={AboutScreen} name={navigationStrings.ABOUT} />
        <Drawer.Screen component={HelpScreen} name={navigationStrings.HELP} />
        <Drawer.Screen
          component={FeedbackScreen}
          name={navigationStrings.FEEDBACK}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
