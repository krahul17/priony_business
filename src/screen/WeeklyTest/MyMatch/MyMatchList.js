import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView, Linking,ScrollView, Label, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../Component/Loader/Loader';
import Share from 'react-native-share'
import { ShareUrl } from '../../../Component/BaseURL/BaseUrl';
import MyMatch from '../../LoginFlow/MyMatch/MyMatch';


const gustData = [

    {
        id: '1',
        image: require('../../../screen/Lists/assets/read.png'),
        chat: require('../../../screen/Lists/assets/chat1.png'),
        bell: require('../../../screen/Lists/assets/share.png'),
        img: require('../../../screen/Lists/assets/fav.png'),
        Name: 'Harsimranjeet Singh Tarwal',
        Email: 'simranjeet.extech20305226@gmail.com',
        DistName: 'Dist. Name',
        DateTime: 'CRM Date & Time:-',
        Select: 'Select a category',
        Add: 'Add Title',
        When: 'When you required',
        Describe: 'Describe your requirement',
    },
    {
        id: '2',
        image: require('../../../screen/Lists/assets/read.png'),
        chat: require('../../../screen/Lists/assets/chat1.png'),
        bell: require('../../../screen/Lists/assets/share.png'),
        img: require('../../../screen/Lists/assets/fav.png'),
        Name: 'Prabhjot Singh',
        Email: 'simranjeet.extech@gmail.com',
        DistName: 'Dist. Name',
        DateTime: 'CRM Date & Time:-',
        Select: 'Select a category',
        Add: 'Add Title',
        When: 'When you required',
        Describe: 'Describe your requirement',
    },

]



const MyMatchList = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [accessToken, setAccess] = useState(null);
    console.log(accessToken)

    const url = ShareUrl;
    const options = { url };
    const share = async (customOptions = options) => {
        try {
            await Share.open(customOptions);
        } catch (err) {
            console.log(err);
        }
    };

    console.log(data, 'data is comiong')


    useEffect(async () => {
        setModalVisible(true)

        const accessToken = await AsyncStorage.getItem("accessToken");
        setAccess(accessToken);


        fetch(BaseUrl + '/douryou-seller-api/seller-see-user-my-match-by-admin/', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + accessToken,
            },
        }).then((response) => response.json(),
            setModalVisible(false))
            .then((json) => setData(json))
            .catch((error) => {
                setModalVisible(false);
                // alert(error))
                console.error(error)
            })
            .finally(() => setLoading(false));
    }, []);



    const GustData = ({ item }) => {


        const [mobileNumber, setMobileNumber] = useState(item.username.phone_number.slice(3,13));
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

                <TouchableOpacity>
                    <View style={styles.fav}>
                        <Image source={require('../../../screen/Lists/assets/fav.png')} style={{ height: 40, width: 40 }} />
                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>

                    <View style={styles.Pic}>
                        <Image source={{uri:BaseUrl + item.username.frontimage}} style={styles.pic} />
                    </View>

                    <View style={styles.adress}>
                        <View style={{ flexDirection: 'row' }}>

                            <View>
                                <Text style={styles.name}>
                                    {item.username.first_name}
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>

                            <View>
                                <Text style={styles.email}>
                                    {item.username.email}
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>

                            <View>
                                <Text style={styles.dist}>
                                    {item.username.last_name}
                                </Text>
                            </View>
                        </View>

                    </View>



                </View>


                <View style={styles.Select}>
                    <Text style={styles.selec}>Select a category : Passport </Text>

                </View>


                <View>
                    <View style={styles.Add}>
                        <Text style={styles.add}>  {item.title} </Text>
                    </View>
                </View>
                <View>
                    <View style={styles.Add}>
                        <Text style={styles.add}> {item.phone} </Text>
                    </View>
                </View>
                <View>
                    <View style={styles.Add}>
                        <Text style={styles.add}>{item.quali} </Text>
                    </View>
                </View>

                <View>
                    <View style={styles.Add}>
                        <Text style={styles.add}>{item.when_require} </Text>
                    </View>
                </View>

                <View style={styles.Describe}>
                    <View>
                        <Text style={styles.describe}>{item.description} </Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>

                    <View style={{ marginRight: 20, margin: 2 }}>
                        <TouchableOpacity onPress={() => { WhatsAppchat(); }}>
                            <Image source={require('../../../screen/Lists/assets/chat1.png')} style={{ height: 27, width: 29 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 10, margin: 2 }}>
                        <TouchableOpacity onPress={async () => { await share(); }}>
                            <Image source={require('../../../screen/Lists/assets/share.png')} style={{ height: 28, width: 25 }} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View>
                    <View style={{ backgroundColor: '#0006C1', padding: 10, marginTop: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontWeight: '800', marginLeft: 10 }}>Date :- {item.date.slice(0,10)}</Text>
                    </View>
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
                                    <Image source={require('../../HomeScreen/assets/mymatch.png')} style={styles.ad} />
                                </View>

                                <View style={styles.maintext}>
                                    <Text style={styles.toptext}>My Match</Text>
                                </View>

                            </View>
                        </View>

                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={data.MyMatch}
                            keyExtractor={username =>username.id}
                            renderItem={({ item, index }) =>
                                (<GustData item={item} index={index}></GustData>)} />

                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default MyMatchList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    mainlogo: {
        alignItems: 'flex-start',
        justifyContent: "center",
        marginTop: 15,
    },
    logo: {
        height: 65,
        width: "30%",
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
        marginLeft: 25,
        // marginRight:25,
    },
    toptext: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        color: "#000"
    },
    mainList: {
        height: 'auto',
        width: '97%',
        borderWidth: 3,
        marginHorizontal: 7,
        marginVertical: 10,
        borderRadius: 10
    },
    Pic: {
        marginHorizontal: 10,
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
        fontWeight: '300',
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
    Select: {
        // flexDirection: 'row',
        borderWidth: 1,
        marginHorizontal: 13,
        marginVertical: 8,
        padding: 10,
        borderRadius: 12
    },
    selec: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 20,
        color: '#0006C1'
    },
    Add: {
        // flexDirection: 'row',
        borderWidth: 1,
        marginHorizontal: 13,
        marginVertical: 8,
        borderRadius: 12,
        height: 50
    },
    add: {
        fontWeight: '300',
        fontSize: 18,
        color: '#000',
        marginTop: 10,
        marginLeft: 10
    },
    Describe: {
        borderWidth: 1,
        marginHorizontal: 13,
        marginVertical: 8,
        borderRadius: 12,
        height: 100
    },
    describe: {
        fontWeight: '300',
        fontSize: 18,
        color: '#000',
        marginHorizontal: 10
    },

})