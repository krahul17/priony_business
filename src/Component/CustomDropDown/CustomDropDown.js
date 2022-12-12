import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Picker } from '@react-native-picker/picker';


const CustomDropDown = () => {

    const [selectedLanguage, setSelectedLanguage] = useState("language");
    console.log(selectedLanguage)

  return (
    <View style={styles.container}>


            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---select item---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="IELTS" value="IELTS" style={{ color: "#000",  }} />
                <Picker.Item label="Study Visa" value="Study Visa" style={{ color: "#000",  }} />
                <Picker.Item label="Passport" value="Passport" style={{ color: "#000",  }} />
                <Picker.Item label="Education Loan" value="Education Loan" style={{ color: "#000", }} />
                <Picker.Item label="Air Ticket" value="Air Ticket" style={{ color: "#000", }} />
                <Picker.Item label="Travel Insurance" value="Travel Insurance" style={{ color: "#000" }} />
                <Picker.Item label="Money Exchange" value="Money Exchange" style={{ color: "#000", }} />
                <Picker.Item label="Transportation" value="Transportation" style={{ color: "#000", }} />
                <Picker.Item label="Luggages Adjustment" value="Luggages Adjustment" style={{ color: "#000", }} />
                <Picker.Item label="Accommodation at Abroad" value="Accommodation at Abroad" style={{ color: "#000", }} />
                <Picker.Item label="Jobs at Abroad" value="Jobs at Abroad" style={{ color: "#000",  }} />
                <Picker.Item label="Tour Travel" value="Tour Travel" style={{ color: "#000", }} />
                <Picker.Item label="Work Permit" value="Work Permit" style={{ color: "#000", }} />
                <Picker.Item label="Permanent Residence" value="Permanent Residence" style={{ color: "#000" }} />
                <Picker.Item label="Tourism business Visa" value="Tourism  business Visa" style={{ color: "#000",  }} />
                <Picker.Item label="Events" value="Events" style={{ color: "#000", backgroundColor: "#fff" }} />
                <Picker.Item label="Job Requirements" value="Job Requirements" style={{ color: "#000", }} />
                <Picker.Item label="International Courier" value="International Courier" style={{ color: "#000", }} />
                <Picker.Item label="Legal Advisor" value="Legal Advisor" style={{ color: "#000",  }} />
                <Picker.Item label="Online IELTS Classes" value="Online IELTS Classes" style={{ color: "#000",  }} />
                <Picker.Item label="Franchise" value="Franchise" style={{ color: "#000", }} />
                <Picker.Item label="Check your Score" value="Check your Score" style={{ color: "#000", }} />
            </Picker>





            {/* </Picker> */}

        </View>
  )
}

export default CustomDropDown

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