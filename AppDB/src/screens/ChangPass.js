import React,{useState, useEffect} from 'react'
import {  View, Text, StyleSheet, TouchableOpacity,
   TextInput, SafeAreaView, Alert} from 'react-native'
import colors from '../assets/theme/colors';

import { useDispatch } from 'react-redux';
import Header from '../components/Header/Header'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../api/Api';

export default function ChangePass({navigation}) {
  const [data, setData] = useState([])
  const [password, setPassword] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const[errorPassword, setErrorPassword] = useState(null)
  const[errorPassword1, setErrorPassword1] = useState(null)
  const dispatch = useDispatch();
 
  const getData = async () => {
    const id = await AsyncStorage.getItem('idAccount');
    getEmailPassWordAccount(id)
    console.log(data);
    // console.log(id);
    
  };

  useEffect(() => { 
    getData()
    }, [])
  function getEmailPassWordAccount(id) {
    Api.get(`get/account/${id}`)
        .then(async function (response) {
          // console.log(response.data, '=============123456================')
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }
  function UpdateAccount(requestPayload) {
    Api.put(`put/accountpass/${data[0].ID_Account}`,requestPayload)
        .then(async function (response) {
          console.log(response.data, '=============================')
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  
  const onChangePass = (password) => {
    setPassword(password)
    if(password === data[0].Password){
      setErrorPassword('')
    }else{
      setErrorPassword('Mật khẩu không đúng')
    }
  }
  const onChangePass1 = (password1) => {
    setPassword1(password1)
    if(password1.length === 6 || password1.length===0){
      setErrorPassword1('')
    }else{
      setErrorPassword1('Mật khẩu mới gồm 6 kí tự')
    }
  }
  const onChangePass2 = (password2) => {
    setPassword2(password2)
  }
 
  

  const handleSubmit = () => {   
    
    if(errorPassword === '' && errorPassword1 === '' && !!password1 && password1===password2){
      const newPass = {
        Password : password1
      }
      UpdateAccount(newPass) 
      navigation.goBack()
    }else{
      Alert.alert('Lỗi','Vui lòng điền đầy đủ')
    }
    
  }

  

  return (
    <View style={style.container}>
      <Header title={'Đổi Mật Khẩu'} navigation={navigation} />
      <SafeAreaView style={{flex: 1}}>
            <View style={{
                flex:1,
              flexDirection:'column',
              justifyContent:'space-between',
            }}>      
              <View>
                <Text style={{fontSize:24,fontWeight:'bold', textAlign:'center', color:'black'}}>Đổi mật khẩu</Text>
                <View style={{marginHorizontal:10,marginTop:10}}>
                  <Text style={{color:'black'}}>Mật khẩu hiện tại:</Text>
                  <TextInput
                    placeholder="Nhập mật khẩu hiện tại"
                    style={{
                      flexDirection: 'row',
                      borderBottomWidth: 2,
                      borderBottomColor:'skyblue',
                      borderColor: colors.grey4,
                      height: 48,
                    }}
                    autoFocus={true}
                    onChangeText={onChangePass}
                    value={password}
                  />
                  <Text style={{fontSize:12,color:'red'}}>
                    {errorPassword}
                    </Text>
                </View>
                <View style={{margin:10}}>
                  <Text style={{color:'black'}}>Mật khẩu mới:</Text>
                  <TextInput
                    placeholder="Nhập mật khẩu mới"
                    style={{
                      flexDirection: 'row',
                      borderBottomWidth: 2,
                      borderBottomColor:'skyblue',
                      borderColor: colors.grey4,
                      height: 48,
                    }}
                    autoFocus={false}
                    onChangeText={onChangePass1}
                    value={password1}
                  />
                  <Text style={{fontSize:12,color:'red'}}>
                    {errorPassword1}
                    </Text>
                  <TextInput
                    placeholder="Nhập lại mật khẩu mới"
                    style={{
                      flexDirection: 'row',
                      borderBottomWidth: 2,
                      borderBottomColor:'skyblue',
                      borderColor: colors.grey4,
                      height: 48,
                    }}
                    autoFocus={false}
                    onChangeText={onChangePass2}
                    value={password2}
                  />
                </View>
              </View>
              <View style={{marginBottom:20}}>
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  borderWidth:1,
                  borderRadius:10,
                  alignSelf:'center',
                  marginHorizontal:10
                }}>
                <Text style={{fontSize:18, fontWeight:'bold',color:colors.buttons,padding:5}}>{'Cập Nhật'}</Text>
              </TouchableOpacity>
              </View>
            </View>
        </SafeAreaView>
    </View>
  )
}

const style=StyleSheet.create({
  container:{
      flex:1,
      marginTop:20,
      backgroundColor:colors.grey5
  },
  image:{
      borderWidth:1,
      borderColor: colors.grey3,
      width:75,
      height:75,
      borderRadius:50,

  },
  view1:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:10,
    marginVertical:10
  },
  view2:{
    flex:1,
    alignItems:'flex-start',
    marginLeft:10
  },
  text1:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  },
  text2:{
    fontWeight:'bold',
    fontSize:12,
    color:'black'
  },
  text3:{
    fontSize:15,
    fontWeight:'bold',
    color:'black'
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:10
  },
  view3:{
    marginHorizontal:15,
    marginVertical:15,
    flexDirection:'column',
    
  },
  text4:{
    fontSize:18,
    fontWeight:'bold',
    flex:1,
    marginLeft:20,
    color:'black'
  },
  text5:{
    fontSize:16,
    color:'black'
  },
  
  
})