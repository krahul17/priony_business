import React, { useState } from 'react'
import { StyleSheet, ScrollView, StatusBar, View, Text, TextInput, ImageBackground, TouchableOpacity, Image } from "react-native";
import CustomDropDown from '../CustomDropDown/CustomDropDown';
import { Picker } from '@react-native-picker/picker';
import CustomUpload from '../CustomUpload';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import ImagePicker from 'react-native-image-crop-picker';
import BaseUrl from '../BaseURL/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CustomTodatDeal({ route }) {


    console.disableYellowBox = true

    const [select_catgry, setSelect_catgry] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [UploadAdsPhoto, setUploadAdsPhoto] = useState(
        'https://png.pngtree.com/element_our/20190601/ourmid/pngtree-file-upload-icon-image_1344393.jpg'
    );
    const [showoption, setShowoption] = useState(false)

    const [accessToken, setAccess] = useState(null);
    console.log('CHECJ',select_catgry,UploadAdsPhoto)
 
    const openGalleryFront = () => {
        ImagePicker
            .openPicker({width: 100, height: 100})
            .then(UploadAdsPhoto => {
                console.log(UploadAdsPhoto);
                setShowoption(false)
                setUploadAdsPhoto(UploadAdsPhoto.path)
            });
    }



    const SaveData = async()=> {
        // if (!( CompanyLogo && CompanyName && CompanyAddress && CompanyDistrictName && CompanyStateName && CompanyEmailID && CompanyWebsiteLink && CompanyLoginPhoneNo)) {
        //    alert('Enter all felid')
        //    return
        // }
  
  
        let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNzg4Njk5LCJqdGkiOiI0NWE2ZTlmNjUzMmE0YzljOWI5YzE2ODQ2NWQ1NTYzMiIsInVzZXJfaWQiOjJ9.X8ljmYCCzEnJPRs-QsYrmV7l3GDdylMlA7Ukj95mQn0"
        setAccess(accessToken)


  
     //    let accessToken = await AsyncStorage.getItem('accessToken');
     //  setAccess(accessToken)
  
        let formData = new FormData();
        let filename = UploadAdsPhoto.split('/').pop();
        console.log("filename = " + filename);
        let match = /\.(\w+)$/.exec(filename);
        console.log("match = " + match);
        let type = match ? `image/${match[1]}` : `image`;
        console.log("type = " + type);
        formData.append('Catagery', select_catgry)
        formData.append('DealTitle', title)
        formData.append('DealAddDiscription', desc)
        formData.append('UploadAdsPhoto', { uri: UploadAdsPhoto, name: filename, type })
        formData.append("is_active", true)
        formData.append("is_user", true)
        
  
  
  
  
        fetch(BaseUrl + '/douryou-seller-api/seller-todays-deals/', {
           method: 'POST',
           headers: {
              "Accept": "application/json",
              "Content-Type": "multipart/form-data",
              'Authorization': 'Bearer ' + accessToken,
           },
           body: formData
        }).then((result) => {
           result.json().then((response) => {
              console.log(response, "Response");
              alert("DATA SAVE")
           }).catch((error) => {
            alert("something went wrong")
            //   console.log(error);
           });
        })
     }


    return (
        <>

            <StatusBar backgroundColor="#0006C1" barStyle='light-content' />


            <ScrollView style={styles.container}>
                <View>
                    {/* <View>
                        <Image source={require('../../screen/HomeScreen/assets/logo.png')} style={styles.logo} />
                    </View> */}


                    <View style={styles.Name1}>
                        <View style={styles.topmain}>
                            <View style={styles.topad}>
                                <Image source={require('../../screen/HomeScreen/assets/today.png')} style={styles.ad} />
                            </View>

                            <View style={styles.maintext}>
                                <Text style={styles.toptext}>Today's Deals</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.borderTitle}>
                        <Picker
                            selectedValue={select_catgry}
                            onValueChange={(itemValue) =>
                                setSelect_catgry(itemValue)}
                            style={styles.pick}>
                            <Picker.Item label="Select Category :" value="disable" style={{ color: "#000", }} />
                            <Picker.Item label="IELTS" value="IELTS" style={{ color: "#000", }} />
                            <Picker.Item label="Study Visa" value="Study Visa" style={{ color: "#000", }} />
                            <Picker.Item label="Passport" value="Passport" style={{ color: "#000", }} />
                            <Picker.Item label="Education Loan" value="Education Loan" style={{ color: "#000", }} />
                            <Picker.Item label="Air Ticket" value="Air Ticket" style={{ color: "#000", }} />
                            <Picker.Item label="Travel Insurance" value="Travel Insurance" style={{ color: "#000", }} />
                            <Picker.Item label="Money Exchange" value="Money Exchange" style={{ color: "#000", }} />
                            <Picker.Item label="Transportation" value="Transportation" style={{ color: "#000", }} />
                            <Picker.Item label="Luggages Adjustment" value="Luggages Adjustment" style={{ color: "#000", }} />
                            <Picker.Item label="Accommodation at Abroad" value="Accommodation at Abroad" style={{ color: "#000", }} />
                            <Picker.Item label="Jobs at Abroad" value="Jobs at Abroad" style={{ color: "#000", }} />
                            <Picker.Item label="Tour Travel" value="Tour Travel" style={{ color: "#000", }} />
                            <Picker.Item label="Work Permit" value="Work Permit" style={{ color: "#000", }} />
                            <Picker.Item label="Permanent Residence" value="Permanent Residence" style={{ color: "#000", }} />
                            <Picker.Item label="Tourism business Visa" value="Tourism  business Visa" style={{ color: "#000", }} />
                            <Picker.Item label="Events" value="Events" style={{ color: "#000", }} />
                            <Picker.Item label="Job Requirements" value="Job Requirements" style={{ color: "#000", }} />
                            <Picker.Item label="International Courier" value="International Courier" style={{ color: "#000", }} />
                            <Picker.Item label="Legal Advisor" value="Legal Advisor" style={{ color: "#000", }} />
                            <Picker.Item label="Online IELTS Classes" value="Online IELTS Classes" style={{ color: "#000", }} />
                            <Picker.Item label="Franchise" value="Franchise" style={{ color: "#000", }} />
                            <Picker.Item label="Check your Score" value="Check your Score" style={{ color: "#000", }} />
                        </Picker>
                    </View>

                    <CustomTextInput label={'Add Title'}  value={title} setValue={setTitle} />
                    {/* <CustomTextInput label={'Post Date & Time'} /> */}
                    <CustomTextInput label={'Add Discription'}  value={desc} setValue={setDesc} />





                    <View style={styles.uploadtype}>
                        {/* <CustomUpload /> */}

                        <View>
                    <TouchableOpacity  onPress={() => openGalleryFront()}>
                        {
                            UploadAdsPhoto && <ImageBackground  source={{ uri: UploadAdsPhoto}}   style={styles.dp}/>
                        }
                    </TouchableOpacity>
                </View>
                    </View>

                    <View >
                        <TouchableOpacity onPress={SaveData} style={styles.Btn} >
                            <Text style={styles.btn}> Submit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
        // marginTop: StatusBar.currentHeight,
    },
    logo: {
        marginTop: 10,
        height: 70,
        width: 130
    },
    dp: {
        //    borderRadius: 15,
            // marginTop: 23,
            width: 350,
            height: 350,
            alignSelf: 'center',
            overflow: "hidden"
        },
    Name1: {
        height: 55,
        width: "97%",
        borderWidth: 3,
        marginTop: 10,
        marginHorizontal: 7,
        borderRadius: 10,
        borderColor: '#000000',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    topmain: {
        flexDirection: "row",
    },
    ad: {
        height: 38,
        width: 36,
    },
    maintext: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20,
        // marginRight:25,
    },
    toptext: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "600",
        color: "#000"
    },
    mainText: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '500',
        color: '#000',
        marginVertical: 10
    },
    border: {
        borderWidth: 1,
        marginHorizontal: 10
    },
    submitbtn: {
        marginVertical: 10,
        marginHorizontal: 10,
        height: 50,
        width: "95%",
        backgroundColor: "#0006C1",
        marginBottom: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submittext: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
    },
    drop: {
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 10
    },
    headerText: {
        fontSize: 15,
        marginHorizontal: 10,
        fontWeight: '600',
        color: "#0006C1",
        marginVertical: 5
    },
    uploadtype: {
        height: 370,
        width: "88%",
        borderWidth: 1,
        // marginHorizontal: 10,
        borderColor: "#000",
        marginTop: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    borderTitle: {
        borderWidth: 1,
        width: '84%',
        alignSelf: 'center',
        borderRadius: 8,
        marginVertical: 10
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

});

