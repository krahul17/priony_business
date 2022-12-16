import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, ImageBackground, StatusBar, Dimensions } from 'react-native'
import React, { useState,useContext } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker'
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput'
import PhoneInput from 'react-native-phone-number-input';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';
import { AuthContext } from '../../../../context/AuthContext';
import  AsyncStorage  from '@react-native-async-storage/async-storage';


const Profile = ({ navigation }) => {

   const [ContactPersonName, setContactPersonName] = useState()
   const [ContactPersonNumber, setContactPersonNumber] = useState('')
   const [ContactPersonDesigation, setContactPersonDesigation] = useState()
   const [accessToken, setAccess] = useState(null);

   const [ContactPersonPic, setContactPersonPic] = useState('https://icon-library.com/images/upload-image-icon-png/upload-image-icon-png-26.jpg');
   const [showoption, setShowoption] = useState(false)

   const openGalleryFront = () => {
      ImageCropPicker.openPicker({
         width: 100,
         height: 100,
         cropping: false
      }).then(ContactPersonPic => {
         console.log(ContactPersonPic);
         setShowoption(false)
         setContactPersonPic(ContactPersonPic.path)
      });
   }


  

   // const {signup} =useContext(AuthContext)

   const SaveData = async () => {
      
      const accessToken = await AsyncStorage.getItem("accessToken");
      setAccess(accessToken);
    
      let formData = new FormData();
      let filename = ContactPersonPic.split('/').pop();
      console.log("filename = " + filename);
      let match = /\.(\w+)$/.exec(filename);
      console.log("match = " + match);
      let type = match ? `image/${match[1]}` : `image`;
      console.log("type = " + type);
      formData.append('ContactPersonName', ContactPersonName)
      formData.append('ContactPersonNumber', "ContactPersonNumber")
      formData.append('ContactPersonDesigation', ContactPersonDesigation)
      formData.append('ContactPersonPic', { uri: ContactPersonPic, name: filename, type })
  
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
          console.log(response, "Response");
          navigation.navigate('Aboutus')
          alert("DATA SAVE")
         
     
        }).catch((error) => {
         alert('something went wrong')
         console.log(error);
      });
      })
      console.log()
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
                     <Text style={styles.wel}> Let's create your profile</Text>
                  </View>
               </View>

               <View style={{ alignSelf: 'center', marginVertical: 10 }}>

                  <TouchableOpacity style={styles.borderdelete}>
                     <View>
                        <Image source={require('../CreateProfile/assets/delete.png')} style={styles.delete} />
                     </View>
                  </TouchableOpacity>


                  <View>
                     <View style={styles.border}>
                        <TouchableOpacity onPress={() => openGalleryFront()}>
                           <View>
                              <Image source={require('../CreateProfile/assets/Camerab.png')} style={styles.camera} />
                           </View>
                        </TouchableOpacity>
                     </View>
                     <View style={{ borderWidth: 1, borderRadius: 10, height: 150, position: 'relative' }}>

                        <ImageBackground source={{ uri: ContactPersonPic }} style={styles.dp} />

                     </View>
                  </View>

               </View>



               <CustomTextInput label={'Contact Person Name'} value={ContactPersonName} setValue={setContactPersonName} />
               {/* <CustomTextInput label={'Contact Whatsapp Number'} value={ContactPersonNumber} setValue={setContactPersonNumber} /> */}

               <Text style={{color:'#000',fontWeight:"400",marginVertical:5,fontSize:15,marginLeft:40}}>Enter Your Whatsapp Number For Chat</Text>

               <View style={styles.PhoneInput}>
                  <PhoneInput
                     defaultValue={ContactPersonNumber}
                     defaultCode='IN'
                     containerStyle={{
                        height: 62,
                        borderRadius: 10,
                        borderWidth: 1,
                        width: Dimensions.get('window').width / 1.2
                        //   width:Dimensions.get('window').width *0.8

                     }}
                     textContainerStyle={{
                        paddingTop: 0,
                        fontWeight: '600',
                        height: 58,
                        paddingBottom: -10,
                        borderRadius: 10
                     }}
                     onChangeFormattedText={(text) => {
                        setContactPersonNumber(text)
                     }}
                  />

               </View>

               <CustomTextInput label={"Contact Person's Desigation"} value={ContactPersonDesigation} setValue={setContactPersonDesigation} />




               {/* <TouchableOpacity onPress={() => navigation.navigate('Aboutus')} style={styles.Btn}> */}
               <TouchableOpacity onPress={SaveData} style={styles.Btn}>
                  <Text style={styles.btn}> Submit </Text>
               </TouchableOpacity>


            </View>
         </ScrollView>
      </>
   )
}

export default Profile

const styles = StyleSheet.create({
   logo: {
      width: '70%',
      height: 160,
      alignSelf: 'center',
      marginTop: '10%',
      resizeMode:'contain'
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
   PhoneInput: {
      // marginTop: '10%',
      // marginHorizontal: 35,
      alignSelf: 'center'
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