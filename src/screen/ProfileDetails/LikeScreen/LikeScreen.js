import { StyleSheet, Text, Image,View ,SafeAreaView, Dimensions} from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import BaseUrl from '../../../Component/BaseURL/BaseUrl'
import { AuthContext } from '../../../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'


const LikeScreen = () => {

  const [modalshow, setModalShow] = useState(false)

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [accessToken, setAccessToken] = useState();

  console.log(data, "useinfo getting herr")


  const firstLoad = async () => {
    try {

      const accessToken = await AsyncStorage.getItem("accessToken");
      setAccessToken(accessToken);
      console.log(accessToken, ' hello im token')

      await fetch(BaseUrl + '/douryou-seller-api/seller-registration/', {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + accessToken,
        },
      }).then((response) => response.json())
        .then((json) => setData(json.Events))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

      // console.log(data,"useinfo getting herr")

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    firstLoad();
  }, []);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{marginTop:15}}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
            <View style={styles.boxView}>
           <Image source={{ uri: BaseUrl + data.CompanyPreviousResultsPic1}} style={styles.box} />
           </View>
           <View style={styles.boxView}>
           <Image source={{ uri: BaseUrl + data.CompanyPreviousResultsPic2}} style={styles.box} />
           </View>
           <View style={styles.boxView}>
           <Image source={{ uri: BaseUrl + data.CompanyPreviousResultsPic3}} style={styles.box} />
           </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
            <View style={styles.boxView}>
           <Image source={{ uri: BaseUrl + data.CompanyPreviousResultsPic4}} style={styles.box} />
           </View>
           <View style={styles.boxView}>
           <Image source={{ uri: BaseUrl + data.CompanyPreviousResultsPic5}} style={styles.box} />
           </View>
           <View style={styles.boxView}>
           <Image source={{ uri: BaseUrl + data.CompanyPreviousResultsPic6}} style={styles.box} />
           </View>
            </View>

           

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
            <View style={styles.boxView}>
           <Image source={{ uri: BaseUrl + data.CompanyPreviousResultsPic7}} style={styles.box} />
           </View>
           <View style={styles.boxView}>
           <Image source={{ uri: BaseUrl + data.CompanyPreviousResultsPic8}} style={styles.box} />
           </View>
           <View style={styles.boxView}>
           <Image source={{ uri: BaseUrl + data.CompanyPreviousResultsPic9}} style={styles.box} />
           </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
            <View style={styles.boxView}>
           <Image source={{ uri: BaseUrl + data.CompanyPreviousResultsPic10}} style={styles.box} />
           </View>
           <View style={styles.boxView}>
           <Image source={{ uri: BaseUrl + data.CompanyPreviousResultsPic11}} style={styles.box} />
           </View>
           <View style={styles.boxView}>
           <Image source={{ uri: BaseUrl + data.CompanyPreviousResultsPic12}} style={styles.box} />
           </View>
            </View>

       

        </View>
    </SafeAreaView >
  )
  
}

export default LikeScreen

const styles = StyleSheet.create({
  box: {
    height: 118,
    width: 118,
    // width: Dimensions.get('screen').width*0.3,
    borderWidth: 1,
    borderRadius:5
},
boxView:{
  height: 120,
  width: 120,
  // width: Dimensions.get('screen').width*0.3,
  borderWidth: 1,
  borderRadius:5

}
})