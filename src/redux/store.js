import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './Slices/cartSlice';

//import all reducer here

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // add more reducer here
  },
});

export default store;
