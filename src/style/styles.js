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
        width:90,
        height:90
    },
    iconsContainer:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        backgroundColor:'rgba(123, 15, 166,0.5)',
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
        marginTop:20,
        borderWidth:1,
        borderColor:'white'
    },  
    nullFoto:{
        width:60,
        height:60,
        marginTop:20
    }
})