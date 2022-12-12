import { StyleSheet, ScrollView,Dimensions, StatusBar, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from 'react'

const ListofStudent = ({navigation}) => {
  return (
    <>

    <StatusBar backgroundColor="#0006C1" barStyle='light-content' />


    <ScrollView style={styles.container}>
        <View>
            <View>
                <Image source={require('../../../screen/HomeScreen/assets/logo.png')} style={styles.logo} />
            </View>

            <View>
                <Text style={styles.mainText}>List of Student</Text>
            </View>

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
                    <View style={styles.category}>
                        <TextInput>18-04-2022 </TextInput>
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
                    City Name
                    </Text>
                    <View style={styles.category}>
                        <TextInput>2022 </TextInput>
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
                    E-Mail ID
                    </Text>
                    <View style={styles.category}>
                        <TextInput>2022 </TextInput>
                    </View>
                </View>

                <View style={{borderWidth:1,height:150,marginHorizontal:10,borderRadius:12,marginTop:15}}>
                
                <View style={styles.drop2}>
                    <Text style={styles.headerText2}>
                        Name of IELTS institute
                    </Text>
                    <View style={styles.category2}>
                        <TextInput>101 </TextInput>
                    </View>
                </View>
                <View style={styles.drop2}>
                    <Text style={styles.headerText2}>
                    City Name of IELTS Institute
                    </Text>
                    <View style={styles.category2}>
                        <TextInput>101 </TextInput>
                    </View>
                </View>
                <View style={styles.drop2}>
                    <Text style={styles.headerText2}>
                    Joining Date of Institute
                    </Text>
                    <View style={styles.category2}>
                        <TextInput>101 </TextInput>
                    </View>
                </View>
                </View>

                <View style={{borderWidth:1,marginHorizontal:12,marginVertical:15,borderRadius:12,height:100}}>
                    <View>
                        <Text style={{fontSize:15,fontWeight:'500',marginHorizontal:15,color:'red',marginTop:10}}>Over all Results</Text>
                    </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                   
                   <View style={{ borderWidth: 1, width: '30%', height: 50, borderRadius: 10 }}>
                       <TouchableOpacity>
                           <View>
                               <Text style={styles.band}>Speaking</Text>
                               <Text style={styles.student}>40 Students</Text>
                           </View>
                       </TouchableOpacity>
                   </View>
                   <View style={{ borderWidth: 1, width: '30%', height: 50, borderRadius: 10 }}>
                       <TouchableOpacity>
                           <View>
                               <Text style={styles.band}>Reading</Text>
                               <Text style={styles.student}>150 Students</Text>
                           </View>
                       </TouchableOpacity>
                   </View>
                   <View style={{ borderWidth: 1, width: '30%', height: 50, borderRadius: 10 }}>
                       <TouchableOpacity>
                           <View>
                               <Text style={styles.band}>Listening</Text>
                               <Text style={styles.student}>300 Students</Text>
                           </View>
                       </TouchableOpacity>
                   </View>
               </View>
                </View>


            </View>

            <View >
                <TouchableOpacity style={styles.Btn}>
                    <Text style={{textAlign:'center',fontSize:15,fontWeight:'500',color:'#fff'}}>Post</Text>
                </TouchableOpacity>
            </View>

        </View>
    </ScrollView>
</>
  )
}

export default ListofStudent

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
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    drop2: {
        // marginHorizontal: 10,
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
        height: 600
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        color: "#0006C1",
        marginVertical: 5,
    },
    headerText2: {
        fontSize: 13,
        marginHorizontal: 10,
        fontWeight: '600',
        color: "#0006C1",
        marginVertical: 10,
    },
    category: {
        borderBottomWidth: 2,
        width: Dimensions.get('screen').width*0.5,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10,
        marginTop: -3,
        marginRight:10
    },
    category2: {
        borderBottomWidth: 2,
        width: Dimensions.get('screen').width*0.4,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10,
        marginTop: -5,
        marginRight:10
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
    Btn:{
        backgroundColor:"#0006C1",
        marginHorizontal:10,
        padding:15,
        borderRadius:13,
        marginVertical:20
    }
})