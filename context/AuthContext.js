import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [userToken, setUserToken] = useState(null);
    const [refereshToken, setReferesh] = useState(null);
    const [accessToken, setAccess] = useState(null);
    
    const login = async () => {
        setUserToken("ashu");
        AsyncStorage.setItem('userToken', "ashu");
        console.log("login presed");
        let refereshToken = await AsyncStorage.getItem('refereshToken');
        setReferesh(refereshToken)
        console.log(refereshToken)

        let accessToken = await AsyncStorage.getItem('accessToken');
        setAccess(accessToken)
        console.log(accessToken)
    }

    const signup = async () => {
        setUserToken("ashu");
        AsyncStorage.setItem('userToken', "ashu");
        console.log("login presed");
        let refereshToken = await AsyncStorage.getItem('refereshToken');
        setReferesh(refereshToken)
        console.log(refereshToken)

        let accessToken = await AsyncStorage.getItem('accessToken');
        setAccess(accessToken)
        console.log(accessToken)

    
    }

    
    const logout = () => {
        setUserToken(null);
        setReferesh(null)
        setAccess(null)
        
        AsyncStorage.removeItem('refereshToken')
        AsyncStorage.removeItem('accessToken')
        AsyncStorage.removeItem('userToken')
        console.log("logout presed")
    }
    const isLoggedIn = async () => {
        try {
           
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);

        } catch (e) {
            console.log(`isLogged in error ${e}`)
        }
    }
    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, userToken , accessToken , signup }}>
            {children}
        </AuthContext.Provider>
    );
}