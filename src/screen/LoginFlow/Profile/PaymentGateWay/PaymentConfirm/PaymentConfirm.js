import { StyleSheet,SafeAreaView, Text, View ,StatusBar,Image,ScrollView,TouchableOpacity} from 'react-native'
import React, { useEffect,useState,useContext } from 'react'
import { AuthContext } from '../../../../../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../../../Component/BaseURL/BaseUrl';


const PaymentConfirm = ({navigation}) => {

    const {login,signup} =useContext(AuthContext)

    const [loading, setLoading] = useState(false);
    const [data2, setData] = useState([]);
    const [accessToken, setAccessToken] = useState();

    // console.log(data,' 123545 data is here')


    useEffect(() => {
        const firstLoad = async () => {
            try {
                const accessToken = await AsyncStorage.getItem("accessToken");
                setAccessToken(accessToken);
                console.log(accessToken, ' hello im token')

                await fetch(BaseUrl + '/douryou-seller-api/seller-registration/', {
                    headers: {
                      "Accept": "application/json",
                      "Content-Type": "application/json",
                      'Authorization': 'Bearer ' + accessToken,
                    },
                  }).then((data) => {
                    data.json().then((response) => {
                       console.log(response.Events.Approved, "Response check")
                    //    console.log(response.status)
                       if (response.Events.Approved == true) {

                        // console.log(" status  is working");
                         
                        navigation.navigate('HomeScreen')
                        login()
                       }
                       else if (response.Events.Approved == false) {
                        login()
                      
                        //   console.log("else  is working");
                          
                       }
                    }).catch((err)=>{
                       setModalVisible(false)
                       alert(err)
                    })
                    // console.log(data.status)
                 
                 })
                 // setNumbId(result);
              } catch (error) {
                 // alert('code', code)
                 alert(error);
              }
        };
        firstLoad();
    }, []);

    

  return (
    <>
    <StatusBar
        backgroundColor="#0006C1"
        barStyle={'light-content'}/>
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <ScrollView>
            <View>
                <View>
                    <Image source={require('../../../../assetsLogo/logo.png')} style={styles.img}/>
                </View>
                <View style={styles.confirm}>
                    <TouchableOpacity>
                        <Text style={styles.text}> Wait for ADMIN confirmation{'\n'} for Payment</Text>
                    </TouchableOpacity>
                </View>
              
           
            </View>
            </ScrollView>
        </SafeAreaView>
    </>
  )
}
export default PaymentConfirm

const styles = StyleSheet.create({
    img:{
        width:'70%',
        height:160,
        alignSelf:'center',
        marginVertical:'2%',
        resizeMode:'contain'
    },
    text:{
        color:'#000',
        fontSize:25,
        fontWeight:'600',
        textAlign:'center',
        marginTop:'3%',
     
    },
    textonly:{
   padding:20,
   color:'#000',
   fontSize:15,
   fontWeight:'600',
    },
    planchoose:{
        flexDirection:'row',
        paddingLeft:20,
        
    },
    textplan:{
        color:'#000',
        fontSize:15,
        fontWeight:'600',
        marginTop:'1%',
    },
    textplan2:{
        color:'#000',
        fontSize:14,
        fontWeight:'500',
        marginTop:'1%',
    },
    nameBeneficier:{
        // flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:30,
    },
    qrimg:{
        width:'80%',
        height:400,
        alignSelf:'center',
        marginVertical:'2%'

    },
    confirm:{
        marginVertical:"40%",

    }

})