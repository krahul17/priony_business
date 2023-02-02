import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OutlineInput from 'react-native-outline-input';


const CustomTextInput = ({ value, setValue, label,keyboardType,secureTextEntry }) => {
  return (
    <View>
     
     <View style={styles.input}>
        <OutlineInput
          value={value}
          onChangeText={setValue}
          label={label}
          activeValueColor="#000"
          activeBorderColor="#000"
          activeLabelColor="#000"
          passiveBorderColor="#000"
          passiveLabelColor="#000"
          passiveValueColor="#000"
          autoCapitalize={"toUpperCase"}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          
        />
      </View>

    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  input: {
    margin:10,
    width:'85%',
    alignSelf:'center'
  },
})