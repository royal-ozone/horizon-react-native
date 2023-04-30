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
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = ({navigation}) =>{
return (
    <View style={styles.ViewInput}> 
          <Icon 
            name='search'
            style={styles.IconInput}
            size={20}
            color='#2E45E5'
        />
        <TextInput 
            style={styles.InputLog}
            placeholder='ابحث'
            placeholderTextColor="#004AAD"
        />
      
    </View>
)
}
const styles = StyleSheet.create({
    ViewInput:{
        flexDirection:'row-reverse',
        width:'90%',
        backgroundColor:'white',
        height:50,
        borderRadius:15,
        marginTop:5,
        marginLeft:15,
        marginRight:15,
        marginBottom:5,
        alignItems:'center'
    },
    IconInput:{
        paddingHorizontal:15,
    },
    InputLog:{
        paddingHorizontal:1,

    }  
})

export default Search;