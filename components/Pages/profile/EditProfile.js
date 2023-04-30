import React, { useState } from 'react';
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
    TextInput,
    Button,

} from 'react-native';
import SubMenu from '../../Global/SubMenu';
import AIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Colors from 'react-native-multi-selectbox/src/constants/Colors';
import { TextInputAffix } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputAffix';

const EditProfile = (props) => {
    const navigation = useNavigation();

    const [name, setName] = useState(props.route.params ? props.route.params.name : '');
    const [email, setEmail] = useState(props.route.params ? props.route.params.email : '');
    const [phone, setPhone] = useState(props.route.params ? props.route.params.phone : '');
    // alert(JSON.stringify(props.route.params))
    return (
        <View style={styles.container}>

            <SubMenu namePage='Edit Profile' />
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



                        <AIcon
                            name='edit'
                            size={20}
                        />
                    </ImageBackground>
                    <View style={{alignItems:'center'}}>

                        <View style={styles.profileBody}>
                            <TouchableOpacity>
                                <Text style={[{ backgroundColor: '#daf0ff', borderTopLeftRadius: 25 }, [styles.text]]}>Name : </Text>
                                <TextInput
                                    style={styles.text}
                                    onChangeText={setName}
                                    value={name}

                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[{ backgroundColor: '#daf0ff' }, [styles.text]]}>Email :</Text>
                                <TextInput
                                    style={styles.text}
                                    onChangeText={setEmail}
                                    value={email}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style={[{ backgroundColor: '#daf0ff' }, [styles.text]]}>Mobile Number : </Text>
                                <TextInput
                                    style={styles.text}
                                    onChangeText={setPhone}
                                    value={phone}
                                />

                            </TouchableOpacity>


                        </View>
                    </View>



                </ScrollView>

                <View style={{
                    marginTop: 10,
                    width: "100%",
                    height: '15%',
                    justifyContent: 'center',
                    alignItems: 'center',

                }} >
                    <View style={{
                        width: '80%',
                        height: '100%',
                    }} >

                        <Button
                            onPress={() => navigation.navigate('Profile', { name: name, email: email, phone: phone })}
                            color="#00FF00"
                            title='Save'

                        >
                        </Button>
                    </View>
                </View>
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

        justifyContent: 'center',
        alignItems: 'center',

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
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 10,
        //paddingBottom: 20
    },
    text: {
        paddingHorizontal: 40,
        // color:'black',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 18,
        textAlign: 'left',
        borderBottomColor: 'gray',
        borderBottomWidth: .2

    },
})
export default EditProfile 