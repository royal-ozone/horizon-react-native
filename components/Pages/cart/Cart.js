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
import data from '../../../staticData';
import SubMenu from '../../Global/SubMenu';
import MyTab from '../../navigator/TabNavigator';
import List from './list/list';
import Items from './items/Items';
const Order = (props) => {
    return (
        <View style={styles.container}>
            <SubMenu namePage='My Cart' />
            <View style={styles.main}>

                <ScrollView  >
                   

                   <List />
                   
                   

                    <Items />
                   

                    
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
        backgroundColor: '#E0E0EE',
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        
        ///////////////////
        
      
        //     backgroundColor:'white',
        //     flexDirection:'row',
          
        //     marginTop:10,
        //     marginHorizontal:10,
          
        //     borderRadius:25,
          
        //    justifyContent:'center',
        
       // marginTop:10
    },

})

export default Order;