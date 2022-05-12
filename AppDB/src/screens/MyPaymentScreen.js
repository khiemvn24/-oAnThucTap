import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header/Header'
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/theme/colors';

const MyPaymentScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header title="Phương thức thanh toán" navigation={navigation} />
      <View style={styles.view1}>
          {/* <Text style={styles.text1}>Phương thức thanh toán</Text> */}
          <Text style={styles.text2}>Thanh toán không dùng tiền mặt</Text>
          <View style={styles.view2}>
            <Image source={{uri:'https://seeklogo.com/images/M/momo-logo-ED8A3A0DF2-seeklogo.com.png'}}
                style={styles.image}
            />
            <Text style={styles.text2}>Ví MoMo</Text>
            <Ionicons
                name='chevron-forward' size={25}
            />
          </View>
      </View>
      <View style={styles.view1}>
          <Text style={styles.text2}>Thêm phương thức thanh toán</Text>
          <View style={styles.view2}>
            <Ionicons name='card-outline' size={30} color={'blue'} />
            <View>
                <Text style={styles.text2}>Thẻ tín dụng hoặc ghi nợ</Text>
                <Text style={{color:'black'}}>Thẻ Visa, Mastercard và JCB</Text>
            </View>
            <TouchableOpacity>
                <Text style={{color:'black'}}>Thêm thẻ</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.view1}>
          <Text style={styles.text2}>Phương thức khác</Text>
          <TouchableOpacity style={styles.view3}>
              <Ionicons name='wallet-outline' size={30} color={'green'}/>
              <Text style={styles.text3}>Tiền mặt</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyPaymentScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
    
    },
    image:{
        width:35,
        height:35,
        
    },
    text1:{
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    },
    text2:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
        
    },
    view1:{
        paddingHorizontal:10,
        paddingVertical:20,
        borderBottomWidth:0.2
    },
    view2:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:20,
        
        
    },
    view3:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    text3:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        marginLeft:20,
    }
})