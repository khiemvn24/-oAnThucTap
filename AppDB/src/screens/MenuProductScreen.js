import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import colors from '../assets/theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Api from '../api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {find, get, isEmpty} from 'lodash';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MenuProductScreen = ({navigation, route}) => {
  const [item, setItem] = useState([]);
  // console.log(route.params.product,'12345677654234567');
  useEffect(() => {
    setItem(get(route, 'params.product', {}));
 
  }, [route]);

  // function getProductbyID() {
  //   Api.get(`get/product/${route.params.id}`)

  //     .then(async function (response) {
  //       // console.log(response.data, '=========Product by Restaurant=============')
  //       setData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  

  const addCart = async value => {
    const dataStore = await AsyncStorage.getItem('listCart');

    const newData = isEmpty(JSON.parse(dataStore)) ? [] : JSON.parse(dataStore);

    const itemNew = {...value, amount: 1, total: 0};
    const findItem = find(newData, vl => vl.ID_Product === itemNew.ID_Product);
    if (isEmpty(findItem)) {
      newData.push(itemNew);
      console.log(newData, 'newData');
      AsyncStorage.setItem('listCart', JSON.stringify(newData));
    }
    navigation.navigate('CartScreen');
  };

  return (
    <View style={styles.container}>
     
        <View style={styles.view1}>
          <Ionicons
            name="arrow-back"
            color="black"
            size={25}
            style={{color: colors.white}}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text}>Menu</Text>
        </View>

       <ScrollView>
       <View style={styles.view2}>
          <Image
            style={styles.image}
            source={item.Image_Pro ? {uri: item.Image_Pro} : null}
          />
          

          <View style={styles.view3}>
            <Text style={styles.text1}>{item.productName}</Text>
            <Text style={styles.text2}>
              {item.price - (item.discount * item.price) / 100}
            </Text>
          </View>
          
          <View style={{flexDirection:'column',alignItems:'center'}}>
            <Text style={styles.text4}>
              {item.details}
            </Text>
          </View>     
        </View>
       </ScrollView>

        <TouchableOpacity onPress={() => addCart(item)}>
            <View style={styles.view4}>
              <Text style={styles.text3}>THÊM VÀO GIỎ HÀNG</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default MenuProductScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.buttons,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
  },
  text: {
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'white',
    fontSize: 22,
  },
  text1: {
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'black',
    fontSize: 22,
  },
  text2: {
    marginLeft: 20,
    color: 'black',
    fontSize: 18,
  },
  text4: {
    color: 'black',
    fontSize: 18,
    width:SCREEN_WIDTH*0.7
  },
  image: {
    width: SCREEN_WIDTH * 0.85,
    height: SCREEN_WIDTH,
    borderRadius: 20,
    alignSelf: 'center',
  },
  view2: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'flex-end',
    paddingVertical:20
  },
  view3: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  text3: {
    color: 'white',
    backgroundColor: colors.buttons,
    padding: 10,
    paddingHorizontal: 30,
    fontSize: 22,
    fontWeight: 'bold',
    borderRadius: 25,
  },
  view4: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});
