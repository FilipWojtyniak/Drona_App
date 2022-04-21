import { StyleSheet } from "react-native" ;

 const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    header:{
    width:'100%',
    height: 65,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    },
    logo:{
      flexDirection: 'row',
      alignItems:'flex-start',
      top:4,
      left:11
    },
    buttonsContainer:{
      flexDirection: 'row',
      justifyContent:'space-between',
      flex: 0.6,
      left: 80,
      top:14,
    },
    textContainer:{
      alignItems:'center',
      height:'100%',
      top: Platform.OS === 'ios' ? 180 : 150, 
    },
    text:{
      color:'#AD4473',
      fontSize: 36,
      fontStyle: 'italic',
      fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'serif',
      textShadowColor: '#696969',
      textShadowOffset: { width:2 ,height:2 },
      textShadowRadius: 6,
    },
    textContainer_2:{
      height: '100%',
      alignItems:'center',
      top: 40
    },
    text_2:{
      fontSize: 20,
      height: 33
    },
    buyButtonContainer:{
      position:'absolute',
      top: Platform.OS === 'ios' ? 700 : 600,
      left: 30,
      
    },
    buyButton:{
      backgroundColor: 'rgba(41, 130, 146, 1)',
      alignItems: 'center',
      justifyContent:'center',
      height: 60,
      width:140,
      borderRadius: 10
    },
    learnButtonContainer:{
      position:'absolute',
      top: Platform.OS === 'ios' ? 700 : 600,
      right: 30,
    },
    learnButton:{
      alignItems: 'center',
      justifyContent:'center',
      height:60,
      width:140,
      borderRadius: 10,
      borderColor: 'rgba(41, 130, 146, 1)',
      borderWidth: 3,
    },
    learnText:{
      color: 'rgba(41, 130, 146, 1)',
      fontSize: 20,
      fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'serif',
    },
    buyText:{
      color: '#FFF',
      fontSize: 20,
      fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'serif',
    }
  });

  export { styles }