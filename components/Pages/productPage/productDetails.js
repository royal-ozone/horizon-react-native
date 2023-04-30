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
    TextInput,
    Button
} from 'react-native';
import { List } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'
import { RadioButton } from 'react-native-paper';
import Menu from '../../Global/menu';
import Slider from '../../Global/slider';
import SimilarProducts from '../../Global/SimilarProduct';
import data2 from '../../../staticData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonTabNavigatorProductDetail from '../../navigator/buttonTapNavigator';

const ProductDetailsPage = (props) => {
    let [item, setItem] = useState(props.route.params.item)
    const [dataCart, setDataCart] = useState([]);
    let dataSlider = [
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
        { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
        { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
    ]
    let data = [
        { img: require('../../../assets/images/product/boat.jpg') },
        { img: require('../../../assets/images/product/boat.jpg') },
        { img: require('../../../assets/images/product/boat.jpg') }
    ]
    const [expanded, setExpanded] = useState(true);
    const [num, setNum] = useState(1);

    const [value, setValueSize] = useState('first');
    const [color, setColor] = useState('white');

    // const addToCart = (e,item) => {
    //    // alert(e.target)
    //     StoreData(item);
    // }

    const StoreData = async (e, value) => {
        if (num == 0) {
            return "can not add with"
        }
        alert(JSON.stringify(value))
        try {
            let items = JSON.parse(await AsyncStorage.getItem('items')) ?? [];
            items.push(value);
            await AsyncStorage.setItem('items', JSON.stringify(items));
        } catch (e) {
            alert(JSON.stringify(e.message))
        }

    }
    return (
        <View style={styles.container}>
            <Menu value={props.route.params.value} />
            <View style={styles.main}>
                <ScrollView >
                    <View style={styles.body}>
                        <View style={styles.fram}>

                            {/* <Image source={item.url} style={styles.image} /> */}
                            <Slider data={dataSlider} autoPlay={false} />
                            <View style={styles.row}>

                                <Text> {item.name}</Text>
                                <View style={styles.row}>
                                    <Text style={styles.price}> {item.pice}</Text>

                                    <Text style={styles.oldPrice} > {item.oldPrice}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.listContainer}>
                            <List.Section title="">
                                <View style={styles.detailsStyle}>

                                    <List.Accordion
                                        title="Product Details"
                                    //left={props => <List.Icon {...props} icon="folder" />}
                                    >
                                        <Text style={styles.textDetailsStyle}>
                                            ddjjds ujdfhjdfh iuhfdhdfhdf uduudfdsf ggsduudsfguf sdgsdhds yygddshd hygdsdd yughbdsjd yusdhjddsfiu hsdhdfu
                                        </Text>
                                        {/* <List.Item title="First item" />
                                    <List.Item title="Second item" /> */}

                                    </List.Accordion>
                                </View>
                                <View style={styles.quantityStyle}>
                                    <View style={styles.row}>

                                        <Text style={styles.textQuntity} >
                                            Quntity
                                        </Text>
                                        <NumericInput
                                            value={num}
                                            onChange={value => setNum(value)}
                                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                                            minValue={0}
                                            maxValue={50}
                                            totalWidth={200}
                                            totalHeight={40}
                                            iconSize={25}
                                            step={1}
                                            valueType='real'
                                            rounded
                                            textColor='#B0228C'
                                            iconStyle={{ color: 'white' }}
                                            rightButtonBackgroundColor='#EA3788'
                                            leftButtonBackgroundColor='#E56B70' />
                                    </View>

                                </View>
                                <View style={styles.sizeStyle}>

                                    <List.Accordion
                                        title="Size"
                                        titleStyle={{ color: 'black' }}
                                        descriptionStyle={{ color: 'green' }}
                                        style={{ backgroundColor: '' }}
                                        description="discription size "
                                    // left={props => <List.Icon {...props} icon="folder" />}
                                    >


                                        <RadioButton.Group
                                            selectedButtonColor='red'
                                            onValueChange={value => setValueSize(value)} value={value}>
                                            <RadioButton.Item color='blue' label="S" value="s" labelVariant='titleSmall' style={{ backgroundColor: '#FFFF', color: 'red' }} />
                                            <RadioButton.Item color='blue' label="M" value="m" style={{ backgroundColor: '#FFFF', color: 'green' }} />
                                            <RadioButton.Item color='blue' label="L" value="l" style={{ backgroundColor: '#FFFF', color: 'green' }} />
                                            <RadioButton.Item color='blue' label="XL" value="xl" style={{ backgroundColor: '#FFFF', color: 'green' }} />
                                            <RadioButton.Item color='blue' label="XXL" value="xxl" style={{ backgroundColor: '#FFFF', color: 'green' }} />
                                            <RadioButton.Item color='blue' label="XXL" value="xxxl" style={{ backgroundColor: '#FFFF', color: 'green' }} />
                                        </RadioButton.Group>



                                    </List.Accordion>

                                </View>

                                <View style={styles.sizeStyle}>

                                    <List.Accordion
                                        title="Color"
                                        titleStyle={{ color: 'black' }}
                                        descriptionStyle={{ color: 'green' }}
                                        style={{ backgroundColor: '' }}
                                    // description="discription color "
                                    // left={props => <List.Icon {...props} icon="folder" />}
                                    >


                                        <RadioButton.Group

                                            onValueChange={value => setColor(value)} value={color}>

                                            <RadioButton.Item color='blue' label="Blue" value="blue" labelVariant='titleSmall' style={{ backgroundColor: '#eeee', color: 'red' }} />
                                            <RadioButton.Item color='red' label="Red" value="red" style={{ backgroundColor: '#eeee', color: 'green' }} />
                                            <RadioButton.Item color='black' label="Black" value="black" style={{ backgroundColor: '#eeee', color: 'green' }} />
                                            <RadioButton.Item color='white' label="White" value="white" style={{ backgroundColor: '#eeee', color: 'green' }} />
                                            <RadioButton.Item color='pink' label="Pink" value="pink" style={{ backgroundColor: '#eeee', color: 'green' }} />
                                            <RadioButton.Item color='green' label="Green" value="green" style={{ backgroundColor: '#eeee', color: 'green' }} />
                                        </RadioButton.Group>



                                    </List.Accordion>

                                </View>
                                <View style={styles.similarProduct}>
                                    <SimilarProducts data={data2.specialDeels} n={2} />
                                </View>

                            </List.Section>
                        </View>

                    </View>
                </ScrollView>
                {/* <ButtonTabNavigatorProductDetail item={item} /> */}
                <View style={[[], {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    paddingBottom: 10,
                    paddingTop: 15,
                    paddingHorizontal: 10,
                    // marginTop: 12,
                    //  marginHorizontal: 10,
                    // backgroundColor: 'white',
                    // marginTop:15,
                    // borderTopLeftRadius:25,
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25

                }]}>
                    <TouchableOpacity >
                        <Button onPress={(e) => StoreData(e, item)} color='blue' title='Add To Cart' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(e) => { }}>
                        <Button color='red' title='Add To Favorite' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(e) => { }}>
                        <Button color='blue' title='Buy Now' />
                    </TouchableOpacity>
                    {/* <Button  textColor='black'  buttonColor='blue'   mode='contained' onPress={(e)=>{}}>Add to Cart</Button> 
                    <Button  textColor='black'  buttonColor='blue'   mode='contained'>Favorite </Button>
                    <Button  textColor='black'  buttonColor='blue'   mode='contained'> Buy Now </Button> */}
                </View>
            </View >


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00FF00',
        // borderRadius:25,
        //paddingBottom:50
    },
    main: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: 10
    },
    image: {
        width: 330,
        height: 250,
        //borderRadius: 25,
        // borderRightColor:25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        alignContent: 'center'
        // margin:20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center'
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
        // textAlign:'left',
        alignItems: 'flex-start',
        // alignContent: 'center',
        // justifyContent: 'center',
    },
    fram: {

        //  alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 15,
        marginTop: 12,
        marginHorizontal: 10,
        backgroundColor: 'white',
        // marginTop:15,
        // borderTopLeftRadius:25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25



    },
    listContainer: {

    },
    detailsStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    textDetailsStyle: {
        paddingHorizontal: 10,
        paddingBottom: 5,
        backgroundColor: '#FFFF'
    },
    quantityStyle: {
        marginHorizontal: 10,
        paddingHorizontal: 7,
        paddingVertical: 10,
        marginVertical: 5,
        //marginTop: 10,
        backgroundColor: '#FFFF'

    },
    similarProduct: {
        marginBottom: 10
    },
    textQuntity: {
        color: 'black'
    },
    sizeStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    rowSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    }
})

export default ProductDetailsPage;