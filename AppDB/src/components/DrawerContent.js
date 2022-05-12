import React, {useState} from 'react';
import {View,Image ,Text, Linking, Pressable, Alert,Switch, StyleSheet} from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/theme/colors';
import { useDispatch } from 'react-redux';
import {Logout} from '../store/actions'

export default function DrawerContent(props,{navigation}){
    const dispatch = useDispatch();
    return(
        <View style={style.container}>
            <View style={{
                flexDirection:'column',
                
                backgroundColor:colors.buttons,
                paddingLeft:10,
                paddingVertical:5
            }}>
                <View style={{flexDirection:'row', alignItems:'center'}}> 
                    <Image
                        style={style.image}
                        source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/2f/33/2d/healthy-bowl-frische.jpg'}}
                    />
                    <View style={{marginLeft:10}}>
                        <Text style={style.text1}>Vũ Ngọc Khiêm</Text>
                        <Text style={style.text2}>vukhiemw24@gmail.com</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={style.view1}>
                        <Text style={style.text1}>1</Text>
                        <Text style={style.text2}>My Favorites</Text>
                    </View>
                    <View style={style.view1}>
                        <Text style={style.text1}>0</Text>
                        <Text style={style.text2}>Shopping Cart</Text>
                    </View>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                
                
                <DrawerItemList {...props}/>

                {/* <DrawerItem
                    label={'Driver console'}
                    icon = {({color,size})=>(
                        <Ionicons
                            name='bicycle'
                            color={color}
                            size={size}
                        />
                    )}
                /> */}

                {/* <DrawerItem
                    label={'Payment'}
                    icon = {({color,size})=>(
                        <Ionicons
                            name='card-outline'
                            color={color}
                            size={size}
                        />
                    )}
                /> */}
                <DrawerItem
                    label={'Promotions'}
                    icon = {({color,size})=>(
                        <Ionicons
                            name='pricetags-outline'
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem
                    
                    label={'Settings'}
                    icon = {({color,size})=>(
                        <Ionicons
                            name='settings-outline'
                            color={color}
                            size={size}
                        />
                    )}
                />
                
                <DrawerItem
                    label={'Help'}
                    icon = {({color,size})=>(
                        <Ionicons
                            name='help-buoy'
                            color={color}
                            size={size}
                        />
                    )}
                />

                <View style={{borderTopWidth:1, borderTopColor:colors.grey5}}>
                    <Text style={style.preferences}>Preferences</Text>

                    <View style={style.switchText}>
                        <Text style={style.darkthemeText}> Drak Theme</Text>
                        <View style={{paddingRight:10}}>
                            <Switch
                                trackColor={{false: '#767577', true:'#81b0ff'}}
                                thumbColor='#f4f3f4'
                            />
                        </View>
                    </View>
                </View>

                
            </DrawerContentScrollView>
            
            <DrawerItem
                    label={'Logout'}
                    icon = {({color,size})=>(
                        <Ionicons
                            name='log-out-outline'
                            color={color}
                            size={size}
                        />
                    )}
                    onPress={()=>{
                        dispatch(Logout())
                        
                      }}
                />
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        borderWidth:4,
        borderColor: colors.cardbackground,
        width:75,
        height:75,
        borderRadius:50
    },
    text1:{
        fontWeight:'bold',
        color:colors.cardbackground, 
        fontSize:18
    },
    text2:{
        color: colors.cardbackground, 
        fontSize:14
    },
    view1:{
        flexDirection:'column',
        alignItems:'center'
    },
    preferences:{
        fontSize: 16,
        color: colors.grey2,
        paddingTop:10,
        paddingLeft:20
    },
    switchText:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkthemeText:{
        fontSize: 16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:'bold'
    }
})