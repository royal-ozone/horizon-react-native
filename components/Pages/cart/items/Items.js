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
import AsyncStorage from '@react-native-async-storage/async-storage';
import NumericInput from 'react-native-numeric-input'

import CheckBox from '@react-native-community/checkbox';

const ItemsCart = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [items, setItems] = useState([]);
    const [num, setNum] = useState(0);

    useEffect(() => {
        getData();
},[])

const toggleBoxfunction =(item)=>{ 
alert(JSON.stringify(item))
//item.selected = true 
// try {
//     let items = JSON.parse(await AsyncStorage.getItem('items')) ?? [];
//     items.push(value);
//     await AsyncStorage.setItem('items', JSON.stringify(items));
// } catch (e) {
//     alert(JSON.stringify(e.message))
// }
// items.map((i,v)=>{
//     item.id == v.id ? v.selected = true : v.selected = false
// })
// return items
setToggleCheckBox({id:item.id,bool:toggleCheckBox==true? false : true})
//alert(JSON.stringify(toggleCheckBox))
}
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('items');
           // alert(jsonValue );
            setItems(JSON.parse(jsonValue));
           // return jsonValue != null ? setItems(JSON.parse(jsonValue)) : null;
        } catch (e) {
            // error reading value
        }
    }
   
    const removeAllStorge = async () =>{
        try {
            await AsyncStorage.clear();
           // const jsonValue = await AsyncStorage.getItem('detailItem');
         //   setItems(JSON.parse(jsonValue))
           // alert(JSON.parse(jsonValue))
          //  alert(JSON.stringify(items))
        } catch (error) {
            
        }
    }
   // removeAllStorge()
    return (
        <View style={styles.container}>

            <View style={styles.itemeView}>
              
                {items?.map((item, index)=>{
                    return (
                <View key={index} style={styles.body}>
                    <CheckBox
                    key={item.id}
                        disabled={false}
                        value={toggleCheckBox}
                       // onChange={()=>toggleBoxfunction(item)}
                        onValueChange={(newValue)=>setToggleCheckBox(newValue)}
                    />

                    <View style={styles.fram}>


                        <View style={styles.textForm}>
                            <Image source={item?.url} style={styles.image} />

                            <Text> {item?.name}</Text>
                            <View style={styles.row}>
                                <Text style={styles.price}> {item?.pice}</Text>

                                <Text style={styles.oldPrice} > {item?.oldPrice}</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 35 }}>

                            <NumericInput
                                value={num}
                                onChange={value => setNum(value)}
                                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                                minValue={0}
                                maxValue={40}
                                totalWidth={100}
                                totalHeight={40}
                                iconSize={25}
                                step={1}
                                valueType='real'
                                // rounded
                                textColor='black'
                                // containerStyle={{width:20}}
                                //inputStyle={{width:40}}
                                iconStyle={{ color: 'black' }}
                                rightButtonBackgroundColor='white'
                                leftButtonBackgroundColor='white'
                            />
                        </View>
                    </View>
                </View>
                )
                })}





            </View>
                {/* <Button title="reset" onPress={removeAllStorge}/>  */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        // paddingTop:50
    },
    itemeView: {
        flexDirection: 'column',
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 10,
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 25,
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
        paddingRight: 10,

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
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        alignItems: 'center',

       

    },
    body: {
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        alignItems: 'flex-start',

       

    },

})

export default ItemsCart;