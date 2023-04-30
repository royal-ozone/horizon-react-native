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
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import Iocon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Menu = (back) =>{
    const navigation = useNavigation();
    let [value,setValue] =useState('');
    useEffect(()=>{
        setValue(back&&back.value&&back.value)
      //  alert(JSON.stringify(value))
    },[back.value])
    return(
        <View style={styles.container}> 
         
          <TouchableOpacity >
            {back&&back.back==='no'?
                <Iocon 
                name = 'ios-notifications-outline'
                onPress={() => 
                    navigation.navigate('Notification')
                }             style={styles.IconInput}
                size={30}   
                />
            :
                <Iocon 
                name = 'ios-chevron-back-circle-outline'
                onPress={() => navigation.goBack()}             style={styles.IconInput}
                size={35}   
                />
            }
            
          
         </TouchableOpacity>
           
            <View style={styles.headView}> 
                <Iocon 
                name = 'ios-menu-sharp'
                onPress={()=>{navigation.openDrawer()}}
                style={styles.IconInput}
                size={30}
                />
                <View style={styles.headView2}> 
                <Image
                    style={styles.logImage}
                   // source={{uri: 'https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png'}}
                    source={require('../../assets/images/logoImage/logo10.jpeg')}
                    />
                    {/* <Text
                    style={styles.headName}
                     >هورايزون</Text>  */}
                     <Text style={styles.headName}> {value&&value.label?value.label:'List Cart Name'}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
       flex:0.06,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
        alignItems:'center',
        
    },
        
    headView:{
        flexDirection:'row-reverse',
        alignItems:'center',
    },
    headView2:{
        alignItems:'center',
        flexDirection:'row-reverse',
    },
    logImage:{
         width: 40,
         height: 40,
        borderRadius:25
    },
    IconInput:{
        paddingHorizontal:30
    },
    headName:{
        paddingHorizontal:5
    }
       
      

})

export default Menu ;