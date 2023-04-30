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
} from 'react-native';
import SubMenu from '../../Global/SubMenu';
const Setting =()=>{
    return (
        <View style={styles.container}>
             <SubMenu namePage='My Setting' /> 
             <View style={styles.main}> 
        <ScrollView > 

        <Text> Setting...</Text>
        <Text> Setting...</Text>

        <Text> Setting...</Text>

        <Text> Setting...</Text>
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
    main: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        marginTop:10
    },
   
     imageBackground:{
        width:400,
        height:150,
        flexDirection:'row',
        paddingTop:30,

      // justifyContent:'center',
       //alignItems:'center',
       
    }, image:{
        width:90,
        height:90,
        borderRadius:45,
        marginHorizontal:30,
        marginBottom:5,
      //  justifyContent:'flex-start',

    },
    profileBody:{
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius:25,
        borderBottomRightRadius:25,

        marginTop:20,
        paddingBottom:20
    },
    text:{
         paddingHorizontal:20,
         color:'black',
         paddingTop:15,
         paddingBottom:15,
         fontSize: 18,
        textAlign:'left',
        borderBottomColor:'gray',
        borderBottomWidth:.7
       
    },
    framText :{
      //  maxWidth:10,

    }
})
export default Setting 