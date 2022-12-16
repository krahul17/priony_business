import { StyleSheet, Text, View, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const InterstedVistor = ({ navigation }) => {
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
                            <Image source={require('../HomeScreen/assets/vistor.png')} style={styles.ad} />
                        </View>

                        <View style={styles.maintext}>
                            <Text style={styles.toptext}>Intersted Vistors</Text>
                        </View>

                    </View>
                </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Ielts')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/ilets.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>ILETS</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Passport')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Passport.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Passport</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>


                        <TouchableOpacity onPress={() => navigation.navigate('StudyVisa')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/read.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Study Visa</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Education')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Loan.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Education Loan </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('AirTicket')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/AirTicket.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Air Ticket</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Insurance')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Insurance.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Travel Insurance</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>




                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>



                        <TouchableOpacity onPress={() => navigation.navigate('Money')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Money.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Money Exchange </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AirPort')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/airport.png')} style={{ width: 70, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Transportation for Airport</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>


                        <TouchableOpacity onPress={() => navigation.navigate('Accomodation')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Accom.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Accommoda-{'\n'} tion at Abroad</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('JobAbroad')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/JobAbroad.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Jobs at{'\n'} Abroad </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>




                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Tour')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/TourTravel.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Tour & Travel{'\n'}Package</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('WorkPermit')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Permit.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Work Permit</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('PR')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/PR.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}> Permanent{'\n'}Resident</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('TouristVisa')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Tourist.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Tourist & Business{'\n'}visa </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>




                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Courier')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Internation.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>International{'\n'}Courier </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/LegalAdv.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Legal Advisor</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 5 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('CommingSoon')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/classroom.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Onliine IELTS{'\n'}Class  </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('CommingSoon')}>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/weekly.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Online Weekly{'\n'}IELTS Test </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default InterstedVistor

const styles = StyleSheet.create({
    Logo: {
        // color: '#D1070A',
        marginTop: 10,
        height: 50,
        width: 90
    },
    Name1: {
        height: 55,
        width: "92%",
        borderWidth: 3,
        marginVertical: 10,
        // marginHorizontal: 7,
        borderRadius: 10,
        borderColor: '#000000',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        alignSelf:'center'
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
    vistor: {
        textAlign: 'center',
        color: '#000',
        fontSize: 30,
        fontWeight: '900'
    },
    box: {
        borderWidth: 3,
        borderRadius: 12,
        height: 170,
        width: Dimensions.get('screen').width * 0.45,
    },
    text: {
        textAlign: 'center',
        color: "#000",
        fontSize: 18,
        fontWeight: '900'
    },
})