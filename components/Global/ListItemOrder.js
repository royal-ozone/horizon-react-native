import React,{useEffect, useState} from 'react';
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
import {ordersData} from '../../staticData';
import { useNavigation } from '@react-navigation/native';

const ListItemOrder =(props)=>{
    const navigation = useNavigation();
    const [color,setColor]=useState('white');
    const [type,setType]=useState('');
    const [data,setData]=useState(ordersData);
    useEffect(()=>{
        if(props.type==='deliverd'){
            setColor('#83f28f')
            setType('DetailDelivered')
            setData([...data.filter(e=> e.type==='deliverd')])
        }else if(props.type==='cancelled'){
            setColor('#ee6b6e')
            setType('DetailCancelled')
            setData([...data.filter(e=> e.type==='cancelled')])
        }else if(props.type==='processing'){
            setColor('#f8dc6e');
            setType('DetailProcessing')
            setData([...data.filter(e=> e.type==='processing')])
        }
    },[])
    
    return (
        <View style={styles.container}> 
            <View  style ={styles.main}>
            <FlatList 
                data={data}
                renderItem={({item})=>

                    <View  style={[styles.orderItem,{backgroundColor:color}]}> 
                   
                <TouchableOpacity onPress={()=>{navigation.navigate(type,item)}}>
                    <View style={styles.row}> 
                     <Text style={styles.number}>#{item.number} </Text>
                     <Text style={styles.price} >${item.price} </Text>
                    </View> 

                    <Text style={styles.date}> {item.date} </Text>
                </TouchableOpacity>
                    </View>

                    }
             /> 

            </View>
          
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E0E0E0'
    },
    main:{
        paddingTop:10,
        backgroundColor:'#E0E0E0'
    },
    orderItem :{
       // backgroundColor:color,
        margin:8,
        justifyContent:'space-between',
        padding:10,
        borderRadius:25
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
export default ListItemOrder; 