import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, StatusBar, Dimensions } from 'react-native'
import React from 'react'

const Profenssional = ({ navigation }) => {
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

                    </View>

                    <View style={styles.Input}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignSelf:'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Image source={require('../assets/reviews.png')} style={styles.camera} />
                                </View>
                                <View>
                                    <Text style={styles.mainHeader}>PROFENSSIONAL</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    
                    <View style={styles.Input}>
                        <View style={{ justifyContent: 'space-around' }}>
                            <Text style={styles.package}> Package Valid For 1 Month</Text>
                            <Text style={styles.price}> Price - 7000/- + 18% GST</Text>
                        </View>
                    </View>

                    <View style={styles.Border}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot}>.</Text>
                            <Text style={styles.Text}>Full Details : About us, Specialization,
                                Contact Person Name, Designation with Pic, 5 Videos of 10 Mintus each, Office Pics, Yours
                                Certifications, Pervious results, Customers review. </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot}>.</Text>
                            <Text style={styles.Text}>Priony Chat Unlimited. </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot}>.</Text>
                            <Text style={styles.Text}>Priony Notifications Unlimited. </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot}>.</Text>
                            <Text style={styles.Text}>Sell Franchise Unlimited. </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot}>.</Text>
                            <Text style={styles.Text}>Offer Jobs Unlimited. </Text>
                        </View>
                    </View>

                    <View style={styles.Border}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot2}>.</Text>
                            <Text style={styles.Text2}>Bydefult 5 Star Rating  </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot2}>.</Text>
                            <Text style={styles.Text2}>20 Ads Publish in all Areas </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot2}>.</Text>
                            <Text style={styles.Text2}>Listing all Categories </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot2}>.</Text>
                            <Text style={styles.Text2}>Top Listing  </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot2}>.</Text>
                            <Text style={styles.Text2}>Inbound leads From all Areas </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot2}>.</Text>
                            <Text style={styles.Text2}>Intersted Visitor </Text>
                        </View>
                    </View>

                    <View style={styles.Border2}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot}>.</Text>
                            <Text style={styles.Text3}>User's Requirment From all Areas </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot}>.</Text>
                            <Text style={styles.Text3}>My Match Acording to my Specialization from all Areas </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot}>.</Text>
                            <Text style={styles.Text3}>Marketing  Intelligence (Hot Prospects
                                identification through Articial Intelligence) from all Areas </Text>
                        </View>


                    </View>

                    <View style={styles.Border}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot2}>.</Text>
                            <Text style={styles.Text2}>1 Interview Publish in all Areas  </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot2}>.</Text>
                            <Text style={styles.Text2}>Top Banner for 1 Months </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot2}>.</Text>
                            <Text style={styles.Text2}>Lead Share of PR  Customers </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot2}>.</Text>
                            <Text style={styles.Text2}>Discount 10% off on Promosational{'\n'}Events tall</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot2}>.</Text>
                            <Text style={styles.Text2}>Data Share of Online weekly IELTS Test </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dot2}>.</Text>
                            <Text style={styles.Text2}>Hot Area to target Customer </Text>
                        </View>
                    </View>


                    <TouchableOpacity style={styles.Btn}  onPress={() => navigation.navigate('PaymentGateWay')} >
                        <Text style={styles.btn}>Buy Now</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </>
    )
}

export default Profenssional

const styles = StyleSheet.create({
    logo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        marginTop: '10%',
        resizeMode:'contain'
    },
    dot: {
        fontSize: 50,
        marginTop: -40,
        marginLeft: 5,
        color: '#000'
    },
    mainHeader: {
        color: '#000',
        fontWeight: '600',
        fontSize: 20,
        marginTop: 8,
        marginHorizontal: 10,
        // textAlign:'center',
      
    },
    package: {
        color: '#000',
        fontWeight: '500',
        fontSize: 20,
        marginHorizontal: 10,
        textAlign: 'center'
    },
    price: {
        color: '#0006C1',
        fontWeight: '500',
        fontSize: 20,
        marginHorizontal: 10,
        textAlign: 'center',
        marginRight: 25,
        marginTop:15
    },
    dot2: {
        fontSize: 50,
        marginTop: -40,
        marginLeft: 5,
        color: '#0006C1'
    },
    Text: {
        // marginTop:5,
        fontWeight: '500',
        fontSize: 14,
        margin: 5,
        color: '#000',
        width: Dimensions.get('window').width * 0.8,
    },
    Text2: {
        margin: 5,
        fontWeight: '500',
        fontSize: 14,
        color: '#0006C1',
        width: Dimensions.get('window').width * 0.8
    },
    Text3: {
        // marginTop:5,
        fontWeight: '500',
        fontSize: 14,
        margin: 5,
        color: '#000',
        width: Dimensions.get('window').width * 0.8
    },

    camera: {
        width: 34,
        height: 34,
        marginLeft: 1,
    },
    Input: {
        marginHorizontal: 14,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        height: 'auto'
    },
    Border: {
        marginTop: 15,
        borderWidth: 1,
        marginHorizontal: 14,
        borderRadius: 10,
        height: 'auto',
        padding: 2
    },
    Border2: {
        marginTop: 20,
        borderWidth: 1,
        marginHorizontal: 14,
        borderRadius: 10,
        height: 'auto',
        padding: 2
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