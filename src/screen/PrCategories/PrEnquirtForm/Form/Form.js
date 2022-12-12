import { StyleSheet, Text, View, Image, ScrollView, FlatList, StatusBar, TouchableOpacity, } from 'react-native';
import React, { useState, useEffect } from 'react'
import CustomText from '../../../../Component/CustomText/CustomText';
import BaseUrl from '../../../../Component/BaseURL/BaseUrl';


const Form = ({ route }) => {
  const { value } = route.params
  let item = value
  console.log(item, 'igydsayufashgdvu')
  let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNTI3ODI1LCJqdGkiOiJmNGIzOWE2MDE4ZWU0M2M3Yjc0NmU0N2ZmOGJiOTBiZCIsInVzZXJfaWQiOjEwfQ.0m9C02ZpNM5ibIUPbwQMRiseSf9evKxj07F00jiBzGs"


  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log(data, "userdataprofil")
  // useEffect(() => {
  //   fetch(BaseUrl + '/douryou-seller-api/seller-sell-franchise/', {
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //       'Authorization': 'Bearer ' + accessToken,
  //     },
  //   }).then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  console.log(data, 'jdddkjfhdjf')

  return (
    <>
      <StatusBar
        backgroundColor="#0006C1"
        barStyle={'light-content'} />
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.textattech}>
            <Text style={styles.textonly}>Attech PR Form</Text>
          </View>

          {/* <FlatList
            showsHorizontalScrollIndicator={false}
            data={item}
            renderItem={({ item, index }) =>
              (<Getdata item={item} index={index}></Getdata>)} /> */}
          <View style={styles.borderMain}>

            <CustomText Name={item.Name} />
            <CustomText Name={item.FatherName} />
            <CustomText Name={item.Address} />
            <CustomText Name={item.City} />
            <CustomText Name={item.MobileNumber} />
            <CustomText Name={item.Email} />
            <CustomText Name={item.ApplyFor} />
            <CustomText Name={item.CourceCity} />

            <CustomText Name={item.Status} />
            <CustomText Name={item.Level}/>
            <CustomText Name={item.Field} />
            <CustomText Name={item.PassingYear} />
            <CustomText Name={item.Percentage} />
            <CustomText Name={item.BoardUniversity} />
            <View style={styles.input1}>
              <Text style={styles.headertext1}>Entry Level Exam</Text>
            </View>
            <CustomText Name={item.PassportNumber} />
            <CustomText Name={item.AdharCard} />
            <CustomText Name={item.TestDate} />
            <CustomText Name={item.ListeningBand} />
            <CustomText Name={item.ReadingBand} />
            <CustomText Name={item.WritingBand} />
            <CustomText Name={item.SpeakingBand} />
            <CustomText Name={item.OverallBand} />
           
           
            <View style={styles.input1}>
              <Text style={styles.headertext1}>Work Experience</Text>
            </View>
            <CustomText Name={item.CompanyName} />
            <CustomText Name={item.Designation} />
            <CustomText Name={item.StartingFrom} />
            <CustomText Name={item.LastDate} />
            <CustomText Name={item.TravelHistory} />
            <CustomText Name={item.AnyRefusal} />
            <CustomText Name={item.WhyRefusalVisa} />
           
            <View style={styles.borderTitle}>

            </View>
            <CustomText Name={item.RelativeAbroad} />
            <CustomText Name={item.RelativeAbroadAddress} />
            <CustomText Name={item.FinancialDetail} />
            <CustomText Name={item.FatherOccupation} />
            <CustomText Name={item.MotherOccupation} />
            <CustomText Name={item.FamiltyBackgrounf} />
            <CustomText Name={item.EnterYourDetail} />
            
          </View>
        </View>
      </ScrollView>
    </>
  )
}
export default Form
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainlogo: {
    width: "100%",
    height: 80,
    alignSelf: 'center',
    marginTop: 20
  },
  borderMain: {
    height: 'auto',
    width: "97%",
    borderWidth: 3,
    marginTop: 10,
    marginHorizontal: 7,
    borderRadius: 10,
    borderColor: '#000000',
    backgroundColor: "#fff",
  },

  pr: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  ieltsimage: {
    height: 71,
    width: 75,
    alignSelf: 'center',
    marginLeft: 20,
  },
  consultanttext: {
    height: 40,
    width: "51%",
  },
  prtext: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#000000',

  },
  textattech: {
    height: 55,
    width: "97%",
    borderWidth: 3,
    marginTop: 10,
    marginHorizontal: 7,
    borderRadius: 10,
    borderColor: '#000000',
    backgroundColor: "#fff",

  },
  textonly: {
    fontSize: 30,
    fontWeight: "500",

    textAlign: 'center',
    color: '#000000'
  },
  borderTitle: {
    borderWidth: 1,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 20
  },
  input1: {
    alignSelf: 'center'
  },
  headertext1: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
    color: '#000',
    fontWeight: "500",
  },
  Btn: {
    alignItems: 'center',
    marginVertical: 20
  },
  btn: {
    backgroundColor: '#D1070A',
    paddingHorizontal: 90,
    paddingVertical: 15,
    color: '#FFFFFF',
    fontSize: 25,
    borderRadius: 15,
    fontWeight: "600"
  },
})