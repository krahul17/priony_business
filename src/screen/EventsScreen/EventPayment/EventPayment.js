import { StyleSheet, SafeAreaView, Text, View, StatusBar, Linking,Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'



const EventPayment = ({ navigation,route }) => {
    const {plan,finalamount,item}=route.params

    console.log(item,'item')

    const upiUrl ='upi://pay?pa=sadevraprince@oksbi&pn=sukhpreetsingh&tn=Note&am=7000&cu=INR'
    const upiOpener = () => {
        Linking.openURL(upiUrl)
    }
    return (
        <>
            <StatusBar
                backgroundColor="#0006C1"
                barStyle={'light-content'} />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                    <View>
                        <View>
                            <Image source={require('../assets/logo.png')} style={styles.img} />
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                                <Text style={styles.text}> Payment Gateway</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.textonly}> Your Plan</Text>

                            <View style={styles.planchoose}>
                                <Text style={styles.textplan}> You Choose </Text>
                                <Text style={styles.textplan2}> : {plan}</Text>
                            </View>

                            <View style={styles.planchoose}>
                                <Text style={styles.textplan}> Plan Amount </Text>
                                <Text style={styles.textplan2}>: {finalamount}</Text>
                            </View>

                        </View>
                        <View style={styles.nameBeneficier}>
                            <Text style={styles.textplan}> Sukhpreet Singh</Text>
                            <Text style={styles.textplan}> State Bank of India</Text>
                            <Text style={styles.textplan}> Sector 46C, Chandigarh</Text>
                            <Text style={styles.textplan}> 65007574500</Text>
                            <Text style={styles.textplan}>IFSC CODE - SBIN0050825 </Text>
                            <Text style={styles.textplan}>-------------OR------------- </Text>
                            <Text style={styles.textplan}>Google Pay No. : 9915327780 </Text>

                        </View>
                        <View>
                            {/* <Image source={require('../assets/cityimage.png')} style={styles.qrimg} /> */}
                        </View>

                    </View>
                    
                     <TouchableOpacity style={styles.Btn} onPress={()=>upiOpener()} 
                    //   onPress={() => navigation.navigate('PassConfirm')}
                      >

                        <Text style={styles.btn}> Payment </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Btn}  onPress={() => navigation.navigate('PassConfirm',{item})}>

                        <Text style={styles.btn}> Next </Text>

                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default EventPayment

const styles = StyleSheet.create({
    img: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        marginVertical: '2%',
        resizeMode:"contain"
    },
    text: {
        color: '#000',
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '3%',

    },
    textonly: {
        padding: 20,
        color: '#000',
        fontSize: 15,
        fontWeight: '600',
    },
    planchoose: {
        flexDirection: 'row',
        paddingLeft: 20,

    },
    textplan: {
        color: '#000',
        fontSize: 15,
        fontWeight: '600',
        marginTop: '1%',
    },
    textplan2: {
        color: '#000',
        fontSize: 14,
        fontWeight: '500',
        marginTop: '1%',
    },
    nameBeneficier: {
        // flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    qrimg: {
        width: '80%',
        height: 400,
        alignSelf: 'center',
        marginVertical: '2%'

    },
    Btn: {
        alignItems: 'center',
        marginVertical: 20,

    },
    btn: {
        backgroundColor: '#0006C1',
        paddingHorizontal: 100,
        paddingVertical: 15,
        color: '#FFFFFF',
        fontSize: 25,
        borderRadius: 15,
        fontWeight: "600"
    },
})