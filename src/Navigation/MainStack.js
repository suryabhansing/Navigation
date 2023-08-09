import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';
import {
  ProductDetailsScreen,
  EditProfileScreen,
  SearchScreen,
} from '../Screens';
export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationStrings.TABS} component={TabRoutes} />
      <Stack.Screen
        name={navigationStrings.EDIT_PROFILE}
        component={EditProfileScreen}
      />
      <Stack.Screen
        name={navigationStrings.PRODUCT_DETAILS}
        component={ProductDetailsScreen}
      />
      <Stack.Screen name={navigationStrings.SEARCH} component={SearchScreen} />
    </>
  );
}
