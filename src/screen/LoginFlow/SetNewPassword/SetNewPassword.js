import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, StatusBar, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react';
import RnOtpTimer from 'rn-otp-timer';
import { AuthContext } from '../../../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';
import Loader from '../../../Component/Loader/Loader';
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput';


const SetNewPassword = ({ navigation, route }) => {

    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [modalVisible, setModalVisible] = useState(false);


    //    const verCode = async () => {

    //       if (!(otpis)) {
    //          alert('Enter all felid')
    //          return
    //       }

    //       try {

    //          let  data =  { phone_number, otpis }

    //                 console.log( 'check', data)

    //                 setModalVisible(true)
    //                // console.log()

    //          fetch(BaseUrl +'/douryou-seller-api/seller-verify-otp/', {
    //                method: 'POST',
    //                headers: {
    //                   "Accept": "application/json",
    //                   "Content-Type": "application/json",

    //                },
    //                body: JSON.stringify(data)
    //          }).then((data) => {
    //             data.json().then((response) => {
    //                console.log(response, "Response check")
    //                console.log(response.status)
    //                if (response.status == true) {
    //                   setModalVisible(false)
    //                   AsyncStorage.setItem("userInfo", JSON.stringify(response))
    //                   AsyncStorage.setItem("refereshToken", response.token.refresh);
    //                   console.log('refresh token set in system',response.token.refresh)
    //                  AsyncStorage.setItem("accessToken", response.token.access);

    //                 login()
    //                }
    //                else if (response.status == false) {
    //                   setModalVisible(false)
    //                   AsyncStorage.setItem("userInfo", JSON.stringify(response))
    //                    AsyncStorage.setItem("refereshToken", response.token.refresh);
    //                    console.log(' else if refresh token set in system',response.token.refresh)
    //                   AsyncStorage.setItem("accessToken", response.token.access);

    //                   navigation.navigate("CreateProfie", {
    //                      phone_number
    //                   });
    //                   // console.log(response.token.access,'user token set ')
    //                   console.log("else  is working");

    //                }
    //             }).catch((err)=>{
    //                setModalVisible(false)
    //                alert('invalid Otp')
    //             })
    //             console.log(data.status)

    //          })
    //          // setNumbId(result);
    //       } catch (error) {
    //          // alert('code', code)
    //          alert(error);
    //       }
    //    }


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
                            <Text style={styles.wel}>Set Your New Password</Text>
                        </View>

                    </View>

                    <View style={{marginTop:15}}>

                        <CustomTextInput label={'Password'} value={password} setValue={setPassword} />

                        <CustomTextInput label={'Confirm Password'} value={cpassword} setValue={setCpassword} />


                    </View>





                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        //    onPress={verCode}
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

export default SetNewPassword

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
})