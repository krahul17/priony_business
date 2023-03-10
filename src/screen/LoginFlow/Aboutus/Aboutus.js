import { StyleSheet, ScrollView, ImageBackground, Text, View, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker'
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';
import Loader from '../../../Component/Loader/Loader';


const Aboutus = ({ navigation }) => {

   const [AboutCompany, setAboutCompany] = useState()
   const [SpecializationOfCompany, setSpecializationOfCompany] = useState()
   const [accessToken, setAccess] = useState(null);

   const [modalVisible, setModalVisible] = useState(false);

   const SaveData = async () => {

      if(!(AboutCompany && SpecializationOfCompany)){
         alert('Enter this field')
         return
      }
      setModalVisible(true)

      const accessToken = await AsyncStorage.getItem("accessToken");
      setAccess(accessToken);

      let formData = new FormData();
    
      formData.append('AboutCompany', AboutCompany)
      formData.append('SpecializationOfCompany', SpecializationOfCompany)
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
            setModalVisible(false)
            alert("DATA SAVE")
            navigation.navigate('MyMatch')
           
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

               

               <CustomTextInput label={'About us'} value={AboutCompany} setValue={setAboutCompany} />
               <CustomTextInput label={'Our Specialization'} value={SpecializationOfCompany} setValue={setSpecializationOfCompany} />



               <TouchableOpacity onPress={SaveData} style={styles.Btn}>
                  {/* <TouchableOpacity onPress={() => navigation.navigate('MyMatch')} style={styles.Btn}> */}
                  <Text style={styles.btn}>Submit</Text>
               </TouchableOpacity>


               <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />

            </View>
         </ScrollView>
      </>
   )
}

export default Aboutus

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
      marginTop: 10,
      width: 140,
      height: 140,
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
      width: 34,
      height: 34,
      marginLeft: 1,
   },
   borderdelete: {
      marginLeft: '26%',
      position: 'absolute',
      zIndex: 1,
   },
   delete: {
      width: 50,
      height: 50,
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