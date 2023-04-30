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
    TextInput,
} from 'react-native';
import SubMenu from '../../Global/SubMenu';
import Category from './Category';
import SubCategory from '../../Global/category/SubCategory';
import {dataSubCategory} from '../../../staticData';
const SubCategoryPage =(props)=>{
    let [allData,setAllData] =useState([]);
    let[subCateName,setSubCateNmae]= useState('');
   
    useEffect(()=>{
        setSubCateNmae(props.route.params.name)
        let filter = dataSubCategory.filter((item)=> item.categoryId === props.route.params.id )
        setAllData(filter)
    },[props.route.params.name])
   
    return(
        <View style={styles.container}> 
          <SubCategory  data={allData} name={subCateName} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
          backgroundColor: '#00FF00',
        
    },
    main: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        marginTop:10
    },
})

export default SubCategoryPage;