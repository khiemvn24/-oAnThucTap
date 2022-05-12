import React from 'react'
import {  View, Text, StyleSheet, FlatList, TouchableOpacity,
   TextInput, Dimensions, Image} from 'react-native'
import { restauratsData } from '../assets/theme/Data';
import colors from '../assets/theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header/Header'


const MyOrderScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <Header title="Đơn hàng" navigation={navigation} />
      <FlatList
        style={{}}
        data={restauratsData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={style.view}>
            <View style={style.view1}>
              <View style={style.imageView}>
                <Image style={style.image} source={{uri: item.images}} />

                <View style={style.textView}>
                  <Ionicons
                    name="star"
                    size={15}
                    style={{color: colors.buttons}}
                  />
                  <Text style={{fontSize: 15,color:'black', fontWeight: 'bold', marginLeft: 5}}>
                    {item.averageReview}
                  </Text>
                </View>
              </View>

              <View style={style.view2}>
                <Text style={{fontSize: 15, fontWeight: 'bold',color:'black'}}>
                  {item.restaurantName}
                </Text>
                <Text style={{color:'black'}}>07 thg 4 2022, 12:00</Text>
                <Text style={{color:'black'}}>1 combo</Text>
              </View>
            </View>
            <View style={style.view3}>
              <View style={style.view4}>
                <View style={{alignItems:'center'}}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>10.000</Text>
                  <Text style={{color:'black'}}>1 món</Text>
                </View>
                <View style={style.view6}>
                  <Text style={{color:'green', fontWeight:'bold'}}>Đặt lại</Text>
                </View>
              </View>
              <View style={style.view7}>
               <View style={style.view8}>
                  <Text style={style.title}>Đánh giá:</Text>

                  <TextInput
                    placeholder=''
                    keyboardType='number-pad'
                    style={style.title1}
                  />

                  <Text style={[style.title,{marginLeft:-10}]}> / 5 </Text>
                  <Ionicons
                    name='star'
                    color={colors.buttons}
                    size={20}
                    
                  />
               </View>
              </View>

            </View>
          </TouchableOpacity>
        )}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
      <View style={{backgroundColor:colors.cardbackground, paddingBottom:5, flexDirection:'row', alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
          <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
            <View style={{flexDirection:'column',alignItems:'center'}}>
              <Ionicons name='home' size={26}  color={colors.grey2} />
              <Text style={{color:'black'}}>Trang chủ</Text>
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
              <Ionicons name='list' size={26}  color={colors.buttons} />
              <Text style={{color:'black',fontWeight:'bold'}}>Đơn hàng</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('MyAccountScreen')}>
            <View style={{flexDirection:'column',alignItems:'center'}}>
              <Ionicons name='person' size={26}  color={colors.grey2} />
              <Text style={{color:'black'}}>Tài khoản</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default MyOrderScreen

const style = StyleSheet.create({
  container:{
    flex:1,
    marginTop:30,  
  },
  view:{
    borderBottomWidth:0.2
  },
  view1:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginVertical:10,
    borderBottomWidth:0.2,
  },
  view2:{
    flex:1,
    alignItems:'flex-start'
  },
  imageView: {
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    paddingRight:20
  },
  image: {
    flexDirection:'row',
    width:120,
    height:100,
    borderRadius:10,
  },
  listHeader: {
    fontSize:16,
    color:colors.grey2,
    paddingBottom:10,
    marginLeft:12
  },
  textView: {
    width: 60,
    height: 30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.grey5,
    borderWidth:1,
    borderRadius:10,
    marginTop:-15,
    borderColor:colors.grey5,
    marginBottom:10
  },
  view3:{
    marginBottom:15
  },
  view4:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20
  },
  view6:{
    borderWidth:1,
    paddingHorizontal:20,
    paddingVertical:7,
    borderRadius:20,
    borderColor:'green'
  },
  view7:{
    width:'50%',
    alignSelf:'center'

  },
  view8:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderRadius:10,
    borderColor:colors.grey2,
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    color:'black'
  },
  title1:{
    fontSize:16,
    fontWeight:'bold',
    color:'black'
  }
})