import React, { useState, useEffect } from 'react';
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
import allData from '../../../staticData';

import ListItemOrder from '../../Global/ListItemOrder';

const Cancelled = () => {

    return (
        <View style={styles.container}>
            <ListItemOrder type='cancelled' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0'
    }
})
export default Cancelled 