import { StyleSheet,ScrollView, Text, View, Image, TouchableOpacity, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
// import { ScrollView } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-crop-picker';
import ImageView from "react-native-image-viewing";


const status = [
    { id: 1, sName: 'Main Menu' },
    { id: 2, sName: 'Awards & Certfucates' },
    { id: 3, sName: 'Business Page' },
    { id: 4, sName: 'Add manually' },
]
const Chexk = ({ navigation }) => {
    const [imagefront, setImagefront] = useState(null);
    const [imageback, setImageback] = useState(null);
    const [seletedImage, setSeletedImage] = useState("");
    const [showoption, setShowoption] = useState(false)
    const [showoptiontwo, setShowoptiontwo] = useState(false)
    const [idproof, setIdproof] = useState('')
    const [show, setShow] = useState(true)
    const [state, setState] = useState({
        imageArr: [],
        visible: false
    })
    const { imageArr, visible } = state
    const onSetState = (key, value) => {
        setState({ ...state, [key]: value })
    }
    const [select, setSelected] = useState('')
    const onSelect = (item) => {
        setSelected(item)
    }
    const openOptionForFront = () => {
        setShowoption(true)
    }
    const openOptionForBack = () => {
        setShowoptiontwo(true)
    }
    const openGalleryFront = () => {
        ImagePicker.openPicker({
            multiple: true,
            width: 100,
            height: 100,
            cropping: true
        }).then(imagefront => {
            console.log(imagefront);
            setShowoption(false)
            let selectedImageArr = imagefront.map((item) => {
                return {
                    uri: item.path
                }
            })
            onSetState("imageArr", imagefront)
            setSeletedImage(selectedImageArr)
            console.log(seletedImage)
            // setImagefront(imagefront.path)
        }).catch((err) => {
            console.log(err);
        });
    }
    const openGalleryBack = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(imageback => {
            console.log(imageback);
            setShowoptiontwo(false)
            setImageback(imageback.path)
        });
    }
    const onPressImage = () => {
        onSetState("visible", true)
    }

    function Hello(){
        alert("GFVHGSFG")
    }
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.boder}>
                <View style={styles.firstDiv}>
                    <TouchableOpacity>
                        {/* <Image source={require('../../../assets/images/left.png')} style={{ height: 25, width: 25 }} /> */}
                    </TouchableOpacity>
                    <Text style={styles.textConst}>Upload Images to Gallery</Text>
                </View>
            </View>
            <View style={{ padding: 20 }}>
                <Text style={styles.text2}>
                    Create your own personalized Photo Gallery
                </Text>
            </View>
            <View style={styles.divBorder}>
                <View style={{ padding: 20 }}>
                    <View style={{ zIndex: 1 }}>
                        
                    </View>
                    <Text style={styles.smltext}>
                        Upload images to the album
                    </Text>
                    <ScrollView horizontal>
                        {imageArr.length ? (
                            imageArr.map((item, index) => {
                                return <Pressable onPress={onPressImage} key={index} style={styles.imageBorder}>
                                    <Image
                                        resizeMode="cover"
                                        source={{ uri: item.path }}
                                        // defaultSource={require('../../../assets/images/logo.png')}
                                        style={{ height: "100%", width: "100%", borderRadius: 7 }} />
                                </Pressable>
                            })
                        ) : (
                            <View style={styles.imageBorder}>
                                <TouchableOpacity onPress={() => openGalleryFront()}>
                                    <Text style={styles.addbtn} >+</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </ScrollView>
                    <View style={{ padding: 10 }}>
                        <TouchableOpacity onPress={() => openGalleryFront()}>
                            <View style={styles.choosebor}>
                                <Text style={{ color: '#fff', fontWeight: '500' }}>
                                    Choose files
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 15 }}>
                        <Text style={{ color: '#000', fontSize: 14, fontWeight: '400' }}>
                            Only PDF, JPEG & PNG Files with size Limit 5MB
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ marginVertical: 50 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Pressable>
                        <View>
                            <Text style={styles.textPress}>Cancel</Text>
                        </View>
                    </Pressable>
                    <TouchableOpacity onPress={Hello}>
                        <View style={styles.pressConst}>
                            <Text style={styles.textPress}>Create</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ImageView
                images={seletedImage}
                //   imageIndex={0}
                visible={visible}
                onRequestClose={() => onSetState("visible", false)}
            />
        </ScrollView>
    )
}
export default Chexk
const styles = StyleSheet.create({
    mainConst: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textConst: {
        color: '#000',
        fontWeight: '500',
        fontSize: 18,
        marginHorizontal: 20
    },
    firstDiv: {
        flexDirection: 'row',
        padding: 20
    },
    boder: {
        borderBottomWidth: 0.5,
        elevation: 1,
        borderColor: '#FFFFFF',
    },
    text2: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    smltext: {
        fontSize: 14,
        color: '#000',
        fontWeight: '500',
        marginVertical: 10
    },
    imageBorder: {
        backgroundColor: '#D9D9D9',
        height: 100,
        width: Dimensions.get("window").width / 3.6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginRight: 10
    },
    choosebor: {
        backgroundColor: '#5A849B',
        height: 25,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    divBorder: {
        borderColor: '#EEE8E8',
        borderWidth: 1,
        height: 320,
        elevation: 0.5
    },
    pressConst: {
        backgroundColor: '#34EBEB',
        borderRadius: 25,
    },
    textPress: {
        padding: 10,
        paddingHorizontal: 30,
        color: '#000',
        fontWeight: '600'
    },
    colorPress: {
        padding: 10,
        paddingHorizontal: 30,
        fontWeight: '600',
        color: '#000'
    },
    cont: {
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        elevation: 0.5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    imgCont: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 10
    },
    delBtnCont: {
        backgroundColor: "red",
        padding: 15,
        borderRadius: 50,
        left: 140,
        top: 70
    },
})