import {Animated , Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Baner from '../Constants/Baner';
import { ImageBackground } from 'react-native';
import { useRef, useEffect } from 'react';
import { styles } from '../Styles/ProductStyles';



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

    const translationDrone = useRef( 
        new Animated.Value(1000)
        ).current;

        useEffect(() => {
            Animated.timing(translationDrone, {
                duration:1000,
                toValue:0,
                useNativeDriver: true,
            }).start();
        }, []);

        const translationGold = useRef( 
            new Animated.Value(1000)
            ).current;
    
            useEffect(() => {
                Animated.timing(translationGold, {
                    duration:1000,
                    toValue:0,
                    useNativeDriver: true,
                }).start();
            }, []);

            const translationLeft = useRef( 
                new Animated.Value(-1000)
                ).current;
        
             useEffect(() => {
                 setTimeout(()=>{
                     Animated.timing(translationLeft, {
                         duration:1000,
                         toValue:0,
                        useNativeDriver: true,
                     }).start();
                }, 700);                      
            }, []);

            const translationRight = useRef( 
                new Animated.Value(1000)
                ).current;

            useEffect(() => {
                setTimeout(()=>{
                    Animated.timing(translationRight, {
                        duration:1000,
                        toValue:0,
                       useNativeDriver: true,
                    }).start();
               }, 700);                      
           }, []);

    
  return (
    <SafeAreaView style={[styles.container, styles.background]}>
        <Baner/>
        <ScrollView ref={scrollRef} style={[styles.background,{top: Platform.OS === 'ios' ? 0 : 25}]}>                   
                        <Animated.View style={[styles.image, {transform: [{ translateY: translationDrone }]}]}>
                            <Image  source={require('../assets/Drone_Front.png')}/>
                        </Animated.View>
                        <TouchableOpacity onPress={handlePressRecycling} style={[styles.purpleButtonContainer,{bottom: 35}]}>
                            <Animated.View style={[styles.buttonLeft,{borderTopRightRadius: 3, borderBottomRightRadius: 3, transform: [{ translateX: translationLeft }]}]}>
                                <Text style={styles.text}>
                                    Recycling
                                </Text>
                            </Animated.View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePressWind} style={[styles.purpleButtonContainer,{bottom: 25}]} >
                            <Animated.View style={[styles.buttonLeft,{borderTopRightRadius: 3, borderBottomRightRadius: 3, transform: [{ translateX: translationLeft }]}]}>
                                <Text style={styles.text}>
                                    Wind
                                </Text>
                            </Animated.View>
                        </TouchableOpacity>
                        <View style={{ alignItems:'flex-end',  bottom: 80}}> 
                            <TouchableOpacity onPress={handlePressLimit} style={[styles.purpleButtonContainer,{bottom: 30}]}>
                                <Animated.View style={[styles.button,{ borderBottomLeftRadius: 3, borderTopLeftRadius: 3, transform: [{ translateX: translationRight }]}]}>
                                    <Text style={styles.text}>
                                        Limit
                                    </Text>
                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePressWater} style={[styles.purpleButtonContainer,{bottom: 20}]}>
                                <Animated.View style={[styles.button,{borderBottomLeftRadius: 3, borderTopLeftRadius: 3, transform: [{ translateX: translationRight }]}]}>
                                    <Text style={styles.text}>
                                        Water
                                    </Text>
                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePressSupport} style={[styles.purpleButtonContainer,{bottom: 10}]}>
                                <Animated.View style={[styles.button,{borderBottomLeftRadius: 3, borderTopLeftRadius: 3, transform: [{ translateX: translationRight }]}]}>
                                    <Text style={styles.text}>
                                        Support
                                    </Text>
                                </Animated.View>
                            </TouchableOpacity>
                        </View>
                <Animated.View style={[styles.cartButtonContainer, {transform: [{ translateY: translationGold }]}]}>
                    <ImageBackground  source={require('../assets/Cart.png')} style={{width:'100%',height:'100%'}}>   
                        <View style={styles.comp}>
                            <Text style={styles.cartPrice}>$2000</Text>                                         
                                <Image source={require('../assets/Vector.png')}/>                                                                                                                                                                                                                
                        </View>                 
                    </ImageBackground>                               
                </Animated.View>

                <Animated.View style={[styles.ellipseContainerRight, {transform: [{ translateX: translationRight }]}]}>
                    <View style={styles.bothTextRight}>
                        <Text style={styles.ellipseTitleRight}>Recycled Plastics </Text>
                        <Text style={styles.ellipseDesRight}>Place holder text. Place holder text. Place holder text. Place holder text. </Text>
                    </View>
                    <View style={styles.ellipseImgRight}>                       
                        <Image source={require('../assets/Ellipse.png')}/>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.ellipseContainerLeft, {transform: [{ translateX: translationLeft }]}]}>
                    <View style={styles.bothTextLeft}>
                        <Text style={styles.ellipseTitleLeft}>Windproofness</Text>
                        <Text style={styles.ellipseDesLeft}>Place holder text. Place holder text. Place holder text. Place holder text. </Text>
                    </View>
                    <View style={styles.ellipseImgLeft}>                       
                        <Image source={require('../assets/Ellipse2.png')}/>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.ellipseContainerRight, {transform: [{ translateX: translationRight }]}]}>
                    <View style={styles.bothTextRight}>
                        <Text style={styles.ellipseTitleRight}>Limitless</Text>
                        <Text style={styles.ellipseDesRight}>Place holder text. Place holder text. Place holder text. Place holder text. </Text>
                    </View>
                    <View style={styles.ellipseImgRight}>                       
                        <Image source={require('../assets/Ellipse4.png')}/>
                    </View>
                </Animated.View>  
                <Animated.View style={[styles.ellipseContainerLeft, {transform: [{ translateX: translationLeft }]}]}>
                    <View style={styles.bothTextLeft}>
                        <Text style={styles.ellipseTitleLeft}>Waterproofness</Text>
                        <Text style={styles.ellipseDesLeft}>Place holder text. Place holder text. Place holder text. Place holder text. </Text>
                    </View>
                    <View style={styles.ellipseImgLeft}>                       
                        <Image source={require('../assets/Ellipse3.png')}/>
                    </View>
                </Animated.View>  
                <Animated.View style={[styles.ellipseContainerRight, {transform: [{ translateX: translationRight }]}]}>
                    <View style={styles.bothTextRight}>
                        <Text style={styles.ellipseTitleRight}>Compatibility</Text>
                        <Text style={styles.ellipseDesRight}>Place holder text. Place holder text. Place holder text. Place holder text. </Text>
                    </View>
                    <View style={styles.ellipseImgRight}>                       
                        <Image source={require('../assets/Ellipse5.png')}/>
                    </View>
                </Animated.View>          
      </ScrollView>
      </SafeAreaView> 
  )
}

export default Product

