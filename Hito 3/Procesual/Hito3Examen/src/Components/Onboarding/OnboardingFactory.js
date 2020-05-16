import React from 'react';
import { StyleSheet, View} from 'react-native';

import Constants from '../../Config/Constants';
import Images from '../../Config/Images';
import Colors from '../../Config/Colors';

import Descrip from './Description';
import ButtonFoteer from './ButtonFoteer';


const FormScreen = ({ onPressPrev,onPressNext, source, Titulo, Contenido }) => {

    return (

        <View >
            <Descrip
              source={source}
              Titulo={Titulo}
              Contenido={Contenido}>
            </Descrip>
            <ButtonFoteer
              onPressPrev={onPressPrev}
              onPressNext={onPressNext}>
            </ButtonFoteer>
        </View>
    );

};

export default FormScreen;
