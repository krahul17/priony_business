import { StyleSheet, ScrollView, StatusBar, View, Text, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import React from 'react'

const WeeklyTest = ({navigation}) => {
    return (
        <>

            <StatusBar backgroundColor="#0006C1" barStyle='light-content' />


            <ScrollView style={styles.container}>
                <View>
                    <View>
                        <Image source={require('../../screen/HomeScreen/assets/logo.png')} style={styles.logo} />
                    </View>

                    <View>
                        <Text style={styles.mainText}>Online IELTS Weekly Test</Text>
                    </View>

                    <View style={styles.border}>

                        <View style={styles.drop}>
                            <Text style={styles.headerText}>
                                Test No.
                            </Text>
                            <View style={styles.category}>
                                <TextInput>101 </TextInput>
                            </View>
                        </View>
                        <View style={styles.drop}>
                            <Text style={styles.headerText}>
                                Test Date
                            </Text>
                            <View style={styles.category}>
                                <TextInput>18-04-2022 </TextInput>
                            </View>
                        </View>
                        <View style={styles.drop}>
                            <Text style={styles.headerText}>
                                Total Student
                            </Text>
                            <View style={styles.category}>
                                <TextInput>2022 </TextInput>
                            </View>
                        </View>
                        <View style={styles.drop}>
                            <Text style={styles.headerText}>
                                Over all Results
                            </Text>
                            <View style={styles.category}>
                                <TextInput>2022 </TextInput>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                            <View style={{ borderWidth: 1, width: '23%', height: 50, borderRadius: 10 }}>
                                <TouchableOpacity>
                                    <View>
                                        <Text style={styles.band}>9 Band</Text>
                                        <Text style={styles.student}>40 Students</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderWidth: 1, width: '23%', height: 50, borderRadius: 10 }}>
                                <TouchableOpacity>
                                    <View>
                                        <Text style={styles.band}>8 Band</Text>
                                        <Text style={styles.student}>150 Students</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderWidth: 1, width: '23%', height: 50, borderRadius: 10 }}>
                                <TouchableOpacity>
                                    <View>
                                        <Text style={styles.band}>7 Band</Text>
                                        <Text style={styles.student}>300 Students</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderWidth: 1, width: '23%', height: 50, borderRadius: 10 }}>
                                <TouchableOpacity>
                                    <View>
                                        <Text style={styles.band}>6 Band</Text>
                                        <Text style={styles.student}>140 Students</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                            <View style={{ borderWidth: 1, width: '23%', height: 50, borderRadius: 10 }}>
                                <TouchableOpacity>
                                    <View>
                                        <Text style={styles.band}>5 Band</Text>
                                        <Text style={styles.student}>40 Students</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderWidth: 1, width: '23%', height: 50, borderRadius: 10 }}>
                                <TouchableOpacity>
                                    <View>
                                        <Text style={styles.band}>4 Band</Text>
                                        <Text style={styles.student}>150 Students</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderWidth: 1, width: '40%', height: 50, borderRadius: 10 }}>
                                <TouchableOpacity>
                                    <View>
                                        <Text style={styles.band}>Blow 4 Band</Text>
                                        <Text style={styles.student}>300 Students</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                          

                        </View>

                    </View>

                    <View style={{backgroundColor:"#0006C1",marginHorizontal:10,marginTop:10,padding:15,borderRadius:13}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('ListofStudent')}>
                            <Text style={{textAlign:'center',fontSize:15,fontWeight:'500',color:'#fff'}}>Post</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

        </>
    )
}

export default WeeklyTest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight,
    },
    logo: {
        marginTop: 10,
        height: 70,
        width: 130
    },
    mainText: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: '500',
        color: '#000',
        marginVertical: 10
    },
    drop: {
        // borderWidth:1,
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    border: {
        borderWidth: 1,
        borderColor: "#0006C1",
        marginHorizontal: 10,
        borderRadius: 12,
        height: 340
    },
    headerText: {
        fontSize: 18,
        // marginHorizontal: 10,
        fontWeight: '600',
        color: "#0006C1",
        marginVertical: 5,

    },
    category: {
        borderBottomWidth: 2,
        width: Dimensions.get('screen').width*0.5,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10,
        marginTop: -3
    },
    band: {
        textAlign: 'center',
        color: '#000',
        fontSize: 15,
        fontWeight: '500'
    },
    student: {
        textAlign: 'center',
        color: '#000',
        fontSize: 12,
        fontWeight: '400'
    },
})