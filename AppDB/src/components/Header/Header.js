import { View, Text , StyleSheet} from 'react-native'
import React from 'react' 
import colors from '../../assets/theme/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';

const Header = ({title, navigation}) => {
  return (
    <View style={style.header}>
      <View style={{marginLeft:20}}>
          <Ionicons
            name='arrow-back-outline'
            size={28}
            onPress={()=>{navigation.goBack()}}
            style={{color:'#fff'}}
          />
      </View>
      <View>
          <Text style={style.headerText}>{title}</Text>
      </View>
    </View>
  )
} 

export default Header
const style = StyleSheet.create({
    header :{
        flexDirection:'row',
        backgroundColor: colors.buttons,
        height:50,
        alignItems:'center'
    },

    headerText:{
        color:'#fff',
        fontSize:22,
        fontWeight:'bold',
        marginLeft:30,
    }
})
