import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import MenuProductScreen from '../screens/MenuProductScreen';
import CartScreen from '../screens/CardScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyPaymentScreen from '../screens/MyPaymentScreen';
import MyProfile from '../screens/MyProfile';
import ChangePass from '../screens/ChangPass';


const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  
  return (
    <MainStack.Navigator initialRouteName="HomeScreen">
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <MainStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />

      <MainStack.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <MainStack.Screen
        name="MenuProductScreen"
        component={MenuProductScreen}
        options={{
          headerShown: false,
        }}
      />

      <MainStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
      
      
      <MainStack.Screen
        name="MyOrderScreen"
        component={MyOrderScreen}
        options={{
          headerShown: false,
        }}
      />

      <MainStack.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          headerShown: false,
        }}
      />

      <MainStack.Screen
        name="MyPaymentScreen"
        component={MyPaymentScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerShown: false,
        }}
      />
       <MainStack.Screen
        name="ChangePass"
        component={ChangePass}
        options={{
          headerShown: false,
        }}
      />

    </MainStack.Navigator>
  );
};

export default MainNavigator;