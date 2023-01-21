import { StyleSheet, SafeAreaView, Text, View, StatusBar, Linking,Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState,useEffect,useContext } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../../../../context/AuthContext';
import BaseUrl from '../../../../Component/BaseURL/BaseUrl';
import Loader from '../../../../Component/Loader/Loader';




const PaymentGateWay = ({navigation}) => {

  
    const [CompanyLogo, setCompanyLogo] = useState("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWR8UleGP6xe2whajk4Tq7rb08APejJOkf042F3Eo_TbVBg8Sj");
    const [showoption, setShowoption] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [accessToken, setAccess] = useState(null);


    const {login,signup} =useContext(AuthContext)

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

    //  useEffect(() => {
    //     const firstLoad = async () => {
    //         try {
    //             const token = await AsyncStorage.getItem("accessToken");
    //             // setAccessToken(token);
    //             // login()
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     firstLoad();
    // }, []);
 
    const SaveData = async () => {

      
        const accessToken = await AsyncStorage.getItem("accessToken");
        setAccess(accessToken);
        console.log('jdbfd ',accessToken)
  
        setModalVisible(true)

        const uploadstr='Upload ScrrenShort'
  
        let formData = new FormData();
        let filename = CompanyLogo.split('/').pop();
        console.log("filename = " + filename);
        let match = /\.(\w+)$/.exec(filename);
        console.log("match = " + match);
        let type = match ? `image/${match[1]}` : `image`;
        console.log("type = " + type);

        formData.append('screenshort', { uri: CompanyLogo, name: filename, type })
        formData.append('Upload ScrrenShort', uploadstr)
  
        fetch(BaseUrl +'/douryou-seller-api/seller-send-screenshort-to-admin-for-profile-verification/', {
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
              login()
              alert('Wait for Admin Confirmation')
               
           }).catch((error) => {
              setModalVisible(false)
              alert(error)
              console.log(error);
           });
        })
     }
     
     const upiUrl ='upi://pay?pa=sadevraprince@oksbi&pn=sukhpreetsingh&tn=Note&am=7000&cu=INR'
    const upiOpener = () => {
        Linking.openURL(upiUrl)
    }

    return (
        <>
            <StatusBar
                backgroundColor="#0006C1"
                barStyle={'light-content'} />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                    <View>
                        <View>
                            <Image source={require('../../../assetsLogo/logo.png')} style={styles.img} />
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('PaymentConfirm')}>
                                <Text style={styles.text}> Payment Gateway</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View>
                            <Text style={styles.textonly}> Your Plan</Text>

                            <View style={styles.planchoose}>
                                <Text style={styles.textplan}> You Choose </Text>
                                <Text style={styles.textplan2}> : Professional</Text>
                            </View>

                            <View style={styles.planchoose}>
                                <Text style={styles.textplan}> Plan Amount </Text>
                                <Text style={styles.textplan2}>: 7000</Text>
                            </View>

                        </View> */}

                        <View style={styles.nameBeneficier}>
                            <Text style={styles.textplan}> Sukhpreet Singh</Text>
                            <Text style={styles.textplan}> State Bank of India</Text>
                            <Text style={styles.textplan}> Sector 46C, Chandigarh</Text>
                            <Text style={styles.textplan}> 65007574500</Text>
                            <Text style={styles.textplan}>IFSC CODE - SBIN0050825 </Text>
                            <Text style={styles.textplan}>-------------OR------------- </Text>
                            <Text style={styles.textplan}>Google Pay No. : 9915327780 </Text>

                        </View>
                        <View>
                            <Image source={require('../assets/qr.jpeg')} style={styles.qrimg} />
                        </View>
                   
                        <TouchableOpacity onPress={()=>upiOpener()} style={styles.Btn}>
                            <Text style={styles.btn}>Payment </Text>
                        </TouchableOpacity>


                        <View>
                            <TouchableOpacity onPress={() => openGalleryFront()} style={styles.image}>
                                <ImageBackground source={{ uri: CompanyLogo }} style={styles.dp} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={SaveData} style={styles.Btn2}>
                            <Text style={styles.btn2}>Upload ScreenShot </Text>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default PaymentGateWay

const styles = StyleSheet.create({
    img: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        marginVertical: '2%',
        resizeMode: 'contain'
    },
    text: {
        color: '#000',
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '3%',

    },
    textonly: {
        padding: 20,
        color: '#000',
        fontSize: 15,
        fontWeight: '600',
    },
    planchoose: {
        flexDirection: 'row',
        paddingLeft: 20,

    },
    textplan: {
        color: '#000',
        fontSize: 15,
        fontWeight: '600',
        marginTop: '1%',
    },
    textplan2: {
        color: '#000',
        fontSize: 14,
        fontWeight: '500',
        marginTop: '1%',
    },
    nameBeneficier: {
        // flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    qrimg: {
        width: '80%',
        height: 400,
        alignSelf: 'center',
        marginVertical: '2%'

    },
    Btn: {
        alignItems: 'center',
        marginVertical: 10,
    },
    btn: {
        backgroundColor: '#0006C1',
        paddingHorizontal: 80,
        paddingVertical: 10,
        color: '#FFFFFF',
        fontSize: 25,
        borderRadius: 15,
        fontWeight: "600"
    },
    Btn2: {
        alignItems: 'center',
        marginVertical: 50,
        justifyContent: "center",
        alignSelf: 'center',
        
    },
    btn2: {
        backgroundColor: '#0006C1',
        color: '#FFFFFF',
        fontSize: 25,
        height: 55,
        fontWeight: "600",
        borderRadius: 15,
        paddingHorizontal: 25,
     padding:12
    },
    dp: {
        overflow: 'hidden',
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
    image: {
        height: 100,
        alignSelf: 'center',
        marginVertical: 30,
        resizeMode: 'contain',
        borderWidth: 1,
        borderRadius: 10,

    }
})