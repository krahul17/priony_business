import { StyleSheet, Text, View, Image, ScrollView, FlatList, StatusBar, TouchableOpacity, } from 'react-native';
import React, { useState, useEffect } from 'react'
import CustomText from '../../../../Component/CustomText/CustomText';
import BaseUrl from '../../../../Component/BaseURL/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Form = ({ route }) => {
  const { value, value2 } = route.params
  let item = value
  // console.log(item, 'igydsayufashgdvu')


  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [accessToken, setAccess] = useState(null);
  // console.log(data, "userdataprofil")
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

  console.log(data.Name, 'my namae')

  useEffect(async () => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    setAccess(accessToken);

    fetch(BaseUrl + '/douryou-seller-api/seller-pr-enquiery-detail/' + value2 + "/", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + accessToken,
      },
    }).then((response) => response.json())
      .then((json) => {

        //    console.log(json.Sellers[0].username.first_name)
        setData(json.SellerProfile)


      })
      .catch((error) =>
        alert('something went wrong'))
      // console.error(error)),
      .finally(() => setLoading(false));

    // console.log(data.Sellers.first_name, "userdataprofil")
    // console.log('sdfdgffj'seller)

  }, []);
  // console.log(data.Name,'name is my')

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

          <View style={styles.borderMain}>

            <CustomText Name={data.Name} />
            <CustomText Name={data.FatherName} />
            <CustomText Name={data.Address} />
            <CustomText Name={data.City} />
            <CustomText Name={data.MobileNumber} />
            <CustomText Name={data.Email} />
            <CustomText Name={data.ApplyFor} />
            <CustomText Name={data.CourceCity} />

            <CustomText Name={data.Status} />
            <CustomText Name={data.Level} />
            <CustomText Name={data.Field} />
            <CustomText Name={data.PassingYear} />
            <CustomText Name={data.Percentage} />
            <CustomText Name={data.BoardUniversity} />
            <View style={styles.input1}>
              <Text style={styles.headertext1}>Entry Level Exam</Text>
            </View>
            <CustomText Name={data.PassportNumber} />
            <CustomText Name={data.AdharCard} />
            <CustomText Name={data.TestDate} />
            <CustomText Name={data.ListeningBand} />
            <CustomText Name={data.ReadingBand} />
            <CustomText Name={data.WritingBand} />
            <CustomText Name={data.SpeakingBand} />
            <CustomText Name={data.OverallBand} />


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
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>

              <View style={{ marginRight: 20, margin: 2 }}>
                <TouchableOpacity>
                  <Image source={require('../../../../screen/Lists/assets/chat1.png')} style={{ height: 26, width: 27 }} />
                </TouchableOpacity>
              </View>

              <View style={{ marginRight: 10, margin: 2 }}>
                <TouchableOpacity>
                  <Image source={require('../../../../screen/Lists/assets/share.png')} style={{ height: 23, width: 20 }} />
                </TouchableOpacity>
              </View>

            </View>

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
    marginBottom: 5
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