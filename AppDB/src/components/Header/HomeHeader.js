import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/theme/colors';
import IconBadge from 'react-native-icon-badge';

export default function HomeHeader({navigation}) {
  // const BadgeIcon = withBadge(0)(Ionicons)
  const BadgeCount =(0)
  return (
    <View style={style.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Ionicons
          name={'menu'}
          size={32}
          color={colors.white}
          // onPress={() => {
          //   navigation.toggleDrawer();
          // }}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 25, color: colors.white, fontWeight: 'bold'}}>
          VNKFood
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 15,
        }}>
        {/* <Ionicons name={'cart'} size={32} color={colors.white} /> */}
        
          <IconBadge
            MainElement={
              <Ionicons name={'cart'} size={32} color={colors.white} />
            }
            BadgeElement={
              <Text style={{color: '#FFFFFF'}}>{BadgeCount}</Text>
            }
            IconBadgeStyle={{ backgroundColor: 'red'}}
            size={10}
          />
       
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: 50,
    justifyContent: 'space-between',
    alignItems:'center'
    
  },
});
