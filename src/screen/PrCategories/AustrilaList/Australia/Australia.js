import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity, } from 'react-native';
import React from 'react'

const Australia = () => {
    return (
        <>
            <StatusBar
                 backgroundColor="#0006C1"
                barStyle={'light-content'} />

            <ScrollView style={styles.container}>
                <View>
                    <View style={styles.dor}>
                        <Image source={require('../../../assetsLogo/logo.png')} style={styles.mainlogo} />
                    </View>

                    <View style={styles.pr}>
                        <View style={styles.canadaimg}>
                          <Image source={require('../../../HomeScreen/assets/aus.png')} style={styles.ieltsimage} />
                        </View>
                      <View style={styles.canadatext}>
                        <Text style={styles.prtext}>Australia</Text>
                      </View>
                        
                    </View>

                    <View style={styles.textattech}>
                        <Text style={styles.textonly}>Attech CRS Calculater</Text>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default Australia

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    
      mainlogo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        // marginTop: '10%',
        resizeMode:'contain'
      },
      pr:{
        flexDirection:'row',
         alignSelf:'center'
      },
      ieltsimage:{
        height:71,
        width:75,
        alignSelf:'center',
        marginRight:30
      },
      prtext:{
        fontSize:18,
        fontWeight:'500',
        textAlign:'center',
        marginTop:20,
        color:'#000000'
      },      
        textattech:{
           justifyContent:'center'
        },
        textonly:{
          fontSize:30,
          fontWeight:"500",
          marginTop:10,
          textAlign:'center',
         color:'#000000'
        }
  

})