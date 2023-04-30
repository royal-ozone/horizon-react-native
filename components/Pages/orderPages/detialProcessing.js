import React, { useState ,useEffect } from 'react';
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
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import SubMenu from '../../Global/SubMenu';
import data1 from '../../../staticData';
import Iocon from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailProcessing =(props)=>{
    const navigation = useNavigation();
    const [data, setData] = useState(props.route.params)
    const labels = ["Order created ","Order confirmed ","Order shipping ","Currier delivering ","Receiving"];

const customStyles = {
    stepIndicatorSize:25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
  }

  let [currentPosition,setCuttentPostision] =  useState(2)

return(
    <View style={styles.container}> 
    <SubMenu namePage={'Track Your Order'} />
    <View style={styles.main}>
        <View style={styles.containerOrder}>
            <View style={styles.row}>
                <Text style={styles.number}>#{data.number} </Text>
                <View style={styles.rowTow}> 

                <Text style={styles.status} > Processing  </Text>
                <Iocon 
                    name='truck-fast-outline'
                    style={styles.IconInput}
                    size={30}   
                    color={'#f8dc6e'}
                />
                </View>
            </View> 
            <View style={styles.row}>
                <Text style={styles.date}>{data.date} </Text>
                <Text style={styles.price}>${data.price} </Text>
            </View>
        </View>
        <View style={styles.line}>
         </View>
         <View style={styles.conTrack}>
        <StepIndicator   
            customStyles={customStyles}
            currentPosition={currentPosition}
            labels={labels}
            stepCount={5}
            direction={'vertical'}
            renderLabel={({position, stepStatus, label, currentPosition})=>{
                return(
                    <View style={styles.lblContainer}>
                        
                        <Text style={styles.lblText}>{data1.trakOrderData[position].label}</Text>
                        <Text style={styles.lblStatus}>{data1.trakOrderData[position].status}</Text>
                        <Text style={styles.lblStatus}>{data1.trakOrderData[position].dataTime}</Text>
                    </View>
                    
                )
                
            }}
        />
        </View>
    </View>
    </View>
) 
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#00FF00',
         alignItems:'center',
        // alignContent:'center',
        // justifyContent:'center'
        
    },
    main:{
        flex :1,
        backgroundColor:'#E0E0E0',
        borderTopLeftRadius:25,
        borderTopEndRadius:25,
  //    borderRadiusTop:25,
        width:windowWidth,
       // alignItems:'center',
       marginHorizontal: 10,
       paddingHorizontal: 5,
       backgroundColor:'white'
       //marginVertical: 10
    },
    containerOrder: {
         flex: 0.09,
         //  alignContent: 'center',
         // marginLeft: 10,
         // marginTop: 5,
         //  paddingTop: 10,
         //  paddingLeft: 5
         justifyContent:'space-between',
         marginHorizontal: 10,
         paddingHorizontal: 5,
         marginVertical: 10
 
 
     },
     number: {
         color: 'black',
         fontSize: 20
     },
     IconInput:{
        // backgroundColor:'green'
     },
     price: {
         color: 'black',
         fontSize: 15,
         fontWeight: 'bold',
         paddingRight: 15
     },
     row: {
         // flex: 1,
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignContent: 'center',
         alignItems: 'center',
 
     },
     rowTow: {
         flexDirection: 'row'
     },
     status: {
         fontSize: 20,
         fontWeight: 'bold',
         color: '#f8dc6e'
     },
     date: {
         paddingLeft: 5,
     },
     line: {
        // flex:0.1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10

    },
    conTrack:{
        flex:0.9,
        alignItems:'center'
    },
    lblContainer:{
        marginTop:35,
        paddingLeft:5,
       // width: windowWidth -100
    },
    lblText:{
        fontSize:17,
        color:'#000000',
        fontWeight:'bold'
    },
    lblStatus:{
        fontSize:15,
        color:'gray'
    }
})

export default DetailProcessing ;