import { StyleSheet, SafeAreaView, Text, View, StatusBar, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker';
import RazorpayCheckout from 'react-native-razorpay';




const PaymentGateWay = () => {

    const companylogo2 = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWR8UleGP6xe2whajk4Tq7rb08APejJOkf042F3Eo_TbVBg8Sj'

    // const [CompanyLogo, setCompanyLogo] = useState();
    const [CompanyLogo, setCompanyLogo] = useState("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg");
    const [showoption, setShowoption] = useState(false)


    const openGalleryFront = () => {
        ImageCropPicker.openPicker({

            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyLogo => {
            console.log(CompanyLogo);
            setShowoption(false)
            setCompanyLogo(CompanyLogo.path)
        });
    }

    return (
        <>
            <StatusBar
                backgroundColor="#0006C1"
                barStyle={'light-content'} />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                    <View>
                        <View>
                            <Image source={require('../../../assetsLogo/logo.png')} style={styles.img} />
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('PaymentConfirm')}>
                                <Text style={styles.text}> Payment Gateway</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.textonly}> Your Plan</Text>

                            <View style={styles.planchoose}>
                                <Text style={styles.textplan}> You Choose </Text>
                                <Text style={styles.textplan2}> : Professional</Text>
                            </View>

                            <View style={styles.planchoose}>
                                <Text style={styles.textplan}> Plan Amount </Text>
                                <Text style={styles.textplan2}>: 7000</Text>
                            </View>

                        </View>
                        <View style={styles.nameBeneficier}>
                            <Text style={styles.textplan}> Sukhpreet Singh</Text>
                            <Text style={styles.textplan}> State Bank of India</Text>
                            <Text style={styles.textplan}> Sector 46C, Chandigarh</Text>
                            <Text style={styles.textplan}> 65007574500</Text>
                            <Text style={styles.textplan}>IFSC CODE - SBIN0050825 </Text>
                            <Text style={styles.textplan}>-------------OR------------- </Text>
                            <Text style={styles.textplan}>Google Pay No. : 9915327780 </Text>

                        </View>
                        <View>
                            <Image source={require('../assets/qr.jpeg')} style={styles.qrimg} />
                        </View>
                        <TouchableOpacity style={styles.Btn} onPress={() => {
                            var options = {
                                description: 'Credits towards consultation',
                                image: 'https://i.imgur.com/3g7nmJC.jpg',
                                currency: 'INR',
                                key: 'rzp_test_OnUYJ85LMxASW9',
                                amount: '100',
                                name: 'Test',
                                // order_id: 'order_DslnoIgkIDL8Z',//Replace this with an order_id created using Orders API.
                                prefill: {
                                    email: 'test@example.com',
                                    contact: '9191919191',
                                    name: 'Razorpay'
                                },
                                theme: { color: '#53a20e' }
                            }
                            RazorpayCheckout.open(options).then((data) => {
                                // handle success
                                alert(`Success: ${data.razorpay_payment_id}`);
                            }).catch((error) => {
                                // handle failure
                                alert(`Error: ${error.code} | ${error.description}`);
                            });
                        }}>
                            <Text style={styles.btn}>Razor Pay </Text>
                        </TouchableOpacity>


                        <View>
                            <TouchableOpacity onPress={() => openGalleryFront()} style={styles.image}>
                                <ImageBackground source={{ uri: CompanyLogo }} style={styles.dp} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.Btn2}>
                            <Text style={styles.btn2}>Upload ScreenShot </Text>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default PaymentGateWay

const styles = StyleSheet.create({
    img: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        marginVertical: '2%',
        resizeMode: 'contain'
    },
    text: {
        color: '#000',
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '3%',

    },
    textonly: {
        padding: 20,
        color: '#000',
        fontSize: 15,
        fontWeight: '600',
    },
    planchoose: {
        flexDirection: 'row',
        paddingLeft: 20,

    },
    textplan: {
        color: '#000',
        fontSize: 15,
        fontWeight: '600',
        marginTop: '1%',
    },
    textplan2: {
        color: '#000',
        fontSize: 14,
        fontWeight: '500',
        marginTop: '1%',
    },
    nameBeneficier: {
        // flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    qrimg: {
        width: '80%',
        height: 400,
        alignSelf: 'center',
        marginVertical: '2%'

    },
    Btn: {
        alignItems: 'center',
        marginVertical: 10,
    },
    btn: {
        backgroundColor: '#0006C1',
        paddingHorizontal: 80,
        paddingVertical: 10,
        color: '#FFFFFF',
        fontSize: 25,
        borderRadius: 15,
        fontWeight: "600"
    },
    Btn2: {
        alignItems: 'center',
        marginVertical: 50,
        justifyContent: "center",
        alignSelf: 'center',
        
    },
    btn2: {
        backgroundColor: '#0006C1',
        color: '#FFFFFF',
        fontSize: 25,
        height: 55,
        fontWeight: "600",
        borderRadius: 15,
        paddingHorizontal: 25,
     padding:12
    },
    dp: {
        overflow: 'hidden',
        width: 150,
        height: 150,
        borderRadius: 10
    },
    border: {
        padding: 4,
        marginLeft: '78%',
        position: 'absolute',
        zIndex: 1,
        marginTop: "85%",
    },
    camera: {
        width: 40,
        height: 40,
        marginLeft: 9,
        marginTop: -15
    },
    image: {
        height: 100,
        alignSelf: 'center',
        marginVertical: 30,
        resizeMode: 'contain',
        borderWidth: 1,
        borderRadius: 10,

    }
})