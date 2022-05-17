import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
const component = (props) => {
  return (
    <View style={styles.background}>
        <View style={styles.headerContainer}>
          <Image style={styles.image} source={require('../assets/Avatar.jpg')}/>
          <Text style={styles.headerText}>User</Text>
        </View>
        <View>
          <Text style={styles.reviewText}>{props.text}</Text>
        </View>
    </View>
  )
}

export default component

const styles = StyleSheet.create({
    background:{
        backgroundColor:'white',
        height:200,
        width:300,
        marginLeft:10,
        marginRight:10,
        borderRadius:10
    },
    image:{
        height:58,
        width:58,
        borderRadius:20
    },
    headerContainer:{
      flexDirection:'row',
      alignItems:'center'
    },
    headerText:{
      fontWeight:'bold',
      fontSize:20
    },
    reviewText:{
      fontSize:20,
      marginLeft:10
    }
})