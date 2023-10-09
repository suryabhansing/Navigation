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

import styles from './styles';
import React, {useEffect, useState} from 'react';
import navigationStrings from '../../constants/navigationStrings';
import HeaderComponent from '../../components/HeaderComponent';
import {Header} from 'react-native-elements';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';
import {addToCart} from '../../redux/Slices/cartSlice';
import {useDispatch, useSelector} from 'react-redux';

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
      <Image
        style={{
          width: 200,
          height: 200,
          resizeMode: 'cover',
          marginBottom: 10,
          alignSelf: 'center',
        }}
        source={{uri: item.image}}
      />
      <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 5}}>
        {item.title}
      </Text>
      <Text style={{marginBottom: 5}}>Price: ${item.price}</Text>
      <Button
        title="Add to Cart"
        onPress={() => {
          dispatch(addToCart(item));
        }}
      />
    </View>
  );
  console.log('dsffdasfdsf', data);
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
          ListFooterComponent={() => <View style={{height: 150}} />}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
