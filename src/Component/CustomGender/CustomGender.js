import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Picker } from '@react-native-picker/picker';


const CustomGender = () => {

    const [selectedLanguage, setSelectedLanguage] = useState("language");
    console.log(selectedLanguage)

  return (
    <View style={styles.container}>


            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---select gender---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="Man" value="Man" style={{ color: "#000",  }} />
                <Picker.Item label="Women" value="Women" style={{ color: "#000",  }} />
                <Picker.Item label="Other" value="Other" style={{ color: "#000",  }} />
                
            </Picker>





            {/* </Picker> */}

        </View>
  )
}

export default CustomGender

const styles = StyleSheet.create({
    container: {
        color: "#fff"
    },
    picker: {
        height: 30,
        width: "90%",
        backgroundColor:"#fff"
    }
})