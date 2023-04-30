import React from 'react';
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
import SubMenu from '../Global/SubMenu';
import {NotificationScreen} from '../screen/index';
const Notification = () => {
    return (

        <View style={styles.container}>
            <SubMenu namePage='Notification' />
            <View style={styles.main}>

                <View style={styles.subMain}>
                    <NotificationScreen />
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FF00',

    },




    main: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    subMain: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 15
    }

})
export default Notification 