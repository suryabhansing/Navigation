import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';

const EditProfileScreen = ({navigation, route}) => {
  console.log('route===>', route.params.title);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComponent
          title={route.params.title}
          goBack={() => navigation.goBack()}
        />
      </SafeAreaView>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
