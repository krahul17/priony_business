import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Label, StatusBar, FlatList,
    TouchableOpacity, TextInput, Pressable, Dimensions } from 'react-native';
import React from 'react'


const gustData = [

    {
        id: '1',
        image: require('../assets/cityimage.png'),
        fav: require('../assets/fav.png'),
        chat: require('../assets/chat1.png'),
        share: require('../assets/share.png'),
        City: 'Moga,Punjab',
        date: '',
        duration: '',
        type: '',
        no: '',
    },
    {
        id: '2',
        image: require('../assets/cityimage.png'),
        fav: require('../assets/fav.png'),
        chat: require('../assets/chat1.png'),
        share: require('../assets/share.png'),
        City: 'Moga,Punjab',
        date: '',
        duration: '',
        type: '',
        no: '',
    },



]

const MyEvents = ({navigation}) => {

    return (
        <>
            <StatusBar backgroundColor="#0006C1" barStyle='light-content' />
            <SafeAreaView style={styles.container}>
                <ScrollView >

                    <View>
                     

                        <View style={styles.Name1}>
                            <View style={styles.topmain}>
                                <View style={styles.topad}>
                                    <Image source={require('../assets/book.png')} style={styles.ad} />
                                </View>

                                <Pressable>
                                    <View style={styles.maintext}>
                                        <Text style={styles.toptext}>My Events</Text>
                                    </View>
                                </Pressable>

                            </View>
                        </View>

                        <FlatList
                            // horizontal
                            data={gustData}
                            keyExtractor={item => item.id}
                            renderItem={({item})=>(
                                <View style={styles.mainList}>
                                <TouchableOpacity>
                                    <View style={styles.fav}>
                                        <Image source={item.fav} style={{ height: 50, width: 50 }} />
                                    </View>
                                </TouchableOpacity>
                    
                                <View style={{ flexDirection: 'row' }}>
                    
                                    <View style={styles.Pic}>
                                        <Image source={item.image} style={styles.pic} />
                                    </View>
                    
                                    <View >
                                        <Text style={{ fontSize: 35, fontWeight: '600', color: '#000', }}>{item.City}</Text>
                                    </View>
                    
                    
                    
                                </View>
                                <View style={styles.adress}>
                                    <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >Events Date: </Text>
                                        </View>
                                        <View>
                                            <TextInput style={styles.name}>
                                                {item.date}
                                            </TextInput>
                                        </View>
                                    </View>
                    
                                    <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >Events Duration: </Text>
                                        </View>
                                        <View>
                                            <TextInput style={styles.name}>
                                                {item.duration}
                                            </TextInput>
                                        </View>
                                    </View>
                    
                                    <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >Events Type: </Text>
                                        </View>
                                        <View>
                                            <TextInput style={styles.name}>
                                                {item.type}
                                            </TextInput>
                                        </View>
                                    </View>
                    
                                    <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >No. of Stall: </Text>
                                        </View>
                                        <View>
                                            <TextInput style={styles.name}>
                                                {item.no}
                                            </TextInput>
                                        </View>
                                    </View>
                    
                                </View>
                                <View >
                                    <TouchableOpacity onPress={() => navigation.navigate('ViewVisitor')} style={styles.Btn}>
                                        <Text style={styles.btn}>View Visitor</Text>
                                    </TouchableOpacity>
                                </View>
                    
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10, marginTop: -30 }}>
                    
                                    <TouchableOpacity>
                                        <View style={{ marginRight: 20, margin: 2 }}>
                                            <Image source={item.chat} style={{ height: 30, width: 32 }} />
                                        </View>
                                    </TouchableOpacity>
                    
                                    <TouchableOpacity>
                                        <View style={{ marginRight: 10, margin: 2 }}>
                                            <Image source={item.share} style={{ height: 30, width: 27 }} />
                                        </View>
                                    </TouchableOpacity>
                    
                                </View>
                    
                            </View>

                            )}
                        />


                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default MyEvents

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    logo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        resizeMode:'contain'
    },
    mainList: {
        height: 'auto',
        width: '97%',
        borderWidth: 1,
        marginHorizontal: 7,
        marginVertical: 5,
        borderRadius: 10
    },
    Name1: {
        height: 55,
        width: "97%",
        borderWidth: 3,
        marginVertical: 10,
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
        height: 40,
        width: 40,
    },
    maintext: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
    },
    toptext: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "900",
        color: "#000"
    },
    Pic: {
        marginHorizontal: 15,
    },
    pic: {
        height: 100,
        width: 100
    },
    fav: {
        alignSelf: 'flex-end',
    },
    mainadress: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    adress: {
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        height: 200,
        borderRadius: 15,

    },
    label: {
        marginVertical: 10,
        marginHorizontal: 5,
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
    },
    name: {
        borderBottomWidth: 2,
        width: Dimensions.get('screen').width * 0.5,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    duration: {
        borderBottomWidth: 2,
        width: Dimensions.get('screen').width * 0.5,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    Btn: {
        borderWidth: 1,
        width:Dimensions.get('screen').width*0.3,
        marginTop: 10,
        marginHorizontal: 10,
        padding: 8,
        borderRadius: 10,
        backgroundColor: 'blue'
    },
    btn:{ 
        fontSize: 16,
         fontWeight: '600', 
         color: '#fff' ,
         textAlign:'center'
        }
})