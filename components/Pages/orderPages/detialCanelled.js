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
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SubMenu from '../../Global/SubMenu';
import { Dimensions } from 'react-native';

import Iocon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailCancelled = (props) => {
    const navigation = useNavigation();
    const [data, setData] = useState(props.route.params)
    return (
        <View style={styles.container}>
            <SubMenu namePage={'Order Cancelled '} />

            <View style={styles.main}>

                <View style={styles.submain}>


                    <View style={styles.containerOrder}>

                        <View style={styles.row}>
                            <Text style={styles.number}>#{data.number} </Text>
                            <View style={styles.rowTow}> 

                            <Text style={styles.status} > Cancelled  </Text>
                            <Iocon 
                                name='close-circle-outline'
                                style={styles.IconInput}
                                size={30}   
                                color={'red'}
                            />
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.date}>{data.date} </Text>
                            <Text style={styles.price}>${data.price} </Text>
                        </View>
                    </View>

                    <View style={styles.line}>
                    </View>

                    <View style={styles.conList}>

                     {/* <ScrollView> */}

                            <FlatList
                                data={data.detailProduct}
                               // contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}

                                renderItem={({ item }) =>

                                    <View style={[styles.orderItem, { backgroundColor: 'white' }]}>


                                        <View style={styles.row}>
                                            <Text>{item.name}</Text>
                                            <View style={styles.rowTow}>
                                                <Text>{item.quan}</Text>
                                                <Text>{` X ${item.price}`}</Text>
                                            </View>
                                        </View>

                                    </View>

                                }

                            />
                        {/* </ScrollView> */}
                    </View>
                    <View style={styles.line}>
                    </View>
                    <View style={styles.subPrice}>
                        <Text>Item(s) total</Text>
                        <Text style={styles.price}>${data.price} </Text>
                    </View>
                    <TouchableOpacity style={styles.conBtn}>
                        <View style={styles.btn}>
                            <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}> reRequest</Text>
                        </View>
                    </TouchableOpacity>

                </View>



            </View>

        </View>
    )
}









const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FF00'
    },
    main: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        flexDirection: 'column',
        borderTopLeftRadius: 25,
        borderTopEndRadius: 25,
        alignItems: 'center'
    },

    submain: {
        flex: 0.7,
        marginVertical: 15,
        backgroundColor: 'white',
        width: windowWidth - 20,
        borderRadius: 15,
        paddingVertical:5,
        alignContent: 'center',
    },
    containerOrder: {
       // flex: 0.9,
        //  alignContent: 'center',
        // marginLeft: 10,
        // marginTop: 5,
        //  paddingTop: 10,
        //  paddingLeft: 5
        marginHorizontal: 10,
        paddingHorizontal: 5,
        marginVertical: 10


    },
    number: {
        color: 'black',
        fontSize: 20
    },
    IconInput:{
       // backgroundColor:'green'
    },
    price: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        paddingRight: 15
    },
    row: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',

    },
    rowTow: {
        flexDirection: 'row'
    },
    status: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    date: {
        paddingLeft: 5,
    },
    conList:{
        flex:1,
        marginVertical:15
    },
    line: {
        // flex:0.1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10

    },

    orderItem: {
        //flex: 1,
        marginHorizontal: 20,
        marginVertical: 5,
        // paddingTop: 2,
        // marginLeft: 10,
        // paddingRight: 20,
        // paddingLeft: 5,

    },

    subPrice: {
      //  flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    conBtn: {
       // flex: 7,
        alignItems: 'center'
    },

    btn: {
        // flex:0.1,
        width: windowWidth - 290,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00FF00',
        borderRadius: 10
    }
})
export default DetailCancelled; 