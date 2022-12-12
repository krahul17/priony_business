import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'
// import Share from "react-native-share";


const hotels = [
  {
    id: '1',
    videoId: "tghIoadPRgE",
    name: 'Double Tree Hotel',
    location: 'Goa',
    price: 750,
    // image: require('./assets/hotel1.jpg'),
    details: "Tucked between lush forest and the calming waters of the Mandovi River, we are located 10 minutes from the UNESCO World Heritage Site at Old Goa. Goa capital city Panaji and Miramar Beach are both 15 minutes away, as is a choice of shoping, dining, and nightlife. Goa International Airport can be reached in 45 minutes.",
  },
]
const MainYoutube = ({ navigation, route }) => {

  const item = route.params;
  console.log(item, "fhfrtyurtuyr");
  // const { videocount } = route.params;
  // const [videocount, setVideoCount] = useState(0);
  // const increment = () => {
  //   if (videocount <= videocount) {
  //     setVideoCount(videocount + 1)
  //   }
  // }
  const [likecount, setLikeCount] = useState(0);
  const increments = () => {
    if (likecount <= likecount) {
      setLikeCount(likecount + 1)
    }
  }
  const [playing, setPlaying] = useState(false);
const url = "https://www.excellencetechnology.in/privacy-policy/";
  const title = "Awesome Contents";
  const message = "Please check this out.";
  const options = {
    url,
  };
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };
  // function checksellerprofile() {
  //   // let data = { videocount }
  //   fetch("https://douryou.herokuapp.com/douryou-user/user-requrinment/", {
  //     method: 'POST',
  //     headers: {
  //       "Accept": 'application/json',
  //       "Content-Type": 'application/json',
  //     },
  //     body: JSON.stringify(data)
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.log('resp', resp)
  //       navigation.navigate('ProfileDetails', {
  //         videocount
  //       })
  //     })
  //   })
  // }
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
        
          <Image source={require('../assets/Ads.png')}style={{ height: 350, width:'100%',borderRadius:8, marginTop:10}}  />
        </View>
       
        <View style={styles.listboarder}>
          <View style={{ flexDirection: 'row', }}>
            <View>
              {/* <Image source={require('./assets/category.png')} style={styles.icon} /> */}
            </View>
            <View>
              <Text style={styles.text}>Category :-</Text>
            </View>
          </View>
        </View>
        <View style={styles.listboarder}>
          <View style={{ flexDirection: 'row', }}>
            <View>
              {/* <Image source={require('./assets/title.png')} style={styles.icon} /> */}
            </View>
            <View>
              <Text style={styles.text}>Post Title :-</Text>
            </View>
          </View>
        </View>
        <View style={styles.listboarder}>
          <View style={{ flexDirection: 'row', }}>
            <View>
              {/* <Image source={require('./assets/date.png')} style={styles.icon} /> */}
            </View>
            <View>
              <Text style={styles.text}>Post Date & Time</Text>
            </View>
          </View>
        </View>
        <View style={styles.listboarderdescription}>
          <View style={{ flexDirection: 'row', }}>
            <View>
              {/* <Image source={require('./assets/des.png')} style={styles.icon} /> */}
            </View>
            <View>
              <Text style={styles.text}>Description</Text>
              <Text style={styles.text}>
                Enter text here
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
    // marginHorizontal: 7,
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
    // marginRight:25,
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
    // width: Dimensions.get('window').width * 0.2,
  },
  eye: {
    height: 15,
    width: 21,
    margin: 10,
    // marginLeft:30
  },
  like: {
    height: 20,
    width: 22,
    margin: 7,
    marginLeft: -30
  },
  share: {
    height: 20,
    width: 18,
    marginTop: 8,
    margin: 20,
    marginLeft: 25
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