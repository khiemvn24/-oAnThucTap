import { View, Text } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/theme/colors';
import RootClientTab from './ClientTab';
import 'react-native-gesture-handler';
import DriverScreen from '../screens/DriverScreen';
import BusinessConsoleScreen from '../screens/BusinessConsoloScreen';
import DrawerContent from '../components/DrawerContent';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyPaymentScreen from '../screens/MyPaymentScreen';
// import RestaurantHomeScreen from '../screens/RestaurantHomeScreen'
import ClientStack from './clientStack';
const Drawer = createDrawerNavigator()

export default function DrawerNavigator({navigation,route}) {

  // console.log(route.params.id,'123');
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent{...props}/>}
    >
      <Drawer.Screen
        name = 'RootClientTab'
        component={RootClientTab}
        // initialParams={{id:route.params.id}}
        options={{
          headerShown:false,
          title:'Client',
          drawerIcon: ({focussed,size})=>(
            <Ionicons
              name='home'
              color={focussed ? '#7cc':colors.grey2}
              size={size}
            />
          )
        }}
      />
      
      <Drawer.Screen
        name = 'Business console'
        component={BusinessConsoleScreen}

        options={{
          headerShown:false,
          title:'Business console',
          drawerIcon: ({focussed,size})=>(
            <Ionicons
              name='business'
              color={focussed ? '#7cc':colors.grey2}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name = 'Driver console'
        component={DriverScreen}

        options={{
          headerShown:false,
          title:'Driver console',
          drawerIcon: ({focussed,size})=>(
            <Ionicons
              name='bicycle'
              color={focussed ? '#7cc':colors.grey2}
              size={size}
            />
          )
        }}
      />

      <Drawer.Screen
        name = 'Payment'
        component={MyPaymentScreen}

        options={{
          headerShown:false,
          title:'Payment',
          drawerIcon: ({focussed,size})=>(
            <Ionicons
              name='card-outline'
              color={focussed ? '#7cc':colors.grey2}
              size={size}
            />
          )
        }}
      />

      <Drawer.Screen
        name = 'Settings'
        component={MyAccountScreen}

        options={{
          headerShown:false,
          title:'Settings',
          drawerIcon: ({focussed,size})=>(
            <Ionicons
              name='settings-outline'
              color={focussed ? '#7cc':colors.grey2}
              size={size}
            />
          )
        }}
      />
 
    </Drawer.Navigator>
  )
}