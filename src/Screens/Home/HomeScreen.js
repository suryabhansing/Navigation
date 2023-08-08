import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';

const HomeScreen = ({navigation}) => {
  const goToScreen = () => {
    navigation.navigate(navigationStrings.PROFILE, {
      title: 'Subscribe to my channel',
    });
  };
  return (
    <View style={styles.container}>
      <Text>This is Home</Text>
      <Button title="Go to Profile" onPress={() => goToScreen()} />
    </View>
  );
};

export default HomeScreen;
