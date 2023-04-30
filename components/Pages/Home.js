import React, { useEffect, useState } from 'react';
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
} from 'react-native';

//import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
//import Swiper from 'react-native-swiper';
  import Search from '../Global/Search';
 import Menu from '../Global/menu';
  //import Category from '../Global/Category';
  import Category from '../Global/Category';
  import Slider from '../Global/slider';
 import data from '../../staticData';
 import SpecialDeels from '../Global/specialDeels';
 import BestSelling from '../Global/BestSelling';
 import PopularProducts  from '../Global/PopularProducts';
const Home = ( props ) => {
    
    let dataSlider = [
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
        { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
        { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
    ]
    let [value,setValue] = useState('')
    useEffect(()=>{
         setValue(props.route.params)
        //alert(JSON.stringify(props.route.params))

    },[props.route.params])
    return (
        <View style={styles.container}>
             <Menu back={'no'} value={value}/>
            <Search /> 
            <View style={styles.main}>
                <ScrollView>
                    <Category data={data.dataCategory} namePage='home' />
                    <Slider data={dataSlider}  autoPlay={true}  />
                    <SpecialDeels data={data.specialDeels} n={4} value={value} />
                    <View style={styles.framImage}> 
                    <Image source={require('../../assets/images/logoImage/logo10.jpeg')} style={styles.imageStyle} />
                    </View>
                    <BestSelling data={data.specialDeels} n={2} />
                    <View style={[styles.framImage,]}> 
                    <Image source={require('../../assets/images/logoImage/logo10.jpeg')} style={[styles.imageStyle,{height:180}]} />
                    </View>
                    <PopularProducts data={data.specialDeels} n={8} />
                </ScrollView>

                   
            </View>
          
        </View>
    )
}
[]
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:'center',
        backgroundColor: '#00FF00',
        flexDirection: 'column',
        //alignItems:'flex-start',
        //justifyContent:'flex-end'
    },
    main: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
    },
    imageStyle:{
        width:'95%',
        height:150,
        borderRadius:25,
    },
    framImage:{
        alignItems:'center',
        marginBottom:5,
    }
        


})

export default Home;




