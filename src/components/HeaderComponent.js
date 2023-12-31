import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HeaderComponent = ({goBack, title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {!!goBack ? (
        <TouchableOpacity
          onPress={!!goBack ? goBack : () => navigation.goBack()}>
          <Text>Goback</Text>
        </TouchableOpacity>
      ) : null}

      <Text>{title}</Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
    borderBottomWidth: 2,
    backgroundColor: 'red',
    paddingHorizontal: 20,
  },
});
