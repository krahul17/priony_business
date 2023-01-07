import { StyleSheet, Text, View, FlatList, Image, Pressable, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React, { useContext, useState } from "react";
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';
import Loader from '../../../Component/Loader/Loader';

const MyMatch = ({ navigation, route }) => {


  const [checkBoxOne, setCheckBoxOne] = useState("")
  const [checkBoxTwo, setCheckBoxTwo] = useState("")
  const [checkBoxThree, setCheckBoxThree] = useState("")
  const [checkBoxFour, setCheckBoxFour] = useState("")
  const [checkBoxFive, setCheckBoxFive] = useState("")
  const [checkBoxSix, setCheckBoxSix] = useState("")
  const [checkBoxSeven, setCheckBoxSeven] = useState("")
  const [checkBoxEight, setCheckBoxEight] = useState("")
  const [checkBoxNine, setCheckBoxNine] = useState("")
  const [checkBoxTen, setCheckBoxTen] = useState("")
  const [checkBoxEleven, setCheckBoxEleven] = useState("")
  const [checkBoxTwelve, setCheckBoxTwelve] = useState("")
  const [checkBoxThirteen, setCheckBoxThirteen] = useState("")
  const [checkBoxFourteen, setCheckBoxFourteen] = useState("")
  const [checkBoxFifteen, setCheckBoxFifteen] = useState("")
  const [checkBoxSixteen, setCheckBoxSixteen] = useState("")
  const [checkBoxSeventeen, setCheckBoxSeventeen] = useState("")
  const [checkBoxEighteen, setCheckBoxEighteen] = useState("")
  const [checkBoxNineteen, setCheckBoxNineteen] = useState("")
  const [accessToken, setAccess] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);


  const [note, setNote] = useState("")
  const [loading, setLoading] = useState(false)

  const Join = [checkBoxOne, checkBoxTwo, checkBoxThree, checkBoxFour, checkBoxFive, checkBoxSix, checkBoxSeven, checkBoxEight, checkBoxNine, checkBoxTen, checkBoxEleven,
    checkBoxTwelve, checkBoxThirteen, checkBoxFourteen, checkBoxFifteen, checkBoxSixteen, checkBoxSeventeen, checkBoxEighteen, checkBoxNineteen]

  const WhyJoin = Join.toString();

  console.log(WhyJoin,"Hello Douryou")

  const SaveData = async () => {

    if (!WhyJoin) {
      alert('select option')
      return
    }
    const accessToken = await AsyncStorage.getItem("accessToken");
    setAccess(accessToken);

    setModalVisible(true)

    let formData = new FormData();
  
    formData.append('WhyJoin', WhyJoin)
    formData.append("is_active", true)
    formData.append("is_user", true)

    fetch(BaseUrl + '/douryou-seller-api/seller-registration/', {
       method: 'Patch',
       headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
          'Authorization': 'Bearer ' + accessToken,
       },
       body: formData
    }).then((result) => {
       result.json().then((response) => {
        setModalVisible(false)
          console.log(response, "Response");
          alert("DATA SAVE")
          navigation.navigate('UploadeOfficePic')
          
       }).catch((error) => {
        setModalVisible(false)
        alert(error)
          console.log(error);
       });
    })
 }

 
  return (
    <>
      <StatusBar
        backgroundColor='#0006C1'
        barStyle={'light-content'} />

      <ScrollView style={styles.mainContainer}>

        <View>
          <Image source={require('../../assetsLogo/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.top}>
          <Text style={styles.toptext}>Which services do you deal in</Text>
        </View>

        <View style={{ padding: 20 }}>

          {/* checkbox one */}

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxOne == "") {
                setCheckBoxOne("IELTS")
              } else {
                setCheckBoxOne("")
              }
            }} >
              

              {checkBoxOne == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              } 
             <View>
             <Text style={styles.text}>IELTS</Text>
             </View>
            </Pressable>
           
          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxTwo == "") {
                setCheckBoxTwo("Study Visa")
              } else {
                setCheckBoxTwo("")
              }
            }} >
              {checkBoxTwo == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Study Visa</Text>
              </View>
            </Pressable>
          

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxThree == "") {
                setCheckBoxThree("Passport")
              } else {
                setCheckBoxThree("")
              }
            }} >
              {checkBoxThree == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Passport</Text>
              </View>
            </Pressable>
           

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxFour == "") {
                setCheckBoxFour("Education Loan")
              } else {
                setCheckBoxFour("")
              }
            }} >
              {checkBoxFour == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Education Loan</Text>
              </View>
            </Pressable>
           
          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxFive == "") {
                setCheckBoxFive("Air Ticket")
              } else {
                setCheckBoxFive("")
              }
            }} >
              {checkBoxFive == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Air Ticket</Text>
              </View>
            </Pressable>
         

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxSix == "") {
                setCheckBoxSix("Travel Insurance")
              } else {
                setCheckBoxSix("")
              }
            }} >
              {checkBoxSix == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Travel Insurance</Text>
              </View>
            </Pressable>
            

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxSeven == "") {
                setCheckBoxSeven("Money Exchange")
              } else {
                setCheckBoxSeven("")
              }
            }} >
              {checkBoxSeven == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Money Exchange</Text>
              </View>
            </Pressable>
          

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxEight == "") {
                setCheckBoxEight(" Transport For Airport")
              } else {
                setCheckBoxEight("")
              }
            }} >
              {checkBoxEight == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Transportation For Airport</Text>
              </View>
            </Pressable>
           

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxNine == "") {
                setCheckBoxNine("Luggage Adjustment")
              } else {
                setCheckBoxNine("")
              }
            }} >
              {checkBoxNine == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Luggage Adjustment</Text>
              </View>
            </Pressable>
           

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxTen == "") {
                setCheckBoxTen("Accommodation at Abroad")
              } else {
                setCheckBoxTen("")
              }
            }} >
              {checkBoxTen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Accommodation at Abroad</Text>
              </View>
            </Pressable>
           
          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxEleven == "") {
                setCheckBoxEleven("Jobs at Abroad")
              } else {
                setCheckBoxEleven("")
              }
            }} >
              {checkBoxEleven == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Jobs at Abroad</Text>
              </View>
            </Pressable>
            

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxTwelve == "") {
                setCheckBoxTwelve("Tour Travel Package")
              } else {
                setCheckBoxTwelve("")
              }
            }} >
              {checkBoxTwelve == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Tour & Travel Package</Text>
              </View>
            </Pressable>
          

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxThirteen == "") {
                setCheckBoxThirteen("Work Permit")
              } else {
                setCheckBoxThirteen("")
              }
            }} >
              {checkBoxThirteen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Work Permit</Text>
              </View>
            </Pressable>
           

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxFourteen == "") {
                setCheckBoxFourteen("Permanent Resident (PR)")
              } else {
                setCheckBoxFourteen("")
              }
            }} >
              {checkBoxFourteen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Permanent Resident (PR)</Text>
              </View>
            </Pressable>
            

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxFifteen == "") {
                setCheckBoxFifteen("International Courier")
              } else {
                setCheckBoxFifteen("")
              }
            }} >
              {checkBoxFifteen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>International Courier</Text>
              </View>
            </Pressable>
           

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxSixteen == "") {
                setCheckBoxSixteen("Tourist & Business Visa")
              } else {
                setCheckBoxSixteen("")
              }
            }} >
              {checkBoxSixteen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Tourist & Business Visa</Text>
              </View>
            </Pressable>
          

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxSeventeen == "") {
                setCheckBoxSeventeen("Legal Adviser")
              } else {
                setCheckBoxSeventeen("")
              }
            }} >
              {checkBoxSeventeen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Legal Adviser</Text>
              </View>
            </Pressable>
         

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxEighteen == "") {
                setCheckBoxEighteen("Online IELT Classes")
              } else {
                setCheckBoxEighteen("")
              }
            }} >
              {checkBoxEighteen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#0006C1', backgroundColor: '#0006C1', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
              <View>
              <Text style={styles.text}>Online IELTS Classes</Text>
              </View>
            </Pressable>
           

          </View>

          
        </View>
       

        <TouchableOpacity onPress={SaveData} style={styles.Btn}>
        {/* <TouchableOpacity onPress={()=>navigation.navigate('UploadeOfficePic')} style={styles.Btn}> */}
          <Text style={styles.btn}>Submit</Text>
        </TouchableOpacity>
        <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </ScrollView>
    </>
  )
}
export default MyMatch
const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#fff"
  },
  logo: {
    width: '70%',
      height: 160,
      alignSelf: 'center',
      marginTop: '10%',
      resizeMode:'contain'
  },
  top: {
    alignItems: 'center',

  },
  toptext: {
    fontWeight: "600",
    fontSize: 20,
    color: "#000000",
  },
  root: {
    padding: 20,
    flexGrow: 1
  },
  text: {
    color: "#000",
    marginHorizontal: 35,
    marginTop:-24,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cont: {
    flexDirection: 'column',
    paddingVertical: 15
  },
  box: {
    height: 22,
    width: 22,
    borderWidth: 1,
    borderRadius: 5,
  },
  Btn: {
    alignItems: 'center',
    marginVertical: 20
  },
  btn: {
    backgroundColor: '#0006C1',
    paddingHorizontal: 90,
    paddingVertical: 15,
    color: '#FFFFFF',
    fontSize: 25,
    borderRadius: 15,
    fontWeight: "600"
  },
})