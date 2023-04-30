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
import Icon from 'react-native-vector-icons/FontAwesome';
//import data from '../../../staticData'
import SubMenu from '../../Global/SubMenu';
import MyTab from '../../navigator/TabNavigator';
import { useNavigation } from '@react-navigation/native';

const Category = (props) => {
    const navigation = useNavigation();

    let[subCateName,setSubCateNmae]= useState('');
    let[data,setData] =useState([]);
   
    useEffect(()=>{
        setSubCateNmae(props.name)
    },[props.name])
    useEffect (()=>{
        if(props?.data){
            
            setData(props?.data)
        }else{
           
            setData(props.route?.params?.dataCategory)
        }
    },[props.route,props.data])
    useEffect (()=>{
    },[props.route?.params?.data?.dataCategory])
    return (
        <View style={styles.container}>
            <SubMenu namePage={subCateName ? subCateName :'All Category'}/>
            <View style={styles.main}>
                <ScrollView  >
                    <View style={styles.categoryView}>
                        {data?.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress = {()=> navigation.navigate('SubCategory',{name:item.categoryName,id:item.id})}>

                                <View key={index} style={styles.category} >
                                    <View key={index + 1} style={styles.framImage} >

                                        <Image
                                            style={styles.logImage}
                                            source={item.url}
                                            />
                                    </View>
                                    <Text>{item.categoryName}</Text>
                                </View>
                                            </TouchableOpacity>
                            )
                        })}



                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00FF00',
        
    },
    categoryView: {
        //flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: "wrap",
         marginTop:10,
        marginHorizontal:10,
        // padding:20,
        borderRadius: 25,
        //alignItems:'center',
        //justifyContent:'flex-start',
        //justifyContent:'flex-end',
        justifyContent: 'center',
    },
    category: {
        margin: 10,
        alignItems: 'center',
        width: 70,

    },
    logImage: {
        width: 60,
        height: 60,
        //borderRadius:30,
        backgroundColor: '#ADD8E6'
    },
    framImage: {
        width: 82,
        height: 82,
        backgroundColor: '#ADD8E6',
        //margin:5,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        marginTop:10
    },

})

export default Category;