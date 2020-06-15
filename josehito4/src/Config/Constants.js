import {Dimensions} from 'react-native';

const config = {
    SCREEN_HEIGHT: Dimensions.get('window').height,
    SCREEN_WIDTH: Dimensions.get('window').width,
    HEADER_HEIGHT: Dimensions.get('window').height - 45
}

const strings = {
    NETX: 'Next',
    PREV: 'Prev',

  //hito 4
  TITULO4:'Hito 4',
  DESCRIPCION4:'Jose Luis Rodriguez Peredo',

  //PDM
  TITULOPDM:'PDM',
  DESCRIPCIONPDM:'Creacion React Native Package and Firebase (Authentication and Firestore)',

  //Defensa 4
  TITULOHITO4:'DEFENSA HITO 4',
  DESCRIPCIONHITO4:'Univ: William Barra                            Gestion: 2020',



}

export default {
    CONFIG: config,
    STRINGS: strings
}
