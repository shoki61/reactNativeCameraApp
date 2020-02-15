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
        bottom:20,
        top:35
    },
    startIcon:{
        width:100,
        height:100
    },
    iconsContainer:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        padding:10,
        borderTopEndRadius:130,
        borderTopStartRadius:130,
        width:'100%',
        justifyContent:'space-around'
    },
    flashContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    flashStyle:{
        width:40,
        height:40,
        margin:25  
    },
    cameraTypeIcon:{
        width:50,
        height:50,
        margin:20
    },
    lastFoto:{
        width:60,
        height:60,
        borderRadius:100,
        marginTop:25,
        borderWidth:1,
        borderColor:'white'
    },  
    nullFoto:{
        width:60,
        height:60,
        marginTop:40
    }
});
