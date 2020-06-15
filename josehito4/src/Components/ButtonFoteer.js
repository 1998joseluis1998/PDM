import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from '../Config/Constants';


import ButtonNuevo from './ButtonNav';

const ButtonFoteer = ({ onPressPrev, onPressNext }) => {
    return (
        <View >
            <View style={styles.botonPrev}>
                <ButtonNuevo
                    onPress={onPressPrev}
                    Accion={Constants.STRINGS.PREV}></ButtonNuevo>
            </View>
            <View style={styles.botonNext}>
                <ButtonNuevo
                    onPress={onPressNext}
                    Accion={Constants.STRINGS.NETX}></ButtonNuevo>
            </View>
        </View>
    );
};

export default ButtonFoteer;

const styles = StyleSheet.create({
    botonNext: {
      alignItems: 'flex-end',
      marginRight: 10,
      marginTop: 50,
    },
    botonPrev: {
      alignItems: 'flex-start',
      position: 'absolute',
      marginLeft: 10,
      marginTop: 50,
    }
});
