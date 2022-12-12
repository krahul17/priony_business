import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,Dimensions, Image, SafeAreaView, ScrollView, Label, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native';
import BaseUrl from '../../../Component/BaseURL/BaseUrl';


const UserRequirement = () => {

    let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNTI3ODI1LCJqdGkiOiJmNGIzOWE2MDE4ZWU0M2M3Yjc0NmU0N2ZmOGJiOTBiZCIsInVzZXJfaWQiOjEwfQ.0m9C02ZpNM5ibIUPbwQMRiseSf9evKxj07F00jiBzGs"


    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    console.log(data, "userdataprofil")
    console.log(data, "mydata")


    useEffect(() => {
        fetch(BaseUrl + '/douryou-seller-api/seller-see-user-your-requrienment/', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + accessToken,
            },
        }).then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) =>
            alert('something went wrong'))
            //  console.error(error,'error'))
            .finally(() => setLoading(false));
            
    }, []);


    const GustData = ({ item }) => {
        return (
            <View style={styles.mainList}>
    
                <TouchableOpacity>
                    <View style={styles.fav}>
                        <Image source={item.img} style={{ height: 40, width: 40 }} />
                    </View>
                </TouchableOpacity>
    
                <View style={{ flexDirection: 'row' }}>
    
                    <View style={styles.Pic}>
                        <Image   source={{ uri: BaseUrl + item.username.frontimage }}  style={styles.pic} />
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
    
                <View>
                    <TouchableOpacity>
                        <View style={styles.Select}>
                            <Text style={styles.selec}> select a Category: {item.select_catgry}</Text>
                           
                        </View>
                    </TouchableOpacity>
                </View>
    
                <View>
                    <View style={styles.Add}>
                        <Text style={styles.add}>
                                {item.title}
                                 </Text>
                    </View>
                </View>
                <View>
                    <View style={styles.Add}>
                        <Text style={styles.add}>{item.phone} </Text>
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
                        <TouchableOpacity>
                            <Image source={require('../../../screen/Lists/assets/chat1.png')} style={{ height: 27, width: 29 }} />
                        </TouchableOpacity>
                    </View>
    
                    <View style={{ marginRight: 10, margin: 2 }}>
                        <TouchableOpacity>
                            <Image source={require('../../../screen/Lists/assets/share.png')} style={{ height: 28, width: 25 }} />
                        </TouchableOpacity>
                    </View>
    
                </View>
    
                <View>
                    <View style={{ backgroundColor: '#0006C1', padding: 10,marginTop:10 }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontWeight: '800', marginLeft: 10 }}>{item.DateTime}</Text>
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
                                    <Image source={require('../../HomeScreen/assets/user.png')} style={styles.ad} />
                                </View>

                                <View style={styles.maintext}>
                                    <Text style={styles.toptext}>User Requirement </Text>
                                </View>

                            </View>
                        </View>

                        <FlatList
                            data={data.UserForms}
                            keyExtractor={username=> username.id}
                            renderItem={({ item, index }) => (<GustData item={item} index={index}></GustData>)}
                        />


                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default UserRequirement;

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
        width:100
    },
    fav: {
       alignSelf:'flex-end'
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
        marginTop:8,
      //   width:Dimensions.get('screen').width/1.1,
      width:280
      },
      dist: {
        fontSize: 15,
        fontWeight: '300',
        color: '#000',
        marginTop:2,
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
        height:50
    },
    add: {
        fontWeight: '300',
        fontSize: 18,
        color: '#000',
        marginTop: 10,
        marginLeft:10
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