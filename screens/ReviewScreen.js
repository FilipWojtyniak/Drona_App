import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Baner from '../Constants/Baner'
import Component from '../componets/component'
import { useNavigation } from '@react-navigation/core'
import { useContext } from 'react'
import { AppContext } from '../App'


const ReviewScreen = () => {

    const {reviews} = useContext(AppContext);

    const navigation = useNavigation();

    const handleButtonPress = () =>{
        navigation.navigate('WriteReview');
    }

  return (
    <SafeAreaView style={styles.background}>
        <Baner />
        <View  style={styles.scrollContainer}>
            <ScrollView horizontal={true}>
                {reviews.map(review =><Component text={review}/>)}
            </ScrollView>
        </View>
        <View style={styles.button}>
            <TouchableOpacity onPress={handleButtonPress}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Write a review</Text>
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
   
  )
}

export default ReviewScreen

const styles = StyleSheet.create({
    background:{
        backgroundColor:'rgba(137, 151, 210, 1)',
        flex:1
    },
    scrollContainer:{
        marginTop:50,
        height:250
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        },
    buttonContainer:{
        width:300,
        height:70,
        borderRadius:10,
        borderWidth:2,
        borderColor:'white',
        backgroundColor:'rgba(50, 155, 174, 1)',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:100
    },
    buttonText:{
        color:'white',
        fontSize:30
    }
})