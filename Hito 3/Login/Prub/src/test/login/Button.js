import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,TouchableOpacity} from 'react-native';
import Constants from './Constants';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class Boton extends Component{
  constructor(props){
    super(props);
    this._onPress=this._onPress.bind(this);

  }

  _onPress(){
    const uno=this.props.un;
    console.log('Numero 1:',this.props.un);
    const dos=this.props.dos;
    console.log('Numero 2:',this.props.dos);
    const Respuesta=uno+dos;
    console.log('Respuesta:',Respuesta);
  }


  render(){
    return(
      <View>
        <TouchableOpacity
          style={stylesButton.button}
          onPress={this._onPress}
        >
          <Text
            style={stylesButton.text}>{Constants.TITLE_BUTTON}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const stylesButton = StyleSheet.create({
  container: {
    flex: 1,
    top: -95,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5e9',
    height: Constants.DEFAULT_MARGIN_BUTTON,
    borderRadius: 20,
    zIndex: 100,
    padding: 30,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  circle: {
    height: Constants.DEFAULT_MARGIN_BUTTON,
    width: Constants.DEFAULT_MARGIN_BUTTON,
    marginTop: -Constants.DEFAULT_MARGIN_BUTTON,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',

  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
});
