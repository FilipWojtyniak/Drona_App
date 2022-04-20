import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Baner from '../Constants/Baner'
import { ImageBackground } from 'react-native'
import { useRef } from 'react'

function Product () {
  
    const scrollRef = useRef();

    const handlePressRecycling = () =>{
        scrollRef.current?.scrollTo({
            y: 120,
            animated: true,
          });
    };

    const handlePressWind = () =>{
        scrollRef.current?.scrollTo({
            y: 344,
            animated: true,
          });
    };

    const handlePressLimit = () =>{
        scrollRef.current?.scrollTo({
            y: 600,
            animated: true,
          });
    };

    const handlePressWater = () =>{
        scrollRef.current?.scrollTo({
            y: 800,
            animated: true,
          });
    };

    const handlePressSupport = () =>{
        scrollRef.current?.scrollTo({
            y: 900,
            animated: true,
          });
    };

    const handleScroll = (event: Object) => {
        console.log(event.nativeEvent.contentOffset.y);
       };  

  return (
    <SafeAreaView style={[styles.container, styles.background]}>
        <Baner/>
        <ScrollView ref={scrollRef} onScroll={handleScroll} style={[styles.background,{top: Platform.OS === 'ios' ? 0 : 25}]}>                   
                    <View style={{width:'100%' }}>
                        <View style={styles.image}>
                            <Image  source={require('../assets/Drone_Front.png')}/>
                        </View>
                        <TouchableOpacity onPress={handlePressRecycling} style={[styles.purpleButtonContainer,{bottom: 35}]}>
                            <View style={[styles.buttonLeft,{borderTopRightRadius: 3, borderBottomRightRadius: 3,}]}>
                                <Text style={styles.text}>
                                    Recycling
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePressWind} style={[styles.purpleButtonContainer,{bottom: 25}]} >
                            <View style={[styles.buttonLeft,{borderTopRightRadius: 3, borderBottomRightRadius: 3}]}>
                                <Text style={styles.text}>
                                    Wind
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ alignItems:'flex-end',  bottom: 80}}> 
                            <TouchableOpacity onPress={handlePressLimit} style={[styles.purpleButtonContainer,{bottom: 30}]}>
                                <View style={[styles.button,{ borderBottomLeftRadius: 3, borderTopLeftRadius: 3}]}>
                                    <Text style={styles.text}>
                                        Limit
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePressWater} style={[styles.purpleButtonContainer,{bottom: 20}]}>
                                <View style={[styles.button,{borderBottomLeftRadius: 3, borderTopLeftRadius: 3}]}>
                                    <Text style={styles.text}>
                                        Water
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePressSupport} style={[styles.purpleButtonContainer,{bottom: 10}]}>
                                <View style={[styles.button,{borderBottomLeftRadius: 3, borderTopLeftRadius: 3}]}>
                                    <Text style={styles.text}>
                                        Support
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                <View style={styles.cartButtonContainer}>
                    <ImageBackground  source={require('../assets/Cart.png')} style={{width:'100%',height:'100%'}}>   
                        <View style={styles.comp}>
                            <Text style={styles.cartPrice}>$2000</Text>                                         
                                <Image source={require('../assets/Vector.png')}/>                                                                                                                                                                                                                
                        </View>                 
                    </ImageBackground>                               
                            </View>
                <View style={styles.ellipseContainerRight}>
                    <View style={styles.bothTextRight}>
                        <Text style={styles.ellipseTitleRight}>Recycled Plastics </Text>
                        <Text style={styles.ellipseDesRight}>Place holder text. Place holder text. Place holder text. Place holder text. </Text>
                    </View>
                    <View style={styles.ellipseImgRight}>                       
                        <Image source={require('../assets/Ellipse.png')}/>
                    </View>
                </View>
                <View style={styles.ellipseContainerLeft}>
                    <View style={styles.bothTextLeft}>
                        <Text style={styles.ellipseTitleLeft}>Windproofness</Text>
                        <Text style={styles.ellipseDesLeft}>Place holder text. Place holder text. Place holder text. Place holder text. </Text>
                    </View>
                    <View style={styles.ellipseImgLeft}>                       
                        <Image source={require('../assets/Ellipse2.png')}/>
                    </View>
                </View>
                <View style={styles.ellipseContainerRight}>
                    <View style={styles.bothTextRight}>
                        <Text style={styles.ellipseTitleRight}>Limitless</Text>
                        <Text style={styles.ellipseDesRight}>Place holder text. Place holder text. Place holder text. Place holder text. </Text>
                    </View>
                    <View style={styles.ellipseImgRight}>                       
                        <Image source={require('../assets/Ellipse4.png')}/>
                    </View>
                </View>  
                <View style={styles.ellipseContainerLeft}>
                    <View style={styles.bothTextLeft}>
                        <Text style={styles.ellipseTitleLeft}>Waterproofness</Text>
                        <Text style={styles.ellipseDesLeft}>Place holder text. Place holder text. Place holder text. Place holder text. </Text>
                    </View>
                    <View style={styles.ellipseImgLeft}>                       
                        <Image source={require('../assets/Ellipse3.png')}/>
                    </View>
                </View>  
                <View style={styles.ellipseContainerRight}>
                    <View style={styles.bothTextRight}>
                        <Text style={styles.ellipseTitleRight}>Compatibility</Text>
                        <Text style={styles.ellipseDesRight}>Place holder text. Place holder text. Place holder text. Place holder text. </Text>
                    </View>
                    <View style={styles.ellipseImgRight}>                       
                        <Image source={require('../assets/Ellipse5.png')}/>
                    </View>
                </View>          
      </ScrollView>
      </SafeAreaView> 
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
    purpleButtonContainer:{
        width: 90,
        height: 27,
        
    },
    buttonLeft:{
        backgroundColor:'rgba(203, 213, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%',
        width:'100%'       
    },
    button:{
        backgroundColor:'rgba(203, 213, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center', 
        height:'100%',
        width:'100%'        
    },
    text:{
        fontSize:15
    },
    cartButtonContainer:{
       width:102,
       height: 39,
       right: Platform.OS === 'ios' ? 155 : 145,
       top:255,
       position:'absolute',     
    },
    cartPrice:{
        fontSize:20,
        color: '#FFF',
        fontWeight:'bold',
        
    },
    comp:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        height:'100%'
    },
    ellipseContainerRight:{
        bottom:25,
        width:'100%',
        height: 233,
        justifyContent:'center'
    },
    ellipseContainerLeft:{
        bottom:25,
        width:'100%',
        height: 233,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    bothTextRight:{
        width:'90%',
        height:122,
        left:20,
        justifyContent:'center',
        backgroundColor:'rgba(87, 183, 201, 1)',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius:10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FFF',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
    },
    ellipseImgRight:{     
        position:'absolute',
        left: 295,
        top:15,
        borderRadius: 207,
        borderWidth: 1,
        borderColor: '#FFF',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
    },
    ellipseTitleRight:{
        color:'#FFF',
        fontSize: 30,
        left:20
    },
    ellipseDesRight:{
        width:'60%',
        color:'#FFF',
        fontSize: 16,
        left:20,
        
    },
    bothTextLeft:{
        right:20,
        width:'100%',
        height:122,
        justifyContent:'center',
        alignItems:'flex-end',
        backgroundColor:'rgba(87, 183, 201, 1)',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius:10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FFF',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
    },
    ellipseImgLeft:{     
        position:'absolute',
        right: 295,
        top:15,
        borderRadius: 207,
        borderWidth: 1,
        borderColor: '#FFF',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
    },
    ellipseTitleLeft:{
        width:'70%',
        color:'#FFF',
        fontSize: 30,
        left:20
    },
    ellipseDesLeft:{
        width:'70%',
        color:'#FFF',
        fontSize: 16,
        left:20
    }
})