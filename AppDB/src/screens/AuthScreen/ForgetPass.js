import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import colors from '../../assets/theme/colors';
  import Header from '../../components/Header/Header';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import * as Animatable from 'react-native-animatable';
  import Api from '../../api/Api';
  
  const ForgetPass = ({navigation}) => {
    const [phone,setPhone] = useState('');
    const [userName,setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState([])
  
      useEffect(() => {
        getAccountList()
      //  newResponse()
    }, [])
  
    const onChangPhone=(phone) =>{
      setPhone(phone);
    }

    const onChangeUserName=(userName) =>{
      setUserName(userName);
    }

    const onChangEmail=(email) =>{
      setEmail(email);
    }

  
    function getAccountList() {
      Api.get('get/account')
          .then(async function (response) {
            console.log(response.data, '=============================')
            setData(response.data);
          })
          .catch(function (error) {
              console.log(error)
          })
    }

 
    function UpdateAccount(id,requestPayload) {
        Api.put(`put/accountpass/${id}`,requestPayload)
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
      // console.log(dataNew,'34567');
      const dataNew1 = data.find(item=>item.UserName === userName)
      const dataNew2 = data.find(item=>item.Phone === phone)
      if(phone==''||userName==''||email==''){
        Alert.alert('Thong bao','Vui long dien day du thong tin')
      }else{
        if(!dataNew || !dataNew1 || !dataNew2){
          Alert.alert('Loi','Khong ton tai')
        }else{
            const id = dataNew.ID_Account
            const newPass = {
                Password : '123456'
              }
              UpdateAccount(id,newPass) 
              navigation.goBack()
              ,
            Alert.alert('Thông báo','Mật khẩu của đã thay đổi thành công, Mật khẩu mới của bạn là: 123456')
            }
        }
      }
    
  
  
    return (
      <View style={styles.container}>
        <Header title="Quên mật khẩu" navigation={navigation} />
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.view1}>
            <Text style={styles.text1}>ForgetPass</Text>
          </View>
          <View style={styles.view2}>
          
  
            <View style={styles.view6}>
              <TextInput
                placeholder="Mobile Number"
                style={styles.input1}
                keyboardType="number-pad"
                autoFocus={true}
                onChangeText={onChangPhone}
                value={phone}
              />
            </View>
        
            <View style={styles.view6}>
              <TextInput
                placeholder="User Name"
                style={styles.input1}
                autoFocus={false}
                onChangeText={onChangeUserName}
                value={userName}
              />
            </View>
            <View style={styles.view10}>
              <View>
                <Ionicons name="mail" style={styles.email} color={colors.grey2} />
              </View>
              <View style={styles.view11}>
                <TextInput
                  placeholder="Email"
                  style={styles.input4}
                  autoFocus={false}
                  onChangeText={onChangEmail}
                  value={email}
                />
              </View>
            </View>
            
              <View style={styles.view17}>
                  <TouchableOpacity    
                      style={styles.button1}
                      onPress={handleSubmit}
                  >
                      <Text style={styles.title1}>ok</Text>
                  </TouchableOpacity>
              </View>
  
          </View>

        </ScrollView>
      </View>
    );
  };
  
  export default ForgetPass;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      marginTop:20
    },
    view1: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginTop: 10,
      marginBottom: 10,
      marginHorizontal: 15,
    },
    text1: {
      fontSize: 22,
      color: colors.buttons,
      fontWeight: 'bold',
    },
    view2: {
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      paddingHorizontal: 15,
    },
    view3: {
      marginTop: 5,
      marginBottom: 10,
    },
    text2: {fontSize: 15, color: colors.grey2},
    view4: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: colors.grey4,
      borderRadius: 12,
      paddingLeft: 5,
    },
    view5: {
      marginLeft: 30,
      maxWidth: '65%',
    },
    input1: {
      fontSize: 16,
      flex:1
    },
    view6: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: colors.grey4,
      borderRadius: 12,
      paddingLeft: 5,
      marginTop: 20,
      height: 48,
    },
    view7: {
      marginLeft: 0,
      maxWidth: '75%',
    },
    input2: {
      fontSize: 16,
      marginLeft: 0,
      marginBottom: 0,
    },
    view8: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: colors.grey4,
      borderRadius: 12,
      paddingLeft: 5,
      marginTop: 20,
      height: 48,
    },
    view9: {
      marginLeft: 0,
      maxWidth: '65%',
    },
    input3: {
      fontSize: 16,
      marginLeft: 0,
      marginBottom: 0,
    },
    view10: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: colors.grey4,
      borderRadius: 12,
      paddingLeft: 5,
      marginTop: 20,
      height: 48,
    },
    email: {
      fontSize: 24,
      padding: 0,
      marginBottom: 0,
      marginTop: 11,
      marginLeft: 2,
    },
    view11: {
      flex:1,
      marginLeft: 30,
      maxWidth: '65%',
    },
    input4: {
      fontSize: 16,
      marginLeft: -20,
      marginBottom: -10,
    },
    view13: {
      flexDirection: 'row',
      height: 40,
    },
    view14: {
      borderWidth: 1,
      borderRadius: 12,
      borderColor: colors.grey4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      paddingLeft: 5,
      marginTop: 20,
    },
    view15: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    text3: {fontSize: 13, color:colors.grey2},
    view16: {flexDirection: 'row'},
    text4: {
      textDecorationLine: 'underline',
      color: 'green',
      fontSize: 13,
    },
    button1: {
      backgroundColor: colors.buttons,
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.buttons,
      height: 50,
      paddingHorizontal: 20,
      width: '100%',
    },
    title1: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: -3,
    },
    view17: {
      marginVertical: 10,
      marginTop: 30,
    },
    view18: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 15,
    },
    text5: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    view19: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
    },
    view20: {marginTop: 5},
    view21: {marginTop: 5, alignItems: 'flex-end'},
    button2: {
      backgroundColor: colors.background3,
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.buttons,
      height: 40,
      paddingHorizontal: 20,
    },
    title2: {
      color: colors.buttons,
      fontSize: 16,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -3,
    },
  });
  