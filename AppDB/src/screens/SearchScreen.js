import React, {useState,useEffect} from 'react'
import {  View, Text, StyleSheet, FlatList,
   TouchableWithoutFeedback, ImageBackground, ScrollView,
    Dimensions, Image, TouchableOpacity} from 'react-native'
import SearchComponent from '../components/SearchComponent'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { filterData2 } from '../assets/theme/Data'
import colors from '../assets/theme/colors'
import Api from '../api/Api'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen ({navigation,route}) {
 
  const [data, setData] = useState([])

  useEffect(() => {
    getAllCategory()
  }, [])

  function getAllCategory() {
    Api.get('get/category/')
        .then(async function (response) {
          // console.log(response.data, '==============Category===============')
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  return (
    <View style={{flex:1, marginTop:30}}>
      <SearchComponent/>
     
        
            <FlatList
              style={{marginBottom:1}}
              data={data}
              keyExtractor={(item,index) => item.ID_Category}
              renderItem ={({item,index}) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate('SearchResultScreen',{id:item.ID_Category,item:item.categoryName})
                  }}
                >
                  <View style={style.imageView}>
                    <ImageBackground
                      style={style.image}
                      source={item.Image_Cate ? {uri: item.Image_Cate } : null}
                    >
                      
                      <View style={style.textView}>
                        <Text style={{color:colors.cardbackground}}>{item.categoryName}</Text>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableWithoutFeedback>
              )}
              horizontal = {false}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              ListHeaderComponent = {<Text style={style.listHeader}>Danh Mục Hot</Text>}
              ListFooterComponent = {<Footer/>}
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
              <Ionicons name='search' size={26}  color={colors.grey2} style={{color:colors.buttons}} />
              <Text style={{color:'black',fontWeight:'bold'}}>Tìm kiếm</Text>
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
    </View>
  )
}

const Footer = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    getAllCategory()
  }, [])

  function getAllCategory() {
    Api.get('get/category/')
        .then(async function (response) {
          console.log(response.data, '==============Category===============')
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }
  return(
    <View style={{marginTop:10,marginBottom:20}}>
      
      <View style={{}}>
          <FlatList
            style={{marginBottom:10}}
            data={data}
            keyExtractor={item => item.ID_Category}
            renderItem ={({item, index}) => (
              <TouchableWithoutFeedback
                  // onPress={() => {
                  //   navigation.navigate('SearchResultScreen',{item:item.name})
                  // }}
              >
                <View style={style.imageView}>
                  <ImageBackground
                    style={style.image}
                    source={item.Image_Cate ? {uri: item.Image_Cate } : null}
                  >
                    
                    <View style={style.textView}>
                      <Text style={{color:colors.cardbackground}}>{item.categoryName}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
            horizontal = {false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent = {<Text style={style.listHeader}>Tất cả Danh mục</Text>}
          />
      </View>
    </View>
  )
}



const style = StyleSheet.create({
  imageView: {
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    width: SCREEN_WIDTH*0.4475,
    height: SCREEN_WIDTH*0.4475,
    marginLeft: SCREEN_WIDTH*0.035,
    marginBottom:SCREEN_WIDTH*0.035
  },
  image: {
    width: SCREEN_WIDTH*0.4475,
    height: SCREEN_WIDTH*0.4475,
    borderRadius:10
  },
  listHeader: {
    fontSize:16,
    color:colors.grey2,
    paddingBottom:10,
    marginLeft:12,
  },
  textView: {
    width: SCREEN_WIDTH*0.4475,
    height: SCREEN_WIDTH*0.4475,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(52,52,52,0.2)'
  },
})