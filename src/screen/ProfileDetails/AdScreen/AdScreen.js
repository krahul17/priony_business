import { StyleSheet, Text, Image, FlatList, View } from 'react-native'
import React, { useState, useEffect } from "react";
import { SafeAreaView } from 'react-native'
import BaseUrl from '../../../Component/BaseURL/BaseUrl'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AdScreen = () => {


  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [accessToken, setAccess] = useState(null);


  console.log(data, "userdataprofil")
  useEffect(async () => {

    const accessToken = await AsyncStorage.getItem("accessToken");
    setAccess(accessToken);

    fetch(BaseUrl + '/douryou-seller-api/seller-view-todays-deals-added/', {
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
          <View style={styles.boxView}>
            <Image source={{ uri: BaseUrl + item.UploadAdsPhoto }} style={styles.box} />
          </View>
          <View style={styles.boxView}>
          <Image source={{ uri: BaseUrl + item.UploadAdsPhoto }} style={styles.box} />
          </View>
          <View style={styles.boxView}>
          <Image source={{ uri: BaseUrl + item.UploadAdsPhoto }} style={styles.box} />
          </View>
        </View>

      </>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ marginTop: 15 }}>

   


        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data.TodaysDeals}
          renderItem={({ item, index }) =>
            (<Card item={item} index={index}></Card>)}
          keyExtractor={from_compny_profile => from_compny_profile.id} />





      </View>
    </SafeAreaView >
  )

}

export default AdScreen

const styles = StyleSheet.create({
  box: {
    height: 118,
    width: 118,
    // width: Dimensions.get('screen').width*0.3,
    borderWidth: 1,
    borderRadius: 5
  },
  boxView: {
    height: 120,
    width: 120,
    // width: Dimensions.get('screen').width*0.3,
    borderWidth: 1,
    borderRadius: 5

  }
})