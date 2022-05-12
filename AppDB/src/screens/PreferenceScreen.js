import { Text, View, StyleSheet, ScrollView, Image} from 'react-native'
import React, { Component ,useState} from 'react'
import colors from '../assets/theme/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { menuDetailedData } from '../assets/theme/Data';
import CheckBox from '@react-native-community/checkbox';

export class PreferenceScreen extends Component {
  render() {
   
    // const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const {meal, details, price} = menuDetailedData[this.props.route.params.index]
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.hearder}>
                <Image
                    style={styles.backgroundImage}
                    source ={{uri:'https://cdn.daynauan.info.vn/wp-content/uploads/2020/10/ga-nuong-muoi-ot.jpg'}}

                />
            </View>
            <View style={styles.bar}>
                <Text style={styles.title}>Choose a preference</Text>
            </View>
            <View style={styles.view12}>
                <Ionicons
                    name='arrow-back'
                    color={colors.cardbackground}
                    size={25}
                    onPress={() => {this.props.navigation.goBack()}}
                />
            </View>
            <View style={styles.view1}>
                <Text style={styles.text1}>{meal}</Text>
                <Text style={styles.text2}>{details}</Text>
            </View>
            <View style={styles.view2}>
                <Text style={styles.text3}>Choose a meal type</Text>
                <View style={styles.view3}>
                    <Text style={styles.text4}>REQUIED</Text>
                </View>
            </View>
            <View style={styles.view4}>
                <View style={styles.view5}>
                    <View style={styles.view6}>
                        <CheckBox
                            disabled={false}
                            value={true}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.text5}>- - - - -</Text>
                    </View>
                    <Text style={styles.text6}>R{price.toFixed(2)}</Text>
                </View>
            </View>
        </ScrollView>
      </View>
    )
  }
}

export default PreferenceScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    fill: {
        flex:1
    },
    content:{
        flex:1
    },
    hearder:{
        // position:'absolute',
        // top:0,
        // left:0,
        // right:0,
        backgroundColor:colors.buttons,
        overflow:'hidden',
        height:180,
        // height: HEADER_MAX_HEIGHT
    },
    backgroundImage:{
        // position:'absolute',
        // top:0,
        // left:0,
        // right:0,
        // width:null,
        width:'100%',
        height:180,
        // height: HEADER_MAX_HEIGHT,
        resizeMode:'cover'
    },
    bar:{
        backgroundColor:'transparent',
        marginTop: Platform.OS === 'ios' ? 28: 38,
        height:32,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:0,
        left:0,
        right:0
    },
    title:{
        color:'white',
        fontSize: 28,
        fontWeight:'bold',
        marginLeft:40
    },
    scrollViewContent:{
        // paddingTop: Platform.OS !== 'ios' ? 
        // HEADER_MAX_HEIGHT : 0,
    },
    row:{
        height:40,
        margin:16,
        backgroundColor:'#D3D3D3',
        alignItems:'center',
        justifyContent:'center'
    },
    view1:{
        backgroundColor:'white',
        padding:10,
        marginBottom:10
    },
    text1:{
        fontSize:15,
        color:colors.grey1,
        fontWeight:'bold'
    },
    text2: {
        fontSize:14,
        color:colors.grey2,
        marginTop:5
    },
    view2:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text3:{
        fontSize:16,
        fontWeight:'bold',
        color:colors.grey1,
        marginLeft:10
    },
    view3:{
        borderWidth:3,
        borderColor:colors.grey5,
        borderRadius:5,
        marginRight:10
    },
    text4:{
        fontWeight:'bold',
        color:colors.grey3,
        padding:5
    },
    view4:{
        backgroundColor:'white',
        marginBottom:15
    },
    view5:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:10
    },
    view6:{
        flexDirection:'row',
        alignItems:'center'
    },
    text5:{
        fontWeight:'bold',
        marginLeft:-10
    },
    text6:{
        fontSize:16,
        fontWeight:'bold'
    },
    view7:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    view8:{
        fontSize:16,
        fontWeight:'bold',
        color:colors.grey1,
        marginLeft:10
    }, 
    view9:{
        borderWidth:3,
        borderColor:colors.grey5,
        borderRadius:5,
        marginRight:10
    },
    text7:{
        fontWeight:'bold',
        color:colors.grey3,
        padding:5
    },
    view10:{
        backgroundColor:'white',
        marginBottom:15
    },
    view11:{
        flexDirection:'row',
        alignItems:'center'
    },
    view12:{
        position:'absolute',
        top:35,
        left:15
    },
    view13:{
        paddingBottom:0,
        marginTop:5
    },
    text8:{
        paddingLeft:10,
        fontWeight:'bold',
        fontSize:18,
    },
    view14:{
        flexDirection:'row',
        backgroundColor:colors.cardbackground,
        paddingVertical:5,
        marginBottom:0,
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:10,
        marginBottom:5
    },
    view15:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:colors.lightgreen,
        alignItems:'center',
        justifyContent:'center'
    },
    text9:{
        fontWeight:'bold',
        fontSize:18
    },
    view16:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:colors.lightgreen,
        alignItems:'center',
        justifyContent:'center'
    },
    view17:{
        alignItems:'center',
        padding:10,
        backgroundColor:colors.cardbackground,
        marginTop:-5
    },
    view18:{
        backgroundColor:colors.buttons,
        alignItems:'center',
        paddingVertical:5,
        marginBottom:0,
        width:320,
        borderRadius:12
    },
    text10:{
        padding:10,
        fontWeight:'bold',
        fontSize:18
    }
})