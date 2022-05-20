import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { useContext } from 'react';
import { AppContext } from '../App';


const WriteReviewScreen = () => {

    const navigation = useNavigation();
    
    const {setReviews} = useContext(AppContext);

    const [inputValue, setInputValue] = useState('');

    const handleGoBackPress = () =>{
        navigation.navigate('Review');
        setInputValue("");
      }

    const handleTextChange = (inputValue) =>{
        setInputValue(inputValue);
    }

    const handleSubmitPress = () => {  
        if(inputValue){
               setReviews((prev)=> [...prev,inputValue])
               setInputValue("");
               navigation.navigate('Review')
           }
    }

  return (
      <KeyboardAvoidingView style={styles.background} >
                <View style={styles.header}>  
                    <View style={styles.buttonContainer2}>
                        <TouchableOpacity onPress={handleGoBackPress}>           
                                <Image  source={require('../assets/Back.png')}/>
                        </TouchableOpacity>          
                    </View>
                </View>  
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Write your review here</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput textAlignVertical='top' value={inputValue} onChangeText={handleTextChange} placeholder="It's the best Drone ever!"  placeholderTextColor={'rgba(137, 151, 210, 1)'} style={styles.textInput}/>
                </View>
                <View style={styles.bar}/>
            <TouchableOpacity onPress={handleSubmitPress} style={styles.button}>
                <View style={styles.buttonContainer1}>
                    <Text style={styles.buttonText}>Submit</Text>
                </View>
            </TouchableOpacity>         
        </KeyboardAvoidingView>
  )
}

export default WriteReviewScreen

const styles = StyleSheet.create({
    background:{
        backgroundColor:'rgba(137, 151, 210, 1)',
        flex:1,
        alignItems:'center'
    },
    container:{
        height:'70%',
        alignItems:'center'
    },
    textContainer:{
        alignItems:'center',
        width:'100%',
        marginTop: 70
    },
    text:{
        fontSize:30,
    },
    textInputContainer:{
        backgroundColor:'rgba(207, 207, 207,0.5)',
        width:'95%',
        height:'30%',
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        marginTop:100,
    },
    textInput:{
        fontSize:20,
        height:'100%',
        width:'100%',
    },
    bar:{
        width:'95%',
        height:2,
        backgroundColor:'blue',
    },
    buttonContainer1:{
        backgroundColor:'#FFF',
        height: 100,
        width:300,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        opacity:0.7
    },
    buttonText:{
        fontSize:30
    },
    button:{
        marginTop:100
    },
    header:{
        width:'100%',
        height: 65,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        top:Platform.OS === 'ios' ? 10 : 25
        },
    buttonContainer2:{
          height:'100%',
          width:'20%',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          alignItems:'center',
          justifyContent:'center'
        },
})