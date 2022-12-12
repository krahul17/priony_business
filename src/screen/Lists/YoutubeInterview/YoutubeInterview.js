import React, { useState, useCallback, useRef } from "react";
import { Animated, Button, View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, Touchable, TouchableOpacity, FlatList, Dimensions, Image } from "react-native"
import YoutubePlayer from 'react-native-youtube-iframe';
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
const hotels = [
    {
        id: '1',
        videoId: "3lfQ2vtUyX0",
        name: 'Double Tree Hotel',
        location: 'Goa',
        price: 750,
        // image: require('./assets/hotel1.jpg'),
        details: "Tucked between lush forest and the calming waters of the Mandovi River, we are located 10 minutes from the UNESCO World Heritage Site at Old Goa. Goa capital city Panaji and Miramar Beach are both 15 minutes away, as is a choice of shoping, dining, and nightlife. Goa International Airport can be reached in 45 minutes.",
    },
    {
        id: '2',
        videoId: "iuqfU9Ll300",
        name: 'villa Riviera',
        location: 'Goa',
        price: 1250,
        // image: require('./assets/hotel2.jpg'),
        details: "Villa Riviera is located in Saipem, a few minutes away from Candolim beach, a very popular beach in Goa. If you wish to spend a day near the beach, the sandy beach of Candolim is easily accessible by a short drive. Many shops, restaurants, beach shacks are located near the Candolim beach",
    },
    {
        id: '3',
        videoId: "3cchY1q44bk",
        name: 'Hotel Silver Line',
        location: ' Mussoorie',
        price: 999,
        // image: require('./assets/hotel4.jpg'),
        details: "Located in Mussoorie, within a 9-minute walk of Mussoorie Mall Road and half a kilometer of Camel's Back Road, Hotel Silver Line provides accommodations with a restaurant as well as free private parking for guests who drive. This 3-star hotel offers a 24-hour front desk and room service."
    },
];
const YoutubeInterview = ({ navigation }) => {
    const [videocount, setVideoCount] = useState(0);
    const increment = () => {
        if (videocount <= videocount) {
            setVideoCount(videocount + 1)
        }
    }
    const [likecount, setLikeCount] = useState(0);
    const increments = () => {
        if (likecount <= likecount) {
            setLikeCount(likecount + 1)
        }
    }
    const [favselect, setFavSelect] = useState(true)


    const Card = ({ hotel, index }) => {

        return (
            <>
                <View style={style.mainBorder}>


                    <TouchableOpacity style={style.BtnToutube} onPress={() => navigation.navigate('MainYoutube')} >
                        <Image source={require('../assets/YoutubeBtn.png')} style={style.youtubeBtn} />
                    </TouchableOpacity>
                    <View style={style.youtube}>
                        <Image source={require('../assets/Ads.png')} style={{ height: 200, width: '100%' }} />
                    </View>

                    <View style={style.cardDetails}>
                        <View style={style.bar}>

                            <Text style={style.Study}>STUDY VISA</Text>
                        </View>
                        <View style={{ marginTop: 5, flexDirection: 'row' }}>

                            <View style={{ marginVertical: 5, marginHorizontal: 5 }}>
                                <Text style={style.company}>Canada Study Visa</Text>
                                {/* <TouchableOpacity onPress={() => navigation.navigate('AdsActivityPremium')}> */}
                                    <Text style={style.link}>Eazyvisa Immigration Cusultalt</Text>
                                {/* </TouchableOpacity> */}

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginLeft:30 }}>
                        <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('LikeAds')}>
                                        <Image source={require('../assets/eye.png')} style={style.like} />
                                    </TouchableOpacity>
                                    <View style={style.viewcount}>
                                        <Text >{likecount}</Text>
                                    </View>
                                </View>

                            <View style={{ flexDirection: 'row',marginLeft:50 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('LikeAds')}>
                                        <Image source={require('../assets/thumb.png')} style={style.like} />
                                    </TouchableOpacity>
                                    <View style={style.viewcount}>
                                        <Text >{likecount}</Text>
                                    </View>
                                </View>

                            <View style={{ flexDirection: 'row' ,marginLeft:30}}>

                                <TouchableOpacity onPress={() => navigation.navigate("ShareAds")}>
                                    <Image source={require('../assets/share.png')} style={style.share} />
                                </TouchableOpacity>
                                <View style={style.sharecount}>
                                    <Text >{likecount}</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>        
                
            </>
        )
    }

    const Title='Yours Interviews';
    return (
        <>
        <View style={{ backgroundColor: '#fff' }}>
            {/* <View style={style.main}>
                <View>
                    <Image source={require('../../LoginFlow/assets/logo.png')} style={style.logo} />
                </View>

            </View>  */}
            <View style={style.Name1}>
                <View style={style.topmain}>
                    <View style={style.topad}>
                        <Image source={require('../../../Navigation-Flow/TopTabNavigation/assets/four.png')} style={style.ad} />
                    </View>

                    <View style={style.maintext}>
                        <Text style={style.toptext}>{Title}</Text>
                    </View>

                </View>
            </View>

            <View>
            <FlatList
                data={hotels}
                renderItem={Card}
                keyExtractor={item => item.id}
            />
        </View>  

        </View>
        <ScrollView>
             
        </ScrollView>
           
       
        </>    );
}

export default YoutubeInterview;

const style = StyleSheet.create({
    logo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        marginVertical: 15
    },
    mainBorder: {
        height: 'auto',
        width: '90%',
        // padding: 10,
        alignSelf: 'center',
        borderWidth: 3,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: "#fff"
    },
    youtube: {
        overflow: "hidden",
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    Name1: {
        height: 55,
        width: "90%",
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
        alignSelf: 'center',
        marginVertical:15
    },
    Study: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#ffff'
    },
    company: {
        fontWeight: '600',
        fontSize: 18,
        color: '#000',
        // marginVertical: 1,
        // width: Dimensions.get('window').width * 0.50
    },
    link: {
        fontWeight: '500',
        fontSize: 16,
        color: '#040271',
        // marginVertical: 2,
        // width: Dimensions.get('window').width * 0.50
    },
    address: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000',
        width: Dimensions.get('window').width * 0.60
    },
    cardDetails: {
        height: 'auto',
        borderRadius: 10,
        backgroundColor: "#fff",
        bottom: 0,
        width: "100%",
        alignSelf: 'center'


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
        marginLeft: 2,
        marginTop: 9,
        width: Dimensions.get('window').width / 5,

    },
    sharecount:{
        marginLeft: 15,
        marginTop: 9,
        width: Dimensions.get('window').width / 5,
    },
    VideoCount: {
        fontSize: 50,
        color: "#000"
    },
    eye: {
        height: 20,
        width: 27,
        margin: 12,
        marginLeft: -10
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
        // margin: 20,
        // marginLeft: 1
    },
    thum: {
        height: 52,
        width: 25,
        marginTop: 6,
        marginRight: 15
    },
    message: {
        height: 22,
        width: 23,
        marginLeft: 12,
        marginTop: 6
    },
    backbtn:{
        backgroundColor:'#EFD757'
     
    },
});