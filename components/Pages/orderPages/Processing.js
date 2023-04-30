import React,{useEffect,useState} from 'react';
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
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListItemOrder from '../../Global/ListItemOrder';
const Processing =()=>{
   
    return (
        <View style={styles.container}> 
        <ListItemOrder  type='processing' />
        </View>
    )
}
       
          
          
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E0E0E0'
    },
    main:{
        backgroundColor:'#E0E0E0'
    },
    orderItem :{
        backgroundColor:'white',
        margin:8,
        justifyContent:'space-between',
        padding:10,
        borderRadius:20
    },
    number:{
        color:'black',
        fontSize:20
    },
    price:{
        color:'black',
         fontWeight:'bold'
    },
    row:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center'
    }

})
export default Processing 