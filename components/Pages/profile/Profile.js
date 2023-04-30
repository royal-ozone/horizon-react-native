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
    ImageBackground,
    AsyncStorage
} from 'react-native';
import SubMenu from '../../Global/SubMenu';
import AIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Profile = (props) => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState(' ');

    const [phone, setPhone] = useState('');

    useEffect(() => {

    }, [name, email, phone]);

    useEffect(() => {
        setName(props.route.params.name ? props.route.params.name : 'Ahmad Arman');
        setEmail(props.route.params.email ? props.route.params.email : 'aa0796780751@gmail.com');
        setPhone(props.route.params.phone ? props.route.params.phone : '0796780751');
        let obj = {
            name: name,
            email: email,
            phone: phone,
        }
        AsyncStorage.setItem('profile', JSON.stringify(obj))
        //let  profile = await AsyncStorage.getItem('profile')
        // alert(profile)
    }, [setName, setEmail, setPhone, name, email, phone])
    // useEffect (async() =>{
    //    let p= await AsyncStorage.getItem('profile')
    //    p ? setName(p.name) : setEmail(p,email) ?setPhone(p.phone) : 
    //    alert(p)
    // },[setName,setEmail,setPhone])
    //alert(name,email,phone)
    return (
        <View style={styles.container}>

            <SubMenu namePage='My Profile' />
            <View style={styles.main}>

                <ScrollView>


                    <ImageBackground
                        source={require('../../../assets/images/logoImage/background.jpg')}
                        style={styles.imageBackground}
                        imageStyle={{
                            borderTopLeftRadius: 25,
                            borderTopRightRadius: 25,
                        }}
                    >
                        <Image
                            source={require('../../../assets/images/ahmad3.jpeg')}
                            style={styles.image}
                        />
                        <View style={styles.row} >

                            <Text
                                style={{
                                    // marginHorizontal:10,
                                    fontSize: 25,
                                    fontFamily: 'EvilIcons',
                                    fontWeight: 'bold',
                                    maxWidth: 200
                                }}
                            > {name} </Text>

                            <Text
                                style={{
                                    marginHorizontal: 12,
                                    fontSize: 13,
                                    fontFamily: 'EvilIcons',
                                    fontWeight: 'bold',
                                    maxWidth: 300
                                }}
                            > {email}</Text>
                            <Text
                                style={{
                                    marginHorizontal: 12,
                                    fontSize: 13,
                                    fontFamily: 'EvilIcons',
                                    fontWeight: 'bold',
                                    maxWidth: 300
                                }}
                            > {phone}
                            </Text>

                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { name: name, email: email, phone: phone })}>

                            <AIcon
                                name='edit'
                                size={20}
                            />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={{alignItems:'center'}}>

                        <View style={styles.profileBody}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('Address')}
                            >

                                <Text style={styles.text}>My Address</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Setting')}
                            >

                                <Text style={styles.text}>Setting</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Wallet')}
                            >


                                <Text style={styles.text}>Wallet :  20 jd </Text>
                            </TouchableOpacity>


                        </View>
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
        // alignItems:'center',
        width: '90%',
        marginTop: 20,
      //  paddingBottom: 20
    },
    text: {
        paddingHorizontal: 20,
        color: 'black',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 18,
        textAlign: 'left',
        borderBottomColor: 'gray',
        borderBottomWidth: .2

    },
   
})
export default Profile 