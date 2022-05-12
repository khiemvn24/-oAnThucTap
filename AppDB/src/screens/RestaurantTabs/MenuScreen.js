import { StyleSheet, Text, View, TouchableOpacity ,Image, FlatList} from 'react-native'
import React, {useState,useEffect} from 'react'
import colors from '../../assets/theme/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { specialData, menuData } from '../../assets/theme/Data';
import Api from '../../api/Api';

const MenuScreen = ({onPressProduct,item}) => {

  return (
          <TouchableOpacity onPress={onPressProduct}>
          <View style={styles.container}>
            <View style={styles.view1}>
              <View style={styles.view3}>
                <Text style={styles.text1}>{item.productName}</Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 15,
                  }}>
                  <Text style={styles.text1}>{item.price-item.discount*item.price/100}</Text>
                  <Text
                    style={[
                      styles.text1,
                      {textDecorationLine: 'line-through'},
                    ]}>
                    {item.price}
                  </Text>
                  <View>
                    <Text style={styles.text2}>Khuyen mai</Text>
                  </View>
                </View>
              </View>
              <View style={styles.view2}>
                <Image
                  style={styles.image}
                  source={item.Image_Pro ? {uri: item.Image_Pro } : null}
                />
              </View>
            </View>
          </View>
          </TouchableOpacity>
  );
}

export default MenuScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20
    },

    view1:{
      paddingHorizontal:10,
      flexDirection:'row',
      // alignItems:'center',
      justifyContent:'space-between',
      borderBottomWidth:1,
      marginHorizontal:10
    },
    view2:{
      flexDirection:'row',
      alignItems:'center',
      padding:10,
      
    },
    view3:{
      flex:1,
    },
    view4:{

    },
    text1:{
      color:'black',
      fontSize:16,  
    },
    text2:{
      color:'white',
      backgroundColor:'red',
      fontWeight:'bold',
      padding:5,
      borderRadius:10
    },
    image:{
      width:80,
      height:80
    }

})