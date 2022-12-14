import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'

const AdScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
       <View style={{marginTop:15}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>
      </View>
    </SafeAreaView>
  )
}

export default AdScreen

const styles = StyleSheet.create({
  box: {
    height: 125,
    width: 125,
    // width: Dimensions.get('screen').width*0.3,
    borderWidth: 1,
    borderRadius: 5
  },
})