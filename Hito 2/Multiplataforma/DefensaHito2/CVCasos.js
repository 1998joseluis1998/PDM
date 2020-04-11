import React from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../src/Config/Colors';

const CVCasos=(props)=>{

  const {typeCase,secureTextEntry,placeholder,onChangeText,autoCorrect} = props;

  return(
    <View style={styles.container}>
      <Text style={styles.text}>{typeCase}</Text>
      <TextInput
      style={styles.textInput}
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCorrect={autoCorrect}
      secureTextEntry={secureTextEntry}
      selectionColor={Colors.blue}
      placeholderTextColor={Colors.white}
      underlineColorAndroid="transparent">
      </TextInput>
    </View>
  );
}


  CVCasos.propTypes = {
  onChangeText:PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
};


const styles = StyleSheet.create({
  textInput: {
    backgroundColor:Colors.blue,
    alignItems: 'center',
    height: 40,
    borderColor: Colors.silver,
    paddingLeft: 40,
    borderRadius: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 15,
    marginLeft:50,
    //marginHorizontal:140,
    //width:160
  },
  container:{
    backgroundColor:'black'
  },
  text: {
    position: 'absolute',
    color:Colors.white,
    backgroundColor:'transparent',
    zIndex: 99,
    width: 100,
    height: 100,
    left: -40,
    top: 0,
  },
});

export default CVCasos;
