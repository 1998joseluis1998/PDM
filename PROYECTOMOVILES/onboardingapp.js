
import { YellowBox } from 'react-native';
import Onboarding from './index';
import Img from './images';
import React, {Component} from 'react';
import Constants from './src/Config/Constants';

YellowBox.ignoreWarnings(["Each child in a list"]);


const data = [
  {
    img:Img.IMG,
    titulo: Constants.STRING.TITULO4,
    descripcion:Constants.STRING.DESCRIPCION4,
  },
  {
    img:Img.IMG2,
    titulo: Constants.STRING.TITULOPDM,
    descripcion:Constants.STRING.DESCRIPCIONPDM,
  },
  {
    img:Img.IMG3,
    titulo: Constants.STRING.TITULOHITO4,
    descripcion:Constants.STRING.DESCRIPCIONHITO4,
  },


];
export default class App extends Component {
  constructor(props){
    super(props);
    this.onPressSkip = this.onPressSkip.bind(this);
  }
  onPressSkip(){
    this.props.navigation.navigate("Login")
  };
  render() {
    console.disableYellowBox = true
    return (
      <Onboarding data={data} onPressSkip={this.onPressSkip} />
    );
  }
}
