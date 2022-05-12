/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginWelcome from './src/screens/AuthScreen/LoginWelcome';
import LoginScreen from './src/screens/AuthScreen/LoginScreen'
import MyProfile from './src/screens/MyProfile'


AppRegistry.registerComponent(appName, () => App);
