import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/theme/colors';
import Swiper from 'react-native-swiper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const LoginWelcome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={style.content}>
        <Text style={style.title}>DISCOVER RESTAURANTS</Text>
        <Text style={style.title}>IN YOUR AREA</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={style.slide1}>
            <Image
              source={{
                uri: 'https://halotravel.vn/wp-content/uploads/2021/12/pasta-danza-nha-hang.jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={style.slide2}>
            <Image
              source={{
                uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/2f/33/2d/healthy-bowl-frische.jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={style.slide3}>
            <Image
              source={{
                uri: 'https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={style.slide1}>
            <Image
              source={{
                uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg?quality=82&strip=1&w=800',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={style.slide2}>
            <Image
              source={{
                uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/07/alabama-fried-green-tomato-shutterstock.jpg?resize=800,586&quality=82&strip=all',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={style.slide3}>
            <Image
              source={{
                uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/501071010/fish-tacos.jpg?resize=800,586&quality=82&strip=all',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={[
            style.btnButton,
            {backgroundColor: '#FF6600', borderColor: '#FF6600'},
          ]}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text
            style={[
              style.buttonTitle,
              {fontSize: 20, color: '#fff', fontWeight: 'bold'},
            ]}>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btnButton}
          onPress={() => {navigation.navigate('SignUpScreen')}}
        >
          <Text style={[style.buttonTitle, {fontWeight: 'bold'}]}>
            CREATE NEW ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#FF6600',
    fontWeight: 'bold',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  btnButton: {
    borderWidth: 1,
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginBottom: 10,
  },
  buttonTitle: {
    textAlign: 'center',
    color: colors.grey2
  },
});

export default LoginWelcome;
