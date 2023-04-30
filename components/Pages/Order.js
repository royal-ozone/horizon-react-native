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
import data from '../../staticData'
import SubMenu from '../Global/SubMenu';
import MyTabs from '../navigator/topTapNav';

const Order = (props) => {
    return (
        <View style={styles.container}>
            <SubMenu  namePage='My Order' />
            <View style={styles.main}>
                <View style={styles.subMain}>

                    <MyTabs style={styles.page} />
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        backgroundColor: '#00FF00',

    },




    main: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    subMain: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 15
    }

})

export default Order;