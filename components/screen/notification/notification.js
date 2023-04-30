
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
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationScreen = () => {
    return (
        <View>
            <View style={styles.container}>

                <View style={styles.main}>
                    <View style={styles.row}>
                        <Icon size={45} color='#23C552' name='notifications-circle-outline' />
                        <View>
                            <Text>04/03/2023  11:02 AM </Text>
                            <Text style={styles.messageStyle}>Hello , Welcom to the Horizon Family  </Text>

                        </View>
                    </View>
                    <View style={styles.row}>
                        <Icon size={45} color='#23C552' name='notifications-circle-outline' />
                        <View >
                            <Text>04/03/2023  11:04 AM </Text>
                            <Text style={styles.messageStyle}>We are very pleased to welcome you to your second home 
                            </Text>

                        </View>
                    </View>
                    <View style={styles.row}>
                        <Icon size={45} color='#23C552' name='notifications-circle-outline' />
                        <View>
                            <Text>04/03/2023  11:02 AM </Text>
                            <Text style={styles.messageStyle}>Hello , Welcom to the Horizon Family  </Text>

                        </View>
                    </View>
                    <View style={styles.row}>
                        <Icon size={45} color='#23C552' name='notifications-circle-outline' />
                        <View>
                            <Text>04/03/2023  11:02 AM </Text>
                            <Text style={styles.messageStyle}>Hello , Welcom to the Horizon Family  </Text>

                        </View>
                    </View>
                    <View style={styles.row}>
                        <Icon size={45} color='#23C552' name='notifications-circle-outline' />
                        <View>
                            <Text>04/03/2023  11:02 AM </Text>
                            <Text style={styles.messageStyle}>Hello , Welcom to the Horizon Family  </Text>

                        </View>
                    </View>
                    

                   
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: 'auto',
    },
    main: {
        marginTop: 5,
        paddingBottom: 10,
        marginBottom: 15,
        borderRadius: 25,
        marginHorizontal: 10
    },
    productReview: {
        paddingTop: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 10
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 25,
        alignContent: 'center'
        // margin:20,
    },
    row: {
        flexDirection: 'row',
        textAlign:'center',
        alignItems:'flex-start',
        marginBottom:10,
    },
    messageStyle:{
        height:'auto',
        maxWidth:280,
        fontSize:15,
        fontWeight:'bold',
        fontFamily: 'Cochin',
        marginLeft:5
    },

    price: {
        color: 'blue',
        alignItems: 'center',
        paddingRight: 10,

    },
    oldPrice: {
        color: 'gray',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    textForm: {
        //padding:20,
        //paddingHorizontal:5,
        alignItems: 'center',
        // alignContent: 'center',
        // justifyContent: 'center',
    },
    fram: {
        alignItems: 'center',
        paddingBottom: 10

    },
    rowSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    }

})
export default NotificationScreen;