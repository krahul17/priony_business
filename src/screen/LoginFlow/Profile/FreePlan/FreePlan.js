import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, StatusBar } from 'react-native'
import React,{ useState,useContext } from 'react';
import { AuthContext } from '../../../../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../../Component/BaseURL/BaseUrl';
import Loader from '../../../../Component/Loader/Loader';



const FreePlan = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [accessToken, setAccess] = useState(null);

    const {login} =useContext(AuthContext)

    const SaveData = async () => {

      
        const accessToken = await AsyncStorage.getItem("accessToken");
        setAccess(accessToken);
        console.log('jdbfd ',accessToken)
  
        setModalVisible(true)

        const planfree='Buy Freeplan Plan'
  
        let formData = new FormData();

        formData.append('PlaneType', planfree)
  
        fetch(BaseUrl +'/douryou-seller-api/seller-buy-plan/', {
           method: 'Patch',
           headers: {
              "Accept": "application/json",
              "Content-Type": "multipart/form-data",
              'Authorization': 'Bearer ' + accessToken,
           },
           body: formData
        }).then((result) => {
           result.json().then((response) => {
              console.log(response, "Response");
              setModalVisible(false)
              alert('You Choose FREEPLAN')
              login()
             
           }).catch((error) => {
              setModalVisible(false)
              alert(error)
              console.log(error);
           });
        })
     }

    return (
        <>
            <StatusBar
                backgroundColor="#0006C1"
                barStyle={'light-content'} />

            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View>
                    <View style={styles.main}>
                        <View>
                            <Image source={require('../../../assetsLogo/logo.png')} style={styles.logo} />
                        </View>
                        <View>
                            <Text style={styles.wel}> Let's create your profile</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'flex-end', marginRight: 28 }}>
                        
                    </View>

                    <View style={styles.Input}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignSelf:'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Image source={require('../assets/reviews.png')} style={styles.camera} />
                                </View>
                                <View>
                                    <Text style={{ color: '#000', fontWeight: '600', fontSize: 16, marginTop: 9, marginHorizontal: 10 }}> Buy Your Plans</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={{ borderWidth: 4, borderColor: '#0006C1', height: 310, marginHorizontal: 12, marginTop: 20 }}>

                        <View>
                            <Text style={styles.plan}>FREEPLAN</Text>
                        </View>
                        <View>
                            <Text style={{ borderBottomWidth: 2, marginHorizontal: 20, paddingBottom: 15, color: '#646464', fontWeight: '500' }}>Your plan expires on
                            </Text>
                        </View>
                        <View style={{ marginVertical: 40, marginHorizontal: 20, }}>
                            <Text style={{ borderBottomWidth: 2, paddingBottom: 15, color: '#000', fontWeight: '600', fontSize: 25, paddingLeft: 60 }}>Ads*
                            </Text>
                        </View>

                        <View>
                            <Text style={{ fontWeight: '500', fontSize: 15, fontStyle: 'italic', paddingLeft: 30, color: '#000' }}> 7 days Trail  Plan </Text>
                        </View>

                    </View>

                    <TouchableOpacity onPress={SaveData} style={styles.Btn}>
                        <Text style={styles.btn}>Submit</Text>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.or}>OR</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('AllPlanList')} style={styles.Btn}>
                        <Text style={styles.btn2}> Upgrade Plan</Text>
                    </TouchableOpacity>

                    <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />


                </View>
            </ScrollView>
        </>
    )
}

export default FreePlan

const styles = StyleSheet.create({
    logo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        marginTop: '10%',
        resizeMode:'contain'
    },
    wel: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 25,
        color: '#000000',
        fontWeight: '600'
    },
    skip: {
        borderWidth: 1,
        padding: 5,
        width: 50,
        textAlign: 'center',
        backgroundColor: '#0006C1',
        color: '#fff',
        fontWeight: '500',
        fontSize: 16,
        borderRadius: 5
    },
    border: {
        padding: 4,
        marginLeft: 95,
        position: 'absolute',
        zIndex: 1,
        marginTop: 99
    },
    camera: {
        width: 34,
        height: 34,
        marginLeft: 1,
    },
    border: {
        width: 120,
        height: 120,
        borderWidth: 1,
    },
    borderdelete: {
        marginLeft: 90,
        position: 'absolute',
        zIndex: 1,
    },
    delete: {
        width: 50,
        height: 50,
        marginLeft: 1,
    },
    Input: {
        // marginHorizontal: 20,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center'
    },
    input: {
        marginBottom: 10,
        color: '#969696',
        fontSize: 17,
        fontWeight: '600',
        borderBottomWidth: 1
    },
    plan: {
        color: '#02043F',
        fontWeight: '600',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 30
    },
    or: {
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 1,
        color: '#000'
    },
    Btn: {
        alignItems: 'center',
        marginVertical: 30
    },
    btn: {
        backgroundColor: '#0006C1',
        paddingHorizontal: 90,
        paddingVertical: 15,
        color: '#FFFFFF',
        fontSize: 25,
        borderRadius: 15,
        fontWeight: "600"
    },
    btn2: {
        backgroundColor: '#0006C1',
        paddingHorizontal: 60,
        paddingVertical: 15,
        color: '#FFFFFF',
        fontSize: 25,
        borderRadius: 15,
        fontWeight: "600"
    },
})