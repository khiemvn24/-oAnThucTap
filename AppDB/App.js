import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import {View} from 'react-native';
import RootNavigator from './src/navigations/RootNavigator';
import colors from './src/assets/theme/colors';
import 'react-native-gesture-handler';
import {checkConnected} from './src/functions'
import NoConnectionScreen from './src/screens/NoConnectionScreen';
import { Provider as StoreProvider } from 'react-redux';
import {store} from './src/store'

function App(props) {

  const [connectStatus,setConnectStatus] = useState(false)

  checkConnected().then(res=>{
    setConnectStatus(res)
  })

  const alertSomething = () =>{
    alert('alert something')
  }

  return (
    connectStatus?

    (<View style={{flex: 1}}>
      <StoreProvider store={store}>
        <RootNavigator />
      </StoreProvider>
      <StatusBar  style='auto' barStyle='light' backgroundColor={colors.buttons} />
    </View>):(
      <NoConnectionScreen onCheck={checkConnected}/>
    )
  );
}

export default App;
