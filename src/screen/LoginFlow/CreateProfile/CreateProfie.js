import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, ImageBackground, TouchableHighlight, StatusBar } from 'react-native'
import React, { useState, useContext } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker';
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput'
import { AuthContext } from '../../../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';


const CreateProfie = ({ navigation, route }) => {

   const { phone_number } = route.params;

   // const { signup } = useContext(AuthContext)

   const [CompanyName, setCompanyName] = useState()
   const [CompanyAddress, setCompanyAddress] = useState()
   const [CompanyDistrictName, setCompanyDistrictName] = useState()
   const [CompanyStateName, setCompanyStateName] = useState()
   const [CompanyEmailID, setCompanyEmailID] = useState()
   const [CompanyWebsiteLink, setCompanyWebsiteLink] = useState()
   const [CompanyLoginPhoneNo, setCompanyLoginPhoneNo] = useState(phone_number)
   const [accessToken, setAccess] = useState(null);

   console.log(accessToken, "accessToken")

   let usernames = AsyncStorage.getItem('username');
   console.log('usernames', usernames)



   const [CompanyLogo, setCompanyLogo] = useState('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWR8UleGP6xe2whajk4Tq7rb08APejJOkf042F3Eo_TbVBg8Sj');
   const [showoption, setShowoption] = useState(false)


   const openGalleryFront = () => {
      ImageCropPicker.openPicker({

         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyLogo => {
         console.log(CompanyLogo);
         setShowoption(false)
         setCompanyLogo(CompanyLogo.path)
      });
   }



   const SaveData = async () => {
      if (!(CompanyLogo && CompanyName && CompanyAddress && CompanyDistrictName && CompanyStateName && CompanyEmailID && CompanyWebsiteLink && CompanyLoginPhoneNo)) {
         alert('Enter all felid')
         return
      }
      let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNTI3ODI1LCJqdGkiOiJmNGIzOWE2MDE4ZWU0M2M3Yjc0NmU0N2ZmOGJiOTBiZCIsInVzZXJfaWQiOjEwfQ.0m9C02ZpNM5ibIUPbwQMRiseSf9evKxj07F00jiBzGs"

      // let accessToken = await AsyncStorage.getItem('accessToken');
      // setAccess(accessToken)

      let formData = new FormData();
      let filename = CompanyLogo.split('/').pop();
      console.log("filename = " + filename);
      let match = /\.(\w+)$/.exec(filename);
      console.log("match = " + match);
      let type = match ? `image/${match[1]}` : `image`;
      console.log("type = " + type);
      formData.append('CompanyName', CompanyName)
      formData.append('CompanyAddress', CompanyAddress)
      formData.append('CompanyDistrictName', CompanyDistrictName)
      formData.append('CompanyLogo', { uri: CompanyLogo, name: filename, type })
      formData.append('CompanyStateName', CompanyStateName)
      formData.append('CompanyEmailID', CompanyEmailID)
      formData.append('CompanyWebsiteLink', CompanyWebsiteLink)
      formData.append('CompanyLoginPhoneNo', CompanyLoginPhoneNo)
      formData.append("is_active", true)
      formData.append("is_user", true)


      fetch(BaseUrl + '/douryou-seller-api/seller-registration/', {
         method: 'Post',
         headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
            'Authorization': 'Bearer ' + accessToken,
         },
         body: formData
      }).then((result) => {
         result.json().then((response) => {
            console.log(response, "Response");

            navigation.navigate('Profile')
            // AsyncStorage.setItem("userInfo", JSON.stringify(response));
            // console.log("referesh token = " + response.token.refresh);
            // AsyncStorage.setItem("refereshToken", response.token.refresh);
            // AsyncStorage.setItem("accessToken", response.token.access);
            // signup();
            alert("DATA SAVE")
         }).catch((error) => {
            alert('something went wrong')
            console.log(error);
         });
      })
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
                     <Text style={styles.wel}> Let's create company profile</Text>
                  </View>
               </View>

               <View style={{ alignSelf: 'center', marginVertical: 10 }}>

                  <TouchableOpacity style={styles.borderdelete}>
                     <Image source={require('../CreateProfile/assets/delete.png')} style={styles.delete} />
                  </TouchableOpacity>

                  <View>

                     <TouchableOpacity onPress={() => openGalleryFront()} style={styles.border}>
                        <Image source={require('../CreateProfile/assets/Camerab.png')} style={styles.camera} />
                     </TouchableOpacity>

                     <View style={{ borderWidth: 1, borderRadius: 10, height: 150, position: 'relative' }}>

                        <ImageBackground source={{ uri: CompanyLogo }} style={styles.dp} />

                     </View>
                  </View>

               </View>

               
               <CustomTextInput label={'Company Name'} value={CompanyName} setValue={setCompanyName} />
               <CustomTextInput label={'Company Adress'} value={CompanyAddress} setValue={setCompanyAddress} />
               <CustomTextInput label={'District Name'} value={CompanyDistrictName} setValue={setCompanyDistrictName} />
               <CustomTextInput label={'State Name'} value={CompanyStateName} setValue={setCompanyStateName} />
               <CustomTextInput label={'Email - ID'} value={CompanyEmailID} setValue={setCompanyEmailID} />
               <CustomTextInput label={'Website'} value={CompanyWebsiteLink} setValue={setCompanyWebsiteLink} />
               <CustomTextInput label={'Login Phone no.'} value={CompanyLoginPhoneNo} setValue={setCompanyLoginPhoneNo} />




               {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.Btn}> */}
               <TouchableOpacity onPress={SaveData} style={styles.Btn}>
                  <Text style={styles.btn}> Submit </Text>
               </TouchableOpacity>



            </View>
         </ScrollView>
      </>

   )
}

export default CreateProfie

const styles = StyleSheet.create({
   logo: {
      width: '70%',
      height: 160,
      alignSelf: 'center',
      marginTop: '25%',
      resizeMode: 'contain'
   },
   wel: {
      marginVertical: 20,
      textAlign: 'center',
      fontSize: 25,
      color: '#000000',
      fontWeight: '600'
   },
   dp: {
      overflow: 'hidden',
      // marginTop: 10,
      width: 150,
      height: 150,
      borderRadius: 10
   },
   border: {
      padding: 4,
      marginLeft: '78%',
      position: 'absolute',
      zIndex: 1,
      marginTop: "85%",
   },
   camera: {
      width: 40,
      height: 40,
      marginLeft: 9,
      marginTop: -15
   },
   borderdelete: {
      marginLeft: '30%',
      position: 'absolute',
      zIndex: 1,
      marginTop: -15
   },
   delete: {
      width: 55,
      height: 55,
      marginLeft: 1,
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
})