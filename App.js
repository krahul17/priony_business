

import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
// import Navigatino from './src/Navigation-Flow/Navigation/Navigatino'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext, AuthProvider } from './context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';




import Login from './src/screen/LoginFlow/Login/Login';
import VerifyCode from './src/screen/LoginFlow/VerifiyCode/VerifyCode';
import CreateProfie from './src/screen/LoginFlow/CreateProfile/CreateProfie';
import Profile from './src/screen/LoginFlow/Profile/Profile';
import Aboutus from './src/screen/LoginFlow/Aboutus/Aboutus';
import MyMatch from './src/screen/LoginFlow/MyMatch/MyMatch';
import UploadeOfficePic from './src/screen/LoginFlow/Profile/UploadeOfficePic/UploadeOfficePic';
import Certificate from './src/screen/LoginFlow/Profile/Certificate/Certifacate';
import Result from './src/screen/LoginFlow/Profile/Result/Result';
import Review from './src/screen/LoginFlow/Profile/Review/Review';
import FreePlan from './src/screen/LoginFlow/Profile/FreePlan/FreePlan';
import Profenssional from './src/screen/LoginFlow/Profile/Profenssional/Profenssional';
import PaymentGateWay from './src/screen/LoginFlow/Profile/PaymentGateWay/PaymentGateWay';
import PaymentConfirm from './src/screen/LoginFlow/Profile/PaymentGateWay/PaymentConfirm/PaymentConfirm';
import Navigatino from './src/Navigation-Flow/Navigation/Navigatino';
import AllPlanList from './src/screen/LoginFlow/Profile/AllPlanList/AllPlanList';
import PlanComingSoon from './src/screen/LoginFlow/Profile/PlanComingSoon/PlanComingSoon';
import BaseUrl from './src/Component/BaseURL/BaseUrl';




const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="VerifyCode" component={VerifyCode} />
      <Stack.Screen name="CreateProfie" component={CreateProfie} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Aboutus" component={Aboutus} />
      <Stack.Screen name="MyMatch" component={MyMatch} />
      <Stack.Screen name="UploadeOfficePic" component={UploadeOfficePic} />
      <Stack.Screen name="Certificate" component={Certificate} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="FreePlan" component={FreePlan} />
      <Stack.Screen name="AllPlanList" component={AllPlanList} />
      <Stack.Screen name="Profenssional" component={Profenssional} />
      <Stack.Screen name="PlanComingSoon" component={PlanComingSoon} />  
      <Stack.Screen name="PaymentGateWay" component={PaymentGateWay} />
      {/* <Stack.Screen name="PaymentConfirm" component={PaymentConfirm} /> */}
      
      {/* <Stack.Screen name="Navigatino" component={Navigatino} /> */}
   
    
    </Stack.Navigator>
  )
}
function AppNav() {
  const { userToken} = useContext(AuthContext)
  console.log("user Token = " + userToken)
  // console.log("statement = " + userToken !== null)

  // var token = 'eyJ0eXAiO..';
  // var decoded = jwt_decode(token);
  // console.log(decoded);

  // function isTokenExpired (token) {
  //   var decoded = jwt_decode(token)
  
  //   if (decoded.exp < Date.now() / 1000) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // async function getVerifiedKeys (keys) {
  //   console.log('Loading keys from storage')
  
  //   if (keys) {
  //     console.log('checking access')
  
  //     if (!isTokenExpired(keys.access)) {
  //       console.log('returning access')
  
  //       return keys
  //     } else {
  //       console.log('access expired')
  
  //       console.log('checking refresh expiry')
  
  //       if (!isTokenExpired(keys.refresh)) {
  //         console.log('fetching access using refresh')
  
  //         //TODO: write code to get refreshed tokens from server and store with AsyncStorage.
  
  //         return null
  //       } else {
  //         console.log('refresh expired, please login')
  
  //         return null
  //       }
  //     }
  //   } else {
  //     console.log('access not available please login')
  
  //     return null
  //   }
  // }




  
  const[refresh,setRefreshToken]=useState()
  console.log(refresh, '12hello im refresh token')

  const firstLoad = async () => {
    try {
      const refereshToken = await AsyncStorage.getItem("refereshToken");
         setRefreshToken(refereshToken)
         console.log('17662378',refereshToken)

         let formData = new FormData();
         formData.append('refresh', refereshToken)
         fetch(BaseUrl + '/priony/token/refresh/', {
           method: 'POST',
           headers: {
             "Accept": "application/json",
             "Content-Type": "multipart/form-data",
             
           },
           body: formData
         }).then((result) => {
           result.json().then((response) => {
             console.log(response.access, " 123 Response")
             AsyncStorage.setItem("accessToken", response.access);
            //  alert("Thanks !")
           })
         })
   } catch (error) {
      // alert('code', code)
      // alert(error);
   }
  };

  useEffect(() => {
    firstLoad();
  }, []);
  

  return (
    <NavigationContainer>
      {userToken !== null ? <Navigatino></Navigatino> :  <AuthStack></AuthStack>    }
    </NavigationContainer>
  )
}
const App = () => {
  return (
    <>
      <AuthProvider>
        <AppNav>
        </AppNav>
      </AuthProvider>
      {/* <UploadeOfficePic/> */}
    </>
  )
}
export default App
const styles = StyleSheet.create({})