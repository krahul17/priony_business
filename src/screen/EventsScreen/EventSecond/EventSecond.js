import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Label, StatusBar, FlatList, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';
import CustomText from '../../../Component/CustomText/CustomText';
import EventsScreen from '../EventsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EventSecond = ({ navigation, route }) => {

     

    const { value } = route.params
    const item=value;
    console.log(item.id,"jdhfuj item event")
    console.log('mera event jdfjdfbd',item.EventCatagory)

    const [contactPerson, setContactPerson] = useState('')
    const [desigation, setDesignation] = useState('')
    const [number, setNumber] = useState('')
    const [quintity, setQuintity] = useState('')
    const [accessToken2, setAccess] = useState(null);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxODU3ODkyLCJqdGkiOiI3MTIxNmUwMTY3NzE0NGZkYjU2ZWQ4MjViOGMwZDE2YSIsInVzZXJfaWQiOjJ9.ll2CM8AbCT5p1IBUSmnB0n5veDgI1lmbJLTqHGSGEPQ"

    console.log(data, 'data is comiong')

    useEffect(() => {
        fetch(BaseUrl + '/douryou-seller-api/seller-registration/', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + accessToken,
            },
        }).then((response) => response.json())
            .then((json) => setData(json.Events))
            .catch((error) =>
                // alert(error))
                console.error(error))
            .finally(() => setLoading(false));
    }, []);
    const SaveData = async () => {

        // if (!( select_catgry && title && desc && UploadAdsPhoto )) {
        //    alert('Enter all felid')
        //    return
        // }


        let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxODU3ODkyLCJqdGkiOiI3MTIxNmUwMTY3NzE0NGZkYjU2ZWQ4MjViOGMwZDE2YSIsInVzZXJfaWQiOjJ9.ll2CM8AbCT5p1IBUSmnB0n5veDgI1lmbJLTqHGSGEPQ"
        setAccess(accessToken)
        //    let accessToken = await AsyncStorage.getItem('accessToken');
        //  setAccess(accessToken)

        let formData = new FormData();
        formData.append('ContactPerson', contactPerson)
        formData.append('Designation', desigation)
        formData.append('ContactNumber', number)
        formData.append('BookedQuentity', quintity)
   
      

        fetch(BaseUrl + '/douryou-seller-api/seller-book-this-event/'+ item.id +"/", {
            method: 'Post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "multipart/form-data",
                'Authorization': 'Bearer ' 
                // + accessToken2,
            },
            body: formData
        }).then((result) => {
            result.json().then((response) => {
                console.log(response, "Response");
                alert("DATA SAVE")
                navigation.navigate('EventPayment',{
                    plan:item.EventCatagory,})
            }).catch((error) => {
                console.log(error);
            });
        })
    }

    return (
        <>
            <StatusBar backgroundColor="#0006C1" barStyle='light-content' />
            <SafeAreaView style={styles.container}>
                <ScrollView >

                    <View>
                        <View style={styles.Name1}>
                            <View style={styles.topmain}>
                                <View style={styles.topad}>
                                    <Image source={require('../../EventsScreen/assets/book.png')} style={styles.ad} />
                                </View>

                                <View style={styles.maintext}>
                                    <Text style={styles.toptext}>Book Event</Text>
                                </View>

                            </View>
                        </View>

                        <View style={styles.mainList}>

                            <TouchableOpacity>
                                <View style={styles.fav}>
                                    <Image source={item.fav} style={{ height: 50, width: 50 }} />
                                </View>
                            </TouchableOpacity>


                            <View style={{ flexDirection: 'row' }}>

                                <View style={styles.Pic}>
                                    <Image source={{ uri: BaseUrl + item.EventImage }} style={styles.pic} />
                                </View>

                                <View>
                                    <View style={{ marginTop: 10 }}>
                                    <Text style={{ width:"50%",fontSize: 22, fontWeight: '600', color: '#000', }}>{item.EventAddress}</Text>
                                    </View>
                                   
                                </View>


                            </View>

                            <View style={{ marginHorizontal: 10 }}>
                                <View style={styles.mainadress}>
                                    <View>
                                        <Text style={styles.label} >Event Date: </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.name}>
                                            {item.EventDate}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.mainadress}>
                                    {/* <View>
                                        <Text style={styles.label} >Event adress: </Text>
                                    </View> */}
                                    {/* <View>
                                        <Text style={styles.name23}>
                                            {item.EventAddress}
                                        </Text>
                                       

                                    </View> */}
                                </View>
                            </View>

                            <View style={styles.adress}>
                                <CustomText Name={data.CompanyName} />
                                <CustomText Name={data.CompanyAddress} />
                                <View>
                                <TextInput style={styles.editable} placeholder={data.ContactPersonName} value={contactPerson} onChangeText={setContactPerson}></TextInput>
                                </View>
                                <View>
                                <TextInput style={styles.editable} placeholder={data.ContactPersonDesigation} value={desigation} onChangeText={setDesignation}></TextInput>
                                </View>
                                <View>
                                <TextInput style={styles.editable} placeholder={data.ContactPersonNumber} value={number} onChangeText={setNumber}></TextInput>
                                </View>
                                {/* <CustomTextInput label={data.CompanyName} value={contactPerson} setValue={setContactPerson} /> */}
                                {/* <CustomTextInput label={'Enter Desigation'} value={desigation} setValue={setDesignation}/> */}
                                {/* <CustomTextInput label={'Enter Contact Number'} value={number} setValue={setNumber}/> */}

                            </View>

                            <View style={{ marginHorizontal: 10 }}>
                                <View style={styles.mainadress}>
                                    <View>
                                        <Text style={styles.label} >Size of Stall </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.name2}>
                                            {item.FirstStall}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.mainadress}>
                                    <View>
                                        <Text style={styles.label} >Rent of Stall </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.name2}>
                                            {item.FirstPrice}
                                        </Text>

                                    </View>
                                </View>
                                <View style={styles.mainadress}>
                                    <View>
                                        <Text style={styles.label} >   No.of Stall </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.name2}>
                                           {item.FirstQuentity}
                                        </Text>

                                    </View>
                                </View>
                                <View style={styles.mainadress}>
                                    <View>
                                        <Text style={styles.label} >         Quintity </Text>
                                    </View>
                                    <View>
                                        <TextInput style={styles.name2} placeholder={'please Enter quintity'} value={quintity} onChangeText={setQuintity}>
                                            
                                        </TextInput>

                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity onPress={SaveData}
                            // onPress={() => navigation.navigate('EventPayment')}
                            >
                                <View style={styles.Btn}>
                                    <Text style={styles.btn} >Book My Stall</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10, marginTop: -45 }}>

                                <TouchableOpacity>
                                    <View style={{ marginRight: 20, margin: 2 }}>
                                        <Image source={require('../assets/chat1.png')} style={{ height: 30, width: 32 }} />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={{ marginRight: 10, margin: 2 }}>
                                        <Image source={require('../assets/share.png')} style={{ height: 30, width: 27 }} />
                                    </View>
                                </TouchableOpacity>

                            </View>


                        </View>


                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default EventSecond;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    mainlogo: {
        alignItems: 'center',
        justifyContent: "center",
        marginVertical: 40,
    },
    logo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',

    },
    mainList: {
        height: 'auto',
        width: '97%',
        borderWidth: 3,
        marginHorizontal: 7,
        marginVertical: 20,
        borderRadius: 10
    },
    Name1: {
        height: 55,
        width: "97%",
        borderWidth: 3,
        marginVertical: 10,
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
        marginLeft: 25,
        // marginRight:25,
    },
    toptext: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        color: "#000"
    },
    maintext: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
    },
    toptext: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "900",
        color: "#000"
    },
    Pic: {
        // marginVertical: 30,
        marginHorizontal: 15,
        marginTop: 15,

    },
    pic: {
        height: 100,
        width: 100
    },
    fav: {
        alignSelf: 'flex-end'
    },
    mainadress: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    adress: {
        borderWidth: 3,
        marginVertical: 10,
        marginHorizontal: 10,
        height: 'auto',
        borderRadius: 15
    },
    label: {
        marginVertical: 10,
        marginHorizontal: 5,
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
    },
    name: {
        borderBottomWidth: 2,
        width: Dimensions.get('screen').width * 0.50,
        height: 25,
        color:"#000",
        fontSize: 15,
        marginTop:10,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    name2: {
        borderWidth: 1,
        width: Dimensions.get('screen').width * 0.46,
        height: 40,
        color:"#000",
        fontSize: 15,
        borderRadius: 10,
        marginTop:10,
        fontWeight: '500',
        paddingHorizontal: 10,paddingVertical:8
    },
    name23: {
        borderBottomWidth: 2,
        width: Dimensions.get('screen').width * 0.50,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    Adress: {
        borderBottomWidth: 2,
        width: Dimensions.get('screen').width * 0.65,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    duration: {
        borderBottomWidth: 2,
        width: 230,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    Btn: {
        backgroundColor: '#0006C1',
        width: '45%',
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 12,
        marginVertical: 20
    },
    btn: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
    },
    editable: {
        margin: 10,
        width: '85%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#000',
        height: 55,
        fontSize:18,
        paddingLeft:15,
        color:'#000',
        borderRadius: 10,
        // alignItems: "center",
        justifyContent: "center"
    
    },

 
})