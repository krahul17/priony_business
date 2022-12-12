import { StyleSheet, Text, View, StatusBar, ScrollView, Image, } from 'react-native'
import React from 'react'

const CommingSoon = () => {
    return (
        <>
            <StatusBar
                backgroundColor="#0006C1"
                barStyle={'light-content'} />
            <ScrollView>

                <View >
                    <View>
                    <Image source={require('../../../../screen/assetsLogo/logo.png')} style={styles.Logo} />
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',marginVertical:80}}>
                        <View>
                            <Image source={require('../../../HomeScreen/assets/test.png')} style={styles.icon}/>
                        </View>
                        <View>
                            <Text style={{color:"#000",fontSize:20,fontWeight:'900',marginTop:8,marginHorizontal:10}}>Online Weekly {'\n'}IELTS Test</Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text style={{textAlign:'center',color:'#02043F',fontWeight:'bold',fontSize:35,marginVertical:20}}>Coming Soon</Text>
                        </View>
                        <View>
                            <Text style={{textAlign:'center',color:'#626262',fontWeight:'bold',fontSize:15}}>As soon as Possible....</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </>
    
    )
}

export default CommingSoon

const styles = StyleSheet.create({
    Logo: {
        width: '50%',
        height: 60,
        alignSelf: 'center',
        marginTop: '10%'
    },
    icon:{
        height:70,
        width:70
    },
})
