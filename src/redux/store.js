import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';

//import all reducer here
import cartReducer from './Slices/cartSlice';

const rootReducers = combineReducers({
  //combining all reducers
  cart: cartReducer,
});

// configuration of persit store
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, //where to store
  whitelist: ['cart'], //keep all reducers here which require to hold data if app closed
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

// creating store with
export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk], //middleware for async operation
});
