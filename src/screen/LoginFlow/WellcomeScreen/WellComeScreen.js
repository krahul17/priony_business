import { StyleSheet,SafeAreaView, Text, View ,StatusBar,Image,TouchableOpacity} from 'react-native'
import React from 'react'


const WellComeScreen = ({navigation}) => {
  return (
    <>
    <StatusBar
        backgroundColor="#0006C1"
        barStyle={'light-content'}/>
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View>
                <View>
                    <Image source={require('../../assetsLogo/logo.png')} style={styles.img}/>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.text}>WELCOME TO {'\n'} Priony BUSINESS APP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </>
  )
}

export default WellComeScreen

const styles = StyleSheet.create({
    img:{
        width:'90%',
        height:200,
        alignSelf:'center',
        marginTop:'40%',
        resizeMode:'contain'
    },
    text:{
        color:'#0006C1',
        fontSize:30,
        fontWeight:'400',
        textAlign:'center',
        marginTop:'30%'
    },
})