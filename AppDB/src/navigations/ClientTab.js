import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MyOrderScreen from '../screens/MyOrderScreen'
import MyAccountScreen from '../screens/MyAccountScreen'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import colors from '../assets/theme/colors';
import ClientStack from './clientStack';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import AccStack from './accStack';

const clientTabs = createBottomTabNavigator();

export default function RootClientTab({navigation,route}) {
 
   
  return (
        <clientTabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.buttons
            }}
        >
            <clientTabs.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerShown:false,
                    tabBarLabel:'Home',
                    tabBarIcon:({color,size})=>(
                        <Ionicons
                            name='home'
                            size={size}
                            color={color}
                        />
                    )
                }}

            />
            {/* <clientTabs.Screen
                name='RestaurantHomeScreen'
                component={RestaurantHomeScreen}
                tabBarLabel={false}

            /> */}
           
            <clientTabs.Screen
                name='Client'
                component={ClientStack}
                // initialParams={{id:route.params.id}}
                options={{
                    headerShown:false,
                    tabBarLabel:'Search',
                    tabBarIcon:({color,size})=>(
                        <Ionicons
                            name='search'
                            size={size}
                            color={color}
                        />
                    )
                }}

            />
            <clientTabs.Screen
                name='MyOrderScreen'
                component={MyOrderScreen}
                options={{
                    headerShown:false,
                    tabBarLabel:'My Order',
                    tabBarIcon:({color,size})=>(
                        <Ionicons
                            name='list'
                            size={size}
                            color={color}
                        />
                    )
                }}

            />
            <clientTabs.Screen
                name='AccStack'
                component={AccStack}
                // initialParams={{id:route.params.id}}
                options={{
                    headerShown:false,
                    tabBarLabel:'My Account',
                    tabBarIcon:({color,size})=>(
                        <Ionicons
                            name='person'
                            size={size}
                            color={color}
                        />
                    )
                }}

            />

            
            
        </clientTabs.Navigator>
  )
}