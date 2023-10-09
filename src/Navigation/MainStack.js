import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';
import {
  ProductDetailsScreen,
  EditProfileScreen,
  SearchScreen,
} from '../Screens';
import CartScreen from '../Screens/Cart/CartScreen';
export default function (Stack) {
  return (
    <>
      <Stack.Screen name={CartScreen} component={CartScreen} />
    </>
  );
}
