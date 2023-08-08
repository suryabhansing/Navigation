import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './src/Navigation/Routes';

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
