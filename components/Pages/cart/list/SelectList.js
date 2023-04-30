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
import SelectBox from 'react-native-multi-selectbox'

const SelectList = (props) =>{ 
    const [selectedTeam,setSelectedTeam]=useState('');
    const [selectedTeams,setSelectedTeams]=useState([]);
    return (
        <View style={StyleSheet.container}>
            <Text> Select List </Text>
            <SelectBox 
                label='Select single'
                options={data}
                value={selectedTeam}
                onChange={(val)=> setSelectedTeam(val)}
            />
        </View>
    )
}

export default SelectList ;