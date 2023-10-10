import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import React from 'react';
import {Header, Badge} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  clear,
  decrement,
  increment,
  removeItem,
} from '../../redux/Slices/cartSlice';

const CartScreen = ({navigation}) => {
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

  // this card for flatlist item
  const renderItem = ({item}) => (
    <View style={styles.cardContainer}>
      <View style={styles.imageConatiner}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Entypo
          name="circle-with-cross"
          size={25}
          onPress={() => {
            dispatch(removeItem(item.id));
            Toast.show('Item remvoed from card', Toast.LONG);
          }}></Entypo>
      </View>

      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.priceText}>Price: ${item.price}</Text>
      <View style={styles.cardPlusMinusConatainer}>
        <TouchableOpacity
          onPress={() => {
            if (item.quantity === 1) {
              dispatch(removeItem(item.id));

              Toast.show('Item remove successfully', Toast.LONG);
              return;
            } else {
              dispatch(decrement(item.id));
            }
          }}>
          <Image
            source={require('../../assets/images/minusCicle.png')}
            style={styles.plusMinus}
          />
        </TouchableOpacity>
        <View style={styles.countConatiner}>
          <Text>{item.quantity}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(increment(item.id));
          }}>
          <Image
            source={require('../../assets/images/plusIcon.png')}
            style={styles.plusMinus}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View>
      {/* header of screen */}
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
        rightComponent={
          cart.length > 0 ? <Badge value={cart.length} status="error" /> : null
        }
        placement="left"
        centerComponent={{
          text: 'Cart',
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

const styles = StyleSheet.create({
  cardPlusMinusConatainer: {
    backgroundColor: '#7F56D9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  countConatiner: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  plusMinus: {height: 30, width: 30},
  cardContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  imageConatiner: {flexDirection: 'row', justifyContent: 'space-between'},
  titleText: {fontSize: 16, fontWeight: 'bold', marginBottom: 5},
  priceText: {marginBottom: 5},
});
