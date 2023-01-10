import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, ImageBackground, StatusBar, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../../Component/BaseURL/BaseUrl';
import Loader from '../../../../Component/Loader/Loader';

const UploadeOfficePic = ({ navigation }) => {


const CompanyCertificationPic111122=('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');

   const [CompanyCertificationPic1, setCompanyCertificationPic1] = useState();
   const [showoption, setShowoption] = useState(false)

   const [CompanyCertificationPic2, setCompanyCertificationPic2] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption2, setShowoption2] = useState(false)

   const [CompanyCertificationPic3, setCompanyCertificationPic3] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption3, setShowoption3] = useState(false)

   const [CompanyCertificationPic4, setCompanyCertificationPic4] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption4, setShowoption4] = useState(false)

   const [CompanyCertificationPic5, setCompanyCertificationPic5] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption5, setShowoption5] = useState(false)

   const [CompanyCertificationPic6, setCompanyCertificationPic6] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption6, setShowoption6] = useState(false)

   const [CompanyCertificationPic7, setCompanyCertificationPic7] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption7, setShowoption7] = useState(false)

   const [CompanyCertificationPic8, setCompanyCertificationPic8] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption8, setShowoption8] = useState(false)

   const [CompanyCertificationPic9, setCompanyCertificationPic9] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption9, setShowoption9] = useState(false)

   const [CompanyCertificationPic10, setCompanyCertificationPic10] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption10, setShowoption10] = useState(false)

   const [CompanyCertificationPic11, setCompanyCertificationPic11] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption11, setShowoption11] = useState(false)

   const [CompanyCertificationPic12, setCompanyCertificationPic12] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZAodGW2X9o3mmDgRC1UY07VEKS1_J42601zJiCcSWxskZd2aDOBsemSlM5O0Ch2XTls&usqp=CAU');
   const [showoption12, setShowoption12] = useState(false)
   const [accessToken, setAccess] = useState(null);

   const [modalVisible, setModalVisible] = useState(false);

   const openGalleryFront = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyCertificationPic1 => {
         console.log(CompanyCertificationPic1);
         setShowoption(false)
         setCompanyCertificationPic1(CompanyCertificationPic1.path)
      });
   }
   const openGalleryFront2 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyCertificationPic2 => {
         console.log(CompanyCertificationPic2);
         setShowoption2(false)
         setCompanyCertificationPic2(CompanyCertificationPic2.path)
      });
   }
   const openGalleryFront3 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyCertificationPic3 => {
         console.log(CompanyCertificationPic3);
         setShowoption3(false)
         setCompanyCertificationPic3(CompanyCertificationPic3.path)
      });
   }
   const openGalleryFront4 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyCertificationPic4 => {
         setShowoption4(false)
         setCompanyCertificationPic4(CompanyCertificationPic4.path)
      });
   }
   const openGalleryFront5 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyCertificationPic5 => {
         setShowoption5(false)
         setCompanyCertificationPic5(CompanyCertificationPic5.path)
      });
   }
   const openGalleryFront6 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyCertificationPic6 => {
         setShowoption6(false)
         setCompanyCertificationPic6(CompanyCertificationPic6.path)
      });
   }
   const openGalleryFront7 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyCertificationPic7 => {
         setShowoption7(false)
         setCompanyCertificationPic7(CompanyCertificationPic7.path)
      });
   }
   const openGalleryFront8 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyCertificationPic8 => {
         setShowoption8(false)
         setCompanyCertificationPic8(CompanyCertificationPic8.path)
      });
   }
   const openGalleryFront9 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyCertificationPic9 => {
         setShowoption9(false)
         setCompanyCertificationPic9(CompanyCertificationPic9.path)
      });
   }
   const openGalleryFront10 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyCertificationPic10 => {
         setShowoption10(false)
         setCompanyCertificationPic10(CompanyCertificationPic10.path)
      });
   }
   const openGalleryFront11 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyCertificationPic11 => {
         setShowoption11(false)
         setCompanyCertificationPic11(CompanyCertificationPic11.path)
      });
   }
   const openGalleryFront12 = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(CompanyCertificationPic12 => {
         console.log(CompanyCertificationPic12);
         setShowoption12(false)
         setCompanyCertificationPic12(CompanyCertificationPic12.path)
      });
   }

   const SaveData = async () => {

      if (!(CompanyCertificationPic1 )) {
         alert('Enter Minimum One Image')
         return
      }

      const accessToken = await AsyncStorage.getItem("accessToken");
      setAccess(accessToken);
     
      setModalVisible(true)
      
      let formData = new FormData();
      let filename = CompanyCertificationPic1.split('/').pop();
      console.log("filename = " + filename);
      let match = /\.(\w+)$/.exec(filename);
      console.log("match = " + match);
      let type = match ? `image/${match[1]}` : `image`;
      console.log("type = " + type);
      formData.append('CompanyCertificationPic1', { uri: CompanyCertificationPic1, name: filename, type })
      formData.append('CompanyCertificationPic2', { uri: CompanyCertificationPic2, name: filename, type })
      formData.append('CompanyCertificationPic3', { uri: CompanyCertificationPic3, name: filename, type })
      formData.append('CompanyCertificationPic4', { uri: CompanyCertificationPic4, name: filename, type })
      formData.append('CompanyCertificationPic5', { uri: CompanyCertificationPic5, name: filename, type })
      formData.append('CompanyCertificationPic6', { uri: CompanyCertificationPic6, name: filename, type })
      formData.append('CompanyCertificationPic7', { uri: CompanyCertificationPic7, name: filename, type })
      formData.append('CompanyCertificationPic8', { uri: CompanyCertificationPic8, name: filename, type })
      formData.append('CompanyCertificationPic9', { uri: CompanyCertificationPic9, name: filename, type })
      formData.append('CompanyCertificationPic10', { uri: CompanyCertificationPic10, name: filename, type })
      formData.append('CompanyCertificationPic11', { uri: CompanyCertificationPic11, name: filename, type })
      formData.append('CompanyCertificationPic12', { uri: CompanyCertificationPic12, name: filename, type })

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
            navigation.navigate('Result')
            
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
                  <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                     <Text style={styles.skip}>Skip</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.Input}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <View style={{ flexDirection: 'row' }}>
                        <View>
                           <Image source={require('../assets/certificate.png')} style={styles.camera} />
                        </View>
                        <View>
                           <Text style={{ color: '#000', fontWeight: '600', fontSize: 16, marginTop: 3, marginHorizontal: 10 }}> Upload Your Office pic</Text>
                        </View>
                     </View>
                    
                  </View>
               </View>

               <View style={styles.mainBorder}>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                     <TouchableOpacity onPress={() => openGalleryFront()}>
                        {CompanyCertificationPic1 ?
                        <ImageBackground source={{ uri: CompanyCertificationPic1 }} style={styles.dp} />
                        :
                        <ImageBackground source={{ uri: CompanyCertificationPic111122 }} style={styles.dp} />
                        }
                     </TouchableOpacity>
                 
                     <TouchableOpacity onPress={() => openGalleryFront2()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic2 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront3()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic3 }} style={styles.dp} />
                     </TouchableOpacity>

                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                     <TouchableOpacity onPress={() => openGalleryFront4()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic4 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront5()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic5 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront6()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic6 }} style={styles.dp} />
                     </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                     <TouchableOpacity onPress={() => openGalleryFront7()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic7 }} style={styles.dp} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => openGalleryFront8()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic8 }} style={styles.dp} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => openGalleryFront9()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic9 }} style={styles.dp} />
                     </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>


                     <TouchableOpacity onPress={() => openGalleryFront10()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic10 }} style={styles.dp} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => openGalleryFront11()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic11 }} style={styles.dp} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => openGalleryFront12()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic12 }} style={styles.dp} />
                     </TouchableOpacity>
                  </View>



               </View>


               {/* <TouchableOpacity onPress={() => navigation.navigate('Result')} style={styles.Btn}> */}
               <TouchableOpacity onPress={SaveData} style={styles.Btn}>
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

export default UploadeOfficePic

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
      // borderWidth: 1,
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