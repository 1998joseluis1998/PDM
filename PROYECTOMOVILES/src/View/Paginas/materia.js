import React, { useState, setState } from "react";
import { View, Text, Alert, StyleSheet, ImageBackground } from 'react-native';


import FirebasePlugin, { firestore } from '../../Plugins/firebase/Firebase';

import TextInputForm from '../../Components/login/TextInput';
import EmailTextField from '../../Components/login/EmailTextField';
import Button from '../../Components/login/Button';
import Images from '../../Config/Images';
import Constants from '../../Config/Constants';

const Pruebas = () => {

  const [nombre, setnombre] = useState('')
  const [codigo, setcodigo] = useState('')



  const register = () => {

    firestore
    .collection('Materia')
    .doc()
    .set({
      nombre:nombre,
      codigo:codigo,

    })
      .then(function () {
        Alert.alert('Materia Registrada Correctamente');
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
      });

  }

  return (
    <View style={stylesForm.container}>
      <Text style={stylesForm.titulo}>{Constants.STRING.MATERIABUTTON}</Text>
      <View>
        <Text style={stylesForm.text}>{Constants.STRING.NOMBREMATERIA} </Text>
        <TextInputForm
          onChangeText={(nombre) => {
            setnombre(nombre);
          }}
          onEndEditing={() => {
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.NOMBREMATERIAEJE}
          secureTextEntry={false}
          autoCorrect={false}>
        </TextInputForm>
      </View>
      <View>
        <Text style={stylesForm.text}> {Constants.STRING.CODIGO} </Text>
        <TextInputForm
          onChangeText={(codigo) => {
            setcodigo(codigo);
          }}
          onEndEditing={() => {
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.CODIGOMATERIAEJE}
          secureTextEntry={false}
          autoCorrect={false}>
        </TextInputForm>
      </View>
      <Button
        isLoading={false}
        onPress={register}
        titleButton={Constants.STRING.MATERIABUTTON}>
      </Button>

    </View>
  );
}

export default Pruebas;
const stylesForm = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgba(234,118,56,0.80)'
  },
  text: {
    color: 'white',
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginTop: 50,
  },
});
