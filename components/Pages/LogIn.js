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
    TextInput
} from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import OIcon from 'react-native-vector-icons/Octicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LogIn = ({ navigation }) => {
    const [showpass, setShowPass] = useState(true);
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/logoImage/logo10.jpeg')} resizeMode="cover" style={styles.image}>
                <View style={styles.overlay} />
                <View style={{flex: 1}}>
                    <View style={{flex:1}}> 

                    </View>
                    <Text style={styles.TextT}>تسجيل الدخول</Text>
                    
                     
                            <View style={[styles.card, styles.shadowProp]}>
                                {/* <Image
                                    style={styles.Logo}
                                    source={require('../../assets/Images/LogoTrans.png')}
                                /> */}
                                <Text style={styles.heading}>
                                    مرحبا بك من جديد
                                </Text>
                                <Text style={styles.textD}>
                                    نحن نحب أن نراك مرة أخرى
                                </Text>
                                <View style={styles.ViewInput}>
                                    <TextInput
                                        style={styles.InputLog}
                                        placeholder=' رقم الهاتف أو البريد الإلكتروني'
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
                                <TouchableOpacity style={styles.LogBut} onPress={() => navigation.navigate('Home')}>
                                    <OIcon
                                        name='arrow-left'
                                        size={20}
                                        color='#fff'
                                    />
                                </TouchableOpacity>
                            </View>
                   
                
                </View>
                <View style={styles.ButV}>
                    {/* <TouchableOpacity style={[styles.LogButR, { backgroundColor: '#2E45E5' }]} onPress={() => navigation.push('LogIn')}>
                        <Text style={styles.ButTextLog}>تسجيل الدخول</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={[styles.LogButR, { backgroundColor: '#fff' }]} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.ButTextReg}>التسجيل لأول مرة</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.BottomTextView}>
                    <Text style={styles.TextB}>
                        تسجيل الدخول بصفتك صاحب عمل
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        width:windowWidth,
        alignItems: 'center',
    },
    InputLog: {
        fontSize: 9,
        color: '#004AAD',
        textAlign: 'right',
        flex: 1,
        marginRight: 20
    },
    IconInput: {
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        flex: .08,
    },
    ButV: {
        flexDirection: 'row',
        padding: 20
    },
    LogBut: {
        marginBottom: 20,
        paddingVertical: 6,
        width: windowWidth / 4,
        alignItems: 'center',
        backgroundColor: '#004AAD',
        borderRadius: 10
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
        height:windowHeight,
        position: 'absolute',
        //backgroundColor: 'rgba(255,255,255, 0.7)',
    },
    Logo: {
        alignSelf: 'center',
        marginBottom: -30,
    },
    ButTextLog: {
        color: '#fff',
        fontFamily: 'Montserrat-Regular',
    },
    TextT: {
        color: '#2E45E5',
        fontSize: 35,
        alignSelf: 'center',
        fontWeight: '700',
        fontFamily: 'Montserrat-Regular',
        marginVertical: 20,
    },
    TextB: {
        color: '#2E45E5',
        fontSize: 14,
        alignSelf: 'center',
        fontWeight: '700',
        fontFamily: 'Montserrat-Regular',
    },
    BottomTextView: {
        borderBottomWidth: 1,
        borderColor: '#2E45E5',
    },
    heading: {
        color: '#2E45E5',
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 13,
        fontFamily: 'Montserrat-Regular',
    },
    ButTextReg: {
        color: '#2E45E5',
        fontFamily: 'Montserrat-Regular',
    },
    card: {
       // flex:1,
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
        elevation: 8,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
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
    //     marginBottom: 10,
    // },
    textD: {
        color: '#2E45E5',
        fontSize: 10,
        fontWeight: '400',
        marginBottom: 13,
        fontFamily: 'Montserrat-Regular',
    },
});

export default LogIn;