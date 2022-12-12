import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Picker } from '@react-native-picker/picker';


const Check = () => {

    const [selectedLanguage, setSelectedLanguage] = useState("language");
    console.log(selectedLanguage)

  return (
    <View style={styles.container}>


            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---2022---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="2021" value="2021" style={{ color: "#000",  }} />
                <Picker.Item label="2020" value="2020" style={{ color: "#000",  }} />
                <Picker.Item label="2019" value="2019" style={{ color: "#000",  }} />
                <Picker.Item label="2018" value="2018" style={{ color: "#000",  }} />
                <Picker.Item label="2017" value="2017" style={{ color: "#000",  }} />
                <Picker.Item label="2016" value="2016" style={{ color: "#000",  }} />
                <Picker.Item label="2015" value="2015" style={{ color: "#000",  }} />
                <Picker.Item label="2014" value="2014" style={{ color: "#000",  }} />
                <Picker.Item label="2013" value="2013" style={{ color: "#000",  }} />
                <Picker.Item label="2012" value="2012" style={{ color: "#000",  }} />
                <Picker.Item label="2011" value="2011" style={{ color: "#000",  }} />
                <Picker.Item label="2010" value="2010" style={{ color: "#000",  }} />
                <Picker.Item label="2009" value="2009" style={{ color: "#000",  }} />
                
            </Picker>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---2022---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="2021" value="2021" style={{ color: "#000",  }} />
                <Picker.Item label="2020" value="2020" style={{ color: "#000",  }} />
                <Picker.Item label="2019" value="2019" style={{ color: "#000",  }} />
                <Picker.Item label="2018" value="2018" style={{ color: "#000",  }} />
                <Picker.Item label="2017" value="2017" style={{ color: "#000",  }} />
                <Picker.Item label="2016" value="2016" style={{ color: "#000",  }} />
                <Picker.Item label="2015" value="2015" style={{ color: "#000",  }} />
                <Picker.Item label="2014" value="2014" style={{ color: "#000",  }} />
                <Picker.Item label="2013" value="2013" style={{ color: "#000",  }} />
                <Picker.Item label="2012" value="2012" style={{ color: "#000",  }} />
                <Picker.Item label="2011" value="2011" style={{ color: "#000",  }} />
                <Picker.Item label="2010" value="2010" style={{ color: "#000",  }} />
                <Picker.Item label="2009" value="2009" style={{ color: "#000",  }} />
                
            </Picker>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---2022---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="2021" value="2021" style={{ color: "#000",  }} />
                <Picker.Item label="2020" value="2020" style={{ color: "#000",  }} />
                <Picker.Item label="2019" value="2019" style={{ color: "#000",  }} />
                <Picker.Item label="2018" value="2018" style={{ color: "#000",  }} />
                <Picker.Item label="2017" value="2017" style={{ color: "#000",  }} />
                <Picker.Item label="2016" value="2016" style={{ color: "#000",  }} />
                <Picker.Item label="2015" value="2015" style={{ color: "#000",  }} />
                <Picker.Item label="2014" value="2014" style={{ color: "#000",  }} />
                <Picker.Item label="2013" value="2013" style={{ color: "#000",  }} />
                <Picker.Item label="2012" value="2012" style={{ color: "#000",  }} />
                <Picker.Item label="2011" value="2011" style={{ color: "#000",  }} />
                <Picker.Item label="2010" value="2010" style={{ color: "#000",  }} />
                <Picker.Item label="2009" value="2009" style={{ color: "#000",  }} />
                
            </Picker>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---2022---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="2021" value="2021" style={{ color: "#000",  }} />
                <Picker.Item label="2020" value="2020" style={{ color: "#000",  }} />
                <Picker.Item label="2019" value="2019" style={{ color: "#000",  }} />
                <Picker.Item label="2018" value="2018" style={{ color: "#000",  }} />
                <Picker.Item label="2017" value="2017" style={{ color: "#000",  }} />
                <Picker.Item label="2016" value="2016" style={{ color: "#000",  }} />
                <Picker.Item label="2015" value="2015" style={{ color: "#000",  }} />
                <Picker.Item label="2014" value="2014" style={{ color: "#000",  }} />
                <Picker.Item label="2013" value="2013" style={{ color: "#000",  }} />
                <Picker.Item label="2012" value="2012" style={{ color: "#000",  }} />
                <Picker.Item label="2011" value="2011" style={{ color: "#000",  }} />
                <Picker.Item label="2010" value="2010" style={{ color: "#000",  }} />
                <Picker.Item label="2009" value="2009" style={{ color: "#000",  }} />
                
            </Picker>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---2022---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="2021" value="2021" style={{ color: "#000",  }} />
                <Picker.Item label="2020" value="2020" style={{ color: "#000",  }} />
                <Picker.Item label="2019" value="2019" style={{ color: "#000",  }} />
                <Picker.Item label="2018" value="2018" style={{ color: "#000",  }} />
                <Picker.Item label="2017" value="2017" style={{ color: "#000",  }} />
                <Picker.Item label="2016" value="2016" style={{ color: "#000",  }} />
                <Picker.Item label="2015" value="2015" style={{ color: "#000",  }} />
                <Picker.Item label="2014" value="2014" style={{ color: "#000",  }} />
                <Picker.Item label="2013" value="2013" style={{ color: "#000",  }} />
                <Picker.Item label="2012" value="2012" style={{ color: "#000",  }} />
                <Picker.Item label="2011" value="2011" style={{ color: "#000",  }} />
                <Picker.Item label="2010" value="2010" style={{ color: "#000",  }} />
                <Picker.Item label="2009" value="2009" style={{ color: "#000",  }} />
                
            </Picker>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---2022---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="2021" value="2021" style={{ color: "#000",  }} />
                <Picker.Item label="2020" value="2020" style={{ color: "#000",  }} />
                <Picker.Item label="2019" value="2019" style={{ color: "#000",  }} />
                <Picker.Item label="2018" value="2018" style={{ color: "#000",  }} />
                <Picker.Item label="2017" value="2017" style={{ color: "#000",  }} />
                <Picker.Item label="2016" value="2016" style={{ color: "#000",  }} />
                <Picker.Item label="2015" value="2015" style={{ color: "#000",  }} />
                <Picker.Item label="2014" value="2014" style={{ color: "#000",  }} />
                <Picker.Item label="2013" value="2013" style={{ color: "#000",  }} />
                <Picker.Item label="2012" value="2012" style={{ color: "#000",  }} />
                <Picker.Item label="2011" value="2011" style={{ color: "#000",  }} />
                <Picker.Item label="2010" value="2010" style={{ color: "#000",  }} />
                <Picker.Item label="2009" value="2009" style={{ color: "#000",  }} />
                
            </Picker>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---2022---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="2021" value="2021" style={{ color: "#000",  }} />
                <Picker.Item label="2020" value="2020" style={{ color: "#000",  }} />
                <Picker.Item label="2019" value="2019" style={{ color: "#000",  }} />
                <Picker.Item label="2018" value="2018" style={{ color: "#000",  }} />
                <Picker.Item label="2017" value="2017" style={{ color: "#000",  }} />
                <Picker.Item label="2016" value="2016" style={{ color: "#000",  }} />
                <Picker.Item label="2015" value="2015" style={{ color: "#000",  }} />
                <Picker.Item label="2014" value="2014" style={{ color: "#000",  }} />
                <Picker.Item label="2013" value="2013" style={{ color: "#000",  }} />
                <Picker.Item label="2012" value="2012" style={{ color: "#000",  }} />
                <Picker.Item label="2011" value="2011" style={{ color: "#000",  }} />
                <Picker.Item label="2010" value="2010" style={{ color: "#000",  }} />
                <Picker.Item label="2009" value="2009" style={{ color: "#000",  }} />
                
            </Picker>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---2022---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="2021" value="2021" style={{ color: "#000",  }} />
                <Picker.Item label="2020" value="2020" style={{ color: "#000",  }} />
                <Picker.Item label="2019" value="2019" style={{ color: "#000",  }} />
                <Picker.Item label="2018" value="2018" style={{ color: "#000",  }} />
                <Picker.Item label="2017" value="2017" style={{ color: "#000",  }} />
                <Picker.Item label="2016" value="2016" style={{ color: "#000",  }} />
                <Picker.Item label="2015" value="2015" style={{ color: "#000",  }} />
                <Picker.Item label="2014" value="2014" style={{ color: "#000",  }} />
                <Picker.Item label="2013" value="2013" style={{ color: "#000",  }} />
                <Picker.Item label="2012" value="2012" style={{ color: "#000",  }} />
                <Picker.Item label="2011" value="2011" style={{ color: "#000",  }} />
                <Picker.Item label="2010" value="2010" style={{ color: "#000",  }} />
                <Picker.Item label="2009" value="2009" style={{ color: "#000",  }} />
                
            </Picker>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---2022---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="2021" value="2021" style={{ color: "#000",  }} />
                <Picker.Item label="2020" value="2020" style={{ color: "#000",  }} />
                <Picker.Item label="2019" value="2019" style={{ color: "#000",  }} />
                <Picker.Item label="2018" value="2018" style={{ color: "#000",  }} />
                <Picker.Item label="2017" value="2017" style={{ color: "#000",  }} />
                <Picker.Item label="2016" value="2016" style={{ color: "#000",  }} />
                <Picker.Item label="2015" value="2015" style={{ color: "#000",  }} />
                <Picker.Item label="2014" value="2014" style={{ color: "#000",  }} />
                <Picker.Item label="2013" value="2013" style={{ color: "#000",  }} />
                <Picker.Item label="2012" value="2012" style={{ color: "#000",  }} />
                <Picker.Item label="2011" value="2011" style={{ color: "#000",  }} />
                <Picker.Item label="2010" value="2010" style={{ color: "#000",  }} />
                <Picker.Item label="2009" value="2009" style={{ color: "#000",  }} />
                
            </Picker>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---2022---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="2021" value="2021" style={{ color: "#000",  }} />
                <Picker.Item label="2020" value="2020" style={{ color: "#000",  }} />
                <Picker.Item label="2019" value="2019" style={{ color: "#000",  }} />
                <Picker.Item label="2018" value="2018" style={{ color: "#000",  }} />
                <Picker.Item label="2017" value="2017" style={{ color: "#000",  }} />
                <Picker.Item label="2016" value="2016" style={{ color: "#000",  }} />
                <Picker.Item label="2015" value="2015" style={{ color: "#000",  }} />
                <Picker.Item label="2014" value="2014" style={{ color: "#000",  }} />
                <Picker.Item label="2013" value="2013" style={{ color: "#000",  }} />
                <Picker.Item label="2012" value="2012" style={{ color: "#000",  }} />
                <Picker.Item label="2011" value="2011" style={{ color: "#000",  }} />
                <Picker.Item label="2010" value="2010" style={{ color: "#000",  }} />
                <Picker.Item label="2009" value="2009" style={{ color: "#000",  }} />
                
            </Picker>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---2022---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="2021" value="2021" style={{ color: "#000",  }} />
                <Picker.Item label="2020" value="2020" style={{ color: "#000",  }} />
                <Picker.Item label="2019" value="2019" style={{ color: "#000",  }} />
                <Picker.Item label="2018" value="2018" style={{ color: "#000",  }} />
                <Picker.Item label="2017" value="2017" style={{ color: "#000",  }} />
                <Picker.Item label="2016" value="2016" style={{ color: "#000",  }} />
                <Picker.Item label="2015" value="2015" style={{ color: "#000",  }} />
                <Picker.Item label="2014" value="2014" style={{ color: "#000",  }} />
                <Picker.Item label="2013" value="2013" style={{ color: "#000",  }} />
                <Picker.Item label="2012" value="2012" style={{ color: "#000",  }} />
                <Picker.Item label="2011" value="2011" style={{ color: "#000",  }} />
                <Picker.Item label="2010" value="2010" style={{ color: "#000",  }} />
                <Picker.Item label="2009" value="2009" style={{ color: "#000",  }} />
                
            </Picker>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---2022---" value="disable" style={{ color: "#000",}} />
                <Picker.Item label="2021" value="2021" style={{ color: "#000",  }} />
                <Picker.Item label="2020" value="2020" style={{ color: "#000",  }} />
                <Picker.Item label="2019" value="2019" style={{ color: "#000",  }} />
                <Picker.Item label="2018" value="2018" style={{ color: "#000",  }} />
                <Picker.Item label="2017" value="2017" style={{ color: "#000",  }} />
                <Picker.Item label="2016" value="2016" style={{ color: "#000",  }} />
                <Picker.Item label="2015" value="2015" style={{ color: "#000",  }} />
                <Picker.Item label="2014" value="2014" style={{ color: "#000",  }} />
                <Picker.Item label="2013" value="2013" style={{ color: "#000",  }} />
                <Picker.Item label="2012" value="2012" style={{ color: "#000",  }} />
                <Picker.Item label="2011" value="2011" style={{ color: "#000",  }} />
                <Picker.Item label="2010" value="2010" style={{ color: "#000",  }} />
                <Picker.Item label="2009" value="2009" style={{ color: "#000",  }} />
                
            </Picker>






            {/* </Picker> */}

        </View>
  )
}

export default Check

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