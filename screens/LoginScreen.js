import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground  } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core';


function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation();

  useEffect(() => {
   const unsubscribe =  auth.onAuthStateChanged(user =>{
      if(user){
        navigation.replace('HomeScreen');
      }
    })
    return unsubscribe;
  },[])

  const handleSingUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
      })
      .catch(error => alert(error.message))
  }

 const handleLogin = () => {
   auth.signInWithEmailAndPassword(email, password)
   .then(userCredentials =>{
     const user = userCredentials.user;
     console.log('Logged', user.email);
   })
   .catch(error => alert(error.message))
 }

  return (
    <ImageBackground source={require('../assets/Background.jpg')} style={{width: '100%', height: '100%'}}>
       <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value= {email}
            onChangeText= {text => setEmail(text)}
            placeholder="Email" />
          <TextInput
            style={styles.input}
            value= {password}
            onChangeText= {text => setPassword(text)}
            secureTextEntry
            placeholder="Password" />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.buttonLogin, styles.bothButtons]} onPress ={handleLogin}>
            <Text style={styles.login}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonRegister, styles.bothButtons]} onPress={handleSingUp}>
            <Text style={styles.register}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView> 
    </ImageBackground>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  background:{
    flex:1,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'  
  },
  inputContainer:{
    width: '80%',
  
  },
  input:{
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    paddingVertical: 10,
    marginTop: 5,
    borderRadius: 10
  },
  buttonContainer:{
    width: '70%',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonLogin:{
    borderColor: '#298292',
    borderWidth: 2,
  },
  buttonRegister:{
    backgroundColor: '#298292',
    marginTop: 5,
  },
  bothButtons:{
    width: '70%',
    alignItems:'center',
    borderRadius: 10,
    padding: 15,
  },
  login:{
    fontWeight: '700',
    fontSize: 16,
    color: '#00bfff'
  },
  register:{
    fontWeight: '700',
    fontSize: 16,
    color: '#FFF'
  }

})