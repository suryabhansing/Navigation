import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './src/Navigation/Routes';

// Redux depndencies
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Routes />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
