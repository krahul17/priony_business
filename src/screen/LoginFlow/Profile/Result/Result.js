import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, ImageBackground, StatusBar, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../../Component/BaseURL/BaseUrl';
import Loader from '../../../../Component/Loader/Loader';


const Result = ({ navigation }) => {

   const [CompanyPreviousResultsPic1, setCompanyPreviousResultsPic1] = useState();
   const [CompanyPreviousResultsPic2, setCompanyPreviousResultsPic2] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CompanyPreviousResultsPic3, setCompanyPreviousResultsPic3] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CompanyPreviousResultsPic4, setCompanyPreviousResultsPic4] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CompanyPreviousResultsPic5, setCompanyPreviousResultsPic5] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CompanyPreviousResultsPic6, setCompanyPreviousResultsPic6] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CompanyPreviousResultsPic7, setCompanyPreviousResultsPic7] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CompanyPreviousResultsPic8, setCompanyPreviousResultsPic8] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CompanyPreviousResultsPic9, setCompanyPreviousResultsPic9] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CompanyPreviousResultsPic10, setCompanyPreviousResultsPic10] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CompanyPreviousResultsPic11, setCompanyPreviousResultsPic11] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [CompanyPreviousResultsPic12, setCompanyPreviousResultsPic12] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption, setShowoption] = useState(false)
   const [accessToken, setAccess] = useState(null);
 
   let CompanyPreviousResultsPic1122 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU'

   const openGalleryFront = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyPreviousResultsPic1 => {
         setShowoption(false)
         setCompanyPreviousResultsPic1(CompanyPreviousResultsPic1.path)
      });
   }
   const openGalleryFront2 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyPreviousResultsPic2 => {
         setShowoption(false)
         setCompanyPreviousResultsPic2(CompanyPreviousResultsPic2.path)
      });
   }
   const openGalleryFront3 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyPreviousResultsPic3 => {
         setShowoption(false)
         setCompanyPreviousResultsPic3(CompanyPreviousResultsPic3.path)
      });
   }
   const openGalleryFront4 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyPreviousResultsPic4 => {
         setShowoption(false)
         setCompanyPreviousResultsPic4(CompanyPreviousResultsPic4.path)
      });
   }
   const openGalleryFront5 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyPreviousResultsPic5 => {
         setShowoption(false)
         setCompanyPreviousResultsPic5(CompanyPreviousResultsPic5.path)
      });
   }
   const openGalleryFront6 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyPreviousResultsPic6 => {
         setShowoption(false)
         setCompanyPreviousResultsPic6(CompanyPreviousResultsPic6.path)
      });
   }
   const openGalleryFront7 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyPreviousResultsPic7 => {
         setShowoption(false)
         setCompanyPreviousResultsPic7(CompanyPreviousResultsPic7.path)
      });
   }
   const openGalleryFront8 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyPreviousResultsPic8 => {
         setShowoption(false)
         setCompanyPreviousResultsPic8(CompanyPreviousResultsPic8.path)
      });
   }
   const openGalleryFront9 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyPreviousResultsPic9 => {
         setShowoption(false)
         setCompanyPreviousResultsPic9(CompanyPreviousResultsPic9.path)
      });
   }
   const openGalleryFront10 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyPreviousResultsPic10 => {
         setShowoption(false)
         setCompanyPreviousResultsPic10(CompanyPreviousResultsPic10.path)
      });
   }
   const openGalleryFront11 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyPreviousResultsPic11 => {
         console.log(CompanyPreviousResultsPic11);
         setShowoption(false)
         setCompanyPreviousResultsPic11(CompanyPreviousResultsPic11.path)
      });
   }
   const openGalleryFront12 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyPreviousResultsPic12 => {
         setShowoption(false)
         setCompanyPreviousResultsPic12(CompanyPreviousResultsPic12.path)
      });
   }

   const [modalVisible, setModalVisible] = useState(false);

   const SaveData = async () => {

      if (!(CompanyPreviousResultsPic1 )) {
         alert('Enter Minimum One Image')
         return
      }


      const accessToken = await AsyncStorage.getItem("accessToken");
      setAccess(accessToken);

      setModalVisible(true)
      
      let formData = new FormData();
      let filename = CompanyPreviousResultsPic1.split('/').pop();
      console.log("filename = " + filename);
      let match = /\.(\w+)$/.exec(filename);
      console.log("match = " + match);
      let type = match ? `image/${match[1]}` : `image`;
      console.log("type = " + type);
      formData.append('CompanyPreviousResultsPic1', { uri: CompanyPreviousResultsPic1, name: filename, type })
      formData.append('CompanyPreviousResultsPic2', { uri: CompanyPreviousResultsPic2, name: filename, type })
      formData.append('CompanyPreviousResultsPic3', { uri: CompanyPreviousResultsPic3, name: filename, type })
      formData.append('CompanyPreviousResultsPic4', { uri: CompanyPreviousResultsPic4, name: filename, type })
      formData.append('CompanyPreviousResultsPic5', { uri: CompanyPreviousResultsPic5, name: filename, type })
      formData.append('CompanyPreviousResultsPic6', { uri: CompanyPreviousResultsPic6, name: filename, type })
      formData.append('CompanyPreviousResultsPic7', { uri: CompanyPreviousResultsPic7, name: filename, type })
      formData.append('CompanyPreviousResultsPic8', { uri: CompanyPreviousResultsPic8, name: filename, type })
      formData.append('CompanyPreviousResultsPic9', { uri: CompanyPreviousResultsPic9, name: filename, type })
      formData.append('CompanyPreviousResultsPic10', { uri: CompanyPreviousResultsPic10, name: filename, type })
      formData.append('CompanyPreviousResultsPic11', { uri: CompanyPreviousResultsPic12, name: filename, type })
      formData.append('CompanyPreviousResultsPic12', { uri: CompanyPreviousResultsPic12, name: filename, type })

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
            setModalVisible(false)
            alert("DATA SAVE")
            navigation.navigate('Review')
            
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
                     <Image source={require('../../../assetsLogo/logo.png')} style={styles.logo} />
                  </View>
                  <View>
                     <Text style={styles.wel}> Let's create your profile</Text>
                  </View>
               </View>

               <View style={{ alignItems: 'flex-end', marginRight: 28 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                     <Text style={styles.skip}>Skip</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.Input}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <View style={{ flexDirection: 'row' }}>
                        <View>
                           <Image source={require('../assets/result.png')} style={styles.camera} />
                        </View>
                        <View>
                           <Text style={{ color: '#000', fontWeight: '600', fontSize: 16, marginTop: 9, marginHorizontal: 10 }}> Upload Your Previous Results</Text>
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
                        {CompanyPreviousResultsPic1 ?
                        <ImageBackground source={{ uri: CompanyPreviousResultsPic1 }} style={styles.dp} />
                         : 
                        <ImageBackground source={{ uri: CompanyPreviousResultsPic1122 }} style={styles.dp} />
                        }
                        </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront2()}>
                        <ImageBackground source={{ uri:CompanyPreviousResultsPic2 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront3()}>
                        <ImageBackground source={{ uri: CompanyPreviousResultsPic3 }} style={styles.dp} />
                     </TouchableOpacity>

                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                     <TouchableOpacity onPress={() => openGalleryFront4()}>
                        <ImageBackground source={{ uri: CompanyPreviousResultsPic4 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront5()}>
                        <ImageBackground source={{ uri: CompanyPreviousResultsPic5 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront6()}>
                        <ImageBackground source={{ uri:CompanyPreviousResultsPic6 }} style={styles.dp} />
                     </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                     <TouchableOpacity onPress={() => openGalleryFront7()}>
                        <ImageBackground source={{ uri:CompanyPreviousResultsPic7 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront8()}>
                        <ImageBackground source={{ uri: CompanyPreviousResultsPic8 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront9()}>
                        <ImageBackground source={{ uri: CompanyPreviousResultsPic9 }} style={styles.dp} />
                     </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>


                     <TouchableOpacity onPress={() => openGalleryFront10()}>
                        <ImageBackground source={{ uri: CompanyPreviousResultsPic10 }} style={styles.dp} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => openGalleryFront11()}>
                        <ImageBackground source={{ uri: CompanyPreviousResultsPic11 }} style={styles.dp} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => openGalleryFront12()}>
                        <ImageBackground source={{ uri: CompanyPreviousResultsPic12 }} style={styles.dp} />
                     </TouchableOpacity>
                  </View>



               </View>


               <TouchableOpacity onPress={SaveData} style={styles.Btn}>
                  {/* <TouchableOpacity onPress={() => navigation.navigate('Review')} style={styles.Btn}> */}
                  <View >
                     <Text style={styles.btn}> Submit </Text>
                  </View>
               </TouchableOpacity>
               <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />

            </View>
         </ScrollView>
      </>
   )
}

export default Result

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
   dp: {
      overflow: 'hidden',
      marginTop: 5,
      width: 120,
      height: 120,
      borderRadius: 10,
      borderWidth:1
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