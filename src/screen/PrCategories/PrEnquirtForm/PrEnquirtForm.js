import { StyleSheet, Text, View, FlatList, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import BaseUrl from '../../../Component/BaseURL/BaseUrl'


const PrEnquirtForm = ({ navigation }) => {

    let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNzg4Njk5LCJqdGkiOiI0NWE2ZTlmNjUzMmE0YzljOWI5YzE2ODQ2NWQ1NTYzMiIsInVzZXJfaWQiOjJ9.X8ljmYCCzEnJPRs-QsYrmV7l3GDdylMlA7Ukj95mQn0"

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    console.log(data, "userdataprofil")


    function showSellers() {
        console.log(data)
        console.log(data.Sellers)
        // let seller = data.Sellers.map((sell) => {sell.username.first_name}) 
        // console.log(seller)
        // let seller = data.Sellers.map((dt) => dt.username.last_name)
        console.log(seller, 'hello')
    }


    useEffect(() => {
        fetch(BaseUrl + '/douryou-seller-api/seller-see-all-users-enuiiery-forms/', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + accessToken,
            },
        }).then((response) => response.json())
            .then((json) => {

                //    console.log(json.Sellers[0].username.first_name)
                setData(json)
               

            })
            .catch((error) => 
            alert('something went wrong'))
            // console.error(error)),
            .finally(() => setLoading(false));

        // console.log(data.Sellers.first_name, "userdataprofil")
        // console.log('sdfdgffj'seller)

    }, []);



    const Getdata = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => { navigation.navigate('Form',{value: item, value2:item.id}) }}>
                <View style={styles.mainList}>
                    <TouchableOpacity>
                        <View style={styles.fav}>
                            <Image source={require('../../../screen/Lists/assets/fav.png')} style={{ height: 40, width: 40 }} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={styles.Pic}>
                            <Image source={{ uri: BaseUrl + item.username.frontimage}}  style={styles.pic} />
                           
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

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>

                        <View style={{ marginRight: 20, margin: 2 }}>
                            <TouchableOpacity>
                                <Image source={require('../../../screen/Lists/assets/chat1.png')} style={{ height: 26, width: 27 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginRight: 10, margin: 2 }}>
                            <TouchableOpacity>
                                <Image source={require('../../../screen/Lists/assets/share.png')} style={{ height: 23, width: 20 }} />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View>
                        <View style={{ backgroundColor: '#0006C1', padding: 10, marginTop: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 15, fontWeight: '800', }}>{item.date}</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
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
                        <Image source={require('../../HomeScreen/assets/logo.png')} style={styles.Logo} />
                    </View>

                    <View style={styles.Name1}>
                        <View style={styles.topmain}>
                            <View style={styles.topad}>
                                <Image source={require('../../HomeScreen/assets/PR.png')} style={styles.ad} />
                            </View>

                            <View style={styles.maintext}>
                                <Text style={styles.toptext}>Pr Enquiry Form</Text>
                            </View>

                        </View>
                    </View>


                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        
                        data={data.Sellers}
                        keyExtractor={username=> username.id}
                        renderItem={({ item, index }) =>
                            (<Getdata item={item} index={index} navigation={navigation}></Getdata>)} />

                </View>
            </ScrollView>
        </>
    )
}

export default PrEnquirtForm

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