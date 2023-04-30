import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import StartSlider from '../Pages/Start';
import Register from '../Pages/Register';
import LogIn from '../Pages/LogIn';
import Home from '../Pages/Home';
import Notification from '../Pages/Notification';
import MyTab from './TabNavigator';
import MyDrawer from './Drawer';
// product page // 
import SpecialDeelsPage from '../Pages/productPage/SpecialDeels';
import BestSellingPage from '../Pages/productPage/BestSelling';
import PopularProductsPage from '../Pages/productPage/PopularProducts';
import ProductDetailsPage from '../Pages/productPage/productDetails';

// Categoty 
import SubCategoryPage from '../Pages/category/SubCategoryPage';
// orders detail //
import DetailProcessing from '../Pages/orderPages/detialProcessing';
import DetailDelivered from '../Pages/orderPages/detialDeliverd';
import DetailCancelled from '../Pages/orderPages/detialCanelled';

/////// profile ////// 
import EditProfile from '../Pages/profile/EditProfile'
import Profile from '../Pages/profile/Profile'
import Address from '../Pages/address/Address';
import AddAddress from '../Pages/address/AddAddress';
import Setting from '../Pages/setting/setting';
import Wallet from '../Pages/wallet/wallet';
//////// 


const Stack = createNativeStackNavigator();

const AuthStack =()=>{
    return(
       <Stack.Navigator>
        <Stack.Screen name="Home" component={MyDrawer} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LogIn" component={LogIn} options={{headerShown:false}} />
        <Stack.Screen name="specialDeels" component={SpecialDeelsPage} options={{headerShown:false}} />
        <Stack.Screen name="BestSellingPage" component={BestSellingPage} options={{headerShown:false}} />
        <Stack.Screen name="PopularProductsPage" component={PopularProductsPage} options={{headerShown:false}} />
        <Stack.Screen name="Notification" component={Notification} options={{headerShown:false}} />
        <Stack.Screen name="DetailProcessing" component={DetailProcessing} options={{headerShown:false}} />
        <Stack.Screen name="DetailDelivered" component={DetailDelivered} options={{headerShown:false}} />
        <Stack.Screen name="DetailCancelled" component={DetailCancelled} options={{headerShown:false}} />
        <Stack.Screen name="ProductDetailsPage" component={ProductDetailsPage} options={{headerShown:false}} />
        <Stack.Screen name="SubCategory" component={SubCategoryPage} options={{headerShown:false}} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name='Address' component={Address} options={{headerShown:false}} /> 
        <Stack.Screen name='AddAddress' component={AddAddress} options={{headerShown:false}} /> 
        <Stack.Screen name='Setting' component={Setting} options={{headerShown:false}} /> 
        <Stack.Screen name='Wallet' component={Wallet} options={{headerShown:false}} /> 

        {/* <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} options={{headerShown:false}} />
        <Stack.Screen name="OrderStackScreen" component={OrderStackScreen} options={{headerShown:false}} />
        <Stack.Screen name="CategoryStackScreen" component={CategoryStackScreen} options={{headerShown:false}} /> */}

      </Stack.Navigator> 
    )
}

export default AuthStack;