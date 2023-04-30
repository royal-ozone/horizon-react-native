import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
import Home from "../Pages/Home";
import Order from '../Pages/Order';
import Cart from '../Pages/cart/Cart';
import Category from "../Pages/category/Category";
import Profile from '../Pages/profile/Profile';
import ProductDetailsPage from '../Pages/productPage/productDetails';
// import { Header } from "@react-navigation/stack";
// import AnIcon from 'react-native-vector-icons/AntDesign';
// import Feather from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Favorite from 'react-native-vector-icons/MaterialIcons';
import BuyIcons from 'react-native-vector-icons/FontAwesome5';
 // import AuthStack from './AuthStack';
// import MyDrawer from './Drawer'
import data from '../../staticData';

const Tab = createBottomTabNavigator();

const StoreData = async (value) => {
    try {
       const jsonValue = JSON.stringify(value)
       await AsyncStorage.setItem('@storage_Key', jsonValue)
     } catch (e) {
       // saving error
     }
     return (
        <>
        {alert('store data ')}
        </>
     )
   }

const TabArr = [
    { route: 'Cart', label: 'Add To Cart', component: Home , url: 'cart-arrow-down', data: [] },
    { route: 'Favorite', label: 'Add To Favorite', component: Order, url: 'favorite-border', data: [] },
    { route: 'Buy', label: 'Buy Now', component: Cart, url: require('../../assets/images/category/trolley.png'), data: [] },

]
const ButtonTabNavigatorProductDetail = (props) => {
   // alert(JSON.stringify(props))
   // let item = props.item
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    left: 16,
                    borderRadius: 16,

                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',


            }}

        >
            {TabArr.map((item, index) => {
                return (

                    <Tab.Screen key={index} name={item.route !== 'Cart' ? item.route : 'i'} component={item.component} initialParams={item.data} options={{
                        // tabBarBadge: 3,
                        title: item.label,
                        tabBarIcon: ({ focused, color, size }) => {
                            let IconName;
                            let urlImage;
                            if (item.route === 'Cart') {
                                return (
                                    <Ionicons
                                      name="cart-arrow-down"
                                      size={30}
                                      color={focused ? "#006600" : "#8e8e93"}
                                    />
                                )
                            } else if (item.route === 'Favorite') {
                                return (
                                    <Favorite  name={focused? 'favorite':'favorite-border'} size={30} /> 
                                )
                               
                            }
                            else if (item.route === 'Buy') {
                              return (
                                <BuyIcons name='cart-plus' size={30} /> 

                              )
                            }

                            return (
                                <View style={styles.logImage}>

                                    {/* <Image  style={styles.logImage} source={focused ? require('../../assets/images/category/user.png'):item.url} /> */}

                                    {/* {
                                        item.route == 'Cart' ? <Ionicons name={ 'cart-arrow-down'} size={30} /> : <Ionicons name={ 'cart-arrow-down'} size={30} /> 
                                    }
                                    {
                                        item.route == 'Favorite' ? <Favorite name={'favorite-border'} size={30} /> : <Favorite name={'favorite-border'} size={30}  />
                                    } */}
                                    
                                      {/* <IconName /> */}
                                    
                                </View>


                            )
                        },
                    }}
                    />
                )



            })}








        </Tab.Navigator>


    )
}

const styles = StyleSheet.create({
    logImage: {
        width: 30,
        height: 30,
        // color:'red'
    },
    logImage2: {
        width: 25,
        height: 25,
    }, framImage2: {
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 10,
        backgroundColor: '#00FF00',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    framImage: {
        width: 82,
        height: 82,
        backgroundColor: '#ADD8E6',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },


})



export default ButtonTabNavigatorProductDetail;