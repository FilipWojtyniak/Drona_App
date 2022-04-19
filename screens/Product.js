import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import Baner from '../Constants/Baner'

function Product () {
  return (
      <ScrollView style={styles.background}>     
        <SafeAreaView >          
            <View style={styles.container}>
                <Baner/>
            </View>
                <View>
                    <View style={{width:'100%'}}>
                        <View style={styles.image}>
                        <Image  source={require('../assets/Drone_Front.png')}/>
                        </View>
                        <TouchableOpacity>
                            <View style={[styles.button,{bottom: 35, borderTopRightRadius: 3, borderBottomRightRadius: 3}]}>
                                <Text style={styles.text}>
                                    Recycling
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.button,{bottom: 25, borderTopRightRadius: 3, borderBottomRightRadius: 3}]}>
                                <Text style={styles.text}>
                                    Wind
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.button,{bottom: 35, flexDirection:'column', justifyContent:'flex-end'}]}>
                                <Text style={styles.text}>
                                    Limit
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.button,{bottom: 25}]}>
                                <Text style={styles.text}>
                                    Water
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.button,{bottom: 35}]}>
                                <Text style={styles.text}>
                                    Support
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
        </SafeAreaView>      
      </ScrollView>
  )
}

export default Product

const styles = StyleSheet.create({
    background:{
        backgroundColor:'rgba(41, 130, 146, 1)',
        width: '100%',
        height: '100%'
    },
    container:{
        flex:1
    },
    image:{
        alignItems: 'center',
        justifyContent:'center',
        width:'100%',
        top: 50
    },
    button:{
        width: 90,
        height: 27,
        backgroundColor:'rgba(203, 213, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text:{
        fontSize:15
    }
})