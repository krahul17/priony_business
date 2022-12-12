import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity, } from 'react-native';
import React from 'react'

const PrCategories = ({ navigation }) => {
  return (
    <>
      <StatusBar
         backgroundColor="#0006C1"
        barStyle={'light-content'} />

      <ScrollView style={styles.container}>
        <View>
          {/* <View style={styles.dor}>
            <Image source={require('../../screen/HomeScreen/assets/logo.png')}
              style={styles.mainlogo} />
          </View> */}

          <View style={styles.pas}>
            <Image source={require('../../screen/HomeScreen/assets/prr.png')} style={styles.pasimage} />
            <Text style={styles.pastext}>Check Your PR Score</Text>
          </View>

          <View style={styles.contenthold}>
            <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('PrForm')}>
              <View>
                <Image source={require('../../screen/HomeScreen/assets/prform.png')} style={styles.ieltsimage} />
              </View>
              <View>
                <Text style={styles.textonly}>PR Enquiry form </Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={styles.contenthold} >
            <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('Canada')}>
              <View>
                <Image source={require('../../screen/HomeScreen/assets/canada.png')} style={styles.ieltsimage} />
              </View>
              <View>
                <Text style={styles.textonly}>Canada</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.contenthold}>
            <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('USA')}>
              <View>
                <Image source={require('../../screen/HomeScreen/assets/usa.png')} style={styles.ieltsimage} />
              </View>
              <View>
                <Text style={styles.textonly}>USA</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.contenthold}>
            <TouchableOpacity style={styles.touch}  onPress={()=>navigation.navigate('Uk')}>
              <View>
                <Image source={require('../../screen/HomeScreen/assets/uk.png')} style={styles.ieltsimage} />
              </View>
              <View>
                <Text style={styles.textonly}>UK</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.contenthold}>
            <TouchableOpacity style={styles.touch}  onPress={()=>navigation.navigate('Australia')}>
              <View>
                <Image source={require('../../screen/HomeScreen/assets/aus.png')} style={styles.ieltsimage} />
              </View>
              <View>
                <Text style={styles.textonly}>Australia</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.contenthold}>
            <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('NewZealand')}>
              <View>
                <Image source={require('../../screen/HomeScreen/assets/nz.png')} style={styles.ieltsimage} />
              </View>
              <View>
                <Text style={styles.textonly}>New-Zealand</Text>
              </View>
            </TouchableOpacity>
          </View>

        <View style={{marginTop:30}}>
          <Text style={{marginTop:30}}></Text>
        </View>

        </View>

      </ScrollView>

    </>
  )
}

export default PrCategories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  mainlogo: {
    width: '70%',
    height: 160,
    alignSelf: 'center',
    marginTop: '10%'
  },
  pas: {
    alignItems: 'center',
    height: 30,
    width: "100%",
    flexDirection: 'row',
    justifyContent: "center",
    marginVertical: 20,
  },
  pasimage: {
    height: 49,
    width: 55,
  },
  pastext: {
    fontSize: 16,
    fontWeight: "500",
    color: '#000',
    lineHeight: 30,
    marginLeft: 20,
  },
  contenthold: {
    height: 100,
    width: "97%",
    borderWidth: 3,
    borderColor: "#A6A6A6",
    borderRadius: 22,
    marginLeft: 5,
    // marginTop: 5,
    marginVertical:3,
    alignItems: "center",
    justifyContent: "center",
  },
  touch: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  ieltsimage: {
    height: 68,
    width: 72,
    marginRight: 10,
  },
  textonly: {
    width: 122,
    textAlign: "center",
    fontSize: 16,
    color: "#000000",
    lineHeight: 22,
    fontWeight: "500",
  },
})