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
import { useNavigation } from '@react-navigation/native';

const SpecialDeels = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.container}>

                <View style={styles.main}>

                    <View style={styles.rowSpace}>

                        <Text style={{color:'black',fontSize:17,fontWeight:'bold',paddingTop:10}}> Special Deels </Text>
                        {props.n ===100 ?
                            <Text> </Text>
                        :
                        <Text style={{color:'red',paddingTop:10}} onPress={()=>navigation.navigate('specialDeels')}> see all </Text>
                        }
                       
                    </View>
                    <View style={styles.productReview}>
                        {props.data && props.data.slice(0, props.n).map((item, index) => {
                            return (
                                <ScrollView  key={index+2} >
                                    {/* {alert(JSON.stringify(props))} */}
                                    <TouchableOpacity key={index} onPress={()=> navigation.navigate('ProductDetailsPage',{item,value:props.value})} >
                                        <View style={styles.fram} key={index+1}>

                                            <Image source={item.url} style={styles.image} />
                                            <View style={styles.textForm}>

                                                <Text> {item.name}</Text>
                                                <View style={styles.row}>
                                                    <Text style={styles.price}> {item.pice}</Text>
                                                    
                                                    <Text style={styles.oldPrice} > { item.oldPrice }</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </ScrollView>
                            )

                        })}
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
        marginTop:5,
        paddingBottom:10,
        marginBottom:15,
        backgroundColor: 'white',
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
    },
    price: {
        color: 'blue',
        alignItems: 'center',
        paddingRight:10,

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
        paddingBottom:10

    },
    rowSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:20
    }

})
export default SpecialDeels;