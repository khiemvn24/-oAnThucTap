import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigator from "./AuthNavigation";
import DrawerNavigator from './DrawerNavigator';
import MainNavigator from './MainNavigation';


const RootNavigator = () => {
    const token = useSelector(state => state.Reducers.authToken)
    console.log(token,'123456789');
    return(
        <NavigationContainer>
            {token === null ?<AuthNavigator />:<MainNavigator />}
        </NavigationContainer>
    )
}

export default RootNavigator;