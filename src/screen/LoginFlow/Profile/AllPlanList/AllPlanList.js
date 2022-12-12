import { ScrollView, StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const AllPlanList = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <View style={styles.main}>
                    <View>
                        <Image source={require('../assets/logo.png')} style={styles.logo} />
                    </View>
                    <View>
                        <Text style={styles.wel}>Business Plan </Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Profenssional')} style={styles.border}>

                    <View style={styles.Input}>
                        <View style={styles.Top}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Image source={require('../assets/reviews.png')} style={styles.camera} />
                                </View>
                                <View>
                                    <Text style={styles.mainText}>PROFENSSIONAL</Text>
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

                   
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('PlanComingSoon')} style={styles.border}>

                    <View style={styles.Input}>
                        <View style={styles.Top}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Image source={require('../assets/reviews.png')} style={styles.camera} />
                                </View>
                                <View>
                                    <Text style={styles.mainText}> BUSINESS</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={styles.Input}>
                        <View style={{ justifyContent: 'space-around' }}>
                            <Text style={styles.package}> Package Valid For 1 Month</Text>
                            <Text style={styles.price}> Price - 5000/- + 18% GST</Text>
                        </View>
                    </View>

                    

                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('PlanComingSoon')} style={styles.border}>

                    <View style={styles.Input}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Image source={require('../assets/reviews.png')} style={styles.camera} />
                                </View>
                                <View>
                                    <Text style={styles.mainText}> ULTIMATE</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={styles.Input}>
                        <View style={{ justifyContent: 'space-around' }}>
                            <Text style={{ color: '#000', fontWeight: '500', fontSize: 20, marginHorizontal: 10, textAlign: 'center' }}> Package Valid For 1 Month</Text>
                            <Text style={{ color: '#0006C1', fontWeight: '500', fontSize: 20, marginHorizontal: 10, textAlign: 'center', marginRight: 25 }}> Price - 3000/- + 18% GST</Text>
                        </View>
                    </View>

                   

                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default AllPlanList

const styles = StyleSheet.create({
    logo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        marginTop: '10%'
    },
    wel: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 25,
        color: '#000000',
        fontWeight: '600'
    },
    border: {
        borderWidth: 2,
        borderColor:'#0006C1',
        height: 'auto',
        width: '96%',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    Top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Input: {
        marginHorizontal: 14,
        marginBottom:10,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        height: 65
    },
    camera: {
        width: 34,
        height: 34,
        marginLeft: 1,
    },
    mainText: {
        color: '#000',
        fontWeight: '600',
        fontSize: 20,
        marginTop: 8,
        marginHorizontal: 10
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
    Border: {
        marginVertical: 15,
        borderWidth: 1,
        marginHorizontal: 14,
        borderRadius: 10,
        height: 'auto',
        padding: 2
    },
    dot2: {
        fontSize: 50,
        marginTop: -35,
        marginLeft: 5,
        color: '#0006C1'
    },
    Text2: {
        margin: 5,
        fontWeight: '500',
        fontSize: 15,
        color: '#0006C1'
    },
    Text: {
        fontWeight: '500',
        fontSize: 13,
        margin: 5,
        color: '#000',
        width: Dimensions.get('window').width / 2
    },
})