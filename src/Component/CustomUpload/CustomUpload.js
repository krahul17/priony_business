import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const CustomUpload = () => {

    const [imagefront, setImagefront] = useState(
        'https://png.pngtree.com/element_our/20190601/ourmid/pngtree-file-upload-icon-image_1344393.jpg'
    );
    const [showoption, setShowoption] = useState(false)
    // const [showoptiontwo, setShowoptiontwo] = useState(false)

    const [idproof, setIdproof] = useState('')

    const openGalleryFront = () => {
        ImagePicker
            .openPicker({width: 100, height: 100})
            .then(imagefront => {
                console.log(imagefront);
                setShowoption(false)
                setImagefront(imagefront.path)
            });
    }

    return (

        <View style={styles.main}>

            <View
                style={{
                    alignSelf: 'center',
                    marginVertical: 10
                }}>
                
                <View>
                    <TouchableOpacity  onPress={() => openGalleryFront()}>
                        {
                            imagefront && <ImageBackground
                                    source={{
                                        uri: imagefront
                                    }}
                                    style={styles.dp}/>
                        }
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    );

}
export default CustomUpload;
const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        justifyContent: "center"
    },
    dp: {
    //    borderRadius: 15,
        // marginTop: 23,
        width: 350,
        height: 350,
        alignSelf: 'center',
        overflow: "hidden"
    },
    // border: {
    //     width: 55,
    //     height: 34,
    //     borderRadius: 999,
    //     padding: 4,
    //     alignSelf: 'center'
    // },
    // camera: {
    //     width: 40,
    //     height: 34,
    //     alignSelf: 'center',
    //     // marginVertical:10,
    //     marginTop: 10
    // },
    // cross: {
    //     width: 28,
    //     height: 28,
    //     position: "absolute",
    //     zIndex: 10,
    //     elevation: 10,
    //     marginLeft: 44
    // },
    // imageload: {
    //     width: 130,
    //     height: 100,
    //     elevation: 3,
    //     zIndex: 3,
    //     position: "relative"
    // }
});
