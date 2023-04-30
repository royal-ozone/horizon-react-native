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
import ListItemOrder from '../../Global/ListItemOrder';


const Delivered = () => {
    return (
        <View style={styles.container}>
            <ListItemOrder type='deliverd' />
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0'
    }
})
export default Delivered 