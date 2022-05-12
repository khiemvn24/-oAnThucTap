import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView,
  Modal,
  Dimensions,
  TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/theme/colors';
import Api from '../api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {filter, get, isEmpty, map} from 'lodash';


const SCREEN_WIDTH = Dimensions.get('window').width;

const CartScreen = ({navigation, route,id}) => {
  const [data, setData] = useState([]);
  const [account, setAccount] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [total, setTotal] = useState(null);
  const [bill, setBill] = useState();
  const [PayType, SetPayType] = useState('Tiền mặt')
  const onChangePayType=(PayType) =>{
    SetPayType(PayType);
  }

  const onShowHideModal = () => {
    // console.log(JSON.stringify(data),'123',isEmpty(data));
    if(!isEmpty(data)){
      setModalVisible(!modalVisible);
      AsyncStorage.setItem('listCart', JSON.stringify(data));
    }else{
      Alert.alert('Thông báo','Chưa có sản phẩm nào!!!')
    }
    
  };

  
  useEffect(() => {
    getData();
    getData2();
    getBill();
    
  }, []);
  useEffect(() => {
    getTotal();
  }, [data]);


  const getData2 = async () => {

    const id = await AsyncStorage.getItem('idAccount');
    console.log(id,'id acount');
    getAccount(id)
  };


  function getBill() {
    Api.get('get/bill/')
      .then(async function (response) {
        // console.log(response.data, '=============bill================');
        setBill(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function getAccount(id) {
    Api.get(`get/account/${id}`)
      .then(async function (response) {
        setAccount(response.data);
        // console.log(account,'fxaghjashb');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function createNewBill(requestPayload) {
    console.log(requestPayload, 'afhgjhk');
    Api.post('post/bill', requestPayload)
      .then(async function (response) {
        // console.log(response.data, '=============================');
        setAccount(response.data);
        navigation.navigate('SearchScreen');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleSubmit = () => {
    const newAccount = {
      ReceiverName: get(account, '0.FullName') || '',
      ReceiverAddress: get(account, '0.Address') || '',
      ReceiverEmail: get(account, '0.Email') || '',
      ReceiverPhone: get(account, '0.Phone') || '',
      ID_Account: get(account, '0.ID_Account'),
      PayType: PayType || '',
      Money: total || '',
      Status: 'Chờ xác nhận'
    };
    const dataNew1 = bill;
    dataNew1.push(newAccount);
    setBill(dataNew1);
    console.log(dataNew1, '=========add Bill=========');
    getData1();
    createNewBill(newAccount);
  };

  // console.log(account,'hjlk');
  // const dataNew = account.find(item=>item.FullName)
  // console.log(dataNew,'xcghjk');

  const removeProduct = item => {
    if (item.amount === 1) {
      const dataNew = filter(data, vl => {
        return vl.ID_Product !== item.ID_Product;
      });
      setData(dataNew);
    } else {
      const dataNew = map(data, vl => {
        if (vl.ID_Product === item.ID_Product) {
          return {...vl, amount: vl.amount - 1};
        } else {
          return {...vl};
        }
      });
      setData(dataNew);
    }
  };
  const addProduct = item => {
    const dataNew = map(data, vl => {
      if (vl.ID_Product === item.ID_Product) {
        return {...vl, amount: vl.amount + 1};
      } else {
        return {...vl};
      }
    });
    setData(dataNew);
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('listCart');
      // console.log(jsonValue, 'abc');
      const dataNew = !isEmpty(jsonValue) ? JSON.parse(jsonValue) : [];
      setData(dataNew);
    } catch (e) {
      // error reading value
    }
  };

  const getData1 = async () => {
    AsyncStorage.setItem('listCart', JSON.stringify({}));
  };

  const getTotal = () => {
    let total = 0;
    for (let index = 0; index < data.length; index++) {
      let Price =
        data[index].amount *
        (data[index].price - (data[index].discount * data[index].price) / 100);
      total = total + Price;
    }
    setTotal(total);
  };

  let renderModal = () => {
    return (
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <SafeAreaView style={{flex: 1, backgroundColor: colors.grey5}}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                marginVertical: 5,
                borderColor: colors.grey5,
                backgroundColor: 'white',
              }}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginVertical:10}}>
                  <Image 
                    style={{
                      borderWidth:1,
                      borderColor: colors.grey3,
                      width:50,
                      height:50,
                      borderRadius:25,
                    }}
                    source={{uri:'https://vuongdakhang.vn/wp-content/uploads/2017/06/giao-hang-tan-noi-750x430.png'}}
                  />
                  <View style={{flex:1,alignSelf:'flex-start', marginLeft:20}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>Giao hàng</Text>
                    <Text style={{fontSize: 15, color: 'black'}}>Giao hàng trong 30 phút</Text>
                  </View>
                </View>
              <Text style={{fontSize: 12, color: 'black', marginVertical:5}}>
                Địa chỉ giao hàng
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                Lương Tài, Bắc Ninh
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: '#90EE90',
                  borderWidth: 0.2,
                  borderRadius: 5,
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <Ionicons
                  name="alert-circle-outline"
                  size={18}
                  style={{color: 'green', marginHorizontal: 10}}
                />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'black',
                    marginRight: 5,
                    width: SCREEN_WIDTH * 0.85,
                  }}>
                  Thêm thông tin địa điểm sẽ giúp tài xế tìm đường dễ hơn.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // marginHorizontal: 10,
                }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderRadius: 25,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      alignItems: 'center',
                    }}>
                    <Ionicons
                      name="location"
                      size={15}
                      style={{color: 'black', marginRight: 5}}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      Thêm thông tin địa điểm
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderRadius: 25,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      alignItems: 'center',
                    }}>
                    <Ionicons
                      name="document-text"
                      size={15}
                      style={{color: 'black', marginRight: 5}}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      Ghi chú
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems:'center',
                  justifyContent: 'space-between',
                  marginVertical: 10
                }}>
                <Text style={{fontSize: 15, color: 'black'}}>
                  Phương thức thanh toán
                </Text>
               
                  <TextInput
                    placeholder="Tiền mặt"
                    autoFocus={false}
                    onChangeText={onChangePayType}
                    value={PayType}
                  />
            
               
              </View>
            </View>

            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                marginVertical: 5,
                borderColor: colors.grey5,
                backgroundColor: 'white',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical:5}}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                  Sản phẩm
                </Text>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                  Giá
                </Text>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                  Số lượng
                </Text>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                  Thành tiền
                </Text>
              </View>
              <FlatList
                style={{borderBottomWidth: 0.2}}
                data={data}
                keyExtractor={item => item.ID_Product}
                renderItem={({item}) => {
                  // console.log(item.amount*(item.price - (item.discount * item.price)/100), 'price');
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontSize: 16, color: 'black'}}>
                        {item.productName}
                      </Text>
                      <Text style={{fontSize: 16, color: 'black'}}>
                        {item.price - (item.discount * item.price) / 100}
                      </Text>
                      <Text style={{fontSize: 16, color: 'black'}}>
                        {item.amount}
                      </Text>
                      <Text style={{fontSize: 16, color: 'black'}}>
                        {item.amount *
                          (item.price - (item.discount * item.price) / 100)}
                      </Text>
                    </View>
                  );
                }}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical:5}}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Tổng tiền
                </Text>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  {total} VNĐ
                </Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                alignSelf: 'center',
               
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: colors.buttons,
                  padding: 5,
                }}>
                {'ĐẶT HÀNG'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onShowHideModal}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                alignSelf: 'center',
                marginVertical:5
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: colors.buttons,
                  padding: 5,
                }}>
                {'CLOSE'}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View style={style.header}>
        <Ionicons
          name="arrow-back"
          size={28}
          style={{color: colors.white, marginLeft:10}}
          // onPress={navigation.goBack}
          onPress={() => {
            navigation.goBack()
            
            AsyncStorage.setItem('listCart', JSON.stringify(data));
          }}
        />
        <Text
          style={{
            flex: 1,
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.white,
            textAlign: 'center',
          }}>
          GIỎ HÀNG
        </Text>
      </View>

      <FlatList
        style={{borderBottomWidth: 0.2}}
        data={data}
        keyExtractor={item => item.ID_Product}
        renderItem={({item}) => {
          // console.log(item.amount*(item.price - (item.discount * item.price)/100), 'price');
          return (
            <View style={style.cartCard}>
              <Image
                source={item.Image_Pro ? {uri: item.Image_Pro} : null}
                style={{height: 80, width: 80}}
              />
              <View
                style={{
                  height: 100,
                  marginLeft: 10,
                  paddingVertical: 20,
                  flex: 1,
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>
                  {item.productName}
                </Text>
                <Text style={{fontSize: 13, color: 'black'}}>
                  {item.details}
                </Text>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                  ${' '}
                  {item.amount *
                    (item.price - (item.discount * item.price) / 100)}
                </Text>
              </View>
              <View style={{marginRight: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 18, color: 'black'}}>
                  {item.amount}
                </Text>
                <View style={style.actionBtn}>
                  <TouchableOpacity onPress={() => removeProduct(item)}>
                    <Ionicons name="remove" size={25} color={'white'} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addProduct(item)}>
                    <Ionicons name="add" size={25} color={'white'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
            marginHorizontal: 20,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Thành tiền :
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            {total} VNĐ
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 30,
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={onShowHideModal}
            style={{
              backgroundColor: colors.primary,
              borderRadius: 30,
            }}>
            <Text style={style.btn}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
      {renderModal()}
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.buttons,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  btn: {
    padding: 10,
    paddingHorizontal: 30,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CartScreen;
