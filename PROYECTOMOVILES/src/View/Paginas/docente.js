import React, { Component } from "react";
import { View,  Text, Alert,StyleSheet,ImageBackground } from 'react-native';

//import firebase
import FirebasePlugin, {firestore} from '../../Plugins/firebase/Firebase';
//
import TextInputForm from '../../Components/login/TextInput';
import EmailTextField from '../../Components/login/EmailTextField';
import Button from '../../Components/login/Button';
import Images from '../../Config/Images';
import Constants from '../../Config/Constants';

export default class Pruebas extends Component {
constructor(props){
  super(props);
  this.state = {
    nombre:'',
    codigo:'',
    correo:'',
    contra:'',
    apepa:'',
    apema:''
  };
// Para actualizar this.setState( {atributo: "valor"} )
}
  render()
  {
    return (
      <View style={stylesForm.container}>
        <Text style={stylesForm.titulo}>{Constants.STRING.DOCENTEBUTTON}</Text>
        <View>
          <Text style={stylesForm.text}>{Constants.STRING.NOMBRE} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({nombre:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.NOMBREEJE}
          secureTextEntry={true}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <View>
          <Text style={stylesForm.text}> {Constants.STRING.CODIGO} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({codigo:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.CODIGOEJE}
          secureTextEntry={true}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <View>
          <Text style={stylesForm.text}> {Constants.STRING.CORREO} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({correo:texto});
          }}
          onEndEditing={()=>{
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
          onChangeText={(texto)=>{
            this.setState({contra:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.CONTRAEJE}
          secureTextEntry={true}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <View>
          <Text style={stylesForm.text}> {Constants.STRING.APELLIDOPATERNO} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({apepa:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.APELLIDOPATERNOEJE}
          secureTextEntry={true}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <View>
          <Text style={stylesForm.text}> {Constants.STRING.APELLIDOMATERNO} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({apepa:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.APELLIDOMATERNOEJE}
          secureTextEntry={true}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <Button
        isLoading={false}
        onPress={() => {
          console.log("--------------------", this.state);

          const docentefire = firestore
            .collection('Docente').doc();

          docentefire.set(this.state)
            .then(function () {
              Alert.alert('USER ID creado:', docentefire.id);
            })
            .catch(function (error) {
              Alert.alert('Error al crear', error.message);
            });

        }}
        titleButton={Constants.STRING.DOCENTEBUTTON}>
        </Button>

      </View>
    );
  }
}

const stylesForm = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgba(129,172,251,0.80)',
  },
  text:{
    color:'white',
  },
  titulo:{
    fontSize:20,
    textAlign:'center',
    color:'white',
    marginTop:20,
  },
});
