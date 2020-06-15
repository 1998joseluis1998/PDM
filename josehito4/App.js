
import { YellowBox } from 'react-native';
import Onboarding from './index';
import Img from './images';
import React, {Component} from 'react';
import Constants from './src/Config/Constants';

YellowBox.ignoreWarnings(["Each child in a list"]);


const onPressSkip = () => {
  console.log("Skip");
};
const data = [
  {
    img:Img.IMG,
    titulo:Constants.STRINGS.TITULO4,
    descripcion:Constants.STRINGS.DESCRIPCION4,
  },
  {
    img:Img.IMG2,
    titulo: Constants.STRINGS.TITULOPDM,
    descripcion:Constants.STRINGS.DESCRIPCIONPDM,

  },
  {
    img:Img.IMG3,
    titulo: Constants.STRINGS.TITULOHITO4,
    descripcion:Constants.STRINGS.DESCRIPCIONHITO4,
  },

];
export default class App extends Component {
  render() {
    return (
      <Onboarding data={data} onPressSkip={onPressSkip} />
    );
  }
}
