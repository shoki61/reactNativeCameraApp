import {StyleSheet, Dimensions} from "react-native";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default StyleSheet.create({
    container:{
        flex:1
    },
    camera:{
        width:w,
        height:h,
        position:'absolute'
    }
})