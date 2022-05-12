import { StyleSheet, Text, View, ImageBackground, Animated } from 'react-native'
import React, {useState, useEffect} from 'react'
import colors from '../../assets/theme/colors'
import {restauratsData} from '../../assets/theme/Data'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function RestaurantHeader ({navigation,item}) {

  const index2 = 10;
  const currentValue = new Animated.Value(1)
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [visible, setVisible] = useState(false);
  
  
  
  const likeHandle = () =>{
    if(liked == false)  
        setVisible(true)
    setLiked(!liked)
    setCounter(index2)
        
  }

  useEffect(()=>{
    if(liked == true){
      Animated.spring(currentValue,{
        toValue:3,
        friction:2,
        useNativeDriver:true
      }).start(()=>{
        Animated.spring(currentValue,{
          toValue:1,
          useNativeDriver:true,
          friction:2
        }).start(()=>{
          setVisible(false)
        })
      })
    }
  },[liked])

  
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={item.Image_Res ? {uri: item.Image_Res } : null}
        // imageStyle={styles.image}
      >
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Ionicons
            name='arrow-back-outline'
            color='black'
            size={25}
            onPress={()=>navigation.goBack()}
          />
        </View>

        <View style={styles.view3}>
          <Ionicons
            name={liked && (index2 == counter) ? 'heart': 'heart-outline'}
            color= 'red'
            size={30}
            onPress={likeHandle}
          />
        </View>
      </View>
      <View style={styles.view4}>
        {visible && (index2 == counter) && 
          <Animated.View style={{transform:[{scale:currentValue}]}}>
            <Ionicons name='heart' size={40} color='red'/>
          </Animated.View>
        }
      </View>
      </ImageBackground>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
      height:140  
    },


    // image:{
    //     borderTopLeftRadius:5,
    //     borderTopRightRadius:5
    // },

    view1:{
        flexDirection:'row',
        alignItems:'baseline',
        justifyContent:'space-between'
    },

    view2:{
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    view3:{
        marginTop:0,
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    view4:{
        marginTop:0,
        alignItems:'center',
        justifyContent:'center'
    }
})