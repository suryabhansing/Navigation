import {StyleSheet, Text, View, FlatList, Image, Button} from 'react-native';
import React from 'react';
import {Header} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  clear,
  decrement,
  increment,
  removeItem,
} from '../../redux/Slices/cartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  console.log('cart me data ====>', cart);

  const AlertItem = () => {
    Alert.alert(
      'Are you sure you want to clear the cart?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => dispatch(clear())},
      ],
      {cancelable: false},
    );
  };

  const renderItem = ({item}) => (
    <View
      style={{
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        margin: 10,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          style={{
            width: 200,
            height: 200,
            resizeMode: 'cover',
            marginBottom: 10,
          }}
          source={{uri: item.image}}
        />
        <Entypo
          name="circle-with-cross"
          size={25}
          onPress={() => {
            dispatch(removeItem(item.id));
          }}></Entypo>
      </View>

      <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 5}}>
        {item.title}
      </Text>
      <Text style={{marginBottom: 5}}>Price: ${item.price}</Text>
      <View></View>
    </View>
  );
  return (
    <View>
      <Header
        statusBarProps={{barStyle: 'light-content'}}
        barStyle="light-content" // or directly
        centerComponent={{text: 'Cart', style: {color: '#fff'}}}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
      />

      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={() => <View style={{height: 150}} />}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
