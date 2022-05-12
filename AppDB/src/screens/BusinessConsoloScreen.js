import {View,Text,StyleSheet,TouchableOpacity,ScrollView,
    FlatList,Pressable,Image,Dimensions,} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BusinessConsoleScreen({navigation,route}){
    console.log(route);

    return(
        <View style={style.container}>
            <Text>Welcome BC</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})