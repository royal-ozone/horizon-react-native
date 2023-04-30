import React ,{useEffect,useState} from 'react';
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
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const Category = (props) =>{
    const navigation = useNavigation();
 
return (
    <View style={styles.categoryView}>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}> 

        {props.data&&props.data.map((item,index)=>{
            return (
                <TouchableOpacity key={index} onPress = {()=> navigation.navigate('SubCategory',{name:item.categoryName,id:item.id})}>


                <View key={index} style={styles.category} >  
                <View key={index+1} style={styles.framImage}> 

                <Image 
                    style={item.ListName? styles.logImage2:styles.logImage}
                    source={item.url}
                    />  
                </View>
                <Text>{item.categoryName||item.ListName}</Text>
                </View>
                    </TouchableOpacity>
            )
        })}
           

         {/* <View style={styles.category}> 
            {props.data[0].ListName?
                <View style={styles.categoryImage}> 
                <View style={styles.framImage}> 
                <Icon 
                    size={50}
                    name={'add-to-list'}
                    />
                </View>
                <Text> Add List </Text>
            </View>
             :
            <View></View>
            }
            </View> */}
             
           
        
    
        </ScrollView>
    

    </View>
)
}
const styles = StyleSheet.create({
    categoryView:{
      
         backgroundColor:'white',
         flexDirection:'row',
       
         marginTop:10,
         marginHorizontal:10,
       
         borderRadius:25,
       
        justifyContent:'center',
     },
     category:{
         margin:10,
         alignItems:'center',
         width:70,
 
     },
    //  categoryImage:{
    //     alignItems:'center'
    //  },
     logImage:{
         width:60,
         height:60,
         //borderRadius:40,
         backgroundColor:'#ADD8E6'
     },
     logImage2:{
        width:82,
        height:82,
        borderRadius:40,
        backgroundColor:'#ADD8E6'
    },
     framImage:{
         width:82,
         height:82,
         backgroundColor:'#ADD8E6',
         //margin:5,
         borderRadius:40,
         justifyContent:'center',
         alignItems:'center'
     }
})

export default Category;