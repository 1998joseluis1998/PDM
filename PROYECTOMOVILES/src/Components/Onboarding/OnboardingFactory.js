import React from 'react';
import { StyleSheet, View} from 'react-native';

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';

import Descrip from './Description';
import ButtonFoteer from './ButtonFoteer';


const FormScreen = ({
  onPressPrev,
  onPressNext,
  source,
  titulo,
  contenido,

 }) => {

    return (

        <View >

            <Descrip
              source={source}
              titulo={titulo}
              contenido={contenido}>
            </Descrip>
            <ButtonFoteer
              onPressPrev={onPressPrev}
              onPressNext={onPressNext}>
            </ButtonFoteer>

        </View>
    );

};

export default FormScreen;
