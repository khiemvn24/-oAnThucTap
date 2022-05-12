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

const SignUpScreen = ({navigation}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [phone,setPhone] = useState('');
  const [name,setName] = useState('');
  const [address,setAddress] = useState('');
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [data, setData] = useState([])
  const[errorPassword, setErrorPassword] = useState(null)
  const[errorPhone, setErrorPhone] = useState(null)

    useEffect(() => {
      getAccountList()
    //  newResponse()
  }, [])

  const onChangPhone=(phone) =>{
    setPhone(phone);
    if(phone.length === 10 || phone.length === 0){
      setErrorPhone('')
    }else{
      setErrorPhone('Độ dài số điện thoại là 10 ký tự')
    }
  }
  const onChangeName=(name) =>{
    setName(name);
  }
  const onChangeUserName=(userName) =>{
    setUserName(userName);
  }
  const onChangeAddress=(address) =>{
    setAddress(address);
  }
  const onChangEmail=(email) =>{
    setEmail(email);
  }
  const onChangePass=(password) =>{
    setPassword(password);
    if(password.length === 6 || password.length === 0){
      setErrorPassword('')
    }else{
      setErrorPassword('Độ dài mật khẩu là 6 ký tự')
    }
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
  // const requestPayload = {
  //   Phone : phone,
  //   FullName: name,
  //   UserName: userName,
  //   Address : address,
  //   Email : email,
  //   Password : password,
  //   role: role
    
  // };
  function createNewAccount(requestPayload) {
    Api.post('post/account',requestPayload)
        .then(async function (response) {
          console.log(response.data, '=============================')
          setData(response.data);
          navigation.navigate('LoginScreen')
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  const handleSubmit = () => {
    const dataNew = data.find(item=>item.UserName === userName)
    // console.log(dataNew,'4567');
    const dataNew1 = data.find(item=>item.Email === email)
    if(phone==''||name==''||userName==''||email==''||password==''){
      Alert.alert('Thong bao','Vui long dien day du thong tin')
    }else{
      if(errorPassword===''&&errorPhone===''){
        if(!!dataNew || !!dataNew1){
          Alert.alert('Loi','Da ton tai')
        }else{
          const newAccount = {
            Phone : phone || '',
            FullName: name || '',
            UserName: userName || '',
            Address : address || '',
            Email : email || '',
            Password : password || '',
            role : 'Khach Hang'
          } 
          const dataNew1 = data
          dataNew1.push(newAccount)
          setData(dataNew1)
          console.log(dataNew1,'==================');
          createNewAccount(newAccount)  
        }
      }else{
        Alert.alert('Loi','Không đúng định dạng')
      }
    }
  }



  return (
    <View style={styles.container}>
      <Header title="Đăng ký" navigation={navigation} />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.view1}>
          <Text style={styles.text1}>Sign-Up</Text>
        </View>
        <View style={styles.view2}>
          <View>
            <Text style={styles.text2}>New on VNKFood</Text>
          </View>

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
          <Text style={{fontSize:12,color:'red'}}>
              {errorPhone}
          </Text>
          <View style={[styles.view6,{marginTop:0}]}>
            <TextInput
              placeholder="Name"
              style={styles.input1}
              autoFocus={false}
              onChangeText={onChangeName}
              value={name}
            />
          </View>
          <View style={styles.view6}>
            <TextInput
              placeholder="Address"
              style={styles.input1}
              autoFocus={false}
              onChangeText={onChangeAddress}
              value={address}
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
          <View style={styles.view14}>
            <Animatable.View>
              <Ionicons name={'lock-closed'} color={colors.grey2} size={24} />
            </Animatable.View>
            <TextInput
              placeholder="Password"
              style={{flex: 1}}
              autoFocus={false}
              secureTextEntry={isSecureEntry}
              onChangeText={onChangePass}
              value={password}
            />
            
            <Animatable.View>
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Text>
                  {isSecureEntry ? (
                    <Ionicons
                      name={'eye-outline'}
                      color={colors.dimgrey}
                      size={24}
                    />
                  ) : (
                    <Ionicons
                      name={'eye-off-outline'}
                      style={styles.email}
                      size={24}
                    />
                  )}
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
          <Text style={{fontSize:12,color:'red'}}>
              {errorPassword}
            </Text>
          <View style={styles.view15}>
              <Text style={styles.text3}>By creating or logging into an account you are</Text>
              <View style={styles.view16}>
                    <Text style={styles.text3}>agreeing with our</Text>
                    <Text style={styles.text4}> Tems & Conditions </Text>
                    <Text style={styles.text3}>and</Text>
                    
              </View>
              <Text style={styles.text4}> Privacy Statement </Text>
          </View>
            <View style={styles.view17}>
                <TouchableOpacity    
                    style={styles.button1}
                    onPress={handleSubmit}
                >
                    <Text style={styles.title1}>Create my account</Text>
                </TouchableOpacity>
            </View>

        </View>
        <View style={styles.view18}>
            <Text style={{color:colors.grey2}}>OR</Text>
        </View>
        <View style={styles.view19}>
            <View style={styles.view20}>
                <Text style={{color:colors.grey2}}>Already have an account with VNKFOod ?</Text>
            </View>
            <View style={styles.view21}>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={()=> {navigation.navigate('LoginScreen')}}
                >
                    <Text style={styles.title2}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

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
    flex:1,
    fontSize: 16,
  },
  view6: {
    flexDirection: 'row',
    alignItems:'center',
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
