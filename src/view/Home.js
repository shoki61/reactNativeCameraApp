import React from "react";
import {View, Text, TouchableOpacity,} from "react-native";
import { RNCamera } from 'react-native-camera';
import style from "../style/styles";

class Home extends React.Component{
    render(){
        return(
            <View style={style.container}>
               <RNCamera
                  style={style.camera}
               />

               <View style={style.subContainer}>
                   
                   <View style={style.textContainer}>
                       <Text style={[style.subText,style.subTextActive]}>Fotograf</Text>
                       <Text style={[style.subText]}>Video</Text>
                   </View>

                   <View style={style.buttonContainer}>
                       <TouchableOpacity style={style.button} activeOpacity={0.6} onPress={()=>this.mainOnpress()}></TouchableOpacity>
                   </View>

                   <View style={style.RightPhotoContainer}></View>

                   <View style={style.subLeftCameraIconContainer}>
                       <TouchableOpacity onPress={()=>this.changeCameraType()}>
                           <Image source={require('../images/refresh.png')} style={style.subRightCameraIcon}/>
                       </TouchableOpacity>
                   </View>


               </View>

            </View>
        );
    }
}

export default Home;
