import { StyleSheet, Text, View, Image, ScrollView, Dimensions, StatusBar, TouchableOpacity, TextInput, } from 'react-native';
import React, { useState,useEffect } from 'react'
// import { Rating } from 'react-native-ratings'
import TopTabNavigation from '../../Navigation-Flow/TopTabNavigation/TopTabNavigation'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import BaseUrl from '../../Component/BaseURL/BaseUrl';

const ProfileDetails = ({ navigation,route }) => {

  const {data}=route.params
  console.log(data,'heello im data')

  const [videocount, setVideoCount] = useState(0);
  const increment = () => {
    if (videocount <= videocount) {
      setVideoCount(videocount + 1)
    }
  }

  

 
  return (
    <>
      <StatusBar
        backgroundColor="#0006C1"
        barStyle={'light-content'} />
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View>
          <View style={styles.Name}>
            <View style={styles.row}>
              <View>
                <TouchableOpacity>
                  <Image source={{uri:BaseUrl + data.CompanyLogo}} style={styles.dp} />
                </TouchableOpacity>
              </View>

              <View >
                <TouchableOpacity>
                  <Text style={styles.link}>{data.CompanyName} </Text>
                </TouchableOpacity>
                <View style={{width:'90%'}}>
                <Text style={styles.address}>{data.CompanyAddress}</Text>
                </View>
              </View>
            </View>

            <View style={styles.bar}>
              <View>
                <Text style={styles.professional}>Professional</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
              </View>
            </View>


          </View>

          <View style={styles.listboarder}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('../ProfileDetails/assets/About.png')} style={styles.icon} />
              </View>
                <TouchableOpacity>
                  <Text style={styles.text}>{data.AboutCompany}</Text>
                </TouchableOpacity>
            </View>
          </View>

          <View style={styles.listboarder}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('../ProfileDetails/assets/our.png')} style={styles.icon} />
              </View>
          
                <TouchableOpacity>
                  <Text style={styles.text}>{data.SpecializationOfCompany}</Text>
                </TouchableOpacity>
              
             
            </View>
          </View>

          <View style={styles.listboarder}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('../ProfileDetails/assets/we.png')} style={styles.icon} />
              </View>
                <TouchableOpacity>
                  <Text style={styles.text}>We are Sever in these categories</Text>
                </TouchableOpacity>
              
            </View>
          </View>

          <View >
            <View style={styles.boder}>
              <View style={styles.Flex}>
                <View>
                  <Image source={require('../ProfileDetails/assets/person.png')} style={styles.Pic} />
                </View>
                <View>
                  <Text style={styles.Text}>Contacting Persson & Details</Text>
                </View>
              </View>

              <View style={styles.Flex2}>
                <View>
                  <Image source={{uri:BaseUrl + data.ContactPersonPic}} style={styles.dppic} />
                </View>
                <View style={styles.input}>
                  <View style={{ flexDirection: 'row', }}>
                    <View>
                      <Text style={styles.profile}>{data.ContactPersonName}</Text>
                    </View>

                  </View>
                  <View>
                    <Text style={styles.profile}>Contact No.</Text>
                  </View>
                  <View>
                    <Text style={styles.profile}>Desigation</Text>
                  </View>

                </View>
              </View>

            </View>
          </View>



          <View style={styles.Boder}>

            <TopTabNavigation navigation={navigation} />

          </View>


        </View>
      </ScrollView>

      <View style={{ backgroundColor: '#fff', height: 60 }}>
        <View style={styles.lsatborder}>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <View style={{ marginLeft: 5 }}>
                {/* <TouchableOpacity> */}
                <Image source={require('../ProfileDetails/assets/eye.png')} style={styles.eye} />
                {/* </TouchableOpacity> */}
              </View>


              <View style={{ flexDirection: 'row' }}>
                {/* <TouchableOpacity> */}
                <View>
                  <Image source={require('../ProfileDetails/assets/like.png')} style={styles.like} />
                </View>
                {/* </TouchableOpacity> */}
                <View style={{ marginLeft: 10, marginTop: 8, width: '30%' }}>
                  <Text>{videocount}</Text>
                </View>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 30 }}>
              <TouchableOpacity onPress={() => increment()}>
                <Image source={require('../ProfileDetails/assets/like.png')} style={styles.thum} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../ProfileDetails/assets/message.png')} style={styles.message} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../ProfileDetails/assets/share.png')} style={styles.share} />
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </>
  )
}

export default ProfileDetails

const styles = StyleSheet.create({
  Name: {
    height: 'auto',
    width: '97%',
    borderWidth: 3,
    marginTop: 10,
    marginHorizontal: 7,
    borderRadius: 6,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
  },
  dp: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginHorizontal: 7
  },
  link: {
    fontWeight: '600',
    fontSize: 16,
    color: '#040271',
    marginVertical: 5,
    marginHorizontal: 5
  },
  address: {
    fontWeight: '500',
    fontSize: 15,
    color: '#000',
    marginTop: 10,
    marginVertical: 5,
    marginHorizontal: 5
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: "#0006C1",
    marginTop: 7,
    padding: 4,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  professional: {
    fontSize: 20,
    fontWeight: '500',
    color: '#EFD757',
    fontStyle: 'italic',
    marginTop:5
  },
  star: {
    width: 18,
    height: 18,
  },
  listboarder: {
    borderWidth: 3,
    height: 53,
    width: '97%',
    marginHorizontal: 7,
    marginVertical: 9,
    borderRadius: 10,
    padding: 8
  },
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 5
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 5,

  },
  boder: {
    borderWidth: 3,
    width: '97%',
    height: 170,
    marginHorizontal: 7,
    marginVertical: 10,
    borderRadius: 10,
    padding: 8,
    borderColor: '#000000'
  },
  Flex: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Pic: {
    height: 36,
    width: 36,
  },
  Text: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000000',
    marginHorizontal: 20,
    marginVertical: 5
  },
  Flex2: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 20
  },
  dppic: {
    height: 95,
    width: 95,
    borderRadius: 5,
  },
  input: {
    marginHorizontal: 10,
    marginTop:-5
  },
  profile: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 5
  },
  Boder: {
    height: 680,
    width: '97%',
    borderWidth: 3,
    borderColor: '#000000',
    marginHorizontal: 7,
    marginVertical: 10,
    borderRadius: 8,
  },
  FLEX: {
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'space-around'
  },
  iconn: {
    height: 34,
    width: 31
  },
  box: {
    height: 118,
    width: 118,
    borderWidth: 3,
  },
  lsatborder: {
    borderWidth: 3,
    height: 45,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    padding: 2,
    marginBottom: 30,
    backgroundColor: '#fff'
  },
  date: {
    color: '#D1070A'
  },
  eye: {
    height: 15,
    width: 21,
    marginTop: 10
  },
  like: {
    height: 21,
    width: 20,
    marginLeft: 50,
    marginTop: 7
  },
  share: {
    height: 22,
    width: 20,
    marginTop: 8,
    margin: 20,
    marginLeft: 25
  },
  thum: {
    height: 24,
    width: 22,
    marginTop: 6,
    marginLeft: -2

  },
  message: {
    height: 24,
    width: 24,
    marginLeft: 27,
    marginTop: 6
  },
  partOneIcon: {
    height: 25,
    width: 25,
    margin: 8
  },

})