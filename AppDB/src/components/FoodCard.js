import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions
} from 'react-native';
import colors from '../assets/theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const FoodCart = ({
  onPressRestaurant,
  item
}) => {
  // console.log(item, '==================klklkk')
  return (
    <TouchableOpacity
      onPress={onPressRestaurant}
    >
      <View style={{...style.cardView, width: SCREEN_WIDTH * 0.8}}>
        <Image
          style={{...style.image, width: SCREEN_WIDTH * 0.8}}
          source={item.Image_Res ? {uri: item.Image_Res } : null}
        />

        <View>
          <View>
            <Text style={style.restaurantName}>{item.RestaurantName}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={style.distance}>
              <Ionicons
                name="location"
                color={colors.grey2}
                size={18}
                style={{marginTop: 3}}
              />
              <Text style={style.Min}> {item.farAway} Min</Text>
            </View>

            <View style={{flex: 9, flexDirection: 'row'}}>
              <Text style={style.address}> {item.Address} </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={style.review}>
        <Text style={style.average}>{item.averageReview}</Text>
        <Text style={style.numberOfReview}>{item.numberOfReview} reviews</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop: 5,
    marginLeft: 10,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  Min: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3,
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    paddingHorizontal: 10,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(52,52,52,0.3)',
    padding: 2,
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  average: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  numberOfReview: {
    color: 'white',
    fontSize: 13,
    marginRight: 0,
    marginLeft: 0,
  },
});

export default FoodCart