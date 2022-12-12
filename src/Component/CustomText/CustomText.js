import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const CustomText = ({ Name }) => {
  return (
    <View>

      <View style={styles.textField}>
        <Text style={styles.text}> {Name}</Text>
      </View>

    </View>
  )
}

export default CustomText

const styles = StyleSheet.create({
  textField: {
    margin: 10,
    width: '85%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000',
    height: 55,
    borderRadius: 10,
    // alignItems: "center",
    justifyContent: "center"

},
text:{
  paddingLeft: 8,
  fontSize: 18,
  fontWeight: "500",
  color: "#000"
}

})