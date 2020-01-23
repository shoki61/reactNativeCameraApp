import {StyleSheet} from "react-native";



export default StyleSheet.create({
    container: {
        flex: 1,
    },
    camera:{
        flex:1,
    },
    iconStyle:{
        width:45,
        height:45,
        marginTop:25
    },
    startIcon:{
        width:75,
        height:75
    },
    iconsContainer:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        backgroundColor:'rgba(123, 15, 166,0.5)',
        padding:15,
        borderTopEndRadius:150,
        borderTopStartRadius:150,
        width:'100%',
        justifyContent:'space-around'
    },
    flashContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    flashStyle:{
        width:50,
        height:50,
        margin:25  
    },
    cameraTypeIcon:{
        width:60,
        height:60,
        margin:20
    },
    lastFoto:{
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:'green',
        marginTop:10
    }  
})