import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,TouchableOpacity} from 'react-native';

import Colors from '../../Config/Colors';

export default class Boton extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <TouchableOpacity
          style={stylesButton.boton}
          onPress={this.props.onPress}>
        <Text
          style={stylesButton.text}>{this.props.titleButton}
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const stylesButton = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.7)',
    marginTop:-50,
  },
  text: {
    color: Colors.black,
    textAlign: 'center',
    height: 20,
  },
  boton:{
      backgroundColor: Colors.white,
      color: Colors.dark,
      borderRadius: 5,
      borderColor: 'rgba(255,255,255,0.7)',
  },
});
