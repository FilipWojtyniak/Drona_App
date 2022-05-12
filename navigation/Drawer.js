import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Product from '../screens/Product';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator screenOptions={{drawerActiveBackgroundColor:'rgba(173, 68, 115, 1)',drawerActiveTintColor: '#FFF', drawerLabelStyle:{fontFamily:'Courier', fontSize: 30}}} drawerContent={props => <CustomDrawer {...props}/>} >
      <Drawer.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <Drawer.Screen options={{headerShown: false}} name="Product" component={Product} />
    </Drawer.Navigator>
  )
}

export default DrawerScreen

