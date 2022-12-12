// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Navigatino from './src/Navigation-Flow/Navigation/Navigatino'
// import { AuthContext, AuthProvider } from './context/AuthContext';


// const App = () => {
//   return (
//     <>
//       <Navigatino/>
//     </>
//   )
// }

// export default App

// const styles = StyleSheet.create({})



import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import Navigatino from './src/Navigation-Flow/Navigation/Navigatino'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext, AuthProvider } from './context/AuthContext';




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
      <Stack.Screen name="Profenssional" component={Profenssional} />
      <Stack.Screen name="PaymentGateWay" component={PaymentGateWay} />
      <Stack.Screen name="PaymentConfirm" component={PaymentConfirm} />
   
    
    </Stack.Navigator>
  )
}
function AppNav() {
  const { userToken } = useContext(AuthContext)
  // console.log(userToken + Request.user, "sadkjfsk")
  console.log("user Token = " + userToken)
  console.log("statement = " + userToken !== null)
  return (
    <NavigationContainer>
      {userToken !== null ?   <AuthStack></AuthStack> :<Navigatino></Navigatino>   }
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
    </>
  )
}
export default App
const styles = StyleSheet.create({})