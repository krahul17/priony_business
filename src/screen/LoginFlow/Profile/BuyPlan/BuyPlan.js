import { StyleSheet, ScrollView, Text, View, Image, StatusBar, FlatList } from 'react-native'
import React from 'react'
import Jsonfile from '../../Profile/JsonData/JsonData'

const BuyPlan = ({ navigation }) => {





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
                  <View>
                     <Text style={styles.wel}>Let's choose your plan</Text>
                  </View>
               </View>

               <Jsonfile/>
            </View>
         </ScrollView>
      </>
   )
}

export default BuyPlan

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

})