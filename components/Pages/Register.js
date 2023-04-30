import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput,
} from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import OIcon from 'react-native-vector-icons/Octicons';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Register = ({ navigation }) => {
    const [showpass, setShowPass] = useState(true);
    return (
        <ImageBackground source={require('../../assets/images/logoImage/logo10.jpeg')} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                
                <View style={{ flex: 1 }}>
                            <Text style={styles.TextT}>التسجيل</Text>
                  
                            <View style={[styles.card, styles.shadowProp]}>
                                <Text style={styles.heading}>
                                    التسجيل لأول مرة
                                </Text>
                                <Text style={styles.textD}>
                                    نحن نحب أن تنضم إلينا
                                </Text>
                                <View style={styles.ViewInput}>
                                    <TextInput
                                        style={styles.InputLog}
                                        placeholder='اسم المستخدم'
                                        placeholderTextColor="#004AAD"
                                    />
                                    <Icon
                                        name='user-o'
                                        style={styles.IconInput}
                                        size={20}
                                        color='#2E45E5'
                                    />
                                </View>
                                <View style={styles.ViewInput}>
                                    <TextInput
                                        style={styles.InputLog}
                                        placeholder='البريد الإلكتروني'
                                        placeholderTextColor="#004AAD"
                                    />
                                    <OIcon
                                        name='mail'
                                        style={styles.IconInput}
                                        size={20}
                                        color='#2E45E5'
                                    />
                                </View>
                                <View style={styles.ViewInput}>
                                    <TextInput
                                        style={styles.InputLog}
                                        placeholder='رقم الهاتف'
                                        placeholderTextColor="#004AAD"
                                    />
                                    <SIcon
                                        name='phone'
                                        style={styles.IconInput}
                                        size={20}
                                        color='#2E45E5'
                                    />
                                </View>
                                <View style={styles.ViewInput}>
                                    <Icon
                                        name={showpass == true ? 'eye' : 'eye-slash'}
                                        style={{ left: 5 }}
                                        size={15}
                                        color='#2E45E5'
                                        backgroundColor="#fff"
                                        onPress={() => { showpass == true ? setShowPass(false) : setShowPass(true) }}
                                    />
                                    <TextInput
                                        style={styles.InputLog}
                                        placeholder={showpass == true ? '*****************' : 'كلمة المرور'}
                                        secureTextEntry={showpass}
                                        placeholderTextColor="#004AAD"
                                    />
                                    <OIcon
                                        name='lock'
                                        style={{ marginLeft: 10 }}
                                        size={20}
                                        color='#2E45E5'
                                    />
                                </View>
                                <TouchableOpacity style={styles.LogBut} onPress={() => navigation.navigate('LogIn') }>
                                    <OIcon
                                        name='arrow-left'
                                        size={20}
                                        color='#fff'
                                    />
                                </TouchableOpacity>
                            </View>
                       
                    
                </View>
                <View style={styles.ButV}>
                    <TouchableOpacity style={[styles.LogButR, { backgroundColor: '#fff' }]} onPress={() => navigation.navigate('LogIn') }>
                        <Text style={styles.ButTextReg}>تسجيل الدخول</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={[styles.LogButR, { backgroundColor: '#2E45E5' }]} onPress={() => { }}>
                        <Text style={styles.ButTextLog}>التسجيل لأول مرة</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    ButV: {
        alignItems:'center',
        paddingTop:80,
    },
    LogBut: {
        marginBottom: 50,
        marginTop: 20,
        paddingVertical: 6,
        width: windowWidth / 4,
        alignItems: 'center',
        backgroundColor: '#004AAD',
        borderRadius: 10,
    },
    LogButR: {
        marginBottom: 20,
        paddingVertical: 15,
        marginHorizontal: 4,
        width: windowWidth / 2.3,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 80,
    },
    overlay: {
        height: windowHeight,
        width: windowWidth,
        position: 'absolute',
        backgroundColor: 'rgba(69, 79, 99, 0.1)',
    },
    ButTextLog: {
        color: '#fff',
        fontFamily: 'Montserrat-Regular',
    },
    TextT: {
        color: '#fff',
        fontSize: 35,
        alignSelf: 'center',
        fontWeight: '700',
        fontFamily: 'Montserrat-Regular',
        marginVertical: 20,
    },
    ViewInput: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#F8F8F8',
        padding: 10,
        borderRadius: 10,
        margin: 10
        // width: windowWidth / 1.3,
    },
    InputLog: {
        fontSize: 9,
        color: '#004AAD',
        textAlign: 'right',
        flex: 1,
        marginRight: 20
    },
    heading: {
        color: '#2E45E5',
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 13,
        paddingTop: 60,
        fontFamily: 'Montserrat-Regular',
    },
    ButTextReg: {
        color: '#2E45E5',
        fontFamily: 'Montserrat-Regular',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth / 1.15,
        marginBottom: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    // card1: {
    //     backgroundColor: 'rgba(255,255,255, 0.8)',
    //     borderRadius: 8,
    //     paddingHorizontal: 25,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: windowWidth / 1.25,
    //     marginBottom: 10,
    // },
    // card2: {
    //     backgroundColor: 'rgba(255,255,255, 0.5)',
    //     borderRadius: 8,
    //     paddingHorizontal: 25,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: windowWidth / 1.4,
    //     marginBottom: 60,
    // },
    textD: {
        color: '#2E45E5',
        fontSize: 10,
        fontWeight: '400',
        marginBottom: 13,
        fontFamily: 'Montserrat-Regular',
    },
});

export default Register;