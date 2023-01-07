import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BaseUrl from '../../../Component/BaseURL/BaseUrl'


const MainYoutube = ({ navigation, route }) => {

  const item = route.params;

  const [data, setData] = useState(item)
  console.log(data, "fhfrtyurtuyr");


  return (
    <ScrollView style={styles.mainContainer}>
      <View>

        <View style={styles.Name1}>
          <View style={styles.topmain}>
            <View style={styles.topad}>
              <Image source={require('../../HomeScreen/assets/ads.png')} style={styles.ad} />
            </View>

            <View style={styles.maintext}>
              <Text style={styles.toptext}>Yours Ads</Text>
            </View>

          </View>
        </View>
        <View style={styles.Name}>

          <Image source={{ uri: BaseUrl + data.UploadAdsPhoto }} style={{ height: 350, width: '100%', borderRadius: 8, marginTop: 10 }} />
        </View>

        <View style={styles.listboarder}>
          <View style={{ flexDirection: 'row', }}>
            <View>
              <Text style={styles.text}>Category :-  {data.Catagery}</Text>
            </View>
          </View>
        </View>
        <View style={styles.listboarder}>
          <View style={{ flexDirection: 'row', }}>
            <View>
              <Text style={styles.text}>Post Title :-  {data.DealTitle}</Text>
            </View>
          </View>
        </View>
        <View style={styles.listboarder}>
          <View style={{ flexDirection: 'row', }}>
            <View>
              <Text style={styles.text}>Date :- {data.DealPostDateandTime.slice(0,10)}   Time :- {data.DealPostDateandTime.slice(11,19)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.listboarderdescription}>
          <View style={{ flexDirection: 'row', }}>
            <View>
              <Text style={styles.text}>Descriptions :-</Text>
              <Text style={styles.text}>
                {data.DealAddDiscription}
              </Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}
export default MainYoutube;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#ffff"
  },
  Name1: {
    height: 55,
    width: "90%",
    borderWidth: 3,
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#000000',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center'
  },
  topmain: {
    flexDirection: "row",
  },
  ad: {
    height: 38,
    width: 36,
  },
  maintext: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  toptext: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
    color: "#000"
  },
  Name: {
    height: 'auto',
    width: '97%',
    borderColor: '#999999',
    margin: 5,
  },
  listboarder: {
    borderWidth: 1,
    height: 40,
    width: Dimensions.get('window').width * 0.96,
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 6,
    padding: 8
  },
  listboarderdescription: {
    borderWidth: 1,
    height: 115,
    width: Dimensions.get('window').width * 0.96,
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 6,
    padding: 8
  },
  icon: {
    height: 26,
    width: 26,
    marginHorizontal: 5
  },
  text: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginHorizontal: 10
  },
  profile: {
    borderWidth: 2,
    height: 'auto',
    width: Dimensions.get('window').width * 0.97,
    marginHorizontal: 7,
    borderRadius: 8,
    borderColor: '#999999',
    padding: 1,
    marginVertical: 12,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#D1070A',
    marginTop: 5,
    height: 35,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: '100.5%',
    marginLeft: -1,
    marginBottom: -1
  },
  Publish: {
    color: "#000",
    fontSize: 16,
    marginLeft: 15,
  },
  dp: {
    height: 88,
    width: 88,
    marginHorizontal: 10,
    borderRadius: 4
  },
  company: {
    fontSize: 19,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 20,
    marginVertical: 20,
    color: '#D1070A'
  },
  link: {
    fontWeight: '500',
    fontSize: 16,
    color: '#040271',
    width: Dimensions.get('window').width * 0.60
  },
  address: {
    marginVertical: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    width: Dimensions.get('window').width * 0.50
  },
  Offer: {
    fontSize: 20,
    TextAlign: "center",
    fontWeight: '400',
    color: '#EFD757',
    fontStyle: 'italic',
    marginTop: 5
  },
  viewcount: {
    marginLeft: 1,
    marginTop: 8,
    width: Dimensions.get('window').width / 5,
  },

  thum: {
    height: 23,
    width: 25,
    marginTop: 6,
    marginRight: 15
  },
  message: {
    height: 22,
    width: 23,
    marginLeft: 12,
    marginTop: 6
  },
})