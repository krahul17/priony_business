import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Label, StatusBar, FlatList, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput';


const gustData = [

    {
        id: '1',
        image: require('../../EventsScreen/assets/cityimage.png'),
        fav: require('../../EventsScreen/assets/fav.png'),
        chat: require('../../EventsScreen/assets/chat1.png'),
        share: require('../../EventsScreen/assets/share.png'),
        City: 'Moga',
        State: 'Punjab',
        date: '',
        adress: ' ',
        company: '',
        contact: '',
        desigation: '',
        no: '',
        size: '',
        rent: '',
    },


]



const EventSecond = ({ navigation }) => {

  

    return (
        <>
            <StatusBar backgroundColor="#0006C1" barStyle='light-content' />
            <SafeAreaView style={styles.container}>
                <ScrollView >

                    <View>
                        {/* <View style={styles.mainlogo}>
                            <Image source={require('../../EventsScreen/assets/logo.png')} style={styles.logo} />
                        </View> */}

                        <View style={styles.Name1}>
                            <View style={styles.topmain}>
                                <View style={styles.topad}>
                                    <Image source={require('../../EventsScreen/assets/book.png')} style={styles.ad} />
                                </View>

                                <View style={styles.maintext}>
                                    <Text style={styles.toptext}>Book Event</Text>
                                </View>

                            </View>
                        </View>

                        <FlatList
                            // horizontal
                            data={gustData}
                            keyExtractor={item => item.id}
                            renderItem={({item}) =>(
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
                    
                                  <View>
                                  <View style={{ marginTop: 10 }}>
                                        <Text style={{ fontSize: 25, fontWeight: '600', color: '#000' }}>{item.City}</Text>
                                    </View>
                                  <View >
                                        <Text style={{ fontSize: 25, fontWeight: '600', color: '#000' }}>{item.State}</Text>
                                    </View>
                                  </View>
                    
                    
                                </View>
                    
                                <View style={{ marginHorizontal: 10 }}>
                                    <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >Event Date: </Text>
                                        </View>
                                        <View>
                                            <Text style={styles.name}>
                                                {item.date}
                                            </Text>
                                        </View>
                                    </View>
                    
                                    <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >Event adress: </Text>
                                        </View>
                                        <View>
                                            <Text style={styles.name}>
                                                {item.adress}
                                            </Text>
                                            <Text style={styles.name}>
                                                {item.adress}
                                            </Text>
                    
                                        </View>
                                    </View>
                                </View>
                    
                                <View style={styles.adress}>
                                    {/*  */}
                                    <CustomTextInput label={'Enter Company Name'}/> 
                                    <CustomTextInput label={'Enter Adress'}/>
                                    <CustomTextInput label={'Enter Contact Parson'}/>
                                    <CustomTextInput label={'Enter Desigation'}/>
                                    <CustomTextInput label={'Enter Contact Number'}/>
                                   {/* <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >Company Name: </Text>
                                        </View>
                                        <View>
                                            <Text style={styles.name}>
                                                {item.company}
                                            </Text>
                                        </View>
                                    </View>
                    
                                    <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >Adress: </Text>
                                        </View>
                                        <View>
                                            <Text style={styles.Adress}>
                                                {item.adress}
                                            </Text>
                                            <Text style={styles.Adress}>
                                                {item.adress}
                                            </Text>
                                        </View>
                                    </View>
                     */}
                                  {/*  <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >Contact Parson: </Text>
                                        </View>
                                        <View>
                                            <TextInput style={styles.name}>
                                                {item.type}
                                            </TextInput>
                                        </View>
                                    </View>
                    
                                    <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >Desigation: </Text>
                                        </View>
                                        <View>
                                            <TextInput style={styles.name}>
                                                {item.desigation}
                                            </TextInput>
                                        </View>
                                    </View>
                    
                                    <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >Contact No: </Text>
                                        </View>
                                        <View>
                                            <TextInput style={styles.name}>
                                                {item.contact}
                                            </TextInput>
                                        </View> */}
                                    {/* </View> */}
                    
                                </View>
                    
                                <View style={{ marginHorizontal: 10 }}>
                                    <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >Size of Stall </Text>
                                        </View>
                                        <View>
                                            <TextInput style={styles.name}>
                                                {item.size}
                                            </TextInput>
                                        </View>
                                    </View>
                    
                                    <View style={styles.mainadress}>
                                        <View>
                                            <Text style={styles.label} >Rent of Stall </Text>
                                        </View>
                                        <View>
                                            <TextInput style={styles.name}>
                                                {item.rent}
                                            </TextInput>
                    
                                        </View>
                                    </View>
                                </View>
                    
                                <TouchableOpacity onPress={() => navigation.navigate('EventPayment')}>
                                    <View style={styles.Btn}>
                                        <Text style={styles.btn}>Book My Stall</Text>
                                    </View>
                                </TouchableOpacity>
                    
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10, marginTop: -45 }}>
                    
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

export default EventSecond;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    mainlogo: {
        alignItems: 'center',
        justifyContent: "center",
        marginVertical: 40,
    },
    logo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',

    },
    mainList: {
        height: 'auto',
        width: '97%',
        borderWidth: 3,
        marginHorizontal: 7,
        marginVertical: 20,
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
        height: 38,
        width: 36,
    },
    maintext: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 25,
        // marginRight:25,
    },
    toptext: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        color: "#000"
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
        // marginVertical: 30,
        marginHorizontal: 15,
        marginTop: 15,
       
    },
    pic: {
        height: 100,
        width: 100
    },
    fav: {
        alignSelf: 'flex-end'
    },
    mainadress: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    adress: {
        borderWidth: 3,
        marginVertical: 10,
        marginHorizontal: 10,
        height: 'auto',
        borderRadius: 15
    },
    label: {
        marginVertical: 10,
        marginHorizontal: 5,
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
    },
    name: {
        borderBottomWidth: 2,
        width: Dimensions.get('screen').width * 0.50,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    Adress: {
        borderBottomWidth: 2,
        width: Dimensions.get('screen').width * 0.65,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    duration: {
        borderBottomWidth: 2,
        width: 230,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    Btn: {
        backgroundColor: '#0006C1',
        width: '45%',
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 12,
        marginVertical: 20
    },
    btn: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
    }
})
