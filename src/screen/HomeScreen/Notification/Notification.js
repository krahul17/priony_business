import { StyleSheet, Text, View, StatusBar, Modal,ScrollView, Image, FlatList, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BaseUrl from '../../../Component/BaseURL/BaseUrl'
import messaging from '@react-native-firebase/messaging';


const Notification = () => {



    // async function requestUserPermission() {
    //     const authStatus = await messaging().requestPermission();
    //     const enabled =
    //       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    //     if (enabled) {
    //       console.log('Authorization status:', authStatus);
    //     }
    //   }




    // messaging push notification start
    // useEffect(async () => {
    //     const checkToken = async () => {
    //         const fcmToken = await messaging().getToken();
    //         if (fcmToken) {
    //             console.log(fcmToken, 'fcm token : -');
    //         }
    //     }

    //     checkToken();

    // }, []);

    

    // useEffect(() => {
    //     const unsubscribe = messaging().onMessage(async remoteMessage => {
    //         alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    //         console.log(remoteMessage, 'helllo im mesagrel idhfdb')
    //         console.log(remoteMessage.notification.body, '1111helllo im mesagrel idhfdb')
    //         console.log(remoteMessage.notification.title, '1111helllo im mesagrel idhfdb')

    //         setNotify(remoteMessage.notification.title);
    //         setNotify2(remoteMessage.notification.body);

    //         //   AsyncStorage.setItem("MessageTitle", JSON.stringify(remoteMessage))
    //         // AsyncStorage.setItem("MessageBody", JSON.stringify(remoteMessage.notification.body))


    //     });
    //     return unsubscribe;
    // }, []);







    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    let [accessToken, setAccessToken] = useState(null)
    console.log('123jfuybfjdbgu', data)

    const firstLoad = async () => {
        try {

            const accessToken = await AsyncStorage.getItem("accessToken");
            setAccessToken(accessToken);
            console.log(accessToken, ' hello im token')

            await fetch(BaseUrl + '/douryou-seller-api/seller-notification-list/', {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + accessToken,
                },
            }).then((response) => response.json())
                .then((json) => setData(json.MyMatch))
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));

            // console.log(data,"useinfo getting herr")

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        firstLoad();
    }, []);


    const GustData = ({ item }) => {

        return (


            <View style={styles.mainBorder3}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

                    <View style={styles.boxlst}>

                        <View style={{ flexDirection: 'row' }}>

                            <View style={styles.Pic}>
                                <Image source={{ uri: BaseUrl + item.NotificationImage }} style={styles.pic} />
                            </View>

                            <View style={styles.adress}>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={styles.namewidth}>
                                        <Text style={styles.name}>
                                            {item.Title}
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row' }}>

                                    <View style={styles.namewidth}>
                                        <Text style={styles.email}>
                                            {item.Discription}
                                        </Text>
                                    </View>
                                </View>

                            </View>



                        </View>

                    </View>
                </View>

            </View>

        )
    }


    return (<>
        <StatusBar backgroundColor="#0006C1" barStyle='light-content' />
        <SafeAreaView style={styles.container}>
            <ScrollView >

                <View>

                    <TouchableOpacity>
                        <View style={styles.Name1}>
                            <View style={styles.topmain}>
                                <View style={styles.topad}>
                                    <Image source={require('../../HomeScreen/assets/bell.png')} style={styles.ad} />
                                </View>

                                <View style={styles.maintext}>
                                    <Text style={styles.toptext}>Notification </Text>
                                </View>

                            </View>
                        </View>

                    </TouchableOpacity>

                    <FlatList
                        data={data}
                        keyExtractor={MyMatch => MyMatch.id}
                        renderItem={({ item, index }) =>
                            (<GustData item={item} index={index}></GustData>)} />


                </View>

             
            </ScrollView>
        </SafeAreaView>

    </>
    )
}
export default Notification



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
        height: 45,
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
    adress: {
        marginLeft: 20,
    },

    boxlst: {
        borderWidth: 3,
        borderRadius: 12,
        height: '100%',
        width: '98%',
        borderColor:'#0006C1'
    },
    mainTexts: {
        fontSize: 25,
        fontWeight: '900',
        color: '#0006C1',
        marginHorizontal: 10,
        marginTop: 5
    },

    Pic: {
        marginHorizontal: 10,
    },
    pic: {
        marginTop: 10,
        height: 50,
        width: 40
    },
    name: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000',
        marginTop: 10,
        marginLeft: 5
        //   width:Dimensions.get('screen').width*0.45,
    },

    namewidth:{
        width:'89%'
    },
    email: {
        fontSize: 14,
        fontWeight: '300',
        color: '#000',
        marginTop: 8,
        //   width:Dimensions.get('screen').width/1.1,
        width: 274
    },
})