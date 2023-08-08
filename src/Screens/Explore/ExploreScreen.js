import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const ExploreScreen = ({navigation}) => {
  const goback = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <Text>ExploreScreen</Text>
      <Button title="Go to Home" onPress={() => goback()} />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
