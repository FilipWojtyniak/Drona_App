import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
  return (
      <View style={styles.background}>
        <DrawerContentScrollView>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/LOGO_DARK.png')}/>
            </View>
            <View style={styles.propsContainer}>
                <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>    
      </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    background:{
        backgroundColor: 'rgba(203, 213, 255, 0.9)',
        flex:1
    },
    imageContainer:{
        margin: 20
    },
    propsContainer:{
        
    }
})