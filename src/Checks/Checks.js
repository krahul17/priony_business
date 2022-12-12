import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, ImageBackground, StatusBar, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker';

const Checks = () => {

    const [CompanyCertificationPic1, setCompanyCertificationPic1] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    const [showoption, setShowoption] = useState(false)

    const [CompanyCertificationPic2, setCompanyCertificationPic2] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    const [showoption2, setShowoption2] = useState(false)

    const [CompanyCertificationPic3, setCompanyCertificationPic3] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    const [showoption3, setShowoption3] = useState(false)

    const [CompanyCertificationPic4, setCompanyCertificationPic4] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    const [showoption4, setShowoption4] = useState(false)

    const [CompanyCertificationPic5, setCompanyCertificationPic5] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    const [showoption5, setShowoption5] = useState(false)

    const [CompanyCertificationPic6, setCompanyCertificationPic6] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    const [showoption6, setShowoption6] = useState(false)

    const [CompanyCertificationPic7, setCompanyCertificationPic7] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    const [showoption7, setShowoption7] = useState(false)

    const [CompanyCertificationPic8, setCompanyCertificationPic8] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    const [showoption8, setShowoption8] = useState(false)

    const [CompanyCertificationPic9, setCompanyCertificationPic9] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    const [showoption9, setShowoption9] = useState(false)

    const [CompanyCertificationPic10, setCompanyCertificationPic10] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    const [showoption10, setShowoption10] = useState(false)

    const [CompanyCertificationPic11, setCompanyCertificationPic11] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    const [showoption11, setShowoption11] = useState(false)

    const [CompanyCertificationPic12, setCompanyCertificationPic12] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    const [showoption12, setShowoption12] = useState(false)
    // const [accessToken, setAccess] = useState(null);


    const openGalleryFront = () => {
        ImageCropPicker.openPicker({
            // multiple: true,
            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyCertificationPic1 => {
            console.log(CompanyCertificationPic1);
            setShowoption(false)
            setCompanyCertificationPic1(CompanyCertificationPic1.path)
        });
    }
    const openGalleryFront2 = () => {
        ImageCropPicker.openPicker({
            // multiple: true,
            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyCertificationPic2 => {
            console.log(CompanyCertificationPic2);
            setShowoption2(false)
            setCompanyCertificationPic2(CompanyCertificationPic2.path)
        });
    }
    const openGalleryFront3 = () => {
        ImageCropPicker.openPicker({
            // multiple: true,
            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyCertificationPic3 => {
            console.log(CompanyCertificationPic3);
            setShowoption3(false)
            setCompanyCertificationPic3(CompanyCertificationPic3.path)
        });
    }
    const openGalleryFront4 = () => {
        ImageCropPicker.openPicker({
            // multiple: true,
            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyCertificationPic4 => {
            setShowoption4(false)
            setCompanyCertificationPic4(CompanyCertificationPic4.path)
        });
    }
    const openGalleryFront5 = () => {
        ImageCropPicker.openPicker({
            // multiple: true,
            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyCertificationPic5 => {
            setShowoption5(false)
            setCompanyCertificationPic5(CompanyCertificationPic5.path)
        });
    }
    const openGalleryFront6 = () => {
        ImageCropPicker.openPicker({
            // multiple: true,
            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyCertificationPic6 => {
            setShowoption6(false)
            setCompanyCertificationPic6(CompanyCertificationPic6.path)
        });
    }
    const openGalleryFront7 = () => {
        ImageCropPicker.openPicker({
            // multiple: true,
            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyCertificationPic7 => {
            setShowoption7(false)
            setCompanyCertificationPic7(CompanyCertificationPic7.path)
        });
    }
    const openGalleryFront8 = () => {
        ImageCropPicker.openPicker({
            // multiple: true,
            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyCertificationPic8 => {
            setShowoption8(false)
            setCompanyCertificationPic8(CompanyCertificationPic8.path)
        });
    }
    const openGalleryFront9 = () => {
        ImageCropPicker.openPicker({
            // multiple: true,
            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyCertificationPic8 => {
            setShowoption9(false)
            setCompanyCertificationPic8(CompanyCertificationPic8.path)
        });
    }
    const openGalleryFront10 = () => {
        ImageCropPicker.openPicker({
            // multiple: true,
            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyCertificationPic10 => {
            setShowoption10(false)
            setCompanyCertificationPic10(CompanyCertificationPic10.path)
        });
    }
    const openGalleryFront11 = () => {
        ImageCropPicker.openPicker({
            // multiple: true,
            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyCertificationPic11 => {
            setShowoption11(false)
            setCompanyCertificationPic11(CompanyCertificationPic11.path)
        });
    }
    const openGalleryFront12 = () => {
        ImageCropPicker.openPicker({
            // multiple: true,
            width: 100,
            height: 100,
            cropping: false
        }).then(CompanyCertificationPic12 => {
            console.log(CompanyCertificationPic12);
            setShowoption12(false)
            setCompanyCertificationPic12(CompanyCertificationPic12.path)
        });
    }

    return (
        <View>
            <View style={styles.mainBorder}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                    <TouchableOpacity onPress={() => openGalleryFront()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic1 }} style={styles.dp} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => openGalleryFront2()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic2 }} style={styles.dp} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => openGalleryFront3()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic3 }} style={styles.dp} />
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                    <TouchableOpacity onPress={() => openGalleryFront4()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic4 }} style={styles.dp} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => openGalleryFront5()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic5 }} style={styles.dp} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => openGalleryFront6()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic6 }} style={styles.dp} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                    <TouchableOpacity onPress={() => openGalleryFront7()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic7 }} style={styles.dp} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => openGalleryFront8()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic8 }} style={styles.dp} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openGalleryFront9()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic9 }} style={styles.dp} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                     
                <TouchableOpacity onPress={() => openGalleryFront10()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic10 }} style={styles.dp} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openGalleryFront11()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic11 }} style={styles.dp} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openGalleryFront12()}>
                        <ImageBackground source={{ uri: CompanyCertificationPic12 }} style={styles.dp} />
                    </TouchableOpacity> 
                </View>



            </View>
        </View>
    )
}

export default Checks

const styles = StyleSheet.create({
    mainBorder: {
        borderWidth: 1,
        height: 'auto',
        width: '97%',
        borderRadius: 10,
        marginHorizontal: 7,
        marginTop: 20,
    },
    dp: {
        overflow: 'hidden',
        marginTop: 5,
        width: 120,
        height: 150,
        borderRadius: 10
    },
})