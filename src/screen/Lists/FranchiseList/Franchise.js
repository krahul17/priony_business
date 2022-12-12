import { StyleSheet, Text, View, FlatList, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomText from '../../../Component/CustomText/CustomText'
import CustomUpload from '../../../Component/CustomUpload';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';

const Franchise = ({ navigation }) => {



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

    let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNTI3ODI1LCJqdGkiOiJmNGIzOWE2MDE4ZWU0M2M3Yjc0NmU0N2ZmOGJiOTBiZCIsInVzZXJfaWQiOjEwfQ.0m9C02ZpNM5ibIUPbwQMRiseSf9evKxj07F00jiBzGs"


    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    console.log(data, "userdataprofil")
    useEffect(() => {
        fetch(BaseUrl + '/douryou-seller-api/seller-sell-franchise/', {
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

    console.log(data, 'jdddkjfhdjf')

    const SellerFranchise = ({ item }) => {
        return (

            <>
                <View style={styles.mainList}>
                    <CustomText Name={item.CompanyName} />

                    <CustomText Name={item.CompanyAddress} />
                    <CustomText Name={item.ContactPerson} />
                    <CustomText Name={item.MobileNo} />
                    <CustomText Name={item.ContactPersonDesigation} />
                    <CustomText Name={item.YearOfStabilization} />
                    <CustomText Name={item.TotalNumberOfEmployees} />
                    <CustomText Name={item.DealIn} />
                    <CustomText Name={item.FranchiseOfferFor} />
                    <CustomText Name={item.AreaType} />
                    <CustomText Name={item.TotalAreaRequired} />
                    <CustomText Name={item.TotalInvestmentRequired} />
                    <CustomText Name={item.EstimatedReturnOfInvestment} />

                    <CustomText Name={item.TotalShareOfferOnSells} />
                    <View style={styles.imageField}>
                        <Image source={{ uri: BaseUrl + item.UploadCompanyVisitingCard }} style={{ width: 350, height: 350, borderRadius: 5 }} />
                    </View>




                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: 30 }}>
                        <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('LikeAds')}>
                                <Image source={require('../../../screen/Lists/assets/thumb.png')} style={styles.like} />

                                {/* <Image source={require('../assets/thumb.png')}  /> */}
                            </TouchableOpacity>
                            <View style={styles.viewcount}>
                                <Text >{likecount}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('LikeAds')}>
                                <Image source={require('../../../screen/Lists/assets/thumb.png')} style={styles.like} />

                                {/* <Image source={require('../assets/thumb.png')}  /> */}
                            </TouchableOpacity>
                            <View style={styles.viewcount}>
                                <Text >{likecount}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 30 }}>

                            <TouchableOpacity onPress={() => navigation.navigate("ShareAds")}>
                                <Image source={require('../assets/share.png')} style={styles.share} />
                            </TouchableOpacity>
                            <View style={styles.sharecount}>
                                <Text >{likecount}</Text>
                            </View>
                        </View>
                    </View>


                </View>
            </>
        )
    }

    return (
        <>
            <StatusBar
                backgroundColor="#0006C1"
                barStyle={'light-content'} />

            <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
                <View>

                    {/* <View style={styles.navbar}>
                        <Image source={require('../assets/logo.png')} style={styles.Logo} />
                    </View> */}

                    <View style={styles.Name1}>
                        <View style={styles.topmain}>
                            <View style={styles.topad}>
                                <Image source={require('../assets/profile.png')} style={styles.ad} />
                            </View>

                            <View style={styles.maintext}>
                                <Text style={styles.toptext}>Your Franchise</Text>
                            </View>

                        </View>
                    </View>


                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={data.Events}
                        renderItem={({ item, index }) =>
                            (<SellerFranchise item={item} index={index}></SellerFranchise>)} />


                </View>
            </ScrollView>
        </>
    )
}

export default Franchise

const styles = StyleSheet.create({
    Logo: {
        // color: '#D1070A',
        marginTop: 10,
        height: 50,
        width: 90
    },
    imageField: {
        height: 'auto',
        width: "95%",
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
        marginVertical: 20,
        borderRadius: 10
    },

    uploadtype: {
        height: 370,
        width: "90%",
        borderWidth: 1,
        // marginHorizontal: 10,
        borderColor: "#000",
        marginTop: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    viewcount: {
        marginLeft: 1,
        marginTop: 8,
        width: Dimensions.get('window').width / 5,
        // width: Dimensions.get('window').width * 0.2,
    },
    sharecount: {
        marginLeft: 15,
        marginTop: 9,
        width: Dimensions.get('window').width / 5,
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
        height: 53,
        width: 26,
        marginTop: 6,
        marginRight: 15
    },
})