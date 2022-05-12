import { StyleSheet, Text, View , Dimensions,FlatList,TouchableOpacity} from 'react-native'
import React,{useState, useEffect} from 'react'
import SearchResultCard from '../components/SearchResultCard'
import { restauratsData } from '../assets/theme/Data';
import colors from '../assets/theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Api from '../api/Api';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation, route}) => {
  
  const [data, setData] = useState([])
 
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isSecureEntry1, setIsSecureEntry1] = useState(true);
  useEffect(() => {
    getRestaurantAllFull()
    // console.log(route);
  }, [])

  
  
  function getRestaurantAllFull() {
    Api.get(`get/restaurant/allfull/${route.params.id}`)
        .then(async function (response) {
          // console.log(response.data, '==========FullRestaurant=============')
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }
  function getRestaurantAverageReview() {
    Api.get(`get/restaurant/averageReview/${route.params.id}`)
        .then(async function (response) {
          // console.log(response.data, '==========FullRestaurant=============')
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  function getOrderByDesc() {
    Api.get(`get/restaurant/desc/${route.params.id}`)
        .then(async function (response) {
          // console.log(response.data, '==========FullRestaurant=============')
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }
  function getOrderByAsc() {
    Api.get(`get/restaurant/asc/${route.params.id}`)
        .then(async function (response) {
          // console.log(response.data, '==========FullRestaurant=============')
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{backgroundColor:colors.cardbackground}}
          // data={isSecureEntry ? data2 : data1}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item,index})=>(
         
              <SearchResultCard
                screenWuth = {SCREEN_WIDTH} 
                OnPressRestaurantCard={() => {
                  navigation.navigate('RestaurantHomeScreen',
                  {id:item.ID_Restaurant,restaurant:item.RestaurantName}
                  )
                }}
                id = {route.params.id}
                item={item}
              />
          )}
          ListHeaderComponent={
              <View>
                <Text style={styles.listHeader}>{data.length} Search Result for {route.params.item}</Text>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', paddingVertical:10}}>
                  <TouchableOpacity 
                    onPress={()=>{
                      setIsSecureEntry1(prev => !prev);
                      isSecureEntry1 ? getRestaurantAverageReview() : getRestaurantAllFull()
                      }}>
                    <View style={{flexDirection:'row',borderWidth:1, paddingHorizontal:10, borderRadius:15, alignItems:'center'}}>
                      <Ionicons name='star' size={20} style={{color:'black'}}/>
                      <Text style={{color:'black'}}>4.2 sao trở lên</Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        setIsSecureEntry(prev => !prev);
                        isSecureEntry ? getOrderByDesc() : getOrderByAsc()
                      }}
                      style={{flexDirection:'row', borderWidth:1,borderRadius:15,paddingHorizontal:10,alignItems:'center'}}
                      >
                      <Text>
                        {isSecureEntry ? (
                          <Ionicons
                            name={'chevron-up-outline'}
                            size={20}
                            style={{color:'black'}}
                          />
                        ) : (
                          <Ionicons
                            name={'chevron-down-outline'}
                            size={20}
                            style={{color:'black'}}
                          />
                        )}
                      </Text>
                      <Text style={{color:'black'}}>Sắp xếp</Text>
                    </TouchableOpacity>
                    
                  </View>
                </View>
              </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
      
    </View>
  )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:30
    },
    listHeader:{
      color: colors.grey1,
      fontSize:20,
      paddingHorizontal:10,
      paddingVertical:0,
      fontWeight:'bold'
    }
})