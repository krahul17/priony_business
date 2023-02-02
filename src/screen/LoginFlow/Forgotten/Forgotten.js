import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, StatusBar, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react';
import RnOtpTimer from 'rn-otp-timer';
import { AuthContext } from '../../../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';
import Loader from '../../../Component/Loader/Loader';
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput';
import PhoneInput from 'react-native-phone-number-input';

const Forgotten = ({ navigation, route }) => {

    const [phone_number, setPhone_number] = useState("");
    const [email, setEmail] = useState("");
    const [modalVisible, setModalVisible] = useState(false);


    console.log(phone_number,'heeeloll')
    console.log(email,'111111heeeloll')


       const verCode = async () => {

          if (!(phone_number && email)) {
             alert('Enter all felid')
             return
          }

          try {

             let  data =  { phone_number, email }

                    // console.log( 'check', data)

                    setModalVisible(true)
                   // console.log()

             fetch(BaseUrl +'/douryou-seller-api/seller-forget-password-detail-data/', {
                   method: 'POST',
                   headers: {
                      "Accept": "application/json",
                      "Content-Type": "application/json",

                   },
                   body: JSON.stringify(data)
             }).then((data) => {
                data.json().then((response) => {
                   console.log(response, "Response check")
                   if (response.status == true) {
                      setModalVisible(false)
                     console.log('if is working')

                     navigation.navigate("ForgottenOtp",{phone_number});
                     console.log("going for Otp wait");
                     
                
                   }
                   else if (response.status == false) {
                      setModalVisible(false)
                     

                    alert('Please Enter Valid Credential')
                      console.log(response,'else is working ')
                      console.log("else  is working");

                   }
                }).catch((err)=>{
                   setModalVisible(false)
                   alert(err)
                   console.log(err,"catch1  is working");
                })
                console.log(data.status)

             })
             // setNumbId(result);
          } catch (error) {
             // alert('code', code)
             alert(error);
             console.log(err,"catch2  is working");
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
                            <Text style={styles.wel}>Forgot Password</Text>
                        </View>

                    </View>
                    <View style={{  alignSelf: 'center', marginTop: 10, marginBottom: 35 }}>
                        <View>
                            <Text style={{ color: '#000', textAlign:'center',fontSize: 16, fontWeight: '500' }}>
                                Enter The Email Address Or Login Mobile Number,Registered On Your Account
                            </Text>
                        </View>
                    </View>

                    <View style={styles.PhoneInput}>
                        <PhoneInput
                            defaultValue={phone_number}
                            defaultCode='IN'
                            containerStyle={{
                                height: 60,
                                width:'83%',
                                borderRadius: 8,
                                borderWidth: 1

                            }}
                            textContainerStyle={{
                                paddingTop: 0,
                                fontWeight: '600',
                                height: 58,
                                paddingBottom: -10,
                                borderRadius: 10
                            }}
                            onChangeFormattedText={(text) => {
                                setPhone_number(text)
                            }}
                        />

                    </View>

                    <CustomTextInput label={'Enter Email Adreess'} value={email} setValue={setEmail} />




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

export default Forgotten

const styles = StyleSheet.create({
    logo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        marginTop: '25%',
        resizeMode: 'contain'
    },
    PhoneInput: {
        marginTop: '5%',
        // marginHorizontal: 35,
        alignSelf: 'center',
        marginLeft:-2,
        marginBottom:8
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