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
import data from '../../../../staticData';
import CategoryList from '../../../Global/CategoryList';
import Category from '../../../Global/Category';
const List = ()=>{
    let [dataList,setDataList] = useState(data.dataList) 
    return(
        <View style={styles.container}> 
            <View style={styles.listView}> 
                <CategoryList data ={dataList}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:0.2
    },
    listView :{
        backgroundColor:'white',
                flexDirection:'row',
                marginTop:10,
                marginBottom:35,
                marginHorizontal:10,
                padding:10,
                borderRadius:25,
            justifyContent:'center',
    }
}) 

export default List ;