import React from 'react';
import {StyleSheet,View,Text}from 'react-native';
import PropTypes from 'prop-types';
import CVCasos from './CVCasos';
import Colors from '../../src/Config/Colors';
import Constants from '../../src/Config/Constants';

const CVCiudad = (props) =>{
  const {Ciudad, onChangeTextConf, onChangeTextSosp} = props;

  return(
    <View>
        <Text style={styles.text}>{Ciudad}</Text>
        <CVCasos
            onChangeText={onChangeTextConf}
            placeholder={Constants.NCASOS}
            autoCorrect={false}
            secureTextEntry={false}
            typeCase={Constants.CONFIRMADOS}>
        </CVCasos>
        <CVCasos
            onChangeText={onChangeTextSosp}
            placeholder={Constants.NCASOS}
            autoCorrect={false}
            secureTextEntry={false}
            typeCase={Constants.SOSPECHOSOS}>
        </CVCasos>
    </View>

  );
}


const styles = StyleSheet.create({
  text:{
    marginLeft:50,
    marginBottom:10,
    color:Colors.white,
    backgroundColor:'transparent',
  },


});


export default CVCiudad;
