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
import Menu from '../../Global/menu';
import BestSelling from '../../Global/BestSelling';

import data from '../../../staticData';

const BestSellingPage = (props) => {
    return (
        <View style={styles.container}>
            <Menu />
            <View style={styles.main}>
                <ScrollView >
                    <BestSelling data={data.specialDeels} n={100} />
                </ScrollView>
            </View >


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00FF00',
        // borderRadius:25,
        //paddingBottom:50
    },
    categoryView: {
        //flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: "wrap",
        marginTop: 10,
        marginHorizontal: 10,
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
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: 10
    },

})

export default BestSellingPage
;