import React ,{useEffect,useState} from 'react';
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
     Modal,
     Dimensions,
     
} from 'react-native';
//import SelectList from 'react-native-dropdown-select-list'
// import SelectBox from 'react-native-multi-selectbox';
// import { xorBy } from 'lodash'

import { Dropdown } from 'react-native-element-dropdown';



import Icon from 'react-native-vector-icons/Entypo';
import AIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

   

const CategoryList = (props) =>{
    let [modelUpdate,setModelUpdate] = useState(false);
    let [dataUpdate,setDataUpdate] =useState({});
    let [modalVisible,setModalVisible] = useState(false);
    let [dataList,setDataList] = useState(props.data); 
    let [data2,setData2] = useState(props.data);
    let [text,setText] = useState('');
   // const [selected, setSelected] = useState("");

//    const [selectedTeam,setSelectedTeam]=useState('');
//    const [selectedTeams,setSelectedTeams]=useState([]);

const [value, setValue] = useState(null);
const [isFocus, setIsFocus] = useState(false);

const navigation = useNavigation();


  
//    const K_OPTIONS = [
//     {
//       item: 'Juventus',
//       id: 'JUVE',
//     },
//     {
//       item: 'Real Madrid',
//       id: 'RM',
//     },
//     {
//       item: 'Barcelona',
//       id: 'BR',
//     },
//     {
//       item: 'PSG',
//       id: 'PSG',
//     },
//     {
//       item: 'FC Bayern Munich',
//       id: 'FBM',
//     },
//     {
//       item: 'Manchester United FC',
//       id: 'MUN',
//     },
//     {
//       item: 'Manchester City FC',
//       id: 'MCI',
//     },
//     {
//       item: 'Everton FC',
//       id: 'EVE',
//     },
//     {
//       item: 'Tottenham Hotspur FC',
//       id: 'TOT',
//     },
//     {
//       item: 'Chelsea FC',
//       id: 'CHE',
//     },
//     {
//       item: 'Liverpool FC',
//       id: 'LIV',
//     },
//     {
//       item: 'Arsenal FC',
//       id: 'ARS',
//     },
  
//     {
//       item: 'Leicester City FC',
//       id: 'LEI',
//     },
//   ]
    // const data = [
    //     {key:'1',value:'Jammu & Kashmir'},
    //     {key:'2',value:'Gujrat'},
    //     {key:'3',value:'Maharashtra'},
    //     {key:'4',value:'Goa'},
    //   ];

    const data = [
        { label: 'ahmad', value: '1' },
        { label: 'ali', value: '2' },
        { label: 'marah', value: '3' },
        { label: 'majed', value: '4' },
        { label: 'murad', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];

    useEffect(()=>{
        const changeKeyObjects = (arr, replaceKeys) => {
            return arr.map(item => {
              const newItem = {};
              Object.keys(item).forEach(key => {
                newItem[replaceKeys[key]] = item[[key]];
              });
              return newItem;
            });
          };
          const replaceKeys = { id: "value", ListName: "label" };
    
        const newArray = changeKeyObjects(dataList,replaceKeys)
        setData2(newArray)
      //  alert(JSON.stringify(data2))
    },[dataList])

    
    const addListFunction =(e)=>{
        e.preventDefault();
        let data = {id:dataList.length +1, url:require('../../assets/images/logoImage/ahmad3.jpeg'),
        ListName:text}
        setDataList([...dataList,data])
        setModalVisible(!modalVisible);
    }
    const removeListFunction =(e,data)=>{
        e.preventDefault();
        let filterList = dataList.filter(item => data !== item.id)
        setDataList(filterList)
    }
    const updateListFunction =(e,data)=>{
        e.preventDefault();
       // <MyModel  data={data}/>
       setDataUpdate(data);
        setModelUpdate(true);
    }
    const updateList = (e)=>{
        e.preventDefault();
       let objIndex = dataList.findIndex((obj => obj.id == dataUpdate.id));
        dataList[objIndex].ListName = text ;
        setModelUpdate(!modelUpdate);
    }
    useEffect(()=>{
       // alert(JSON.stringify(value));
        navigation.navigate('Home',value)
    },[value])
    
return (
    <View style={styles.categoryView}> 
    <View style={styles.SelectList}> 

    {/* <View style={{ margin: 30 }}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, paddingBottom: 20 }}>Demos</Text>
      </View>
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Demo</Text>
      <SelectBox
        label="Select single"
        options={K_OPTIONS}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
      />
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>MultiSelect Demo</Text>
      <SelectBox
        label="Select multiple"
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
    </View> */}

      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data2}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item);
            setIsFocus(false);
          }}
          
  

        />

        {/* <SelectList 
        onSelectChange
      // onSelect={(val) => alert(JSON.stringify(selected,val))}
      // onPress={(val)=> alert(JSON.stringify(val))}
        //onChangeText={(e)=>alert(e.value)}
        onChang={(val)=> setSelected(val)}
        setSelected={setSelected} 
        data={data2}  
        placeholder="Selet List"
        maxHeight={150}
        dropdownStyles={{backgroundColor:'#C1C1C1'}}
        //   arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />} 
        //   searchicon={<FontAwesome name="search" size={12} color={'black'} />} 
        //search={false} 
       // boxStyles={{borderRadius:0}} //override default styles
       // defaultOption={data2[0]}   //default selected option
        /> */}

    </View>
        <Modal 
        animationType='slide'
        transparent={true}
        visible={modelUpdate}
        onRequestClose={(data)=>{
            setModelUpdate(!modelUpdate)
        }}
      
        > 
            <View style={styles.conteredView}>
                <View style={styles.modelView}>
                <TouchableOpacity style={styles.conBtnClose} onPress={()=>setModelUpdate(!modelUpdate)}>
                        <View style={styles.btnClose}>
                            <Text> X </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.textStyle}>Update List</Text>
                    <View style={styles.inputStyle}>
                        <TextInput 
                            style={styles.viewinputStyle}
                            placeholder={dataUpdate.ListName}
                            placeholderTextColor="gray"
                            onChangeText={newText => setText(newText)}
                            Defaltnbvalue='text'

                        />
                       
                    </View>
                    <TouchableOpacity style={styles.conBtn} onPress={updateList}>
                        <View style={styles.btn}>
                            <Text>Update List</Text>
                        </View>
                    </TouchableOpacity>
                   
                </View>

            </View>

        </Modal> 
     
        <Modal 
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
            setModalVisible(!modalVisible)
        }}
        > 
            <View style={styles.conteredView}>
                <View style={styles.modelView}>
                <TouchableOpacity style={styles.conBtnClose} onPress={()=>setModalVisible(!modalVisible)}>
                        <View style={styles.btnClose}>
                            <Text> X </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.textStyle}>Add List</Text>
                    <View style={styles.inputStyle}>
                        <TextInput 
                            style={styles.viewinputStyle}
                            placeholder='List Name '
                            placeholderTextColor="gray"
                            onChangeText={newText => setText(newText)}
                            Defaltnbvalue='text'

                        />
                       
                    </View>
                    <TouchableOpacity style={styles.conBtn} onPress={addListFunction}>
                        <View style={styles.btn}>
                            <Text>Add List</Text>
                        </View>
                    </TouchableOpacity>
                   
                </View>

            </View>

        </Modal>
        
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={true}> 

        {dataList&&dataList.map((data,index)=>{
            return (
                <View key={index} style={styles.category} >
                     {/* <View style={styles.categoryList12} >  */}
                     <View style={styles.categoryList1}> 

                             <TouchableOpacity style={styles.close} onPress={(e)=>removeListFunction(e,data.id)}>
                              <AIcon
                                 name='close'
                                 size={15} 
                                 />
                            </TouchableOpacity>  
                        <Image 
                             style={ styles.logImage2}
                             // source={data.url}
                             source={{
                             uri:'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
                              }}
                        /> 
                       
                     <TouchableOpacity style={styles.update} onPress={(e)=> updateListFunction(e,data)}>
                         <AIcon
                            name='edit'
                            size={15} 
                            />
                       </TouchableOpacity> 

                     </View>

                  

                     {/* </View> */}
                  
                    {/* <Text onPress={(e)=> updateListFunction(e,data)}>update</Text> */}
                    <Text>{data.ListName}</Text>
                </View>
                    
                    )
         })}
                    

            
 
               
           

         <View style={styles.category}> 
                <TouchableOpacity onPress={()=>setModalVisible(true)}> 

                <View style={styles.categoryList}> 
                <View style={styles.framImage}> 
                <Icon 
                    size={30}
                    name={'add-to-list'}
                    />
                </View>
                <Text> Add List </Text>
            </View>
                </TouchableOpacity>
            </View>
             
           
        
    
        </ScrollView>
    

    </View>
)
function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}
   
