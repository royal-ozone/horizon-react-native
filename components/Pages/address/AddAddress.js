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
    TextInput
} from 'react-native';
import SubMenu from '../../Global/SubMenu';
import { useNavigation } from '@react-navigation/native';

const AddAddress = (props) => {
    const navigation = useNavigation();

    const [id, setId] = useState(props.route?.params?.address?.length + 1)
    const [name, setName] = useState(props.route?.params?.value?.name ? props.route?.params?.value?.name : '');
    const [country, setCountry] = useState(props.route?.params?.value?.country ? props.route?.params?.value?.country : '');
    const [city, setCity] = useState(props.route.params?.value?.city ? props.route?.params?.value?.city : '');
    const [area, setArea] = useState(props.route.params?.value?.area ? props.route?.params?.value?.area : '');
    const [streetAddress, setStreetAddress] = useState(props.route.params?.value?.streetAddress ? props.route?.params?.value?.streetAddress : '');
    const [building, setBuilding] = useState(props.route.params?.value?.building ? props.route?.params?.value?.building : '');
    const [phone, setPhone] = useState(props.route.params?.value?.phone ? props.route.params?.value?.phone : '');

    const data = ['Name', 'Phone', 'Country', 'City', 'Area', 'Street Address', 'Building']
    const addNewAddress = () => {
        navigation.navigate('Address', { value: { id: id, name: name, phone: phone, country: country, city: city, area: area, streetAddress: streetAddress, building: building } })

    }
    const editAddress = (e, id) => {

        e.preventDefault();
        let newData = props?.route?.params
        let address = props?.route?.params?.address

        if (props?.route?.params?.namePage == 'Add Address') {

            addNewAddress()
        }
        else if (props?.route?.params?.namePage == 'Edit Address') {

            let objectIndex = newData?.address?.findIndex((item => item.id == id));


            address[objectIndex].name = name
            address[objectIndex].phone = phone
            address[objectIndex].country = country
            address[objectIndex].city = city
            address[objectIndex].area = area
            address[objectIndex].streetAddress = streetAddress
            address[objectIndex].building = building

            navigation.navigate('Address', { address: address })
        }

    }

    return (
        <View style={styles.container}>
            <SubMenu namePage={props?.route?.params?.namePage} />
            <View style={styles.main}>
                <ScrollView >
                    <View style={{ alignItems: 'center' }}>

                        <View style={styles.profileBody}>

                            {data.map((value, i) => {
                                return (
                                    <View key={i}>
                                        <TouchableOpacity>
                                            <Text style={[[styles.text1]]}>{value} : </Text>
                                            <TextInput
                                                style={styles.text}
                                                onChangeText={value == 'Name' ? setName : value == 'Phone' ? setPhone : value == 'Country' ? setCountry : value == 'City' ? setCity : value == 'Area' ? setArea : value == 'Street Address' ? setStreetAddress : value == 'Building' ? setBuilding : null}
                                                value={value == 'Name' ? name : value == 'Phone' ? phone : value == 'Country' ? country : value == 'City' ? city : value == 'Area' ? area : value == 'Street Address' ? streetAddress : value == 'Building' ? building : null}

                                            />

                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                        </View>
                    </View>
                    <View style={styles.framBtn}>
                        <TouchableOpacity
                            onPress={(e) => editAddress(e, props?.route?.params?.value?.id)}>
                            <Text style={styles.btn}> Save Address </Text>
                        </TouchableOpacity>
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

    imageBackground: {
        width: 400,
        height: 150,
        flexDirection: 'row',
        paddingTop: 30,



    }, image: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginHorizontal: 30,
        marginBottom: 5,


    },
    profileBody: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        width: '90%',

        padding: 15,

        marginTop: 20,

    },
    text: {
        backgroundColor: '#EBECF0',

        paddingHorizontal: 20,
        color: 'black',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 18,
        textAlign: 'left',
        borderBottomColor: 'gray',
        borderBottomWidth: .2,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 10

    },
    text1: {
        width: '55%',

        backgroundColor: '#daf0ff',
        paddingHorizontal: 20,
        color: 'black',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 18,
        textAlign: 'left',
        borderBottomColor: 'gray',
        borderBottomWidth: .2,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        marginBottom: 10

    },
    framBtn: {
        backgroundColor: 'blue',
        marginTop: 30,
        marginBottom: 30,
        marginHorizontal: 40,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25


    },
    btn: {
        textAlign: 'center',
        color: 'black',
        padding: 20,


    }
})
export default AddAddress 