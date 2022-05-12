import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import MenuProductScreen from '../screens/MenuProductScreen';
import PreferenceScreen from '../screens/PreferenceScreen';
import CartScreen from '../screens/CardScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyPaymentScreen from '../screens/MyPaymentScreen';
import MyProfile from '../screens/MyProfile';
const accStack = createNativeStackNavigator()

export default function AccStack({navigation, route}) {

  return (
    <accStack.Navigator>
        <accStack.Screen
            name='MyAccountScreen'
            component={MyAccountScreen}
            options={()=>({
                headerShown:false
            })}
        />

        <accStack.Screen
            name='MyPaymentScreen'
            component={MyPaymentScreen}
            options={()=>({
                headerShown:false
            })}
        />

        <accStack.Screen
            name='MyProfile'
            component={MyProfile}
            options={()=>({
                headerShown:false
            })}
        />

       
        
    </accStack.Navigator>
  )
}

const styles = StyleSheet.create({})