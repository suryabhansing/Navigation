import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import {Header} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          statusBarProps={{barStyle: 'light-content'}}
          barStyle="light-content" // or directly
          leftComponent={
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={30}
              color={'white'}
              onPress={() => navigation.goBack()}
            />
          }
          placement="left"
          centerComponent={{
            text: 'Setting',
            style: {
              color: '#fff',
              alignItems: 'center',

              fontSize: 20,
            },
          }}
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'space-around',
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
