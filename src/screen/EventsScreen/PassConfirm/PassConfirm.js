import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar, } from 'react-native';



const PassConfirm = () => {

    return (<>

        <StatusBar
            backgroundColor="#0006C1"
            barStyle={'light-content'} />
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View>
                    <View>
                        <Image source={require('../../assetsLogo/logo.png')}
                            style={styles.mainlogo} />
                    </View>

                    {/*  card start  */}


                    <View style={styles.submain}>
                        <View style={styles.row}>
                            <View atyle={styles.mainimg}>
                                <Image source={require('../../EventsScreen/assets/cityimage.png')} style={styles.cityimg}/>
                            </View>
                            <View style={styles.maintext}>
                                <Text style={styles.maintext1}>Moga, Punjab</Text>
                            </View>
                            <View style={styles.maincityimg1}>
                                {/* <Image source={require('../assets/favourite.png')} style={styles.cityimg1}/> */}
                            </View>
                        </View>
                        <View style={styles.heading}>
                            <Text style={styles.headingtext}>Book My Pass</Text>
                        </View>

                        <View style={styles.congrat}>
                            <Text style={styles.hennyfont}>CONGRATULATIONS</Text>
                            <Text style={styles.italicfont}>Mr. KAMALDEEP SINGH</Text>
                        </View>

                        <View style={styles.entryfont}>
                            <Text style={styles.font}>Your Entry PASS will Be</Text>
                            <Text style={styles.font}>Confirmed With ID Number</Text>
                            <Text style={styles.font}>MOGA/15/08/2022/635</Text>
                        </View>

                        <View style={styles.showfont}>
                            <Text style={styles.font1}>please Show this Pass</Text>
                            <Text style={styles.font1}>on Entry Time</Text>
                        </View>


                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    </>
    )
}
export default PassConfirm;
;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainlogo: {
        width:'70%',
        height:160,
        alignSelf:'center',
        // marginVertical:10,
        resizeMode:"contain"
    },
    submain: {
        height: 450,
        width: '97%',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#000000",
        marginHorizontal: 5,
        marginTop: 35,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 70,
        width: "99%",
        marginTop: 5,
    },
    cityimg: {
        height: 60,
        width: 67,
    },
    maintext1: {
        color: "#000000",
        fontSize: 30,
        fontWeight: "600",
    },
    cityimg1: {
        height: 42,
        width: 42,
    },
    heading: {
        height: 30,
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#0006C1",
        marginTop: 3,
    },
    headingtext: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff",
        textAlign: "center",
    },
    input: {
        marginLeft: 15,
        marginTop: 10,
    },
    congrat: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    hennyfont: {
        fontSize: 25,
        fontWeight: "400",
        // fontFamily:"henny-penny",
        fontStyle: "italic",
    },
    italicfont: {
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "italic",
    },
    entryfont: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },
    font: {
        fontSize: 20,
        fontWeight: "600",
    },
    showfont: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
    },
    font1: {
        fontSize: 14,
        fontWeight: "500",
    }




})