import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ButtonCom = () => {
  return (
    <View style={styles.container}>
      <Text>ButtonCom</Text>
    </View>
  );
};

export default ButtonCom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    height: 42,
    borderRadius: 8,
  },
});
