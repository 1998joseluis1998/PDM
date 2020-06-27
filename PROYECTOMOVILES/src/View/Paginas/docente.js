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
  const [correo, setcorreo] = useState('')
  const [contra, setcontra] = useState('')
  const [apepa, setapepa] = useState('')
  const [apema, setapema] = useState('')



  const _onPressRegister = () => {
   console.log(correo, contra);

    try {
      FirebasePlugin.auth()
        .createUserWithEmailAndPassword(correo, contra)
        .then((user) => {
          register()
        })
        .catch((error) => {
          Alert.alert('Invalid Values', error.message);
        });
    } catch (error) {
      Alert.alert('Invalid Values', error.message);
    }

  }
  const register = () => {

    firestore
    .collection('Docente')
    .doc()
    .set({
      nombre:nombre,
      codigo:codigo,
      correo:correo,
      contra:contra,
      apepa:apepa,
      apema:apema
    })
      .then(function () {
        Alert.alert('Docente Registrado Correctamete');
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
      });

  }

  return (
    <View style={stylesForm.container}>
      <ImageBackground
        source={Images.MENU2}
        style={stylesForm.imag}
        >
      </ImageBackground>
      <Text style={stylesForm.titulo}>{Constants.STRING.DOCENTEBUTTON}</Text>
      <View>
        <Text style={stylesForm.text}>{Constants.STRING.NOMBRE} </Text>
        <TextInputForm
          onChangeText={(nombre) => {
            setnombre(nombre);
          }}
          onEndEditing={() => {
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.NOMBREEJE}
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
          placeholder={Constants.STRING.CODIGOEJE}
          secureTextEntry={false}
          autoCorrect={false}>
        </TextInputForm>
      </View>
      <View>
        <Text style={stylesForm.text}> {Constants.STRING.CORREO} </Text>
        <TextInputForm
          onChangeText={(correo) => {
            setcorreo(correo);
          }}
          onEndEditing={() => {
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.CORREOEJE}
          secureTextEntry={true}
          autoCorrect={false}>
        </TextInputForm>
      </View>
      <View>
        <Text style={stylesForm.text}> {Constants.STRING.CONTRA} </Text>
        <TextInputForm
          onChangeText={(contra) => {
            setcontra(contra);
          }}
          onEndEditing={() => {
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.CONTRAEJE}
          secureTextEntry={false}
          autoCorrect={false}>
        </TextInputForm>
      </View>
      <View>
        <Text style={stylesForm.text}> {Constants.STRING.APELLIDOPATERNO} </Text>
        <TextInputForm
          onChangeText={(apepa) => {
            setapepa(apepa);
          }}
          onEndEditing={() => {
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.APELLIDOPATERNOEJE}
          secureTextEntry={false}
          autoCorrect={false}>
        </TextInputForm>
      </View>
      <View>
        <Text style={stylesForm.text}> {Constants.STRING.APELLIDOMATERNO} </Text>
        <TextInputForm
          onChangeText={(apema) => {
            setapema(apema);
          }}
          onEndEditing={() => {
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.APELLIDOMATERNOEJE}
          secureTextEntry={false}
          autoCorrect={false}>
        </TextInputForm>
      </View>
      <Button
        isLoading={false}
        onPress={_onPressRegister}
        titleButton={Constants.STRING.DOCENTEBUTTON}>
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
    backgroundColor: 'rgba(129,172,251,0.80)',
    flexDirection: "column"
  },
  text: {
    color: 'white',
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
  imag:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
