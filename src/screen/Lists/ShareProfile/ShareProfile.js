import { StyleSheet, Text, View, FlatList, StatusBar, Linking,ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import BaseUrl from '../../../Component/BaseURL/BaseUrl'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Share from 'react-native-share';
import { ShareUrl } from '../../../Component/BaseURL/BaseUrl';

const ShareProfile = () => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [accessToken, setAccess] = useState(null);

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
        const accessToken = await AsyncStorage.getItem("accessToken");
        setAccess(accessToken);
        fetch(BaseUrl + '/douryou-seller-api/seller-profile-shears/', {
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

    const Card = ({ item }) => {


        const [favselect4, setFavSelect4] = useState()
        console.log('share check', favselect4)

        useEffect(async () => {
            try{
    
            fetch(BaseUrl + '/douryou-seller-api/seller-check-user-shear-profile-favourite-or-not/' + item.id + "/", {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + accessToken ,
                },
            }).then((response) => response.json())
                .then((json) => setFavSelect4(json.status))
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }catch(error){
            console.log(error,'error')

        }

        }, []);

        const favorate = async () => {


            let gettingfav = 'Share Profile'

            let formData = new FormData();

            formData.append('WhyFvrt', gettingfav)

            fetch(BaseUrl + '/douryou-seller-api/seller-add-users-to-favourite/' + item.id + "/", {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "multipart/form-data",
                    'Authorization': 'Bearer ' + accessToken,
                },
                body: formData
            }).then((result) => {
                result.json().then((response) => {
                  
                    console.log(response, "Response");
                }).catch((error) => {
                    alert(error)

                });
            })
        }


        const [mobileNumber, setMobileNumber] = useState(item.phone_number.slice(3,13));
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
               <TouchableOpacity onPress={() => { [favorate(), setFavSelect4(!favselect4)] }}>
                    <View style={styles.fav}>

                        {favselect4 ?


                            (<Image source={require('../../../screen/Lists/assets/fav2.png')} style={{ height: 40, width: 40 }} />)
                            :
                            (<Image source={require('../../../screen/Lists/assets/fav.png')} style={{ height: 40, width: 40 }} />)
                        }

                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row',marginTop:10 }}>

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
                            <Image source={require('../../../screen/Lists/assets/chat1.png')} style={{ height: 26, width: 27 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 10, margin: 2 }}>
                        <TouchableOpacity onPress={async () => {await share();}}>
                            <Image source={require('../../../screen/Lists/assets/share.png')} style={{ height: 23, width: 20 }} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View>
                    <View style={{ backgroundColor: '#0006C1', padding: 10, marginTop: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontWeight: '800', }}>Date :- {item.date_joined.slice(0,10)}</Text>
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

                    <View style={styles.Name1}>
                        <View style={styles.topmain}>
                            <View style={styles.topad}>
                                <Image source={require('../assets/profile.png')} style={styles.ad} />
                            </View>

                            <View style={styles.maintext}>
                                <Text style={styles.toptext}>Share Profile</Text>
                            </View>

                        </View>
                    </View>


                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={data.Users}
                        renderItem={({ item, index }) =>
                            (<Card item={item} index={index}></Card>)}
                        keyExtractor={Users => Users.id} />

                </View>
            </ScrollView>
        </>
    )
}

export default ShareProfile

const styles = StyleSheet.create({
    Logo: {
        // color: '#D1070A',
        marginTop: 10,
        height: 50,
        width: 90
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