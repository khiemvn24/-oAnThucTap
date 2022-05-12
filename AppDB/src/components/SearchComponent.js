import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  Keyboard,
} from 'react-native';
import colors from '../assets/theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {filterData} from '../assets/theme/Data';
import filter from 'lodash/filter';
import SearchResultScreen from '../screens/SearchResultScreen';
import Api from '../api/Api';

export default function SearchComponent({item}) {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFossued, setTextInputFossued] = useState(true);
  const textInput = useRef();
  useEffect(() => {
    getAllCategory()
  }, [])

  function getAllCategory() {
    Api.get('get/category/')
        .then(async function (response) {
          console.log(response.data, '==============Category===============')
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  const contains = ({categoryName}, query) => {
    if (categoryName.includes(query)) {
      return true;
    }
    return false;
  };

  const handleSearch = text => {
    const dataS = filter(data, userSearch => {
      return contains(userSearch, text);
    });

    setData(dataS);
    
  };

  return (
    <View style={{alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
          getAllCategory()
        }}>
        <View style={style.SearchArea}>
          <Ionicons name="search" style={style.searchIcon} size={32} />
          <Text style={{fontSize: 15}}>What are you looking for ?</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        {/* <View style={style.modal}>
                    <TouchableWithoutFeedback onPress={()=>{
                        setModalVisible(false)
                    }}> */}
        <View style={style.modal}>
          <View style={style.view1}>
            <View style={style.TextInput}>
              <Animatable.View
                animation={textInputFossued ? 'fadeInRight' : 'fadeInLeft'}
                duration={400}>
                <Ionicons
                  name={textInputFossued ? 'arrow-back' : 'search' }
                  onPress={() => {
                    if (textInputFossued) setModalVisible(false);
                    setTextInputFossued(true);
                  }}
                  style={style.icon2}
                />
              </Animatable.View>
              <TextInput
                ref={textInput}
                style={{width: '90%'}}
                placeholder=""
                autoFocus={false}
                onFocus={() => {
                  setTextInputFossued(true);
                }}
                onBlur={() => {
                  setTextInputFossued(false);
                }}
                onChangeText={handleSearch}
               
              />
              <Animatable.View
              // animation= {textInputFossued ? "fadeInLeft": ""}
              // duration={400}
              >
                <Ionicons
                  name={textInputFossued ? 'close-circle' : null}
                  onPress={() => {
                    textInput.current.clear()
                    // handleSearch()
                  }}
                  style={{
                    marginRight: 10,
                    color: colors.grey3,
                  }}
                  size={25}
                />
              </Animatable.View>
            </View>
          </View>

          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate('SearchResultScreen',{id:item.ID_Category,item:item.categoryName})
                  setModalVisible(false);
                  setTextInputFossued(true);
                }}>
                <View style={style.view2}>
                  <Text style={{color: colors.grey2, fontSize: 15}}>
                    {item.categoryName}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.ID_Category}
          />
        </View>
        {/* </TouchableWithoutFeedback> */}

        {/* </View> */}
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  SearchArea: {
    marginTop: 10,
    width: '94%',
    height: 50,
    backgroundColor: colors.grey5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
    marginLeft: 5,
  },
  view1: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  view2: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  icon2: {
    fontSize: 24,
    color: colors.grey2,
    marginRight: 5,
    paddingLeft: 5,
  },
  modal: {
    flex: 1,
  },
});
