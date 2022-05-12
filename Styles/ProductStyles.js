import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        top: 50,
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
        width:'100%',
            
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