import React, {PureComponent} from "react";
import { AppRegistry, View, Image,Text, TouchableOpacity,} from "react-native";
import { RNCamera } from 'react-native-camera';
import styles from "../style/styles";


class Home extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            selectType: false,
            type: 'back',
            play: true,
            flash:'auto',
            lastFoto: null,
        };
    }
    changeSelectType = () => {
      this.setState({
        selectType: !this.state.selectType
      })
    }
    changePlay = () => {
      this.setState({
        play: !this.state.play
      })
    }
    changeFlashState = (v) => {
        if(v === 'auto'){
          this.setState({flash:v})
        }
        if(v === 'on'){
          this.setState({flash:v})
        }
        else{
          this.setState({flash:v})
        } 
    }
    changeCameraType = () => {
      if(this.state.type === 'back'){
        this.setState({type:'front'})
      }
      if(this.state.type === 'front'){
      this.setState({type:'back'})
      }
    }
  
    render() {
      return (
        <View style={styles.container}>
          <RNCamera
            ref={ref => (this.camera = ref)}
            style={styles.camera}
            flashMode={this.state.flash}
            type={this.state.type}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            <View style={styles.flashContainer}>
              <TouchableOpacity onPress={()=>this.changeCameraType()}><Image style={styles.cameraTypeIcon} source={require('../images/cameraTypeIcon.png')}/></TouchableOpacity>
              {this.state.flash === 'auto' && <TouchableOpacity  onPress={()=>this.changeFlashState('on')}><Image style={styles.flashStyle} source={require('../images/flashAutoIcon.png')}/></TouchableOpacity>}
              {this.state.flash === 'on' && <TouchableOpacity onPress={()=>this.changeFlashState('off')}><Image style={styles.flashStyle} source={require('../images/flashOnIcon.png')}/></TouchableOpacity>}
              {this.state.flash === 'off' && <TouchableOpacity onPress={()=>this.changeFlashState('auto')}><Image style={styles.flashStyle} source={require('../images/flashOffIcon.png')}/></TouchableOpacity>}
            </View>

            <View style={styles.iconsContainer}>
                <View>
                  <Image style={styles.lastFoto} />
                </View>
                <View>
                  <TouchableOpacity>
                    {this.state.selectType == false && <Image style={styles.startIcon} source={require('../images/cameraButtonIcon.png')}/>}
                  </TouchableOpacity>

                  <View>
                    {this.state.selectType == true && 
                      <View>
                        {this.state.play == true && 
                          <TouchableOpacity onPress={this.changePlay}><Image style={styles.startIcon} source={require('../images/playIcon.png')}/></TouchableOpacity>
                        }
                        {this.state.play == false && 
                          <TouchableOpacity onPress={this.changePlay}><Image style={styles.startIcon} source={require('../images/stopIcon.png')}/></TouchableOpacity>
                        }
                      </View>
                    }
                  </View>
                </View>
                <TouchableOpacity onPress={this.changeSelectType}>
                  {this.state.selectType == true && <Image style={styles.iconStyle} source={require('../images/cameraIcon.png')}/>}
                  {this.state.selectType == false && <Image style={styles.iconStyle} source={require('../images/videoIcon.png')}/>}
                </TouchableOpacity>
            </View>
        
          </RNCamera>
        </View>
      );
    }
  
}
  
  AppRegistry.registerComponent('Home', () => ExampleApp);
export default Home;
