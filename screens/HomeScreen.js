import { StyleSheet, Text, View, SafeAreaView,ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Baner from '../Constants/Baner';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../Styles/HomeScreenStyles';

const HomeScreen = () => {

  const navigation = useNavigation();

  const handleLearnButtonPress = () =>{
    navigation.navigate('Product');
  };

  const handleBuyButtonPress = () => {
    navigation.navigate('Buy');
  }

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
            <Text style={styles.text_2}> duis enim velit mollit.</Text>
            <Text style={styles.text_2}> Exercitation veniam consequat</Text>
            <Text style={styles.text_2}> sunt nostrud amet.</Text>
          </View>
          </View>
          <View style={styles.buyButtonContainer}>
           <TouchableOpacity onPress={handleBuyButtonPress} style={styles.buyButton}>
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

