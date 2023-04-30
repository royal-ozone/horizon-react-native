import React ,{useEffect,useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    Image,
    View,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageSlider ,ImageCarousel  } from "react-native-image-slider-banner";

const Slider = (props) =>{
return (
    <View style={styles.sliderImage}> 
    <ImageSlider

        data={props.data}
        autoPlay={props.autoPlay}
        onItemChanged={(item) => console.log("item", item)}
        closeIconColor="#fff"
        caroselImageStyle={{height:180,width:350,borderRadius:50}}
        caroselImageContainerStyle={{borderRadius:25}}
        headerStyle={{borderRadius:25}}
    />
    </View>
)
}
const styles = StyleSheet.create({
    sliderImage:{
     flex:0,
     //backgroundColor:'white',
     // padding:20,
     paddingHorizontal:10,
      marginTop:10,
      marginBottom:7,
      //margin:5,
       //marginHorizontal:10,
      // borderRadius:10
    },
   
})

export default Slider;