const styles = StyleSheet.create({
    categoryView:{
      
         backgroundColor:'white',
        // flexDirection:'row',
       
         marginTop:10,
         marginHorizontal:10,
       
         borderRadius:25,
       
       // justifyContent:'center',
        //alignItems:'center',
        //alignContent:'center'
     },
     SelectList:{
        backgroundColor:'white',
        paddingHorizontal:20,
       // paddingVertical:10,
        flex:1
     },
     category:{
        flex:1,
         margin:10,
         alignContent:'center',
         alignItems:'center',
         width:70,
         backgroundColor:'white'

 
     },
    

   
     logImage:{
         width:60,
         height:60,
         backgroundColor:'#ADD8E6'
     },
     logImage2:{
        width:60,
        height:40,
       
    },
    categoryList:{
        flex:1,
        marginTop:15,
        alignItems:'center',
        alignContent:'center',
    },
     framImage:{
        Flex:1,
        flexDirection:'row',
         width:50,
         height:50,
         borderRadius:40,
         borderWidth:0.2,
         justifyContent:'center',
         alignItems:'center',

     },
      close:{
        marginLeft:35
      },
      update:{
        marginLeft:35
      },
     conteredView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:22
     },
     modelView:{
        backgroundColor:'white',
        borderRadius:25,
        padding:35,

     },
     modelText:{
        marginBottom:15,
        textAlign:'center'
     },
     conBtn: {
        // flex: 7,
         alignItems: 'center'
     },
 
     btn: {
         // flex:0.1,
         width: windowWidth - 290,
         height: 40,
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: '#00FF00',
         borderRadius: 10
     },
     conBtnClose:{
        alignItems:'flex-end'
     },
     btnClose:{
        borderWidth:1,
        borderRadius:1,
        
     },
     textStyle: {
        color: "black",
        fontWeight: "bold",
        fontSize:15,
        textAlign: "center"
      },
      inputStyle:{
        borderWidth:0.5,
        height:30,
        margin:15,
        width: windowWidth - 290,

      },
      viewinputStyle:{
        padding:0,
        paddingHorizontal:4
      }
})

export default CategoryList;