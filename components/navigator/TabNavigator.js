import React  from "react";
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
import Category  from "../Pages/category/Category";
import Profile from '../Pages/profile/Profile';
// import { Header } from "@react-navigation/stack";
// import AnIcon from 'react-native-vector-icons/AntDesign';
// import Feather from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AuthStack from './AuthStack';
// import MyDrawer from './Drawer'
import data from '../../staticData';

const Tab = createBottomTabNavigator();

const TabArr =[
    {route:'Home',label:'Home',component:Home ,url:require('../../assets/images/category/house1.png'),data:[]},
    {route:'Order',label:'Order',component:Order,url:require('../../assets/images/category/tracking.png'),data:[]},
    {route:'Cart',label:'Cart',component:Cart,url:require('../../assets/images/category/trolley.png'),data:[]},
    {route:'Category',label:'Category',component:Category,url:require('../../assets/images/category/category.png'),data:data},
    {route:'Profile',label:'Profile',component:Profile,url:require('../../assets/images/category/user.png'),data:[]},
]
const MyTab = ()=>{
    return(
     
        <Tab.Navigator 
        screenOptions={{
            headerShown:false,
            tabBarStyle:{
                height:60,
                position:'absolute',
                bottom:16,
                right:16,
                left:16,
                borderRadius:16,
               
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          
            
        }}
        
        >
            {TabArr.map((item,index)=>{
                return(

                    <Tab.Screen key={index} name={item.route!=='Cart'? item.route:'i'} component={item.component} initialParams={item.data} options={{
                       // tabBarBadge: 3,
                        title:item.label,
                        tabBarIcon:({focused,color,size})=>{
                            let iconName;
                            let urlImage;
                            if(item.route==='Home'){
                                iconName = focused ? 'home-sharp':'home-outline'
                            }else if(item.route==='Order'){
                                iconName = focused ? 'car-sharp':'car-outline'
                            }
                            else if(item.route==='Cart'){
                                iconName = focused ? 'cart-sharp':'cart-outline'
                            }
                            else if(item.route==='Category'){
                                iconName = focused ? 'grid':'grid-outline'                                
                            }
                            else if(item.route==='Profile'){
                                iconName = focused ? 'person-sharp':'person-outline'
                            }
                            return(
                                <View  style={item.route!=='Cart'?styles.logImage:styles.framImage2}>
                                 
                                    <Image  style={item.route!=='Cart'?styles.logImage:styles.logImage2} source={focused ? require('../../assets/images/category/user.png'):item.url} />
                               {/* <Ionicons name={iconName} size ={30}/> */}
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
    logImage:{
        width:30,
        height:30,
       // color:'red'
    },
    logImage2:{
        width:25,
        height:25,
    },framImage2:{
        width:50,
        height:50,
        position:'absolute',
        bottom:10,
        backgroundColor:'#00FF00',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    },
     framImage:{
        width:82,
        height:82,
        backgroundColor:'#ADD8E6',
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
    },

    
})
           


export default MyTab;