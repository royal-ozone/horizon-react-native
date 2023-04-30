import React from 'react';
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
    ImageBackground,
    Button
} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import Notification from '../Pages/Notification';
import Home from '../Pages/Home';
import Category from '../Pages/category/Category';
import Profile from '../Pages/profile/Profile';
import Order from '../Pages/Order';
import Cart from '../Pages/cart/Cart';
import MyTab from './TabNavigator';
//import MyTabs from './topTapNav';
//const Drawer = createDrawerNavigator();
const DrawerArr =[
    {label:'Home',component:MyTab ,url:require('../../assets/images/category/house1.png')},
    {label:'My Order',component:Order,url:require('../../assets/images/category/sent.png')},
    {label:'All Categories',component:Category,url:require('../../assets/images/category/category.png')},
    {label:'My Account',component:Profile,url:require('../../assets/images/category/user.png')},
    {label:'My Cart',component:Cart,url:require('../../assets/images/category/trolley.png')},
    {label:'Notification',component:Notification,url:require('../../assets/images/category/bell.png')},
]
const CustomDrawerContent=(props)=> {
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.containar}> 

            <View > 

                <ImageBackground
                    source={require('../../assets/images/logoImage/background.jpg')}
                    style={styles.imageBackground}
                    > 
                    <Image 
                    source={require('../../assets/images/ahmad3.jpeg')}
                    style={styles.image}
                    />
                    <Text 
                        style={{
                            marginHorizontal:10,
                            fontSize:20,
                            fontFamily: 'EvilIcons',
                            fontWeight:'bold',
            
                        }}
                    > Ahmad Arman </Text>
                </ImageBackground>

                <DrawerItemList {...props} />

            </View>
            <View >
                <Text
                style={{
                    borderTopColor: '#C4C4CC',
                    borderTopWidth: 1,
                    marginTop: 10,
                    paddingHorizontal:15,
                    paddingTop:10,
                    fontSize:15,
                    fontWeight:'400'
                }}
                    > Other </Text>
                <TouchableOpacity>
                    <Text style={styles.text}>Terms & Condition </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Privacy & policy</Text>
                </TouchableOpacity>
            </View>
          
        </View>
       
      </DrawerContentScrollView>
    );
  }
const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator
    useLegacyImplementation
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
        drawerStyle: {
         // backgroundColor: '#AFE1AF',
          //width: 240,
        },
        drawerPosition: 'left',
        //headerShown:true 
      }
      
    }
    
    >
        {DrawerArr.map((item,index)=>{
            return (
                <LeftDrawer.Screen key={index} name={item.label} component={item.component}  options={{
                    headerShown:false,
                    headerTitle:'Horizon',
                    headerStyle:{
                        backgroundColor:'#00FF00'
                    },
                    
                    // header:(props)=>{
                    //     <View>
                    //         {props}
                    //     <Text> ddddddddddd</Text>
                    //     <Image ></Image>
                    //     </View>
                    // },
                    drawerIcon:({color})=>{
                       return <Image  style={styles.logImage} source={item.url} />;
                    },
                    drawerType:'front',
                    drawerPosition:'left',
                    drawerActiveTintColor:'black',
                    drawerActiveBackgroundColor:'#e8ffff',
                    drawerStatusBarAnimation:'none',
                    //drawerInactiveTintColor:'#b8d5cd',
                   // drawerInactiveBackgroundColor:'gray',
            }} />
            )
        })}

    </LeftDrawer.Navigator>
  );
};

const RightDrawer = createDrawerNavigator();

const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator
      screenOptions={{ drawerPosition: 'right', headerShown: false }}
    >
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
};


const MyDrawer =()=>{
    return(
        <RightDrawerScreen />
        )
    }
        
          
       
      
        
     

     

const styles = StyleSheet.create({
    logImage:{
        width:20,
        height:20,
    },
    containar:{
        //flex:2,
        //flexDirection:'column',
        justifyContent:'space-between',
       // alignItems:'flex-start',
       alignContent:'space-between'
    },
    text:{
        fontSize:15,
        paddingHorizontal:18,
        color:'black',
        paddingTop:10
    },
    image:{
        width:70,
        height:70,
        borderRadius:40,
        marginHorizontal:30,
        marginBottom:5,
    },
    imageBackground:{
        width:'100%',
        height:150,
        justifyContent:'center',
        alignItems:'flex-start',
        
    }
   
})

export default MyDrawer;