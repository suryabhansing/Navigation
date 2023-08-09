import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';

const ProductDetailsScreen = ({navigation}) => {
  console.log('ajfkakajsdflk0', navigation.setParams);
  return (
    <View style={styles.container}>
      <HeaderComponent title={'jklj'} />
      <Text>ProductDetailsScreen</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
