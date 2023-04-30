import React, { useEffect } from 'react';
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
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StartSlider = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home');
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                style={styles.Logo}
                source={require('../../assets/images/logoImage/logo10.jpeg')}
            />
            {/* <Text style={styles.TextT}>My Comfortable</Text>  */}
            {/* <Text style={styles.TextT}>إشتري في دقائق</Text> */}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#D3EBCD',
        backgroundColor: '#b2ff59',
    },
    Logo: {
        alignSelf: 'center',
    },
    TextT: {
        color: 'b2ff59',
        fontSize: 24,
        justifyContent:'flex-start',
        //alignSelf: 'center',
        fontWeight: '700',
        padding: '2%',
        fontFamily: 'Montserrat-Regular',
    },
});

export default StartSlider;
