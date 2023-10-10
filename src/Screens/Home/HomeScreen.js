import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import navigationStrings from '../../constants/navigationStrings';
import HeaderComponent from '../../components/HeaderComponent';
import {Header} from 'react-native-elements';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';
import {addToCart} from '../../redux/Slices/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API call using axios
        const response = await axios.get('https://fakestoreapi.com/products');

        // Set the data in the state
        setData(response.data);
        setLoading(false);
      } catch (error) {
        // Handle error
        setError(error);
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  // ui for flatlist item or card ui
  const renderItem = ({item}) => (
    <View style={styles.cardContainer}>
      <Image style={styles.imageStyle} source={{uri: item.image}} />
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.priceText}>Price: ${item.price}</Text>
      <Button
        title="Add to Cart"
        onPress={() => {
          dispatch(addToCart(item));
          Toast.show('Item added to cart succesfully', Toast.LONG);
        }}
      />
    </View>
  );
  if (!loading) {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Header
            statusBarProps={{barStyle: 'light-content'}}
            barStyle="light-content" // or directly
            centerComponent={{text: 'HOME', style: {color: '#fff'}}}
            containerStyle={{
              backgroundColor: '#3D6DCC',
              justifyContent: 'space-around',
            }}
          />

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ListFooterComponent={() => <View style={{height: 200}} />}
          />
        </SafeAreaView>
      </View>
    );
  } else if (loading) {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Header
            statusBarProps={{barStyle: 'light-content'}}
            barStyle="light-content" // or directly
            centerComponent={{text: 'HOME', style: {color: '#fff'}}}
            containerStyle={{
              backgroundColor: '#3D6DCC',
              justifyContent: 'space-around',
            }}
          />
          <ActivityIndicator />
        </SafeAreaView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Header
            statusBarProps={{barStyle: 'light-content'}}
            barStyle="light-content" // or directly
            centerComponent={{text: 'HOME', style: {color: '#fff'}}}
            containerStyle={{
              backgroundColor: '#3D6DCC',
              justifyContent: 'space-around',
            }}
          />
          <Image
            source={require('../../assets/images/download.png')}
            style={{
              alignSelf: 'center',
            }}
          />
          <Text>{error}</Text>
        </SafeAreaView>
      </View>
    );
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'Black',
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    alignSelf: 'center',
  },
  titleText: {fontSize: 16, fontWeight: 'bold', marginBottom: 5},
  priceText: {marginBottom: 5},
});
