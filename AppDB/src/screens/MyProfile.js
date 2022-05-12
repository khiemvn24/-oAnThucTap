import {View,Text,StyleSheet,TouchableOpacity,ScrollView,
    FlatList,Pressable,Image,Dimensions,StatusBar,TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Api from '../api/Api';
import Header from '../components/Header/Header'
import colors from '../assets/theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SCREEN_WIDTH = Dimensions.get('window').width;

const MyProfile = ({navigation,route}) => {

  const [phone,setPhone] = useState('');
  const [name,setName] = useState('');
  const [address,setAddress] = useState('');
  const [data, setData] = useState([])
 
  const getData = async () => {
    const id = await AsyncStorage.getItem('idAccount');
    getEmailPassWordAccount(id)
    // console.log(id,'id acount');
  };

  const onChangPhone=(phone) =>{
    setPhone(phone);
  }
  const onChangeName=(name) =>{
    setName(name);
  }
  const onChangeAddress=(address) =>{
    setAddress(address);
  }

  useEffect(() => {
        // console.log(route,'123');
        getData()
    //  newResponse()
    }, [])

 
  function getEmailPassWordAccount(id) {
    Api.get(`get/account/${id}`)
        .then(async function (response) {
          console.log(response.data, '=============123456================')
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }
  function UpdateProfile(requestPayload) {
    Api.put(`put/profile/${data[0].ID_Account}`,requestPayload)
        .then(async function (response) {
          console.log(response.data, '=============================')
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  

  const handleSubmit = () => {    
    const updateAcc = {
      FullName: name,
      Phone : phone,
      Address : address
    };
      UpdateProfile(updateAcc) 
      navigation.goBack()
  }
  
  return (
    
      <View style={style.container}>
        
        <View>     
            <ScrollView keyboardShouldPersistTaps="always">
              <Header title={'Cập nhật thông tin'} navigation={navigation} />
              <View 
              style={{
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                  paddingHorizontal:20,
                  marginVertical: 20
              }}>
                  <View>
                    <Image
                        style={style.image}
                        source={{uri:'https://cdn-www.vinid.net/2020/09/8cb97047-tr%C3%A0-s%E1%BB%AFa-pozaa-tea-%C6%B0u-%C4%91%C3%A3i.jpg'}}
                    />
                    <TouchableOpacity>
                      <Text style={{color:'black'}}>Thêm ảnh</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{paddingHorizontal:10,alignItems:'center'}}>
                      <Text style={{color:'black'}}>Hãy chọn ảnh đẹp nhất </Text>
                      <Text style={{color:'black'}}>Vì mọi người sẽ có thể thấy ảnh này</Text>
                  </View>
              </View>
              <View style={style.view}>
                  <Text style={style.text1}>Tên</Text>
                  <View style={style.view1}>
                      <TextInput
                          placeholder="Name"
                          style={style.input1}
                          onChangeText={onChangeName}
                          value={name}
                          />
                  </View>
              </View>
              <View style={style.view}>
                  <Text style={style.text1}>Số điện thoại</Text>
                  <View style={style.view1}>
                      <TextInput
                          placeholder="Phone"
                          style={style.input1}
                          keyboardType="number-pad"
                          onChangeText={onChangPhone}
                          value={phone}
                          />
                  </View>
              </View>
              <View style={style.view}>
                  <Text style={style.text1}>Địa chỉ</Text>
                  <View style={style.view1}>
                      <TextInput
                          placeholder="Address"
                          style={style.input1}
                          onChangeText={onChangeAddress}
                          value={address}
                          />
                  </View>
              </View>
            </ScrollView>
        </View>
        <TouchableOpacity style={style.view2}
            onPress={handleSubmit}
        >
            <Text style={style.text2}>Lưu</Text>
        </TouchableOpacity>

      </View>
  )
};

export default MyProfile;

const style = StyleSheet.create({
    container:{
        marginTop:20,
        flex:1,
        justifyContent:'space-between',
        
    },
    view:{
        marginTop:20,
        paddingHorizontal:10
    },
    view1: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.grey4,
        borderRadius: 12,
        paddingLeft: 5,
        // marginTop: 20,
        height: 48,
        
      },
    input1:{
        fontSize:18,
        flex:1,
        color:'black'
    },
    text1:{
        fontSize:12,
        color:'black'
    },
    view2:{
        borderWidth:1,
        alignSelf:'center',
        borderRadius:20,
        backgroundColor:'green',
        marginBottom:20
    },
    text2:{
        padding:5,
        paddingHorizontal:50,
        fontSize:24,
        color:'white',
        fontWeight:'bold'
    },
    image:{
        width:80,
        height:80,
        borderRadius:50,
        borderWidth:1,
        borderColor:colors.grey,
        
    }
    
})
  
  