import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, StatusBar, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react';
import RnOtpTimer from 'rn-otp-timer';
import { AuthContext } from '../../../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';
import Loader from '../../../Component/Loader/Loader';
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput';


const Signup = ({ navigation, route }) => {

   const {phone_number}=route.params

    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [shouldShow, setShouldShow] = useState(true);

   const verCode = async () => {

      if (!(password && cpassword)) {
         alert('Enter all felid')
         return
      }

      try {

         let  data =  { phone_number, password }

                console.log( 'check', data)

                setModalVisible(true)
               // console.log()

         fetch(BaseUrl +'/douryou-seller-api/seller-create-signup-password/', {
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
                  // console.log(response.status, "Response check")
                  setModalVisible(false)
                  AsyncStorage.setItem("userInfo", JSON.stringify(response.token))
                  AsyncStorage.setItem("refereshToken", response.token.refresh);
                 AsyncStorage.setItem("accessToken", response.token.access);
              
                 navigation.navigate("CreateProfie", {
                  phone_number
               });
               }
               else if (response.status == false) {
                  setModalVisible(false)

                  alert('Profile Not Created')
                 
                  navigation.navigate("Login");
                  console.log("else  is working");
                  
               }
            }).catch((err)=>{
               setModalVisible(false)
               alert(err)
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
                     <Text style={styles.wel}>Set Your Password</Text>
                  </View>
            
               </View>
               <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10,marginBottom:35 }}>
                  <View>
                     <Text style={{ color: '#000', fontSize: 17, fontWeight: '600' }}>{phone_number}</Text>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                     <View>
                        <Text style={{ color: '#0006C1', fontSize: 17, fontWeight: '400',marginHorizontal:8 }}>Change number?</Text>
                     </View>
                  </TouchableOpacity>
               </View>

               <CustomTextInput label={'Password'} value={password} secureTextEntry={shouldShow} setValue={setPassword} />
               <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                  {shouldShow ?
                     <Image source={require('../../assetsLogo/eye.png')} style={styles.showpd} />
                     :
                     <Image source={require('../../assetsLogo/eye1.png')} style={styles.showpd} />
                  }
               </TouchableOpacity>
               <CustomTextInput label={'Confirm Password'} value={cpassword} setValue={setCpassword} />
        


            
               <TouchableOpacity 
               // onPress={() => navigation.navigate('Login')}
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

export default Signup

const styles = StyleSheet.create({
   logo: {
      width: '70%',
      height: 160,
      alignSelf: 'center',
      marginTop: '25%',
      resizeMode: 'contain'
   },
   wel: {
      marginVertical: 10,
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
   showpd: {
      height: 25,
      width: 25,
      marginTop: -52,
      marginHorizontal:'80%'
  },
})