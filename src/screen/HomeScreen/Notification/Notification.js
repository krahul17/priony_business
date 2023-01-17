import { StyleSheet, Text, View, StatusBar, Modal, ScrollView, Image, FlatList, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BaseUrl from '../../../Component/BaseURL/BaseUrl'
import messaging from '@react-native-firebase/messaging';


const Notification = () => {



    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      
        if (enabled) {
          console.log('Authorization status:', authStatus);
        }
      }


    const [notify, setNotify] = useState();
    const [notify2, setNotify2] = useState();
    console.log(notify, 'body hello im token')



     async function GetFcmToken(){
        let fcmtoken= await AsyncStorage.getItem('fcmtoken');
        
        if(!fcmtoken){

           try{

            let fcmtoken=messaging().getToken();

            if(fcmtoken){

               await AsyncStorage.setItem('fcmtoken',fcmtoken)
                
            }else{

            }

           }catch(error){
            console.log(error)
           }

        }
    }


    // const messagingg = async () => {
    //     try {
    
    //         const bodymesage = await AsyncStorage.getItem("MessageTitle");
    //         setNotify(bodymesage);
    //         // console.log(bodymesage, 'body hello im token') 
    
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    
    //   useEffect(() => {
    //     messagingg();
    //   }, []);

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
          console.log(remoteMessage,'helllo im mesagrel idhfdb')
          console.log(remoteMessage.notification.body,'1111helllo im mesagrel idhfdb')
          console.log(remoteMessage.notification.title,'1111helllo im mesagrel idhfdb')

          setNotify(remoteMessage.notification.title);
          setNotify2(remoteMessage.notification.body);
      
        //   AsyncStorage.setItem("MessageTitle", JSON.stringify(remoteMessage))
          // AsyncStorage.setItem("MessageBody", JSON.stringify(remoteMessage.notification.body))
         
      
        });
        return unsubscribe;
    }, []);
    

    // const GustData = ({ item }) => {

    //     return (


    //         <View style={styles.mainBorder3}>

    //         <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

    //             <View style={styles.boxlst}>

    //                 <View style={{ flexDirection: 'row' }}>

    //                     <View style={styles.Pic}>
    //                         <Image source={require('../../HomeScreen/assets/bell.png')} style={styles.pic} />
    //                     </View>

    //                     <View style={styles.adress}>
    //                         <View style={{ flexDirection: 'row' }}>

    //                             <View>
    //                                 <Text style={styles.name}>
    //                                     {item.title}
    //                                 </Text>
    //                             </View>
    //                         </View>

    //                         <View style={{ flexDirection: 'row' }}>

    //                             <View>
    //                                 <Text style={styles.email}>
    //                                  {item.body}
    //                                 </Text>
    //                             </View>
    //                         </View>

    //                     </View>



    //                 </View>

    //             </View>
    //         </View>

    //     </View>

    //     )
    // }

    return (<>
        <StatusBar backgroundColor="#0006C1" barStyle='light-content' />
        <SafeAreaView style={styles.container}>






            <ScrollView >

                <View>


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




                    <View style={styles.mainBorder3}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

                            <View style={styles.boxlst}>

                                <View style={{ flexDirection: 'row' }}>

                                    <View style={styles.Pic}>
                                        <Image source={require('../../HomeScreen/assets/bell.png')} style={styles.pic} />
                                    </View>

                                    <View style={styles.adress}>
                                        <View style={{ flexDirection: 'row' }}>

                                            <View>
                                                <Text style={styles.name}>
                                                    {notify}
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>

                                            <View>
                                                <Text style={styles.email}>
                                                 {notify2}
                                                </Text>
                                            </View>
                                        </View>

                                    </View>



                                </View>

                            </View>
                        </View>

                    </View>





                    {/* <FlatList
                        data={notify.notification}
                        // keyExtractor={notification => notification.id}
                        renderItem={({ item, index }) => (<GustData item={item} index={index}></GustData>)}
                    /> */}


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

    boxlst: {
        borderWidth: 3,
        borderRadius: 12,
        height: '100%',
        width: '98%',
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
        marginTop:10,
        height: 50,
        width: 40
    },
    name: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000',
        marginTop: 10,
        marginLeft:50
        //   width:Dimensions.get('screen').width*0.45,
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