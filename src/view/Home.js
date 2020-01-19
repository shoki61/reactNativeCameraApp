import React from "react";
import {View as Div, Text, TouchableOpacity,} from "react-native";
import { RNCamera } from 'react-native-camera';
import style from "../style/styles";

class Home extends React.Component{
    render(){
        return(
            <Div style={style.container}>
              <RNCamera style={style.camera}/>
            </Div>

        );
    }
}

export default Home;
