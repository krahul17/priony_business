import { StyleSheet, ScrollView, StatusBar,FlatList, View, Text, Pressable, TextInput, TouchableOpacity, Image } from "react-native";
import React from 'react'
import MyMatch from "../../LoginFlow/MyMatch/MyMatch";
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
const ViewVisitor = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor="#0006C1" barStyle='light-content' />
            <ScrollView style={styles.container}>
              
                <View style={styles.Name1}>
                    <View style={styles.topmain}>   
                        <Pressable>
                            <View style={styles.maintext}>
                                <Text style={styles.toptext}>Total Visitor  20000</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <FlatList
                    // horizontal
                    data={gustData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                            <View style={styles.border}>
                                <View style={styles.drop}>
                                    <Text style={styles.headerText}>
                                        Name
                                    </Text>
                                    <View style={styles.category}>
                                        <TextInput>101 </TextInput>
                                    </View>
                                </View>
                                <View style={styles.drop}>
                                    <Text style={styles.headerText}>
                                        Father Name
                                    </Text>
                                    <View style={styles.categoryfather}>
                                        <TextInput>18-04-2022 </TextInput>
                                    </View>
                                </View>
                                <View style={{ paddingLeft: 20 }}>
                                    <Text style={styles.headerText}>
                                        Address
                                    </Text>
                                </View>
                                <View style={styles.drop}>
                                    <View style={styles.address}>
                                        <TextInput >2022 </TextInput>
                                    </View>
                                </View>
                                <View style={styles.drop}>
                                    <Text style={styles.headerText}>
                                        Mobile No.
                                    </Text>
                                    <View style={styles.category}>
                                        <TextInput>2022 </TextInput>
                                    </View>
                                </View>
                                <View style={styles.drop}>
                                    <Text style={styles.headerText}>
                                        Email- Id
                                    </Text>
                                    <View style={styles.category}>
                                        <TextInput>2022 </TextInput>
                                    </View>
                                </View>
                                <View style={styles.drop}>
                                    <Text style={styles.headerText}>
                                        Qualification
                                    </Text>
                                    <View style={styles.category}>
                                        <TextInput>2022 </TextInput>
                                    </View>
                                </View>
                                <View style={styles.drop}>
                                    <Text style={styles.headerText}>
                                        Interests
                                    </Text>
                                    <View style={styles.category}>
                                        <TextInput>2022 </TextInput>
                                    </View>
                                </View>
                                <View style={styles.drop}>
                                    <View style={styles.address}>
                                        <TextInput >2022 </TextInput>
                                    </View>
                                </View>
                                <View style={styles.dropLast}>
                                    <View style={{ marginLeft: 25 }}>
                                        <Image source={require('../assets/chat1.png')} style={{ height: 24, width: 24, marginVertical: 10, marginHorizontal: 10 }} />
                                    </View>
                                    <View>
                                        <Image source={require('../assets/share.png')} style={{ height: 24, width: 24, marginVertical: 10, marginHorizontal: 10 }} />
                                    </View>
                                </View>
                            </View>
                    )} />
            </ScrollView>
        </>
    )
}
export default ViewVisitor
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // marginTop: StatusBar.currentHeight,
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
        height: 65,
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
        marginVertical: 15
    },
    maintext: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
    },
    toptext: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "900",
        color: "#000"
    },
    drop: {
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    dropLast: {
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    headerTextLast: {
        fontSize: 14,
        fontWeight: '600',
        color: "#0006C1",
        padding: 15,
    },
    categoryLast: {
        borderBottomWidth: 2,
        width: 120,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        marginTop: -2,
        marginRight: 10
    },
    categoryfather: {
        borderBottomWidth: 2,
        width: 180,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        marginTop: -2,
        // marginRight: 10
    },
    address: {
        borderBottomWidth: 2,
        width: 320,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        // paddingHorizontal: 10
    },
    border: {
        borderWidth: 1,
        borderColor: "#000",
        marginHorizontal: 10,
        borderRadius: 12,
        height: 'auto',
        marginVertical:8
    },
    border2: {
        borderWidth: 1,
        height: 150,
        marginHorizontal: 10,
        borderRadius: 12,
        marginTop: 15
    },
    headerText: {
        fontSize: 18,
        // marginHorizontal: 10,
        fontWeight: '600',
        color: "#000",
        marginVertical: 5,
    },
    headerText2: {
        fontSize: 14,
        fontWeight: '600',
        color: "#0006C1",
        marginVertical: 10,
    },
    category1: {
        borderBottomWidth: 2,
        width: 220,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10,
        marginTop: -3,
        marginRight: 10
    },
    category: {
        borderBottomWidth: 2,
        width: 230,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10,
        marginTop: -3,
        marginLeft: 5
    },
    categoryC: {
        borderBottomWidth: 2,
        width: 220,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10,
        marginTop: -3,
        marginLeft: -10
    },
    category2: {
        borderBottomWidth: 2,
        width: 150,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        marginTop: -5,
        marginRight: 10
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
        fontSize: 15,
        fontWeight: '400'
    },
})