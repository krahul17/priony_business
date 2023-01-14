import { StyleSheet, Text, View, StatusBar, Modal, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BaseUrl from '../../Component/BaseURL/BaseUrl'


const HomeScreen = ({ navigation, item, Events }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [modalshow, setModalShow] = useState(false)
  const [modalshowpackage, setModalShowPackage] = useState(false)

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [accessToken, setAccessToken] = useState();

  console.log(data, "useinfo getting herr")

  const [first, setfirst] = useState(data.plan);

  console.log(data.plan, ' plan is ....')



  const increment = () => {
    if (count <= count) {
      setCount(count + 1)
    }
  }
  const bell = () => {
    if (count1 <= count1) {
      setCount1(count1 + 1)
    }
  }

  const { logout } = useContext(AuthContext)

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
    <>
      <StatusBar
        backgroundColor="#0006C1"
        barStyle={'light-content'} />

      <View style={styles.navbar}>
        <View>
          <Image source={require('../../screen/assetsLogo/logo.png')} style={styles.Logo} />
        </View>
        <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-around' }}>

          <View>

            <TouchableOpacity onPress={() => increment()}>
              <Image source={require('../../screen/HomeScreen/assets/chat1.png')} style={styles.message} />
              <View>
                <View style={{ backgroundColor: '#D1070A', borderRadius: 999, height: 17, width: 17, position: 'absolute', marginTop: -30, marginLeft: 29 }}>
                  <Text style={{ color: '#fff', textAlign: 'center', marginTop: -1, fontWeight: '400' }}>{count}</Text>
                </View>
              </View>
            </TouchableOpacity>

          </View>

          <View>
            <TouchableOpacity onPress={() => bell()}>
              <Image source={require('../HomeScreen/assets/bell.png')} style={styles.bell} />
              <View>
                <View style={{ backgroundColor: '#D1070A', borderRadius: 999, height: 17, width: 17, position: 'absolute', marginTop: -32, marginLeft: 32 }}>
                  <Text style={{ color: '#fff', textAlign: 'center', marginTop: -1, fontWeight: '400' }}>{count1}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>

      <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
        <View>



          <View style={styles.bordertop}>

            <View style={{ flexDirection: 'row' }}>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileDetails',
                  { data }
                )}>
                  <Image source={{ uri: BaseUrl + data.CompanyLogo }} style={styles.dp} />
                </TouchableOpacity>
              </View>
              <View style={{ marginVertical: 15, width: '75%' }}>
                <TouchableOpacity>
                  <Text style={styles.link}>
                    {data.CompanyName}
                  </Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.adress}>
                    {data.CompanyAddress}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => setModalShow(!modalshow)}>
                <Image source={require('../HomeScreen/assets/pen.png')} style={styles.pen} />
              </TouchableOpacity>
            </View>
            <View>
              <Modal
                transparent={true}
                visible={modalshow}>
                <View style={{ backgroundColor: '#fff', borderColor: '#0006C1', borderWidth: 2, borderRadius: 10, marginVertical: 140, margin: 20 }}>
                  <TouchableOpacity onPress={() => setModalShow(!modalshow)} style={styles.Cross}>
                    <Image source={require('../HomeScreen/assets/cross.png')} style={styles.cross} />
                  </TouchableOpacity>
                  <View style={{ margin: 20, marginTop: 30, padding: 10 }}>
                    <Text style={{ color: "#0006C1", marginVertical: 50, textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}> Profile Edit available in WebView only </Text>
                  </View>
                </View>
              </Modal>
            </View>

          
              <View style={styles.bar}>
             { first !== 'Free' &&
                <View style={{ marginVertical: 10 }}>
                  <Text style={{ color: '#EFD757', fontSize: 20, fontStyle: 'italic', fontWeight: '500' }}>FreePlan</Text>
                </View>
              }
              </View>
        

              {first === 'PORFENSSIONAL Plan' &&
            <View style={styles.bar}>

          

                <View style={{ marginVertical: 10 }}>
                <Text style={{ color: '#EFD757', fontSize: 20, fontStyle: 'italic', fontWeight: '500' }}>Professional</Text>
                </View>

                <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                  <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                  <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                  <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                  <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                  <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                </View>
             
            </View> 
 }

          </View>

          <View style={{ marginVertical: 20 }}>
            <Text style={{ textAlign: 'center', color: '#000', fontSize: 30, fontWeight: 'bold' }}>Business Panel</Text>
          </View>


          <View style={{ borderWidth: 2, marginHorizontal: 7, backgroundColor: '#000', marginVertical: 20 }}></View>


          <View style={styles.mainBorder2}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/offer.png')} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={styles.mainTexts}>Post Your Offer </Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('CustomTodatDeal')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/today.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Today's Deal</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('JobOffer')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/job.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Offer Jobs</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.boxlst}>
                <TouchableOpacity onPress={() => navigation.navigate('SellFranchise')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/sell.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Franchise Sell</Text>
                  </View>
                </TouchableOpacity>
              </View>



            </View>
          </View>


          <View style={styles.mainBorder3}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/deal.png')} style={{ width: 45, height: 45, marginTop: 5 }} />
              </View>
              <View style={{ marginVertical: 18 }}>
                <Text style={styles.mainTexts}>Latest Deals for you </Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('InterstedVistor')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/vistor.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Intersted Vistors</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('UserRequirement')}>
                  <View style={{ alignSelf: 'center', marginTop: 15 }}>
                    <Image source={require('../HomeScreen/assets/user.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>User’s Requirments</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          </View>

          <View style={styles.mainBorder}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 10 }}>
                <Image source={require('../HomeScreen/assets/customer.png')} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={styles.mainTexts}>Your Customers</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.boxlst}>
                <TouchableOpacity onPress={() => navigation.navigate('YoutubeAds')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/ads.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Your Ads</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.boxlst}>
                <TouchableOpacity onPress={() => navigation.navigate('YoutubeInterview')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../../Navigation-Flow/TopTabNavigation/assets/four.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Your Interview</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.boxlst}>
                <TouchableOpacity onPress={() => navigation.navigate('YourOfferJob')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/job.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Your Offer Jobs</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.boxlst}>
                <TouchableOpacity onPress={() => navigation.navigate('Franchise')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/sell.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Your Franchise Sell</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('ViewProfile')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/profile.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>View Profile</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('LikeProfile')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/profile.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Like Profile</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.boxlst}>
                <TouchableOpacity onPress={() => navigation.navigate('ShareProfile')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/profile.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Share Profile</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

          </View>


          <View style={styles.mainBorder3}>
            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/FavR.png')} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={styles.mainTexts}>Favorite Customer </Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.boxlst}>
                <TouchableOpacity onPress={() => navigation.navigate('FavCustomer')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/FavR.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Favorite Customer</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

          </View>


          <View style={styles.mainBorder4}>
            {/* <TouchableOpacity> */}
            <View style={styles.customer}>
              <View style={{ marginVertical: 10 }}>
                <Image source={require('../HomeScreen/assets/prr.png')} style={{ width: 50, height: 50, marginTop: 6 }} />
              </View>
              <View style={{ marginVertical: 19 }}>
                <Text style={styles.mainTexts}>PR Score</Text>
              </View>
            </View>
            {/* </TouchableOpacity> */}


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('PrEnquirtForm')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/prform.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>PR Enquiry form </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('CanadaList')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/canada.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Canada{'\n'}(CRS Calculator)</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('UsaList')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/usa.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>USA{'\n'}(CRS Calculator)</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('UkList')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/uk.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>UK{'\n'}(CRS Calculator)</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('AustrilaList')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/aus.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Australia{'\n'}(CRS Calculator)</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('NewZealandList')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/nz.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>New-Zealand{'\n'}(CRS Calculator)</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          </View>


          <View style={styles.mainBorder5}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/offer.png')} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={styles.mainTexts}>Special For You</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('MyMatchList')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/mymatch.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>My Match</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('CommingSoon')}>
                  <View style={{ alignSelf: 'center', marginVertical: 15 }}>
                    <Image source={require('../HomeScreen/assets/test.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Online Weekly IELTS Test</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/home.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Home{'\n'}Consultncy</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('HotArea')}>
                  <View style={{ alignSelf: 'center', marginTop: 20 }}>
                    <Image source={require('../HomeScreen/assets/area.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Hot Area To Target{'\n'}Customers </Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.boxlst}>
                <TouchableOpacity onPress={() => navigation.navigate('AICustomer')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/ai.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>A.I. Customers</Text>
                  </View>
                </TouchableOpacity>
              </View>



            </View>
          </View>

          <View style={styles.mainBorder6}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/ilets.png')} style={{ width: 50, height: 50, marginLeft: 20 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={styles.mainTexts}>IELTS</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('Demo')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/demo.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Demo Class</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('ClassTiming')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/time.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Class Timing </Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('StudentFee')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/fees.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Student Fees</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('MyClass')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/classroom.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>My Classroom </Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          </View>

          <View style={styles.mainBorder7}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/event.png')} style={{ width: 50, height: 50, marginLeft: 20 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={styles.mainTexts}>Events</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('EventsScreen')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/book.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Book Event </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('MyEvents')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/event.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>My Events</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

          </View>

          <View style={styles.mainBorder7}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/men.png')} style={{ width: 50, height: 50, marginLeft: 20 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={styles.mainTexts}>Support</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 1 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => setModalShowPackage(!modalshowpackage)}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/package.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Business Package</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View>
                <Modal
                  transparent={true}
                  visible={modalshowpackage}>
                  <View style={{ backgroundColor: '#fff', borderColor: '#0006C1', borderWidth: 2, borderRadius: 10, marginVertical: 190, margin: 20 }}>
                    <TouchableOpacity onPress={() => setModalShowPackage(!modalshowpackage)} style={styles.Cross}>
                      <Image source={require('../HomeScreen/assets/cross.png')} style={styles.cross} />
                    </TouchableOpacity>
                    <View style={{ margin: 20, marginTop: 30, padding: 10 }}>
                      <Text style={{ color: "#0006C1", marginVertical: 50, textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}> Business  package CommingSoon </Text>
                    </View>
                  </View>
                </Modal>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('HelpSupport')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/help.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Help & Support</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity >
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/policy.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Privacy Policy</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity >
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/disclamier.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={styles.texts}>Disclamer</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

          </View>

          <TouchableOpacity
            onPress={logout}>


            <View style={{ backgroundColor: '#0006C1', padding: 15, marginHorizontal: 7, borderRadius: 13, marginVertical: 10 }}>
              <Text style={{ textAlign: 'center', color: '#fff', fontSize: 25, fontWeight: '800' }}>LOG OUT</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // marginHorizontal: 20,
    height: 72,
    width: '100%'
  },
  Logo: {
    marginTop: 20,
    marginHorizontal: 10,
    height: 45,
    width: 160
  },
  message: {
    height: 28,
    width: 29,
    marginTop: 20,
    marginHorizontal: 10,
    position: 'relative'
  },
  bell: {
    height: 32,
    width: 27,
    marginTop: 18,
    marginHorizontal: 17,
  },
  search: {
    height: 40,
    width: 40,
    marginTop: 9,
    // marginHorizontal: 8,
  },
  bordertop: {
    height: 'auto',
    width: '97%',
    marginHorizontal: 7,
    borderWidth: 3,
    marginTop: 20,
    borderRadius: 12,
    borderColor: "#0006C1"
  },
  dp: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10
  },
  // link: {
  //   fontSize: 17,
  //   fontWeight: 'bold',
  //   color: "#0006C1"
  // },
  // adress: {
  //   color: "#000",
  //   fontSize: 17,
  //   fontWeight: '600',
  //   marginVertical: 3
  // },
  link: {
    fontWeight: '600',
    fontSize: 16,
    color: '#040271',
    marginVertical: 2,
    marginHorizontal: 2
  },
  adress: {
    fontWeight: '500',
    fontSize: 15,
    color: '#000',
    marginTop: 10,
    marginVertical: -10,
    marginHorizontal: 5,
  },
  pen: {
    height: 35,
    width: 35,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: -30
  },
  cross: {
    height: 40,
    width: 40,
    position: 'absolute',
    marginTop: 2,
    marginLeft: 300,
    zIndex: 1,
  },
  bar: {
    backgroundColor: "#0006C1",
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  star: {
    width: 15,
    height: 15,
  },
  mainBorder: {
    borderWidth: 3,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height: 'auto',
    borderRadius: 12,
    marginVertical: 10
  },
  mainTexts: {
    fontSize: 25,
    fontWeight: '900',
    color: '#0006C1',
    marginHorizontal: 10,
    marginTop: 5
  },
  customer: {
    borderWidth: 3,
    height: 90,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  box: {
    borderWidth: 3,
    borderRadius: 12,
    height: 160,
    width: Dimensions.get('screen').width * 0.44,
  },
  boxlst: {
    borderWidth: 3,
    borderRadius: 12,
    height: 140,
    width: '98%',
  },
  texts: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  mainBorder2: {
    borderWidth: 3,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height: 'auto',
    borderRadius: 12,
    marginVertical: 10
  },
  mainBorder3: {
    borderWidth: 3,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height: 'auto',
    borderRadius: 12,
    marginVertical: 10
  },
  mainBorder4: {
    borderWidth: 3,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height: 'auto',
    borderRadius: 12,
    marginVertical: 10
  },
  mainBorder5: {
    borderWidth: 3,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height: 'auto',
    borderRadius: 12,
    marginVertical: 10
  },
  mainBorder6: {
    borderWidth: 3,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height: 'auto',
    borderRadius: 12,
    marginVertical: 10
  },
  mainBorder7: {
    borderWidth: 3,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height: 'auto',
    borderRadius: 12,
    marginVertical: 10
  },

})