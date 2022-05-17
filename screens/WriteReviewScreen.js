import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import ReviewScreen from './ReviewScreen';
import { useContext } from 'react';
import { AppContext } from '../App';


const WriteReviewScreen = () => {

    const navigation = useNavigation();
    
    const {setReviews} = useContext(AppContext);

    const [inputValue, setInputValue] = useState('');

    const handleTextChange = (inputValue) =>{
        setInputValue(inputValue);
    }

    const handleSubmitPress = () => {  
        if(inputValue){
               setReviews((prev)=> [...prev,inputValue])
               navigation.navigate('Review')
           }
    }

  return (
    <SafeAreaView style={styles.background}>
        <KeyboardAvoidingView >
            <View style={styles.container}>
                <Text style={styles.text}>Write your review here</Text>
                <View style={styles.textInputContainer}>
                    <TextInput onChangeText={handleTextChange} placeholder="It's the best Drone ever!"  placeholderTextColor={'rgba(137, 151, 210, 1)'} style={styles.textInput}/>
                </View>
                <View style={styles.bar}/>
            <TouchableOpacity onPress={handleSubmitPress} style={styles.button}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Submit</Text>
                </View>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default WriteReviewScreen

const styles = StyleSheet.create({
    background:{
        backgroundColor:'rgba(137, 151, 210, 1)',
        flex:1,
        justifyContent:'center'
    },
    container:{
        height:'70%',
        alignItems:'center'
    },
    text:{
        fontSize:30
    },
    textInputContainer:{
        backgroundColor:'rgba(207, 207, 207,0.5)',
        width:'95%',
        height:'70%',
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        marginTop:40
    },
    textInput:{
        marginLeft:10,
        bottom: 100,
        fontSize:20,
        height:'100%',
        width:'100%'
    },
    bar:{
        width:'95%',
        height:2,
        backgroundColor:'blue',
    },
    buttonContainer:{
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
    }
})