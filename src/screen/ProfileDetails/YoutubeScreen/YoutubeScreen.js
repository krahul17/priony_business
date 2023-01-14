import { StyleSheet, Text, View, SafeAreaView, FlatList,Image } from 'react-native'
import React, { useState,useEffect } from 'react';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';



const YoutubeScreen = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccess] = useState(null);

  // let [accessToken, setAccessToken] = useState()
  console.log(data.Sellers, "acces token")

  useEffect(async () => {

    const accessToken = await AsyncStorage.getItem("accessToken");
    setAccess(accessToken);


    fetch(BaseUrl + '/douryou-seller-api/seller-see-admin-interview-for-him/', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + accessToken,
      },
    }).then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) =>
        // alert(error))
        console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const Card = ({ item, index }) => {

    return (
        <>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
          <View style={styles.boxView}>
            <Image source={{ uri: BaseUrl + item.Thumbnail }} style={styles.box} />
          </View>
         
        </View>

  </>
  )
}

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data.Sellers}
        renderItem={({ item, index }) =>
          (<Card item={item} index={index}></Card>)}
        keyExtractor={SellerIs => SellerIs.id} />

    </SafeAreaView>
  )
}

export default YoutubeScreen

const styles = StyleSheet.create({
  box: {
    height: 220,
    width: 350,
    resizeMode:'contain',
    // width: Dimensions.get('screen').width*0.3,
    borderWidth: 1,
    borderRadius: 5
  },

  boxView: {
    height: 220,
    width: 350,
    // width: Dimensions.get('screen').width*0.3,
    borderWidth: 1,
    borderRadius: 5

  }
})