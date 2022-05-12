import {View,Text,StyleSheet,TouchableOpacity,ScrollView,
  FlatList,Pressable,Image,Dimensions,StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import HomeHeader from '../components/Header/HomeHeader';
import colors from '../assets/theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountDown from 'react-native-countdown-component';
import {filterData, restauratsData} from '../assets/theme/Data';
import FoodCart from '../components/FoodCard';
import FoodCart1 from '../components/FoodCart1';
import RestaurantsMapScreen from './RestaurantsMapScreen'
import Api from '../api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeScreen = ({navigation,route}) => {
  const [delivery, setDelivery] = useState(true);
  // const [focus, setFocus] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');

  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  
  useEffect(() => {
     getNewsFromAPI()
     getFreeShip()
     getPromotion()
     getAllCategory()
  
    //  console.log(route,'acount');
  }, [])

  // const newResponse = async() => {
  //   const response = await Api.get('restaurant')
  //   console.log(response.data)
  // }


  const getData = async () => {
   
      const id = await AsyncStorage.getItem('idAccount');
      // console.log(id,'id acount');
  };
 
  function getNewsFromAPI() {
    Api.get('get/restaurant')
        .then(async function (response) {
            setData(response.data);
            // console.log(response.data, '=============================')
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  if (!data) {
      return null
  }

  function getFreeShip() {
    Api.get('get/restaurant/freeship')
        .then(async function (response) {
            setData1(response.data);
            // console.log(response.data, '=============FreeShip================')
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  function getPromotion() {
    Api.get('get/restaurant/promotion')
        .then(async function (response) {
            setData2(response.data);
            // console.log(response.data, '=============Promotion================')
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  function getAllCategory() {
    Api.get('get/category/')
        .then(async function (response) {
          // console.log(response.data, '==============Category===============')
          setData3(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  return (
    <View style={style.container}>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor="rgba(255,140,82,1)"
      />
      <HomeHeader navigation={navigation}/>

      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View style={{backgroundColor:colors.cardbackground, paddingBottom:5}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...style.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5,
                }}>
                <Text style={style.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                // navigation.navigate('RestaurantsMapScreen')
              }}>
              <View
                style={{
                  ...style.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons,
                }}>
                <Text style={style.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.filterView}>
          <View style={style.addressView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Ionicons name="location" size={26} color={colors.grey1} />
              <Text style={{marginLeft: 5}}>14 Cầu Diễn</Text>
            </View>
            <View style={style.clockView}>
              <Ionicons name="time" size={26} color={colors.grey1} />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>
          <View>
            <MaterialIcons name="tune" color={colors.grey1} size={26} />
          </View>
        </View>

        <View style={style.headerTextView}>
          <Text style={style.headerText}>Danh Mục</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data3}
            keyExtractor={item => item.ID_Category}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.ID_Category);
                  navigation.navigate('SearchResultScreen',{id:item.ID_Category,item:item.categoryName})
                }}>
                <View
                  style={
                    indexCheck === item.ID_Category
                      ? {...style.smallCardSelected}
                      : {...style.smallCard}
                  }>
                  <Image
                    style={{height: 60, width: 60, borderRadius: 30}}
                    source={item.Image_Cate ? {uri: item.Image_Cate } : null}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.ID_Category
                          ? {...style.smallCardTextSelected}
                          : {...style.smallCardText}
                      }>
                      {item.categoryName}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={style.headerTextView}>
          <Text style={style.headerText}>Free Ship</Text>
        </View>
        <View style={{marginTop:15}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{fontSize:16,marginLeft:15,marginTop:-10, marginRight:5}}>Options changing in </Text>
            <CountDown
              until={3600}
              size={14}
              digitStyle={{backgroundColor:colors.lightgreen}}
              digitTxtStyle={{color:colors.cardbackground}}
              timeToShow={['M','S']}
              timeLabels={{m:'Min', s:'Sec'}}
            />
          </View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={data1}
            keyExtractor={(item, index) => item.ID_Restaurant}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              // console.log(item,'123456');
              return(
              <View style={{marginRight: 5}}>
                <FoodCart
                  onPressRestaurant={() => {
                    navigation.navigate('RestaurantHomeScreen', {id:item.ID_Restaurant,restaurant:item.RestaurantName});
                  }}
                  item={item}
                />
              </View>
              )}}
          />
        </View>

        <View style={style.headerTextView}>
          <Text style={style.headerText}>Khuyến mãi</Text>
        </View>
        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={data2}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginRight: 5}}>
                <FoodCart
                  onPressRestaurant={() => {
                    navigation.navigate('RestaurantHomeScreen', {id: item.ID_Restaurant});
                  }}
                  item = {item}
                />
              </View>
            )}
          />
        </View>

        <View style={style.headerTextView}>
          <Text style={style.headerText}>Danh sách cửa hàng</Text>
        </View>
        <View style={{width:SCREEN_WIDTH, paddingTop:10}}>
          { 
            data.map(item =>(
              <View key ={item.ID_Restaurant } style={{paddingBottom:20}}>
                <FoodCart1
                  item={item}
                  onPressRestaurant={() => {
                    navigation.navigate('RestaurantHomeScreen', {id: item.ID_Restaurant});
                  }}
                />
              </View>
            ))
          }
        </View>
        
      </ScrollView>
      <View style={{backgroundColor:colors.cardbackground, paddingBottom:5, flexDirection:'row', alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
          <TouchableOpacity>
            <View style={{flexDirection:'column',alignItems:'center'}}>
              <Ionicons name='home' size={26}  color={colors.grey2} style={{color:colors.buttons}} />
              <Text style={{color:'black',fontWeight:'bold'}}>Trang chủ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('SearchScreen')}>
            <View style={{flexDirection:'column',alignItems:'center'}}>
              <Ionicons name='search' size={26}  color={colors.grey2} />
              <Text style={{color:'black'}}>Tìm kiếm</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('MyOrderScreen')}>
            <View style={{flexDirection:'column',alignItems:'center'}}>
              <Ionicons name='list' size={26}  color={colors.grey2} />
              <Text style={{color:'black'}}>Đơn hàng</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('MyAccountScreen')}>
            <View style={{flexDirection:'column',alignItems:'center'}}>
              <Ionicons name='person' size={26}  color={colors.grey2} />
              <Text style={{color:'black'}}>Tài khoản</Text>
            </View>
          </TouchableOpacity>
      </View>
      {/* { delivery &&
        <View style={style.floatButton}>
          <TouchableOpacity
            onPress={()=>{
              // navigation.navigate('RestaurantsMapScreen')
            
            }}
          >
            <Ionicons
              name='location'
              size={32}
              color={colors.buttons}
            />
            <Text style={{color:colors.grey2}}>Map</Text>
          </TouchableOpacity>
        </View>
      } */}
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:25
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  headerText: {
    color: colors.grey2,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 3,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    height: 100,
    margin: 10,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    height: 100,
    margin: 10,
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: colors.cardbackground,
  },
  smallCardText: {
    fontWeight: 'bold',
    color: colors.grey2,
  },
  floatButton:{
    position:'absolute',
    bottom:10, right:15,
    backgroundColor:'white',
    elevation:10,
    width:60,height:60,
    borderRadius:30,
    alignItems:'center'
  }
});
