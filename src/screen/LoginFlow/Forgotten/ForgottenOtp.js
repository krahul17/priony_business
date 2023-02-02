import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, StatusBar, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react';
import RnOtpTimer from 'rn-otp-timer';
import { AuthContext } from '../../../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';
import Loader from '../../../Component/Loader/Loader';


const ForgottenOtp = ({ navigation, route }) => {


const {phone_number}=route.params

   const [otp, setOtp] = useState("");
   const [modalVisible, setModalVisible] = useState(false);




   const verCode = async () => {

      if (!(otp)) {
         alert('Enter all felid')
         return
      }

      try {

         let  data =  { phone_number, otp }

                console.log( 'check', data)

                setModalVisible(true)
               // console.log()

         fetch(BaseUrl +'/douryou-seller-api/seller-verify-email-otp-to-change-password/', {
               method: 'POST',
               headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json",

               },
               body: JSON.stringify(data)
         }).then((data) => {
            data.json().then((response) => {
               console.log(response, "Response check")
               // console.log(response.status)
               if (response.status == true) {
                  navigation.navigate("SetNewPassword", {
                     phone_number
                  });
                
               }
               else if (response.status == false) {
                  setModalVisible(false)
                
                 alert('Invalid Code')
                  // console.log(response.token.access,'user token set ')
                  console.log("else  is working");
                  
               }
            }).catch((err)=>{
               setModalVisible(false)
              
            })
            
         
         })
         // setNumbId(result);
      } catch (error) {
         // alert('code', code)
         alert(error);
      }
   }



   return (
      <>
         <StatusBar
            backgroundColor="#0006C1"
            barStyle={'light-content'} />

         <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View>

               <View style={styles.main}>
                  <View>
                     <Image source={require('../../assetsLogo/logo.png')} style={styles.logo} />
                  </View>
                  <View>
                     <Text style={styles.wel}>Verify Your Email-ID</Text>
                  </View>
                  <View style={{alignSelf:'center'}}>
                     <Text style={styles.text}>
                        Enter the code we just send  {'\n'}on your Email ID</Text>
                  </View>
               </View>


               <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "space-evenly", marginTop: 10 }}>
                  <TextInput
                     maxLength={4}
                     keyboardType={'numeric'}
                     style={{
                        fontWeight: '600',
                        alignSelf: 'center',
                        fontSize: 20,
                        height: 50,
                        width: Dimensions.get('window').width / 3.6,
                        borderWidth: 1,
                        letterSpacing: 15,
                        borderBottomColor: "#0006C1",
                        margin: 10,
                        borderTopColor: "#fff",
                        borderRightColor: "#fff",
                        borderLeftColor: "#fff",
                        borderStyle: 'dashed',

                     }}
                     value={otp}
                     onChangeText={(text) => setOtp(text)}
                  />
               </View>


               {/* <TouchableOpacity onPress={() => navigation.navigate('CreateProfie')} style={styles.Btn}> */}
               <TouchableOpacity 
               onPress={verCode} 
               style={styles.Btn}>
                  <View >
                     <Text style={styles.btn}>Submit </Text>
                  </View>
               </TouchableOpacity>

               <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />


            </View>
         </ScrollView>
      </>
   )
}

export default ForgottenOtp

const styles = StyleSheet.create({
   logo: {
      width: '70%',
      height: 160,
      alignSelf: 'center',
      marginTop: '25%',
      resizeMode: 'contain'
   },
   wel: {
      marginVertical: 40,
      textAlign: 'center',
      fontSize: 25,
      color: '#000000',
      fontWeight: '600'
   },
   text: {
      textAlign: 'center',
      fontSize: 18,
      color: '#000000',
      fontWeight: '600'
   },
   Btn: {
      alignItems: 'center',
      marginVertical: 20,
   },
   btn: {
      backgroundColor: '#0006C1',
      paddingHorizontal: 100,
      paddingVertical: 15,
      color: '#FFFFFF',
      fontSize: 25,
      borderRadius: 15,
      fontWeight: "600"
   },
   OTP: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 40,
   },
   InputOtp: {
      borderBottomWidth: 2,

      textAlign: 'center',
      borderColor: '#E4E3E3'
   },
   Second: {
      marginLeft: 40,
      marginTop: 20
   },
   CODE: {
      justifyContent: 'center',
      alignSelf: 'center'

   },
   Code: {
      color: '#545F74',
      fontSize: 15,
      marginLeft: 5
   },
})