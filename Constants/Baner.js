import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';


function Baner () {

  const navigation = useNavigation();

  const handleHomePress = () =>{
    navigation.navigate('Home');
  }

  const handleDrawerPress = () =>{
    navigation.openDrawer();
  }
 

  return (
    <View style={styles.header}>  
      <View style={styles.logo}>
        <Image source={require('../assets/LOGO.png')}/>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleHomePress}>           
            <Image  source={require('../assets/HomeButton.png')}/>
       </TouchableOpacity>
       <TouchableOpacity >
            <Image source={require('../assets/SearchButton.png')}/>
       </TouchableOpacity>
       <TouchableOpacity>           
            <Image source={require('../assets/ProfileButton.png')}/>
       </TouchableOpacity> 
       <TouchableOpacity onPress={handleDrawerPress}>           
            <Image  source={require('../assets/MenuButton.png')}/>
       </TouchableOpacity>          
      </View>
      </View>
      </View>  
  )
}
export default Baner

const styles = StyleSheet.create({
      header:{
      top: Platform.OS === 'ios' ? 0 : 25,
      width:'100%',
      height: 65,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      },
      logo:{
        flexDirection: 'row',
        alignItems:'flex-start',
        top:4,
        left:11
      },
      buttonsContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        flex: 0.6,
        left: 80,
        top:14,
      },
})