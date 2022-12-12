import React, { useState, useCallback, useEffect, useRef } from "react";
import { Animated, Button, View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, Touchable, TouchableOpacity, FlatList, Dimensions, Image } from "react-native"
import YoutubePlayer from 'react-native-youtube-iframe';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Share from "react-native-share";
const { width } = Dimensions.get("screen");
const cardWidth = width / 1.2;
const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#52C0B4',
  secondary: '#E0F4F1',
  light: '#F9F9F9',
  grey: '#908E8C',
  orange: '#F5A623',
};
const hotels = [
  {
    id: '1',
    videoId: "3lfQ2vtUyX0",
    name: 'Double Tree Hotel',
    location: 'Goa',
    price: 750,
    // image: require('./assets/hotel1.jpg'),
    details: "Tucked between lush forest and the calming waters of the Mandovi River, we are located 10 minutes from the UNESCO World Heritage Site at Old Goa. Goa capital city Panaji and Miramar Beach are both 15 minutes away, as is a choice of shoping, dining, and nightlife. Goa International Airport can be reached in 45 minutes.",
  },
  {
    id: '2',
    videoId: "iuqfU9Ll300",
    name: 'villa Riviera',
    location: 'Goa',
    price: 1250,
    // image: require('./assets/hotel2.jpg'),
    details: "Villa Riviera is located in Saipem, a few minutes away from Candolim beach, a very popular beach in Goa. If you wish to spend a day near the beach, the sandy beach of Candolim is easily accessible by a short drive. Many shops, restaurants, beach shacks are located near the Candolim beach",
  },
  {
    id: '3',
    videoId: "3cchY1q44bk",
    name: 'Hotel Silver Line',
    location: ' Mussoorie',
    price: 999,
    // image: require('./assets/hotel4.jpg'),
    details: "Located in Mussoorie, within a 9-minute walk of Mussoorie Mall Road and half a kilometer of Camel's Back Road, Hotel Silver Line provides accommodations with a restaurant as well as free private parking for guests who drive. This 3-star hotel offers a 24-hour front desk and room service."
  },
];
export default function CustomFlatList({ navigation, route }) {
  const url = "https://www.excellencetechnology.in/privacy-policy/";
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
const [LikeView,setLikeView] =useState()
  const [videocount, setVideoCount] = useState(0);
  const increment = () => {
    if (videocount <= videocount) {
      setVideoCount(videocount + 1)
    }
  }
  const [likecount, setLikeCount] = useState(0);
  const increments = () => {
    if (likecount <= likecount) {
      setLikeCount(likecount + 1)
    }
  }
  const [favselect, setFavSelect] = useState(true)
  // function incrementview() {
    // alert ('incrementview')
    // let data = { videocount }
    // fetch("https://douryou.herokuapp.com/douryou-user/user-like-admin-video/", {
    //   method: 'POST',
    //   headers: {
    //     "Accept": 'application/json',
    //     "Content-Type": 'application/json',
    //     'Authorization': 'Bearer ' + accessToken,
    //   },
    //   body: JSON.stringify(data)
    // }).then((result) => {
    //   result.json().then((resp) => {
    //     console.log('resp', resp)
        // navigation.navigate('AdsActivityYoutube', item, {
        // })
        // increment()
    //   })
    // })
  // }
  // function LikeView({item}){
  //   fetch("https://douryou.herokuapp.com/douryou-user/user-like-admin-video/"+item.id+"/",{
  //     method: 'POST',
  //         headers: {
  //           "Accept": 'application/json',
  //           "Content-Type": 'application/json',
  //           'Authorization': 'Bearer ' + accessToken,
  //         },
  //   }).then((result) => {
  //         result.json().then((resp) => {
  //           console.log('resp', resp)
  //           // navigation.navigate('AdsActivityYoutube'+ item)
  //         }).catch((error)=>{
  //             alert('error')
  //         })
  //       })
  // }
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwNDczMjIwLCJpYXQiOjE2Njk2MDkyMjAsImp0aSI6IjQ4ODliYzQxNDZiMzRiNTI4MDNjOGU0NzViYTYxOGU4IiwidXNlcl9pZCI6MzF9.P3NQD23hQyqN0qIK4eGyLifNa6oW5p4GGWXm5QfivQo"
  useEffect(() => {
    fetch('https://douryou.herokuapp.com/douryou-user/user-all-admin-videos/', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
        'Authorization': 'Bearer '
        //  + accessToken,
      },
    }).then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const change = (e) => {
    setActiveCardIndex(Math.round(e.nativeEvent.contentOffset.x / cardWidth));
    console.log(Math.round(e.nativeEvent.contentOffset.x / cardWidth));
  }
  const Card = ({ hotel, item, index }) => {
    const inputRange = [(index - 1) * cardWidth, index * cardWidth, (index + 1) * cardWidth];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7]
    })
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8]
    })
    const [playing, setPlaying] = useState(false);
    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
    return (
      <TouchableOpacity activeOpacity={1} onPress={togglePlaying} >
        <Animated.View style={{ ...style.card, transform: [{ scale }] }}>
          {/* <Animated.View style={{ ...style.cardOverLay, opacity }}></Animated.View> */}
          <View style={{ marginRight: 10 }}>
            <View style={style.heart}>
              {/* <TouchableOpacity onPress={() => setFavSelect(!favselect)}>
                {favselect ?
                  (
                    <Image source={require('../CustomFlatList/assets/Favorite.png')} tintColor='#000' style={style.partOneIcon} />
                  )
                  :
                  (
                    <Image source={require('../CustomFlatList/assets/Favorite.png')} style={style.partOneIcon} />
                  )
                }
              </TouchableOpacity> */}
            </View>
            <TouchableOpacity style={style.BtnToutube} onPress={() => { navigation.navigate('AdsActivityYoutube', item) }}>
              {/* <Image source={require('../CustomFlatList/assets/YoutubeBtn.png')} style={style.youtubeBtn} /> */}
            </TouchableOpacity>
          </View>
          <View style={style.youtube}>
            <Image source={{ uri: "https://douryou.herokuapp.com" + item.Thumbnail }} style={style.thumnail} />
          </View>
          <View style={style.cardDetails}>
            <View style={style.bar}>
              <TouchableOpacity>
                <View>
                  <Text style={style.Offer}>{item.SellerIs.plan}</Text>
                </View>
              </TouchableOpacity>
              <View>
                <Text style={style.Study}>{item.CatageryName}</Text>
              </View>
              <View style={style.Stars}>
                {/* <Image source={require('./assets/Star.png')} style={{ height: 15, width: 15 }} />
                <Image source={require('./assets/Star.png')} style={{ height: 15, width: 15 }} />
                <Image source={require('./assets/Star.png')} style={{ height: 15, width: 15 }} />
                <Image source={require('./assets/Star.png')} style={{ height: 15, width: 15 }} />
                <Image source={require('./assets/Star.png')} style={{ height: 15, width: 15 }} /> */}
              </View>
            </View>
            <View style={{ marginTop: 5, flexDirection: 'row' }}>
              <View>
                <Image source={{ uri: "https://douryou.herokuapp.com" + item.SellerIs.ContactPersonPic }} style={style.dp} />
              </View>
              <View style={{ marginVertical: 5, marginHorizontal: 5 }}>
                <Text style={style.company}>{item.SellerIs.CompanyName}</Text>
                <Text style={style.link}>{item.SellerIs.CompanyWebsiteLink}</Text>
                <Text style={style.address}>{item.SellerIs.CompanyAddress}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  {/* <Image source={require('../CustomFlatList/assets/eye.png')} style={style.eye} /> */}
                </View>
                <View style={style.viewcount}>
                  <Text >{videocount}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    {/* <Image source={require('../CustomFlatList/assets/thumb.png')} style={style.like} /> */}
                  </View>
                  <View style={style.viewcount}>
                    <Text >{item.LikeCount}</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                {/* <TouchableOpacity onPress={()=> LikeView()}> */}
                <TouchableOpacity onPress={function LikeView({item}){
                        fetch("https://douryou.herokuapp.com/douryou-user/user-like-admin-video/2/",{
                          method: 'POST',
                              headers: {
                                "Accept": 'application/json',
                                "Content-Type": 'application/json',
                                'Authorization': 'Bearer ' 
                                // + accessToken,
                              },
                            }).then((result) => {
                                  result.json().then((resp) => {
                                    console.log('resp', resp)
                                    // navigation.navigate('AdsActivityYoutube'+ item)
                                  }).catch((error)=>{
                                      alert('error')
                                  })
                                })
                      }}>
                  {/* <Image source={require('../CustomFlatList/assets/thumb.png')} style={style.thum} /> */}
                </TouchableOpacity>
                <TouchableOpacity>
                  {/* <Image source={require('../CustomFlatList/assets/message.png')} style={style.message} /> */}
                </TouchableOpacity>
                <TouchableOpacity onPress={async () => { await share() }}>
                  {/* <Image source={require('../CustomFlatList/assets/share.png')} style={style.share} /> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    )
  }
  return (
    <View>
      <Animated.FlatList
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        horizontal
        data={data.VideoDetail}
        contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20, paddingRight: cardWidth / 2 - 40 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          <Card item={item} index={index}> </Card>}
        snapToInterval={cardWidth} ></Animated.FlatList>
    </View>
  );
}

const style = StyleSheet.create({
    youtube: {
      overflow: "hidden",
      borderRadius: 14,
      // marginLeft:-10,
    },
    thumnail: {
      width: '100%',
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
      borderRadius: 10,
      height: 200
    },
    youtubeBtn: {
      height: 70,
      width: 90,
      alignSelf: 'center'
    },
    dp: {
      height: 80,
      width: 80,
      marginHorizontal: 10,
      borderRadius: 8,
      marginVertical: 3,
    },
    card: {
      height: 350,
      width: cardWidth,
      elevation: 15,
      borderRadius: 12,
      backgroundColor: "#E3FBF3"
    },
    bar: {
      height: 'auto',
      flexDirection: 'row',
      // justifyContent: 'space-around',
      backgroundColor: '#D1070A',
      width: Dimensions.get('window').width / 1.2
    },
    Stars: {
      marginLeft: 10,
      marginTop: 6,
      flexDirection: 'row',
      width:Dimensions.get('window').width *0.6
    },
    Offer: {
      fontSize: 15,
      fontWeight: '400',
      color: '#EFD757',
      fontStyle: 'italic',
      marginTop: 5,
      marginLeft:5,
      width:Dimensions.get('window').width *0.4
    },
    Study: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#ffff',
      width:Dimensions.get('window').width *0.2
    },
    company: {
      fontWeight: '600',
      fontSize: 20,
      color: '#000',
      // marginVertical: 1,
      width: Dimensions.get('window').width / 1.2
    },
    link: {
      fontWeight: '500',
      fontSize: 16,
      color: '#040271',
      width: Dimensions.get('window').width / 1.3
    },
    address: {
      fontSize: 15,
      fontWeight: '500',
      color: '#000',
      width: Dimensions.get('window').width * 0.60
    },
    cardDetails: {
      height: 'auto',
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      backgroundColor: "#fff",
      position: "absolute",
      bottom: 0,
      width: "100%",
    },
    partOneIcon: {
      height: 22,
      width: 22,
      margin: 8,
    },
    heart: {
      position: 'absolute',
      zIndex: 1,
      alignSelf: 'flex-end',
      backgroundColor: '#fff',
      borderRadius: 10,
      margin: 4,
    },
    BtnToutube: {
      position: 'absolute',
      zIndex: 1,
      alignSelf: 'center',
      borderRadius: 10,
      margin: 4,
      marginVertical: 50
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
      marginLeft: 20
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
  });
  
  
  
  
  
  
  