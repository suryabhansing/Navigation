import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComponent title={'Search'} goBack={() => navigation.goBack()} />
      </SafeAreaView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
