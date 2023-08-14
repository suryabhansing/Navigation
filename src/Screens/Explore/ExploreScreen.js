import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import navigationStrings from '../../constants/navigationStrings';
import HeaderComponent from '../../components/HeaderComponent';

const ExploreScreen = ({navigation}) => {
  const goToScreen = () => {
    navigation.navigate(navigationStrings.SEARCH);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComponent title={'Explore'} />
        <Button title="Search" onPress={goToScreen} />
      </SafeAreaView>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
