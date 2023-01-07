import { StyleSheet, Text, View, FlatList, StatusBar, Linking,ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import BaseUrl from '../../../../Component/BaseURL/BaseUrl'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Share from 'react-native-share'
import { ShareUrl } from '../../../../Component/BaseURL/BaseUrl'

const AirTicket = () => {



    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    console.log(data, "userdataprofil")
    const [accessToken, setAccess] = useState(null);

    const url = ShareUrl;
    const options = { url };
    const share = async (customOptions = options) => {
        try {
            await Share.open(customOptions);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(async () => {

        const accessToken = await AsyncStorage.getItem("accessToken");
        setAccess(accessToken);

        fetch(BaseUrl + '/douryou-seller-api/seller-api-for-Intersted-Visitor-in-air-ticket', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + accessToken,
            },
        }).then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);



    const Getdata = ({ item }) => {

        const [mobileNumber, setMobileNumber] = useState(item.phone_number);
        console.log(item.phone_number,'phone number gett')
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
                <TouchableOpacity>
                    <View style={styles.fav}>
                        <Image source={require('../../../../screen/Lists/assets/fav.png')} style={{ height: 40, width: 40 }} />
                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>

                    <View style={styles.Pic}>
                        <Image source={{ uri: BaseUrl + item.frontimage }} style={styles.pic} />
                    </View>

                    <View style={styles.adress}>
                        <View style={{ flexDirection: 'row' }}>

                            <View>
                                <Text style={styles.name}>
                                    {item.first_name}
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>

                            <View>
                                <Text style={styles.email}>
                                    {item.email}
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text style={styles.dist}>
                                    {item.last_name}
                                </Text>
                            </View>
                        </View>

                    </View>



                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>

                    <View style={{ marginRight: 20, margin: 2 }}>
                        <TouchableOpacity onPress={() => { WhatsAppchat();}}>
                            <Image source={require('../../../../screen/Lists/assets/chat1.png')} style={{ height: 26, width: 27 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 10, margin: 2 }}>
                        <TouchableOpacity onPress={async () => { await share(); }}>
                            <Image source={require('../../../../screen/Lists/assets/share.png')} style={{ height: 23, width: 20 }} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View>
                    <View style={{ backgroundColor: '#0006C1', padding: 10, marginTop: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontWeight: '800', }}>
                            Date-Joined :- {item.date_joined.slice(0, 10)}

                        </Text>
                    </View>
                </View>

            </View>
        )
    }

    return (
        <>
            <StatusBar
                backgroundColor="#0006C1"
                barStyle={'light-content'} />

            <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
                <View>

                    <View style={styles.navbar}>
                        <Image source={require('../../../HomeScreen/assets/logo.png')} style={styles.Logo} />
                    </View>

                    <View style={styles.Name1}>
                        <View style={styles.topmain}>
                            <View style={styles.topad}>
                                <Image source={require('../../../HomeScreen/assets/AirTicket.png')} style={styles.ad} />
                            </View>

                            <View style={styles.maintext}>
                                <Text style={styles.toptext}>Air Ticket</Text>
                            </View>

                        </View>
                    </View>


                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={data.Sellers}
                        renderItem={({ item, index }) =>
                            (<Getdata item={item} index={index}></Getdata>)} />

                </View>
            </ScrollView>
        </>
    )
}

export default AirTicket

const styles = StyleSheet.create({
    Logo: {
        // color: '#D1070A',
        marginTop: 10,
        height: 50,
        width: 90,
        resizeMode: 'contain'
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
    mainList: {
        height: 'auto',
        width: '97%',
        borderWidth: 3,
        marginHorizontal: 7,
        marginVertical: 15,
        borderRadius: 10
    },
    Pic: {
        marginHorizontal: 8,
    },
    pic: {
        height: 100,
        width: 100
    },
    fav: {
        alignSelf: 'flex-end'
    },
    label: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
        // marginVertical: 2,
    },
    name: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000',
        marginTop: 2,
        //   width:Dimensions.get('screen').width*0.45,
    },
    email: {
        fontSize: 15,
        fontWeight: '200',
        color: '#000',
        marginTop: 8,
        //   width:Dimensions.get('screen').width/1.1,
        width: 280
    },
    dist: {
        fontSize: 15,
        fontWeight: '300',
        color: '#000',
        marginTop: 2,
    },
})