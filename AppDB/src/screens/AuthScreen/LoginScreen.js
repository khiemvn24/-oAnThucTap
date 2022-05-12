import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView, ScrollView, Text, TouchableOpacity,  View,
  TextInput, StyleSheet, SafeAreaView,Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/theme/colors';
import Header from '../../components/Header/Header';
import Api from '../../api/Api';
import { useDispatch } from 'react-redux';
import {Login} from '../../store/actions'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation,route}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [password,setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
      getEmailPassWordAccount()
    //  newResponse()
 
  }, [])

  function getEmailPassWordAccount() {
    Api.get('get/account/')
        .then(async function (response) {
          console.log(response.data, '=============================')
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  

  const handleSubmit = () => {
    const dataNew = data.find(item=>item.Email === email)
    // console.log(dataNew);
    // console.log(id);
    if(email==''||password==''){
      Alert.alert('Loi','Khong duoc de trong Email, Password')
    }else{
      if(!!dataNew){
        if(dataNew.Password === password){
          // Alert.alert('','Email, password dung')
          const token1 = dataNew.ID_Account;
          AsyncStorage.setItem('idAccount', JSON.stringify(token1));
          dispatch(Login(token1))
          // navigation.navigate('DrawerNavigator',{id:dataNew.ID_Account})
          // storeAccount()
        }else{
          Alert.alert('Loi','Email, Password khong dung')
        }
      }else{
        Alert.alert('Loi','Email khong dung')
      }
    }
  }
 

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View>
            <Header title="Đăng nhập" navigation={navigation} />
          </View>
          <View style={style.logo}>
            <Text style={style.titleLogo}>VNKFood</Text>
          </View>

          <View style={style.content}>
           
             
                <View>
                  <Animatable.View style={style.contentInput}>
                    <Ionicons
                      name={'mail-outline'}
                      size={24}
                      color={colors.dimgrey}
                    />
                    <TextInput
                      placeholder="Enter Username"
                      onChangeText={(text) => setEmail(text)}
                      value={email}
                      style={style.textInput}
                    />
                  </Animatable.View>

                  <Animatable.View style={style.contentInput}>
                    <Ionicons
                      name={'lock-closed-outline'}
                      size={24}
                      color={colors.dimgrey}
                    />
                    <TextInput
                      placeholder="Enter Password"
                      secureTextEntry={isSecureEntry}
                      onChangeText={(text) => setPassword(text)}
                      value={password}
                      style={style.textInput}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setIsSecureEntry(prev => !prev);
                      }}>
                      <Text>
                        {isSecureEntry ? (
                          <Ionicons
                            name={'eye-outline'}
                            size={24}
                            color={colors.dimgrey}
                          />
                        ) : (
                          <Ionicons
                            name={'eye-off-outline'}
                            size={24}
                            color={colors.dimgrey}
                          />
                        )}
                      </Text>
                    </TouchableOpacity>
                  </Animatable.View>

                  <TouchableOpacity
                    style={style.btnButton}
                    onPress={handleSubmit}
                    // onPress={()=>{navigation.navigate('DrawerNavigator')}}
                    >
                    <Text style={style.buttonTitle}>SIGN IN</Text>
                  </TouchableOpacity>
                </View>
            
          

            <TouchableOpacity onPress={()=>{navigation.navigate('ForgetPass')}}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingBottom: 10,
                  color: '#EE0033',
                  textDecorationLine: 'underline',
                }}>
                Forget Password
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                textAlign: 'center',
                paddingBottom: 10,
                fontSize: 20,
                color: '#000000',
              }}>
              OR
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[style.btnButton1, {backgroundColor: '#0000CC'}]}>
              <View style={style.title}>
                <Ionicons
                  name={'logo-facebook'}
                  size={24}
                  color={colors.dimgrey}
                  style={{color: '#fff', paddingRight: 10}}
                />

                <Text style={{color: '#fff'}}>Sign in With Facebook</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[style.btnButton1, {backgroundColor: '#FF3300'}]}>
              <View style={style.title}>
                <Ionicons
                  name={'logo-google'}
                  size={24}
                  color={colors.dimgrey}
                  style={{color: '#fff', paddingRight: 10}}
                />

                <Text style={{color: '#fff'}}>Sign in With Google</Text>
              </View>
            </TouchableOpacity>

            <Text style={{paddingVertical: 10, color:colors.grey2}}>New on Xpress Food ?</Text>

            <TouchableOpacity
              onPress={() =>{navigation.navigate('SignUpScreen')}}
            >
              <Text style={{textAlign: 'right', color: 'red'}}>
                Create new Account
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
  },
  titleLogo: {
    textAlign: 'center',
    fontSize: 30,
    color:colors.buttons
  },
  content: {
    flex: 5,
    marginHorizontal: 20,
  },

  contentInput: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderWidth: 1,
    borderRadius:12,
    paddingHorizontal:20,
    marginVertical:5
  },
  textInput: {
    flex:1,
    textAlign:'left',
    paddingLeft:15
  },
  btnButton: {
    backgroundColor: '#FF6600',
    borderWidth: 1,
    borderRadius:12,
    borderBottomColor:'#FF6600',
    paddingHorizontal:20,
    marginVertical:25,
    
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize:20,
    color: '#ffffff',
    paddingVertical:5
  },
  title:{
    flexDirection:'row',
    marginVertical:10,
    alignItems:'center',
    justifyContent:'center',
  },
  btnButton1: {
    borderWidth: 1,
    borderRadius:12,
    paddingHorizontal:20,
    marginVertical:5,
    
  },
  textHaveAccount: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 11,
  },
  btnCreate: {
    alignItems: 'center',
    marginTop: 10,
  },
  textCreate: {
    textDecorationLine: 'underline',
    fontSize: 12,
    lineHeight: 18,
    color: '#1e90ff',
  },
  btnLoginOther: {
    backgroundColor: '#ff4500',
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
  },
});

export default LoginScreen;
