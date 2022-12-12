import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity,Linking } from 'react-native';
import React from 'react'
const HelpSupport = () => {
    const url = "https://www.excellencetechnology.in/privacy-policy/";
    return (
        <>
            <StatusBar
                backgroundColor="#0006C1"
                barStyle={'light-content'} />
            <ScrollView style={styles.container}>
                <View>
                    <View>
                        <Image source={require('../../screen/assetsLogo/logo.png')} style={styles.mainlogo} />
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', color: '#000', fontSize: 20, fontWeight: 'bold' }}>Follow us on</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: '10%' }}>
                        <TouchableOpacity  onPress={() => Linking.openURL('http://www.douryou.com/our-privacy-policy/')}>
                            <Image source={require('./assets/website.png')} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image source={require('./assets/FBicon.png')} style={styles.fbicon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./assets/TWiter.png')} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image source={require('./assets/Instagram.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text  style={{ textAlign: 'center', color: '#000', fontSize: 20, fontWeight: 'bold',marginVertical:45 }}>Or</Text>
                    </View>
                    <View>
                        <Text  style={{ textAlign: 'center', color: '#000', fontSize: 20, fontWeight: 'bold',marginVertical:20 }}>Chat us on</Text>
                    </View>
                    <TouchableOpacity style={{alignSelf:'center'}}>
                            <Image source={require('./assets/message.png')} style={styles.chat} />
                        </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}
export default HelpSupport
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    mainlogo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        resizeMode:'contain'
    },
    comingmain: {
        flexDirection: "row",
        height: 55,
        width: 374,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 280,
    },
    comingfirst: {
        fontSize: 43,
        color: "#000000",
        marginLeft: 50
    },
    comingsecond: {
        fontSize: 23,
        color: "#000000",
        marginTop: 5
    },
    icon: {
        width: 60,
        height: 60
    },
    fbicon: {
        width: 80,
        height: 80,
        marginTop: -10
    },
    chat: {
        width: 72,
        height: 70,
        marginTop: 20
    },
})