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
    Button
} from 'react-native';
import SubMenu from '../../Global/SubMenu';
import AIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
let data = [
    { id: 1, name: 'Ahmad Arman', phone: '0796780751', country: 'Jordan', city: 'Amman', area: 'Nazzal', streetAddress: 'Abdahhah AL nazhan', building: '13' },
    { id: 2, name: 'Emran Aloul', phone: '0796780751', country: 'Jordan', city: 'Amman', area: 'dahia', streetAddress: ' mohmmad AL Ali', building: 'أ 5' },
    { id: 3, name: 'Murad Arman', phone: '065429872', country: 'UAE', city: 'Abo Dhabi', area: 'alyas', streetAddress: ' Shaikha dahaa Alice compond', building: 'A 313' },
]
const Address = (props) => {
    const navigation = useNavigation();
    const [address, setAddress] = useState(data);



    const removeAddress = (e, id) => {
        e.preventDefault();
        let filterList = address.filter(item => id !== item.id)
        setAddress(filterList);
    }

    useEffect(() => {
        if (props.route.params?.value) {
            setAddress([...data, props?.route?.params?.value])
        } else if (props.route.params?.address) {

            setAddress(props?.route?.params?.address)
        } else {
            setAddress(data)
        }
    }, [props.route.params])
    return (
        <View style={styles.container}>
            <SubMenu namePage='My Address' />
            <View style={styles.main}>
                <ScrollView >
                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigation.navigate('AddAddress', { namePage: 'Add Address', address: address })}>
                        <View style={styles.fram}>
                            <AIcon
                                size={20}
                                name='add'
                            />
                            <Text>Add New Address </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.body} >
                        {address?.map((value, index) => {
                            return (
                                <View style={styles.framBody} key={index}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignSelf: 'flex-end'

                                    }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('AddAddress', { namePage: 'Edit Address', value: value, address: address })}>
                                            <Text style={{
                                                paddingHorizontal: 15,
                                                backgroundColor: '#0ECFD8',
                                                textAlign: 'right',
                                                alignContent: 'center',
                                                alignItems: 'center',
                                                borderTopLeftRadius: 25,
                                                borderBottomRightRadius: 25,
                                                // width:'18%',
                                            }}>Edit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={(e) => removeAddress(e, value.id)}>
                                            <Text style={{
                                                paddingHorizontal: 15,
                                                backgroundColor: 'red',
                                                alignContent: 'center',
                                                alignItems: 'center',
                                                borderTopLeftRadius: 25,
                                                borderBottomRightRadius: 25,
                                                // width:'22%'
                                            }}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text>{value.name}</Text>
                                    <Text > {value.phone}</Text>
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            fontFamily: 'EvilIcons',
                                            fontWeight: 'bold',
                                            maxWidth: 300
                                        }}> {value.country} , {value.city} , {value.area} </Text>
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            fontFamily: 'EvilIcons',
                                            fontWeight: 'bold',
                                            maxWidth: 300
                                        }}> {value.streetAddress} , {value.building}</Text>
                                </View>
                            )
                        })}
                    </View>
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
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 10
    },
    Btn: {
        backgroundColor: 'white',
        marginHorizontal: 50,
        marginTop: 20,
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25
        // justifyContent:'center',
        //justifyContent:'center'

    },
    fram: {
        padding: 10,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        // alignContent:'space-between',
        //justifyContent:'space-around'

    },
    body: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    framBody: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        paddingHorizontal: 10,
        width: '90%',
        height: '80%',
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
        // flexDirection:'row'

        // justifyContent:'center',
        //alignItems:'center',

    }, image: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginHorizontal: 30,
        marginBottom: 5,
        //  justifyContent:'flex-start',

    },
    profileBody: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,

        marginTop: 20,
        paddingBottom: 20
    },
    text: {
        paddingHorizontal: 20,
        color: 'black',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 18,
        textAlign: 'left',
        borderBottomColor: 'gray',
        borderBottomWidth: .7

    },
    framText: {
        //  maxWidth:10,

    }
})
export default Address














