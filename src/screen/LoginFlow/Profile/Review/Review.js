import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, ImageBackground, StatusBar, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../../Component/BaseURL/BaseUrl';

const Review = ({ navigation }) => {


   const [CustomerReviewsPic1, setCustomerReviewsPic1] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CustomerReviewsPic2, setCustomerReviewsPic2] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CustomerReviewsPic3, setCustomerReviewsPic3] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CustomerReviewsPic4, setCustomerReviewsPic4] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CustomerReviewsPic5, setCustomerReviewsPic5] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CustomerReviewsPic6, setCustomerReviewsPic6] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CustomerReviewsPic7, setCustomerReviewsPic7] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CustomerReviewsPic8, setCustomerReviewsPic8] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CustomerReviewsPic9, setCustomerReviewsPic9] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CustomerReviewsPic10, setCustomerReviewsPic10] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CustomerReviewsPic11, setCustomerReviewsPic11] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CustomerReviewsPic12, setCustomerReviewsPic12] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption, setShowoption] = useState(false)
   const [accessToken, setAccess] = useState(null);


   const openGalleryFront = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CustomerReviewsPic1 => {
         console.log(CustomerReviewsPic1);
         setShowoption(false)
         setCustomerReviewsPic1(CustomerReviewsPic1.path)
      });
   }
   const openGalleryFront2 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CustomerReviewsPic2 => {
         console.log(CustomerReviewsPic2);
         setShowoption(false)
         setCustomerReviewsPic2(CustomerReviewsPic2.path)
      });
   }
   const openGalleryFront3 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CustomerReviewsPic3 => {
         console.log(CustomerReviewsPic3);
         setShowoption(false)
         setCustomerReviewsPic3(CustomerReviewsPic3.path)
      });
   }
   const openGalleryFront4 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CustomerReviewsPic4 => {
         console.log(CustomerReviewsPic4);
         setShowoption(false)
         setCustomerReviewsPic4(CustomerReviewsPic4.path)
      });
   }
   const openGalleryFront5 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CustomerReviewsPic5 => {
         console.log(CustomerReviewsPic5);
         setShowoption(false)
         setCustomerReviewsPic5(CustomerReviewsPic5.path)
      });
   }
   const openGalleryFront6 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CustomerReviewsPic6 => {
         console.log(CustomerReviewsPic6);
         setShowoption(false)
         setCustomerReviewsPic6(CustomerReviewsPic6.path)
      });
   }
   const openGalleryFront7 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CustomerReviewsPic7 => {
         console.log(CustomerReviewsPic7);
         setShowoption(false)
         setCustomerReviewsPic7(CustomerReviewsPic7.path)
      });
   }
   const openGalleryFront8 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CustomerReviewsPic8 => {
         console.log(CustomerReviewsPic8);
         setShowoption(false)
         setCustomerReviewsPic8(CustomerReviewsPic8.path)
      });
   }
   const openGalleryFront9 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CustomerReviewsPic9 => {
         console.log(CustomerReviewsPic9);
         setShowoption(false)
         setCustomerReviewsPic9(CustomerReviewsPic9.path)
      });
   }
   const openGalleryFront10 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CustomerReviewsPic10 => {
         console.log(CustomerReviewsPic10);
         setShowoption(false)
         setCustomerReviewsPic10(CustomerReviewsPic10.path)
      });
   }
   const openGalleryFront11 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CustomerReviewsPic11 => {
         console.log(CustomerReviewsPic11);
         setShowoption(false)
         setCustomerReviewsPic11(CustomerReviewsPic11.path)
      });
   }
   const openGalleryFront12 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CustomerReviewsPic12 => {
         console.log(CustomerReviewsPic12);
         setShowoption(false)
         setCustomerReviewsPic12(CustomerReviewsPic12.path)
      });
   }

   const SaveData = async () => {

      // if (!(CustomerReviewsPic1 && CustomerReviewsPic2 && CustomerReviewsPic3 && CustomerReviewsPic4 && CustomerReviewsPic5 && CustomerReviewsPic6 && CustomerReviewsPic7 && CustomerReviewsPic8 && CustomerReviewsPic9 && CustomerReviewsPic10 && CustomerReviewsPic11 && CustomerReviewsPic12)) {
      //    alert('Enter all felid')
      //    return
      // }
      let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNTI3ODI1LCJqdGkiOiJmNGIzOWE2MDE4ZWU0M2M3Yjc0NmU0N2ZmOGJiOTBiZCIsInVzZXJfaWQiOjEwfQ.0m9C02ZpNM5ibIUPbwQMRiseSf9evKxj07F00jiBzGs"

      // let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxMjU2MDU4LCJqdGkiOiI2ZGZiNTk3Y2JjMTk0OGUyOWMzMjIxNTA5NDE3NmNjYiIsInVzZXJfaWQiOjE4fQ.YE69RJoVDXtlr92Q5Hq7vLHV8fztatiVtbsRV9KWMLE"
      // setAccess(accessToken)
      // let accessToken = await AsyncStorage.getItem('accessToken');
      // setAccess(accessToken)


      let formData = new FormData();
      let filename = CustomerReviewsPic1.split('/').pop();
      console.log("filename = " + filename);
      let match = /\.(\w+)$/.exec(filename);
      console.log("match = " + match);
      let type = match ? `image/${match[1]}` : `image`;
      console.log("type = " + type);
      formData.append('CustomerReviewsPic1', { uri: CustomerReviewsPic1, name: filename, type })
      formData.append('CustomerReviewsPic2', { uri: CustomerReviewsPic2, name: filename, type })
      formData.append('CustomerReviewsPic3', { uri: CustomerReviewsPic3, name: filename, type })
      formData.append('CustomerReviewsPic4', { uri: CustomerReviewsPic4, name: filename, type })
      formData.append('CustomerReviewsPic5', { uri: CustomerReviewsPic5, name: filename, type })
      formData.append('CustomerReviewsPic6', { uri: CustomerReviewsPic6, name: filename, type })
      formData.append('CustomerReviewsPic7', { uri: CustomerReviewsPic7, name: filename, type })
      formData.append('CustomerReviewsPic8', { uri: CustomerReviewsPic8, name: filename, type })
      formData.append('CustomerReviewsPic9', { uri: CustomerReviewsPic9, name: filename, type })
      formData.append('CustomerReviewsPic10', { uri: CustomerReviewsPic10, name: filename, type })
      formData.append('CustomerReviewsPic11', { uri: CustomerReviewsPic11, name: filename, type })
      formData.append('CustomerReviewsPic12', { uri: CustomerReviewsPic12, name: filename, type })

      formData.append("is_active", true)
      formData.append("is_user", true)

      fetch(BaseUrl +'/douryou-seller-api/seller-registration/', {
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
            navigation.navigate('FreePlan')
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
                     <Image source={require('../../../assetsLogo/logo.png')} style={styles.logo} />
                  </View>
                  <View>
                     <Text style={styles.wel}> Let's create your profile</Text>
                  </View>
               </View>

               <View style={{ alignItems: 'flex-end', marginRight: 28 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('PaymentConfirm')}>
                     <Text style={styles.skip}>Skip</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.Input}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <View style={{ flexDirection: 'row' }}>
                        <View>
                           <Image source={require('../assets/reviews.png')} style={styles.camera} />
                        </View>
                        <View>
                           <Text style={{ color: '#000', fontWeight: '600', fontSize: 15, marginTop: 9, marginHorizontal: 8 }}>Upload Your Customer's Reviews</Text>
                        </View>
                     </View>
                     {/* <View>
                        <TouchableOpacity>
                           <Image source={require('../assets/Camera.png')} style={styles.camera} />
                        </TouchableOpacity>
                     </View> */}
                  </View>
               </View>

               <View style={styles.mainBorder}>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                     <TouchableOpacity onPress={() => openGalleryFront()}>
                        <ImageBackground source={{ uri: CustomerReviewsPic1 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront2()}>
                        <ImageBackground source={{ uri: CustomerReviewsPic2 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront3()}>
                        <ImageBackground source={{ uri: CustomerReviewsPic3 }} style={styles.dp} />
                     </TouchableOpacity>

                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                     <TouchableOpacity onPress={() => openGalleryFront4()}>
                        <ImageBackground source={{ uri: CustomerReviewsPic4 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront5()}>
                        <ImageBackground source={{ uri: CustomerReviewsPic5 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront6()}>
                        <ImageBackground source={{ uri: CustomerReviewsPic6 }} style={styles.dp} />
                     </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                     <TouchableOpacity onPress={() => openGalleryFront7()}>
                        <ImageBackground source={{ uri: CustomerReviewsPic7 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront8()}>
                        <ImageBackground source={{ uri: CustomerReviewsPic8 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront9()}>
                        <ImageBackground source={{ uri: CustomerReviewsPic9 }} style={styles.dp} />
                     </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>


                     <TouchableOpacity onPress={() => openGalleryFront10()}>
                        <ImageBackground source={{ uri: CustomerReviewsPic10 }} style={styles.dp} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => openGalleryFront11()}>
                        <ImageBackground source={{ uri: CustomerReviewsPic11 }} style={styles.dp} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => openGalleryFront12()}>
                        <ImageBackground source={{ uri: CustomerReviewsPic12 }} style={styles.dp} />
                     </TouchableOpacity>
                  </View>



               </View>


               {/* < TouchableOpacity onPress={() => navigation.navigate('BuyPlan')} style={styles.Btn}> */}
               < TouchableOpacity onPress={SaveData} style={styles.Btn}>

                  <Text style={styles.btn}> Submit </Text>

               </TouchableOpacity>

            </View>
         </ScrollView>
      </>
   )
}

export default Review

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
   skip: {
      borderWidth: 1,
      padding: 5,
      width: 50,
      textAlign: 'center',
      backgroundColor: '#0006C1',
      color: '#fff',
      fontWeight: '500',
      fontSize: 16,
      borderRadius: 5
   },

   camera: {
      width: 34,
      height: 34,
      marginLeft: 1,
   },
   border: {
      width: Dimensions.get('screen').width * 0.3,
      height: 160,
      overflow: 'hidden',
      borderRadius: 10
   },
   mainBorder: {
      borderWidth: 1,
      height:'auto',
      width: '95%',
      borderRadius: 10,
      marginHorizontal: 7,
      marginTop: 10,
     alignSelf:'center'
   },
   Input: {
      // marginHorizontal: 20,
      marginTop: 10,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      width: '95%',
      alignSelf:'center'
   },
   dp: {
      overflow: 'hidden',
      marginTop: 5,
      width: 120,
      height: 120,
      borderRadius: 10,
      borderWidth:1
   },
   // Input: {
   //    marginHorizontal: 20,
   //    marginTop: 10,
   //    borderWidth: 1,
   //    padding: 10,
   //    borderRadius: 10
   // },
   input: {
      marginBottom: 10,
      color: '#969696',
      fontSize: 17,
      fontWeight: '600',
      borderBottomWidth: 1
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