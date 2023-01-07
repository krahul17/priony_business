import React, { useState } from 'react'
import { StyleSheet, ScrollView, StatusBar, View, Text, ImageBackground ,TextInput, TouchableOpacity, Image } from "react-native";
import CustomDropDown from '../../../Component/CustomDropDown/CustomDropDown';
import { Picker } from '@react-native-picker/picker';
import CustomYear from '../../../Component/CustomYear/CustomYear';
import CustomUpload from '../../../Component/CustomUpload';
import ImagePicker from 'react-native-image-crop-picker';
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SellFranchise({ navigation,route }) {

    const [cname, setCName] = useState('')
    const [address, setAddress] = useState('')
    const [pname, setPName] = useState('')
    const [mobile, setMobile] = useState('')
    const [desigation, setDesigation] = useState('')
    const [stabli, setStabli] = useState('')
    const [employee, setEmployee] = useState('')
    const [service, setService] = useState('')
    const [city, setCity] = useState('')
    const [area, setArea] = useState('')
    const [areareq, setAreareq] = useState('')
    const [investreq, setInvestreq] = useState('')
    const [investreturn, setInvestreturn] = useState('')
    const [shareoffer, setShareoffer] = useState('')

    const [UploadAdsPhoto, setUploadAdsPhoto] = useState
        ('https://png.pngtree.com/element_our/20190601/ourmid/pngtree-file-upload-icon-image_1344393.jpg');
    const [showoption, setShowoption] = useState(false)

    const [accessToken, setAccess] = useState(null);
    // console.log('CHECJ', select_catgry, UploadAdsPhoto)

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
        const accessToken = await AsyncStorage.getItem("accessToken");
        setAccess(accessToken);

        let formData = new FormData();
        let filename = UploadAdsPhoto.split('/').pop();
        console.log("filename = " + filename);
        let match = /\.(\w+)$/.exec(filename);
        console.log("match = " + match);
        let type = match ? `image/${match[1]}` : `image`;
        console.log("type = " + type);

        formData.append('CompanyName', cname)
        formData.append('CompanyAddress', address)
        formData.append('ContactPerson', pname)
        formData.append('MobileNo', mobile)
        formData.append('ContactPersonDesigation', desigation)
        formData.append('YearOfStabilization', stabli)
        formData.append('TotalNumberOfEmployees', employee)
        formData.append('DealIn', service)
        formData.append('FranchiseOfferFor', city)
        formData.append('AreaType', area)
        formData.append('TotalAreaRequired', areareq)
        formData.append('TotalInvestmentRequired', investreq)
        formData.append('EstimatedReturnOfInvestment', investreturn)
        formData.append('TotalShareOfferOnSells', shareoffer)
        formData.append('UploadCompanyVisitingCard', { uri: UploadAdsPhoto, name: filename, type })


        fetch(BaseUrl + '/douryou-seller-api/seller-sell-franchise/', {
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
                navigation.navigate("HomeScreen")
                alert("Successfully Submit")
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
                                <Image source={require('../../HomeScreen/assets/sell.png')} style={styles.ad} />
                            </View>

                            <View style={styles.maintext}>
                                <Text style={styles.toptext}>Franchise Sell</Text>
                            </View>

                        </View>
                    </View>


                    <CustomTextInput label={'Enter Company Name '} value={cname} setValue={setCName} />
                    <CustomTextInput label={'Enter Company Address '} value={address} setValue={setAddress} />
                    <CustomTextInput label={'Enter Contact Person Name '} value={pname} setValue={setPName} />
                    <CustomTextInput label={'Enter Mobile No'} value={mobile} setValue={setMobile} />
                    <CustomTextInput label={'Enter Contact Person’s Desigation'} value={desigation} setValue={setDesigation} />
                    <CustomTextInput label={'Enter  Year of Stabilization'} value={stabli} setValue={setStabli} />
                    <CustomTextInput label={'Enter Total Number of Employees'} value={employee} setValue={setEmployee} />
                    <CustomTextInput label={'Enter Your Services'} value={service} setValue={setService} />
                    <CustomTextInput label={'Enter Franchise offer’s for (City Name)'} value={city} setValue={setCity} />
                    <CustomTextInput label={'Enter Area Type'} value={area} setValue={setArea} />
                    <CustomTextInput label={'Enter Total Area Required'} value={areareq} setValue={setAreareq} />
                    <CustomTextInput label={'Enter Total Investment Required'} value={investreq} setValue={setInvestreq} />
                    <CustomTextInput label={'Enter Estimated Return of Investment'} value={investreturn} setValue={setInvestreturn} />
                    <CustomTextInput label={'Enter Total Share Offer on Sells'} value={shareoffer} setValue={setShareoffer} />

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
                        <TouchableOpacity  onPress={SaveData} style={styles.Btn} >
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
        // marginTop: StatusBar.currentHeight,
        backgroundColor: "#fff"
    },
    logo: {
        marginTop: 10,
        height: 70,
        width: 130
    },
    dp: {
        width: 340,
        height: 340,
        alignSelf: 'center',
        overflow: "hidden",
        
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
        resizeMode:'contain'
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

