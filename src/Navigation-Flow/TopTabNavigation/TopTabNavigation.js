import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OfficeScreen from '../../screen/ProfileDetails/OfficeScreen/OfficeScreen'
import CertificateScreen from '../../screen/ProfileDetails/CertificateScreen/CertificateScreen';
import AdScreen from '../../screen/ProfileDetails/AdScreen/AdScreen';
import YoutubeScreen from '../../screen/ProfileDetails/YoutubeScreen/YoutubeScreen';
import RatingScreen from '../../screen/ProfileDetails/RatingScreen/RatingScreen';
import LikeScreen from '../../screen/ProfileDetails/LikeScreen/LikeScreen';
// import CertificateScreen from '../../screens/ProfileScreen/ProfileDetails/CertificateScreen/CertificateScreen';
// import AdScreen from '../../screens/ProfileScreen/ProfileDetails/AdScreen/AdScreen';
// import YoutubeScreen from '../../screens/ProfileScreen/ProfileDetails/YoutubeScreen';
// import RatingScreen from '../../screens/ProfileScreen/ProfileDetails/RatingScreen/RatingScreen';
// import LikeScreen from '../../screens/ProfileScreen/ProfileDetails/LikeScreen/LikeScreen';

const TopTabNavigation = ({ navigation }) => {

    const Tab = createMaterialTopTabNavigator();

    return (
        // <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarHideOnKeyboard: true,

                tabBarItemStyle: {
                    height: 50,
                    marginHorizontal: 10,
                    borderRadius: 10,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
            }}


        >
            <Tab.Screen name="AdScreen" component={AdScreen} options={{
                tabBarLabel: "",
                tabBarIcon: ({ color }) =>
                    <Image style={styles.iconn} source={require('./assets/THREE.png')} />,
                headerShown: false,
            }} />

            <Tab.Screen name="YoutubeScreen" component={YoutubeScreen} options={{
                tabBarLabel: "",
                tabBarIcon: ({ color }) =>
                    <Image style={styles.iconn} source={require('./assets/four.png')} />,
                headerShown: false,
            }} />


            <Tab.Screen name="OfficeScreen" component={OfficeScreen}
                options={{
                    tabBarLabel: "",

                    tabBarIcon: ({ color }) =>
                        <Image style={styles.iconn} source={require('./assets/one.png')} />,
                    headerShown: false,
                }}
            />
            <Tab.Screen name="CertificateScreen" component={CertificateScreen} options={{
                tabBarLabel: "",
                tabBarIcon: ({ color }) =>
                    <Image style={styles.iconn} source={require('./assets/two.png')} />,
                headerShown: false,
            }} />



            <Tab.Screen name="RatingScreen" component={RatingScreen} options={{
                tabBarLabel: "",
                tabBarIcon: ({ color }) =>
                    <Image style={styles.iconn} source={require('./assets/five.png')} />,
                headerShown: false,
            }} />

            <Tab.Screen name="LikeScreen" component={LikeScreen} options={{
                tabBarLabel: "",
                tabBarIcon: ({ color }) =>
                    <Image style={styles.iconn} source={require('./assets/six.png')} />,
                headerShown: false,
            }} />
        </Tab.Navigator>
        // </NavigationContainer>


    )
}

export default TopTabNavigation

const styles = StyleSheet.create({
    Boder: {
        height: 618,
        width: '97%',
        borderWidth: 1,
        borderColor: '#000000',
        marginHorizontal: 7,
        marginVertical: 10,
        borderRadius: 10,
    },
    FLEX: {
        flexDirection: 'row',
        marginVertical: 30,
        justifyContent: 'space-around'
    },
    iconn: {
        marginTop: 8,
        height: 30,
        width: 30
    },
})