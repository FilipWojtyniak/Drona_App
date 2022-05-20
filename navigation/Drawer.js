import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Product from '../screens/ProductScreen';
import CustomDrawer from './CustomDrawer';
import BuyScreen from '../screens/BuyScreen';
import BoughtScreen from '../screens/BoughtScreen';
import ReviewScreen from '../screens/ReviewScreen';
import WriteReviewScreen from '../screens/WriteReviewScreen';


const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator screenOptions={{drawerActiveBackgroundColor:'rgba(173, 68, 115, 1)',drawerActiveTintColor: '#FFF', drawerLabelStyle:{ fontSize: 30}}} drawerContent={props => <CustomDrawer {...props}/>} >
      <Drawer.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <Drawer.Screen options={{headerShown: false}} name="Product" component={Product} />
      <Drawer.Screen options={{headerShown: false, drawerItemStyle:{height:0}}}  name="Buy" component={BuyScreen} /> 
      <Drawer.Screen options={{headerShown: false}} name="Review" component={ReviewScreen} />
      <Drawer.Screen options={{headerShown: false, drawerItemStyle:{height:0}}} name="WriteReview" component={WriteReviewScreen} />
      <Drawer.Screen options={{headerShown: false, drawerItemStyle:{height:0}}}  name="Bought" component={BoughtScreen} /> 
    </Drawer.Navigator>
  )
}

export default DrawerScreen

