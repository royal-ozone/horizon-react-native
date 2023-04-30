import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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
} from 'react-native';

import Processing from "../Pages/orderPages/Processing";
import Delivered from '../Pages/orderPages/Delivered';
import Cancelled from '../Pages/orderPages/Cancelled';


const Tab = createMaterialTopTabNavigator();

const  MyTabs = () =>{
    return (
      <Tab.Navigator
        initialRouteName="Delivered"
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: { fontSize: 13 ,fontWeight:'bold' },
          tabBarStyle: { backgroundColor: '#E0E0E0', },

        }}
      >
        <Tab.Screen
          name="Delivered"
          component={Delivered}
         // options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="Processing"
          component={Processing}
         // options={{ tabBarLabel: 'Updates' }}
        />
        <Tab.Screen
          name="Cancelled"
          component={Cancelled}
         // options={{ tabBarLabel: 'Profile' }}
        />
      </Tab.Navigator>
    );
  }

export default MyTabs;  
  