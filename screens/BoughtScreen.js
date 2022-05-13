import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,SafeAreaView, Image } from 'react-native'
import React from 'react';
import Baner from '../Constants/Baner';


const BoughtScreen = () => {
  return (
   <ImageBackground style={{  width:'100%',height:'100%'}}  source={require('../assets/DeliveryMan.jpg')}>
       <SafeAreaView>
            <Baner/>
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.conContainer}>
                        <Text style={styles.conText}>Congratulations!</Text>
                </View>
                <View style={styles.weContainer}>
                        <Text style={styles.text}>We've recieved your order.</Text>
                </View>
                <View style={styles.yourContainer}>
                        <Text style={styles.text}>Your drone is on it's way!</Text>
                </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>See Your Order Status</Text>
                            <Image source={require('../assets/StatusButton.png')} style={styles.image}/>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
       </SafeAreaView>
   </ImageBackground>
  )
}

export default BoughtScreen

const styles = StyleSheet.create({
    background:{
        alignItems:'center',
        width:'100%',
        height:'100%',
        flexDirection:'column-reverse'
    },
    container:{
        backgroundColor:'rgba(255,255,255,0.7)',
        width:'95%',
        height: 300,
        marginBottom:150,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    conContainer:{
        bottom:20
    },
    conText:{
        color:'rgba(142, 50, 91, 1)',
        fontStyle:'italic',
        fontSize:50
    },
    weContainer:{
        marginBottom: 10
    },
    yourContainer:{
        marginBottom:10
    },
    text:{
        fontSize:25,
        fontWeight: 'bold',
    },
    buttonContainer:{
        width:'100%',
        height:67,
        top:20,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        height:67,
        width:276,
        backgroundColor:'rgba(50, 155, 174, 1)',
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row'
        
    },
    buttonText:{
        color:'#FFF',
        fontSize:22,
    },
    image:{
        width:42,
        height:42,
    }
})