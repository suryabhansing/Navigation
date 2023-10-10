import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './src/Navigation/Routes';

// Redux depndencies

import {Provider} from 'react-redux';
import {store} from './src/redux/store';

// redux persist
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
