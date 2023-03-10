import { StyleSheet, Text, View, FlatList, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const AustrilaList = ({navigation}) => {
    
const gustData = [
  
    {
      id: '1',
      image: require('../../../screen/Lists/assets/read.png'),
      chat: require('../../../screen/Lists/assets/chat1.png'),
      bell: require('../../../screen/Lists/assets/share.png'),
      img: require('../../../screen/Lists/assets/fav.png'),
      Name: 'Harsimranjeet Singh Tarwal',
      Email: 'simranjeet.extech2202155452@gmail.com',
      DistName: 'Dist. Name',
      DateTime:'View Date & Time:-'
    },
    {
      id: '1',
      image: require('../../../screen/Lists/assets/read.png'),
      chat: require('../../../screen/Lists/assets/chat1.png'),
      bell: require('../../../screen/Lists/assets/share.png'),
      img: require('../../../screen/Lists/assets/fav.png'),
      Name: 'Harsimranjeet Singh Tarwal',
      Email: 'simranjeet.extech2202155452@gmail.com',
      DistName: 'Dist. Name',
      DateTime:'View Date & Time:-'
    },
  ]


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
                            <Image source={require('../../HomeScreen/assets/aus.png')} style={styles.ad} />
                        </View>

                        <View style={styles.maintext}>
                            <Text style={styles.toptext}>Australia</Text>
                        </View>

                    </View>
                </View>


                <FlatList
                    
                    data={gustData}
                    keyExtractor={item => item.id}
                    renderItem={({item})=>(
                      <TouchableOpacity onPress={() => navigation.navigate('Australia')}>
                      <View style={styles.mainList}>
                         <TouchableOpacity>
                             <View style={styles.fav}>
                                 <Image source={item.img} style={{ height: 40, width: 40 }} />
                             </View>
                         </TouchableOpacity>
             
                         <View style={{ flexDirection: 'row' }}>
             
                             <View style={styles.Pic}>
                                 <Image source={item.image} style={styles.pic} />
                             </View>
             
                             <View style={styles.adress}>
                                 <View style={{ flexDirection: 'row' }}>
                                     {/* <View>
                                         <Text style={styles.label} >Name: </Text>
                                     </View> */}
                                     <View>
                                         <Text style={styles.name}>
                                             {item.Name}
                                         </Text>
                                     </View>
                                 </View>
             
                                 <View style={{ flexDirection: 'row' }}>
                                     {/* <View>
                                         <Text style={styles.label} >E-mail ID: </Text>
                                     </View> */}
                                     <View>
                                         <Text style={styles.email}>
                                             {item.Email}
                                         </Text>
                                     </View>
                                 </View>
             
                                 <View style={{ flexDirection: 'row' }}>
                                     {/* <View>
                                         <Text style={styles.label} >Dist.Name: </Text>
                                     </View> */}
                                     <View>
                                         <Text style={styles.dist}>
                                             {item.DistName}
                                         </Text>
                                     </View>
                                 </View>
             
                             </View>
             
             
             
                         </View>
             
                         <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>
             
                             <View style={{ marginRight: 20, margin: 2 }}>
                                 <TouchableOpacity>
                                     <Image source={item.chat} style={{ height: 26, width: 27 }} />
                                 </TouchableOpacity>
                             </View>
             
                             <View style={{ marginRight: 10, margin: 2 }}>
                                 <TouchableOpacity>
                                     <Image source={item.bell} style={{ height: 23, width: 20 }} />
                                 </TouchableOpacity>
                             </View>
             
                         </View>
             
                         <View>
                             <View style={{ backgroundColor: '#0006C1', padding: 10,marginTop:10 }}>
                                 <Text style={{ color: '#fff', fontSize: 15, fontWeight: '800',  }}>{item.DateTime}</Text>
                             </View>
                         </View>
             
                     </View>
                    </TouchableOpacity>
                    )}
                />

            </View>
        </ScrollView>
    </>
)
}

export default AustrilaList

const styles = StyleSheet.create({
    Logo: {
        // color: '#D1070A',
        marginLeft:10,
        marginTop: 10,
        height: 50,
        width: '30%',
        resizeMode: 'contain',
    },
Name1: {
    height: 55,
    width: "97%",
    borderWidth: 3,
    marginTop: 10,
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
    marginLeft: 20,
    // marginRight:25,
},
toptext: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
    color: "#000"
},
mainList: {
    height: 'auto',
    width: '97%',
    borderWidth: 3,
    marginHorizontal: 7,
    marginVertical: 15,
    borderRadius: 10
},
Pic: {
    marginHorizontal: 8,
},
pic: {
    height: 100,
    width:100
},
fav: {
   alignSelf:'flex-end'
},
label: {
  fontSize: 16,
  fontWeight: '700',
  color: '#000',
  // marginVertical: 2,
},
name: {
    fontSize: 15,
    fontWeight: '500',
  color: '#000',
  marginTop: 2,
//   width:Dimensions.get('screen').width*0.45,
},
email: {
    fontSize: 15,
    fontWeight: '200',
    color: '#000',
    marginTop:8,
  //   width:Dimensions.get('screen').width/1.1,
  width:280
},
dist: {
  fontSize: 15,
  fontWeight: '300',
  color: '#000',
  marginTop:2,
},
})