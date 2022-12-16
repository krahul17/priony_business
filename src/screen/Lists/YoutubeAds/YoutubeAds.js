import React, { useState, useCallback, useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Dimensions, Image } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import BaseUrl from "../../../Component/BaseURL/BaseUrl";

const { width } = Dimensions.get("screen");

const cardWidth = width / 1.2;
const COLORS = {
    white: '#FFF',
    dark: '#000',
    primary: '#52C0B4',
    secondary: '#E0F4F1',
    light: '#F9F9F9',
    grey: '#908E8C',
    orange: '#F5A623',
};


const YoutubeAds = ({ navigation }) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [accessToken, setAccess] = useState(null);

   
    console.log(data, "userdataprofil")
    useEffect( async () => {

        const accessToken = await AsyncStorage.getItem("accessToken");
        setAccess(accessToken);

        fetch(BaseUrl + '/douryou-seller-api/seller-view-todays-deals-added/', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + accessToken,
            },
        }).then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) =>
                // alert(error))
                console.error(error))
            .finally(() => setLoading(false));
    }, []);
  
    const Card = ({ item, index }) => {

        return (
            <>


                <View style={style.mainBorder}>

                    <View style={style.adMain}>
                        <View style={style.youtube}>
                            <TouchableOpacity onPress={() => navigation.navigate('YourMainAds', item)} >
                                <Image source={{ uri: BaseUrl + item.UploadAdsPhoto }} style={{ height: 350, width: '100%' }} />
                            </TouchableOpacity>
                        </View>

                        <View style={style.cardDetails}>
                            <View style={style.bar}>

                                <Text style={style.Study}>{item.Catagery}</Text>
                            </View>
                            <View style={{ marginTop: 5, flexDirection: 'row' }}>

                                <View style={{ marginVertical: 5, marginHorizontal: 5 }}>
                                    <Text style={style.company}>{item.from_compny_profile.CompanyName}</Text>
                                    {/* <TouchableOpacity onPress={() => navigation.navigate('AdsActivityPremium')}> */}
                                    <Text style={style.link}>{item.from_compny_profile.CompanyAddress}</Text>
                                    {/* </TouchableOpacity> */}

                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                                <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('ViewAds')}>
                                        <Image source={require('../assets/eye.png')} style={style.eye} />
                                    </TouchableOpacity>

                                </View>

                                <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('LikeAds')}>
                                        <Image source={require('../assets/thumb.png')} style={style.like} />
                                    </TouchableOpacity>

                                </View>

                                <View style={{ flexDirection: 'row', marginLeft: 30 }}>

                                    <TouchableOpacity onPress={() => navigation.navigate("ShareAds")}>
                                        <Image source={require('../assets/share.png')} style={style.share} />
                                    </TouchableOpacity>

                                </View>
                            </View>

                        </View>
                    </View>
                </View>


            </>
        )
    }
    return (<>
        <ScrollView>

            <View style={{ backgroundColor: "#fff" }}>

                <View style={style.Name1}>
                    <View style={style.topmain}>
                        <View style={style.topad}>
                            <Image source={require('../../HomeScreen/assets/ads.png')} style={style.ad} />
                        </View>

                        <View style={style.maintext}>
                            <Text style={style.toptext}>Yours Ads</Text>
                        </View>

                    </View>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={data.TodaysDeals}
                    renderItem={({ item, index }) =>
                        (<Card item={item} index={index}></Card>)}
                    keyExtractor={from_compny_profile => from_compny_profile.id} />



            </View>


        </ScrollView>

    </>
    );
}
export default YoutubeAds;
const style = StyleSheet.create({

    logo: {
        width: '70%',
        height: 180,
        alignSelf: 'center',
        marginVertical: 15
    },
    mainBorder: {
        height: 'auto',
        width: '95%',
        padding: 10,
        alignSelf: 'center',
    },
    Name1: {
        height: 55,
        width: "90%",
        borderWidth: 3,
        marginTop: 10,
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
    },
    toptext: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "600",
        color: "#000"
    },
    adMain: {
        overflow: "hidden",
        borderWidth: 2,
        borderColor: '#000',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
    },
    youtube: {
        overflow: "hidden",
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        borderWidth: 2,
        borderColor: '#000',
    },
    dp: {
        height: 80,
        width: 80,
        marginHorizontal: 10,
        borderRadius: 8,
        marginVertical: 3,
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#0006C1',
        marginTop: 2,
        position: 'relative'

    },
    Offer: {
        fontSize: 15,
        fontWeight: '400',
        color: '#EFD757',
        fontStyle: 'italic',
        marginTop: 5
    },
    BtnToutube: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        borderRadius: 10,
        margin: 4,
        marginVertical: 65
    },
    youtubeBtn: {
        height: 70,
        width: 90,
        alignSelf: 'center'
    },
    Study: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#ffff'
    },
    company: {
        fontWeight: '600',
        fontSize: 20,
        color: '#000',
        // marginVertical: 1,
        width: Dimensions.get('window').width * 0.50
    },
    link: {
        fontWeight: '500',
        fontSize: 16,
        color: '#040271',
        // marginVertical: 2,
        width: Dimensions.get('window').width * 0.70
    },
    address: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000',
        width: Dimensions.get('window').width * 0.60
    },
    cardDetails: {
        height: 'auto',
        borderRadius: 15,
        backgroundColor: "#fff",
        bottom: 0,
        width: "100%",
        alignSelf: 'center',

    },
    partOneIcon: {
        height: 22,
        width: 22,
        margin: 8,
    },
    heart: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 4,
    },
    viewcount: {
        marginLeft: 1,
        marginTop: 8,
        width: Dimensions.get('window').width / 5,
    },
    sharecount: {
        marginLeft: 15,
        marginTop: 9,
        width: Dimensions.get('window').width / 5,
    },
    eye: {
        height: 19,
        width: 35,
        margin: 12,
        marginLeft: -30,
        resizeMode: 'contain'
    },
    like: {
        height: 22,
        width: 24,
        margin: 8,
        marginLeft: -30
    },
    share: {
        height: 22,
        width: 20,
        marginTop: 8,
    },
    thum: {
        height: 53,
        width: 26,
        marginTop: 6,
        marginRight: 15
    },
    message: {
        height: 22,
        width: 23,
        marginLeft: 12,
        marginTop: 6
    },
});