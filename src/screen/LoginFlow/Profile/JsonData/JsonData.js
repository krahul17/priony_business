import React, { useState } from 'react';
import { ScrollView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, TouchableOpacity } from 'react-native';




const JsonData = ({ navigation }) => {

    const data = [
        {
            id: "1",
            // img: require('../../Profile/assets/reviews.png'),
            header: 'PORFENSSIONAL',
            header2: 'Package Valid For 1 Month',
            header3: 'Price - 7000/- + 18% GST',
            dot: '.',
            text: ' Full Details : About us, Specialization, Contact Person Name, Deshigation with Pics, 5 Videos of 10 Mintus each,Office Pics, Yours certifications, Previous results & Customers reviews.',
            text1: 'Douryou Chat Unlimited',
            text2: 'Douryou Notifications Unlimited',
            text3: 'Sell Franchise Unlimited',
            text4: "Offer Jobs Unlimited",

            text5: 'Bydefult 5 Star Rating ',
            text6: '20 Ads Publish in all Area’s',
            text7: ' Listing all Categories ',
            text8: 'Top Listing Inbound leads From all Area’s ',
            text9: "Inbound leads From all Area’s",
            text10: 'Intersted Visitor',

            name11: 'User’s Requirments From all Area’s',
            name12: 'My Match Acording to my Specialzation form all Area’s',
            name13: 'Marketing Intelligence(Hot Prospects Identification through Artificial Intelligence) from all Area’s',

            name14: 'Interview Publish in all Area’s ',
            name15: 'Top Banner for 1 Months',
            name16: 'Lead Share of PR Customers',
            name17: 'Data Share of online weekly IELTS Test',
            name18: 'Discount 10% off on promosational Events stall Hot',
            name19: 'Area to target Customers',
            btn: 'Buy now'

        },
        {
            id: "2",
            // img: require('../../Profile/assets/reviews.png'),
            header: 'BUSINESS',
            header2: 'Package Valid For 1 Month',
            header3: 'Price - 5000/- + 18% GST',
            dot: '.',
            text: ' Full Details : About us, Specialization, Contact Person Name, Deshigation with Pics, 5 Videos of 10 Mintus each,Office Pics, Yours certifications, Previous results & Customers reviews.',
            text1: 'Douryou Chat Unlimited',
            text2: 'Douryou Notifications Unlimited',
            text3: 'Sell Franchise Unlimited',
            text4: "Offer Jobs Unlimited",



            text5: 'Bydefult 4 Star Rating ',
            text6: '10 Ads Publish in all Area’s',
            text7: ' Listing in 4 Categories ',
            text8: ' Middle Listing',
            text9: "Inbound leads From all Area’s",
            text10: 'Intersted Visitor',

            name11: 'User’s Requirments From all Area’s',
            name12: 'My Match Acording to my Specialzation form all Area’s',
            name13: 'Marketing Intelligence(Hot Prospects Identification through Artificial Intelligence) from all Area’s',
            name14: 'none ',
            name15: 'none ',
            name16: 'none ',
            name17: 'none ',
            name18: 'none ',
            name19: 'none',
            btn: 'Buy now'


        },
        {
            id: "3",
            // img: require('../../Profile/assets/reviews.png'),
            header: 'ULTIMATE',
            header2: 'Package Valid For 1 Month',
            header3: 'Price - 3000/- + 18% GST',
            dot: '.',
            text: ' Full Details : About us, Specialization, Contact Person Name, Deshigation with Pics, 5 Videos of 10 Mintus each,Office Pics, Yours certifications, Previous results & Customers reviews.',
            text1: 'Douryou Chat Unlimited',
            text2: 'Douryou Notifications Unlimited',
            text3: 'Sell Franchise Unlimited',
            text4: "Offer Jobs Unlimited",

            text5: 'Bydefult 3 Star Rating ',
            text6: '5 Ads Publish in all Area’s',
            text7: ' Listing all Categories ',
            text8: ' Listing',
            text9: "Inbound leads From all Area’s",
            text10: 'Intersted Visitor',

            name11: 'none',
            name12: 'none',
            name13: 'none',
            name14: 'none ',
            name15: 'none ',
            name16: 'none ',
            name17: 'none ',
            name18: 'none ',
            name19: 'none',

            btn: 'Buy now'

        },


    ]

    const [imageActive, setimageActive] = useState(0)
    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imageActive) {
                setimageActive(slide);
            }
        }
    }

    return (
        <ScrollView style={styles.container}>

            <ScrollView onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal style={styles.wrap}>
                {data.map((e, index) =>


                    <View>
                        <View style={styles.Input}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <Image source={require('../assets/reviews.png')} style={styles.camera} />
                                    </View>
                                    <View>
                                        <Text style={styles.mainHeader}>{e.header}</Text>
                                    </View>
                                </View>

                            </View>


                        </View>

                        <View style={styles.Input}>
                            <View style={{ justifyContent: 'space-around' }}>
                                <Text style={styles.package}>{e.header2}</Text>
                                <Text style={styles.price}>{e.header3}</Text>
                            </View>
                        </View>

                        <View style={styles.Border}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot}>{e.dot}</Text>
                                <Text style={styles.Text}>{e.text}</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot}>{e.dot}</Text>
                                <Text style={styles.Text}>{e.text1} </Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot}>{e.dot}</Text>
                                <Text style={styles.Text}>{e.text2}</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot}>{e.dot}</Text>
                                <Text style={styles.Text}>{e.text3}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot}>{e.dot}</Text>
                                <Text style={styles.Text}>{e.text4}</Text>
                            </View>
                        </View>

                        <View style={styles.Border}>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot2}>{e.dot}</Text>
                                <Text style={styles.Text2}>{e.text5}</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot2}>{e.dot}</Text>
                                <Text style={styles.Text2}>{e.text6}</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot2}>{e.dot}</Text>
                                <Text style={styles.Text2}>{e.text7}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot2}>{e.dot}</Text>
                                <Text style={styles.Text2}>{e.text8}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot2}>{e.dot}</Text>
                                <Text style={styles.Text2}>{e.text9}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot2}>{e.dot}</Text>
                                <Text style={styles.Text2}>{e.text10}</Text>
                            </View>
                        </View>

                        {/* {e.name11 != 'none' ? */}

                            <View style={styles.Border2}>
                                {e.name11 != 'none' ?
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.dot}>{e.dot}</Text>
                                        <Text style={styles.Text3}>{e.name11}</Text>
                                    </View>
                                    :
                                    <View></View>
                                }
                                {e.name12 != 'none' ?
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.dot}>{e.dot}</Text>
                                        <Text style={styles.Text3}>{e.name12}</Text>
                                    </View>
                                    :
                                    <View></View>
                                }
                                {e.name13 != 'none' ?
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.dot}>{e.dot}</Text>
                                        <Text style={styles.Text3}>{e.name13}</Text>
                                    </View>
                                    :
                                    <View></View>
                                }

                            </View>
                            {/* :
                            <View></View>
                        } */}

                            <View style={styles.Border2}>
                                {e.name11 != 'none' ?
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.dot}>{e.dot}</Text>
                                        <Text style={styles.Text3}>{e.name11}</Text>
                                    </View>
                                    :
                                    <View></View>
                                }
                                {e.name15 != 'none' ?
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.dot}>{e.dot}</Text>
                                        <Text style={styles.Text3}>{e.name15}</Text>
                                    </View>
                                     :
                                    <View></View>
                                } 
                                {e.name13 != 'none' ?
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.dot}>{e.dot}</Text>
                                        <Text style={styles.Text3}>{e.name13}</Text>
                                    </View>
                                    :
                                    <View></View>
                                }

                            </View>


                      


                    </View>

                    


                )}
            </ScrollView>


            <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('PaymentGateWay')}>
                <Text style={styles.btn}>Buy Now</Text>
            </TouchableOpacity>

        </ScrollView >
    );
}
const styles = StyleSheet.create({
    logo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        marginTop: '10%'
    },
    dot: {
        fontSize: 50,
        marginTop: -35,
        marginLeft: 5,
        color: '#000'
    },
    mainHeader: {
        color: '#000',
        fontWeight: '600',
        fontSize: 20,
        marginTop: 8,
        marginHorizontal: 10,

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
        marginRight: 25
    },
    dot2: {
        fontSize: 50,
        marginTop: -35,
        marginLeft: 5,
        color: '#0006C1'
    },
    Text: {
        fontWeight: '500',
        fontSize: 14,
        margin: 5,
        color: '#000',
        width: Dimensions.get('window').width * 0.7,
    },
    Text2: {
        margin: 5,
        fontWeight: '500',
        fontSize: 14,
        color: '#0006C1',
        width: Dimensions.get('window').width * 0.7
    },
    Text3: {
        fontWeight: '500',
        fontSize: 14,
        margin: 5,
        color: '#000',
        width: Dimensions.get('window').width * 0.7
    },
    camera: {
        width: 34,
        height: 34,
        marginLeft: 1,
    },
    Input: {
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.80,
        alignSelf: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        height: 65,
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center'

    },
    Border: {
        width: Dimensions.get('window').width * 0.80,
        marginTop: 15,
        borderWidth: 1,
        marginLeft: 20,
        borderRadius: 10,
        height: 'auto',
        padding: 2,
        marginVertical: 10
    },
    Border2: {
        width: Dimensions.get('window').width * 0.80,
        marginTop: 15,
        borderWidth: 1,
        marginLeft: 20,
        borderRadius: 10,
        height: 'auto',
        padding: 2
    },

    Btn: {
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20
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
});
export default JsonData;