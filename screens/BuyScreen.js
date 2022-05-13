import { StyleSheet, Text, View, ImageBackground, SafeAreaView,KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import Baner from '../Constants/Baner';
import { useNavigation } from '@react-navigation/core';



const BuyScreen = () => {

    const navigation = useNavigation();

    const handlePurchasePress = () => {
        navigation.navigate('Bought');
    }

  return (
    <ImageBackground style={styles.background}  source={require('../assets/Clouds.jpg')}>
        <SafeAreaView>
         <Baner/>
         <KeyboardAvoidingView style={styles.container}>
            <View style={styles.emailInputContainer}>              
                    <Text style={{fontSize:15}}>Email</Text>                           
                    <TextInput placeholder='johndoe@email.com' placeholderTextColor={'rgba(173, 173, 173,1)'} style={styles.emailInput}/>
            </View>
            <View style={styles.emailInputContainer}>             
                    <Text style={{fontSize:15}}>Name on the card</Text>              
                    <TextInput placeholder='John Doe' placeholderTextColor={'rgba(173, 173, 173,1)'} style={styles.emailInput}/>
            </View>
            <View style={styles.emailInputContainer}>               
                    <Text style={{fontSize:15}}>Email</Text>                            
                    <TextInput placeholder='0000 0000 0000 0000' placeholderTextColor={'rgba(173, 173, 173,1)'} style={styles.emailInput}/>
            </View>
            <View style={styles.dateAndCodeContainer}>
                <View>                   
                    <Text style={{fontSize:15}}>MM/YY</Text>                             
                    <TextInput placeholder='Date' placeholderTextColor={'rgba(173, 173, 173,1)'} style={styles.dateInput}/>
                </View>
                <View>                   
                    <Text style={{fontSize:15}}>CVC</Text>                             
                    <TextInput placeholder='CVC' placeholderTextColor={'rgba(173, 173, 173,1)'} style={styles.dateInput}/>   
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handlePurchasePress} style={styles.button}>
                    <View style={styles.purchaseTextContainer}>
                        <Text style={styles.purchaseText}>Purchase</Text>
                    </View>
                </TouchableOpacity>
            </View>
         </KeyboardAvoidingView>
        </SafeAreaView>  
    </ImageBackground>
  )
}

export default BuyScreen

const styles = StyleSheet.create({
    background:{
        flex:1,
        width:'100%',
        height:'100%'
    },
    container:{
        width:'100%',
        alignItems: 'center'
    },
    emailInputContainer:{
        marginTop: 50,
        width:'80%',
        height:50
    },
    emailInput:{
        backgroundColor:'#FFF',
        height:'90%',
        width:'100%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:5,
        fontSize: 18
    },
    dateAndCodeContainer:{
        width:'100%',
        height:70,
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    dateInput:{
        borderColor: 'black',
        backgroundColor:'#FFF',
        borderWidth: 1,
        borderRadius:5,
        width:145,
        height: 45,   
    },
    buttonContainer:{
        height:80,
        width:'100%',
        marginTop:150,
        alignItems:'center'
    },
    button:{
        backgroundColor:'rgba(144, 212, 215, 1)',
        height:'100%',
        width:340,
        borderRadius:20,
        borderColor:'#FFF',
        borderWidth:2,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
    },
    purchaseTextContainer:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    purchaseText:{
        fontSize:30,
        color:'white'
    }
})