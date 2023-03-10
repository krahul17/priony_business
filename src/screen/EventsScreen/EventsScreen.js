import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, Linking,ScrollView, Label, StatusBar, FlatList, TouchableOpacity, TextInput, Pressable, Dimensions} from 'react-native';
import BaseUrl from '../../Component/BaseURL/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../Component/Loader/Loader';
import Share from 'react-native-share'
import { ShareUrl } from '../../Component/BaseURL/BaseUrl';
import { AdminChatNo } from '../../Component/BaseURL/BaseUrl';





const EventsScreen = ({ navigation }) => {
  


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [accessToken, setAccess] = useState(null);
    console.log(accessToken)

    const url = ShareUrl;
    const options = {url};
    const share = async (customOptions = options) => {
        try {
            await Share.open(customOptions);
        } catch (err) {
            console.log(err);
        }
    };

    console.log(data, 'data is comiong')


    useEffect( async () => {
        setModalVisible(true)

        const accessToken = await AsyncStorage.getItem("accessToken");
        setAccess(accessToken);


        fetch(BaseUrl + '/douryou-seller-api/seller-fetch-all-events/', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + accessToken,
            },
        }).then((response) => response.json(),
        setModalVisible(false))
            .then((json) => setData(json))
            .catch((error) =>{
                setModalVisible(false);
                // alert(error))
                console.error(error)})
            .finally(() => setLoading(false));
    }, []);


    const Card = ({ item, index }) => {

        const [mobileNumber, setMobileNumber] = useState(AdminChatNo);
        // console.log(item.phone_number,'phone number gett')
        // const [whatsAppMsg, setWhatsAppMsg] = useState('Please follow https://aboutreact.com',  );
        const WhatsAppchat = () => {
          // Check for perfect 10 digit length
          if (mobileNumber.length != 10) {
            alert('Please insert correct WhatsApp number');
            return;
          }
          // Using 91 for India
          // You can change 91 with your country code
          let url =
            'whatsapp://send?text=' +
            //  whatsAppMsg +
            '&phone=91'+ mobileNumber;
          Linking.openURL(url)
            .then((data) => {
              console.log('WhatsApp Opened');
            })
            .catch(() => {
              alert('Make sure Whatsapp installed on your device');
            });
        };

        return (

            <View style={styles.mainList}>
                {/* <TouchableOpacity>
                    <View style={styles.fav}>
                        <Image source={require('../EventsScreen/assets/fav.png')} style={{ height: 50, width: 50 }} />
                    </View>
                </TouchableOpacity> */}

                <View style={{ flexDirection: 'row',marginTop:22 }}>

                    <View style={styles.Pic}>
                        <Image source={{ uri: BaseUrl + item.EventImage }} style={styles.pic} />
                    </View>

                    <View>
                        <View 
                        style={{width:'86%'}}
                        >
                            <Text style={{ fontSize: 22, fontWeight: '600', color: '#000', }}>{item.EventAddress}</Text>
                        </View>
                    </View>

                </View>



                <View style={styles.adress}>
                    <View style={styles.mainadress}>
                        <View>
                            <Text style={styles.label} >Events Date: </Text>
                        </View>
                        <View>
                            <Text style={styles.name}>
                                {item.EventDate}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.mainadress}>
                        <View>
                            <Text style={styles.label} >Event Duration: </Text>
                        </View>
                        <View>
                            <Text style={styles.name}>
                                {item.EventLength}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.mainadress}>
                        <View>
                            <Text style={styles.label} >Events Type: </Text>
                           
                        </View>
                        <View>
                            <Text style={styles.name}>
                                {item.EventCatagory}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.mainadress}>
                        <View>
                            <Text style={styles.label} >No. of Stall: </Text>
                           
                        </View>
                        <View>
                            <Text style={styles.name}>
                                {item.FirstQuentity}
                            </Text>
                        </View>
                    </View>

                </View>
                <View >
                    <TouchableOpacity onPress={() => navigation.navigate('EventSecond', {value:item})} style={styles.Btn}>
                        <Text style={styles.btn}>Book Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10, marginTop: -30 }}>

                    <TouchableOpacity onPress={() => { WhatsAppchat();}}>
                        <View style={{ marginRight: 20, marginTop: -15 }}>
                            <Image source={require('../EventsScreen/assets/chat1.png')} style={{ height: 30, width: 32 }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={async () => {await share();}}>
                        <View style={{ marginRight: 10, marginTop: -15 }}>
                            <Image source={require('../EventsScreen/assets/share.png')} style={{ height: 30, width: 27 }} />
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        )
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
                                    <Image source={require('../EventsScreen/assets/book.png')} style={styles.ad} />
                                </View>

                                <Pressable>
                                    <View style={styles.maintext}>
                                        <Text style={styles.toptext}>Book Event</Text>
                                    </View>
                                </Pressable>

                            </View>
                        </View>
                         <Loader modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={data.Events}
                            renderItem={({ item, index }) =>
                                (<Card item={item} index={index}></Card>)} />

                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default EventsScreen;

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
        marginTop: '10%'
    },
    mainList: {
        height: 420,
        width: '97%',
        borderWidth: 3,
        marginHorizontal: 7,
        marginVertical: 5,
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
        marginHorizontal: 15,
        borderWidth: 3
    },
    pic: {
        height: 100,
        width: 100,
        borderWidth: 3
    },
    fav: {
        alignSelf: 'flex-end',
    },
    mainadress: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    adress: {
        borderWidth: 3,
        marginVertical: 10,
        marginHorizontal: 10,
        height: 200,
        borderRadius: 15,

    },
    label: {
        marginVertical: 10,
        marginHorizontal: 5,
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
    },
    name: {
        // borderBottomWidth: 2,
        width: Dimensions.get('screen').width * 0.5,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        // paddingHorizontal: 10
        marginTop: 12
    },
    duration: {
        borderBottomWidth: 2,
        width: Dimensions.get('screen').width * 0.5,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    Btn: {
        borderWidth: 1,
        width: Dimensions.get('screen').width * 0.3,
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 8,
        borderRadius: 10,
        backgroundColor: 'blue'
    },
    btn: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center'
    }
})