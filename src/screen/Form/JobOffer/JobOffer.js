import React, { useState } from 'react'
import { StyleSheet, ScrollView, StatusBar, View, Text, TextInput, ImageBackground,TouchableOpacity, Image } from "react-native";
import CustomDropDown from '../../../Component/CustomDropDown/CustomDropDown';
import { Picker } from '@react-native-picker/picker';
import CustomGender from '../../../Component/CustomGender/CustomGender';
import CustomUpload from '../../../Component/CustomUpload';
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput';
import ImagePicker from 'react-native-image-crop-picker';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';

export default function JobOffer() {

    const [title, setTitle] = useState('')
    const [employee, setEmployee] = useState('')
    const [gender, setGender] = useState('')
    const [sallary, setSallary] = useState('')
    const [lastdate, setLastdate] = useState('')
    const [amount, setAmount] = useState('')
    const [amount2, setAmount2] = useState('')
    const [position, setPosition] = useState('')
    const [qualification, setQualification] = useState('')
    const [experience, setExperience] = useState('')
    const [desc, setDesc] = useState('')
    const [location, setLocation] = useState('')
    const [UploadAdsPhoto, setUploadAdsPhoto] = useState
        ('https://png.pngtree.com/element_our/20190601/ourmid/pngtree-file-upload-icon-image_1344393.jpg');
    const [showoption, setShowoption] = useState(false)

    const [accessToken, setAccess] = useState(null);
    console.log('CHECJ', title, )

    const openGalleryFront = () => {
        ImagePicker
            .openPicker({ width: 100, height: 100 })
            .then(UploadAdsPhoto => {
                console.log(UploadAdsPhoto);
                setShowoption(false)
                setUploadAdsPhoto(UploadAdsPhoto.path)
            });
    }

    const SaveData = async () => {

        // if (!( select_catgry && title && desc && UploadAdsPhoto )) {
        //    alert('Enter all felid')
        //    return
        // }


        let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNTI3ODI1LCJqdGkiOiJmNGIzOWE2MDE4ZWU0M2M3Yjc0NmU0N2ZmOGJiOTBiZCIsInVzZXJfaWQiOjEwfQ.0m9C02ZpNM5ibIUPbwQMRiseSf9evKxj07F00jiBzGs"
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

        formData.append('title', title)
        formData.append('empreq', employee)
        formData.append('whoapply', gender)
        formData.append('sellryperiod', sallary)
        formData.append('applydate', lastdate)
        formData.append('sellryfrom', amount)
        formData.append('selleryto', amount2)
        formData.append('postiontype', position)
        formData.append('minquli', qualification)
        formData.append('minexp', experience)
        formData.append('jobdesc', desc)
        formData.append('loction', location)
        formData.append('BannerPhoto', { uri: UploadAdsPhoto, name: filename, type })


        fetch(BaseUrl + '/douryou-seller-api/seller-job-offer/', {
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
                alert("DATA SAVE")
            }).catch((error) => {
                console.log(error);
            });
        })
    }

    return (
        <>

            <StatusBar backgroundColor="#0006C1" barStyle='light-content' />


            <ScrollView style={styles.container}>
                <View>

                    <View style={styles.Name1}>
                        <View style={styles.topmain}>
                            <View style={styles.topad}>
                                <Image source={require('../../HomeScreen/assets/job.png')} style={styles.ad} />
                            </View>

                            <View style={styles.maintext}>
                                <Text style={styles.toptext}>Offer Jobs</Text>
                            </View>

                        </View>
                    </View>


                    <CustomTextInput label={'Enter Job Title '} value={title} setValue={setTitle} />
                    <CustomTextInput label={'Enter Total Employee Required '} value={employee} setValue={setEmployee} />
                    <CustomTextInput label={'Who Can Apply (Male / Female / Both)'} value={gender} setValue={setGender} />

                    <CustomTextInput label={'Enter Salary Period '} value={sallary} setValue={setSallary} />
                    <CustomTextInput label={'Enter Last Date for Apply'} value={lastdate} setValue={setLastdate} />
                    <CustomTextInput label={'Enter Salary From '} value={amount} setValue={setAmount} />
                    <CustomTextInput label={'Enter Salary To '} value={amount2} setValue={setAmount2} />
                    <CustomTextInput label={'Enter Position Type'} value={position} setValue={setPosition} />
                    <CustomTextInput label={'Enter Minimum Qualification Required'} value={qualification} setValue={setQualification} />
                    <CustomTextInput label={'Enter Minimum Experience'} value={experience} setValue={setExperience} />
                    <CustomTextInput label={'Enter Describe About This Job'} value={desc} setValue={setDesc} />
                    <CustomTextInput label={'Enter Location For Job'} value={location} setValue={setLocation} />



                    <View style={styles.uploadtype}>

                        <View>
                            <TouchableOpacity onPress={() => openGalleryFront()}>
                                {
                                    UploadAdsPhoto && <ImageBackground source={{ uri: UploadAdsPhoto }} style={styles.dp} />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View >
                        <TouchableOpacity onPress={SaveData} style={styles.Btn} >
                            <Text style={styles.btn}>Submit</Text>
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
        backgroundColor: '#fff'
    },
    logo: {
        marginTop: 10,
        height: 70,
        width: 130
    },
    dp: {
        width: 350,
        height: 350,
        alignSelf: 'center',
        overflow: "hidden"
    },
    Name1: {
        height: 55,
        width: "92%",
        borderWidth: 3,
        marginTop: 10,
        // marginHorizontal: 7,
        borderRadius: 10,
        borderColor: '#000000',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center'
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

