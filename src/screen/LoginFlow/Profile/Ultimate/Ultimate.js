import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, StatusBar } from 'react-native'
import React from 'react'

const Ultimate = ({ navigation }) => {
   return (
      <>
         <StatusBar
            backgroundColor="#0006C1"
            barStyle={'light-content'} />

         <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View>
               <View style={styles.main}>
                  <View>
                     <Image source={require('../assets/logo.png')} style={styles.logo} />
                  </View>

               </View>

               <View style={styles.Input}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <View style={{ flexDirection: 'row' }}>
                        <View>
                           <Image source={require('../assets/reviews.png')} style={styles.camera} />
                        </View>
                        <View>
                           <Text style={{ color: '#000', fontWeight: '600', fontSize: 20, marginTop: 8, marginHorizontal: 10 }}> ULTIMATE</Text>
                        </View>
                     </View>

                  </View>
               </View>
               <View style={styles.Input}>
                  <View style={{ justifyContent: 'space-around' }}>
                     <Text style={styles.package}> Package Valid For 1 Month</Text>
                     <Text style={styles.price}> Price - 3000/- + 18% GST</Text>
                  </View>
               </View>

               <View style={styles.Border}>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.dot}>.</Text>
                     <Text style={styles.Text}>Full Details : About us, Specialization,
                        Contact Person Name, Deshigation with Pics, 5 Videos of 10 Mintus each,Office Pics, Yours certifications, Pervious
                        results & Customers reviews. </Text>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.dot}>.</Text>
                     <Text style={styles.Text}>Douryou Chat Unlimited. </Text>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.dot}>.</Text>
                     <Text style={styles.Text}>Douryou Notifications Unlimited. </Text>
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
                     <Text style={styles.Text2}>Bydefult 3 Star Rating  </Text>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.dot2}>.</Text>
                     <Text style={styles.Text2}>5 Ads Publish in all Area's </Text>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.dot2}>.</Text>
                     <Text style={styles.Text2}>Listing all Categories </Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.dot2}>.</Text>
                     <Text style={styles.Text2}>Lower Listing  </Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.dot2}>.</Text>
                     <Text style={styles.Text2}>Inbound leads From all Area's </Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.dot2}>.</Text>
                     <Text style={styles.Text2}>Intersted Visitor </Text>
                  </View>
               </View>

               <View>

                  <TouchableOpacity onPress={() => navigation.navigate('PaymentGateWay')} style={styles.Btn}>
                     <Text style={styles.btn}>Buy Now</Text>
                  </TouchableOpacity>
               </View>

            </View>
         </ScrollView>
      </>
   )
}

export default Ultimate

const styles = StyleSheet.create({
   logo: {
      width: '70%',
      height: 160,
      alignSelf: 'center',
      marginTop: '10%'
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
   dot: {
      fontSize: 50,
      marginTop: -35,
      marginLeft: 5
   },
   dot2: {
      fontSize: 50,
      marginTop: -35,
      marginLeft: 5,
      color: '#0006C1'
   },
   Text: {
      // marginTop:5,
      fontWeight: '500',
      fontSize: 13,
      margin: 5,
      color: '#000'
   },
   Text2: {
      // marginTop:5,
      fontWeight: '500',
      fontSize: 15,
      margin: 5,
      color: '#0006C1'
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
      height: 65
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
      height: 130,
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