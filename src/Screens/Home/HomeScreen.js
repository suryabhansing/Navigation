import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import HeaderComponent from '../../components/HeaderComponent';

const HomeScreen = ({navigation}) => {
  const goToScreen = () => {
    navigation.navigate(navigationStrings.PRODUCT_DETAILS, {
      title: 'Subscribe to my channel',
    });
  };
  const goToScreenOfOtherStack = () => {
    navigation.navigate(navigationStrings.PROFILE, {
      screen: navigationStrings.EDIT_PROFILE,
      params: {title: 'Edit profiel sreen'},
    });
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComponent title="Home" />

        <TouchableOpacity onPress={goToScreen}>
          <Text>Product Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToScreenOfOtherStack}>
          <Text>go to edit profile of PROFILE stack</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
