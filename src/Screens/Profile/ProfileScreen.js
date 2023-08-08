import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import navigationStrings from '../../constants/navigationStrings';
import HeaderComponent from '../../components/HeaderComponent';

const ProfileScreen = ({navigation, route}) => {
  console.log('profile props    ', route.params.title);
  const title = route.params.title;
  const goToScreen = () => {
    navigation.navigate(navigationStrings.EXPLORE);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComponent title="Profile Screen" />
        <Text>thi is Profile</Text>
        <Text>{title}</Text>
        <Button title="Go to Explore" onPress={() => goToScreen()} />
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
