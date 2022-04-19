import { StyleSheet, Text, View, SafeAreaView,ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Baner from '../Constants/Baner';
import { useNavigation } from '@react-navigation/core';

const HomeScreen = () => {

  const navigation = useNavigation();

  const handleLearnButtonPress = () =>{

    navigation.navigate('Product')

  };

  return (
    <ImageBackground source={require('../assets/Background.jpg')} style={{width: '100%', height: '100%'}}>
      <SafeAreaView>
      <Baner/>
          <View style={styles.textContainer}>
            <Text style={styles.text}> The drones of </Text>
            <Text style={styles.text}> our future. </Text>
          <View style={styles.textContainer_2}>
            <Text style={styles.text_2}> Amet minim mollit non deserunt </Text>
            <Text style={styles.text_2}> ullamco est sit aliqua dolor do  </Text>
            <Text style={styles.text_2}> amet sint. Velit officia consequat </Text>
            <Text style={styles.text_2}> duis enim velit mollit.  </Text>
            <Text style={styles.text_2}> Exercitation veniam consequat </Text>
            <Text style={styles.text_2}> sunt nostrud amet.  </Text>
          </View>
          </View>
          <View style={styles.buyButtonContainer}>
           <TouchableOpacity style={styles.buyButton}>
             <Text style={styles.buyText}>Buy Now</Text>           
           </TouchableOpacity>
          </View>
          <View style={styles.learnButtonContainer}>
           <TouchableOpacity style={styles.learnButton} onPress={handleLearnButtonPress}>
             <Text style={styles.learnText}>Learn more</Text>           
           </TouchableOpacity>
          </View>
      </SafeAreaView>
    </ImageBackground>
  )
};

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
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
  textContainer:{
    alignItems:'center',
    height:'100%',
    top: 231

  },
  text:{
    color:'#AD4473',
    fontSize: 36,
    fontStyle: 'italic',
    fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'serif',
    textShadowColor: '#696969',
    textShadowOffset: { width:2 ,height:2 },
    textShadowRadius: 6,
  },
  textContainer_2:{
    height: '100%',
    alignItems:'center',
    top: 40
  },
  text_2:{
    fontSize: 20,
    height: 33
  },
  buyButtonContainer:{
    position:'absolute',
    top: Platform.OS === 'ios' ? 700 : 600,
    left: 30,
    
  },
  buyButton:{
    backgroundColor: 'rgba(41, 130, 146, 1)',
    alignItems: 'center',
    justifyContent:'center',
    height: 60,
    width:140,
    borderRadius: 10
  },
  learnButtonContainer:{
    position:'absolute',
    top: Platform.OS === 'ios' ? 700 : 600,
    right: 30,
  },
  learnButton:{
    alignItems: 'center',
    justifyContent:'center',
    height:60,
    width:140,
    borderRadius: 10,
    borderColor: 'rgba(41, 130, 146, 1)',
    borderWidth: 3,
  },
  learnText:{
    color: 'rgba(41, 130, 146, 1)',
    fontSize: 20,
    fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'serif',
  },
  buyText:{
    color: '#FFF',
    fontSize: 20,
    fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'serif',
  }
})