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

const SubMenu = (props) =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}> 
         
          <TouchableOpacity >
     
                <Iocon 
                name = 'ios-chevron-back-circle-outline'
                onPress={() => navigation.goBack()}  style={styles.IconInput} size={35}   
                />
           
            
          
         </TouchableOpacity>
           
            <View style={styles.headView}> 
                
                <View style={styles.headView2}> 
               
                    <Text style={styles.headName} >
                    {props.namePage}
                    </Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
       flex:0.1,
        flexDirection: 'row',
        justifyContent:'center',
        //justifyContent: 'space-around',
        //marginTop:5,
        alignItems:'center',
        
    },
        
    headView:{
        flexDirection:'row-reverse',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    },
    headView2:{
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        paddingHorizontal:70,
        flexDirection:'row-reverse',
    },
    IconInput:{
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        paddingRight:50
    },
    headName:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'black',
    }
       
      

})

export default SubMenu ;