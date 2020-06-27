import React, { Component } from "react";
import { View,  Text, Alert,StyleSheet } from 'react-native';

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
    respu:''
  };
// Para actualizar this.setState( {atributo: "valor"} )
}
  render()
  {
    let resp;
    return (
      <View style={stylesForm.container}>
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

        <Button
        isLoading={false}
        onPress={() => {

          const docentefire = firestore
            .collection('Docente').doc(this.state.nombre);

            docentefire.get().then(function (doc) {

            console.log("Document data:", doc.data().nombre);

            this.setState({respu:doc.data().nombre})
            })

            .catch(function (error) {
              console.log("Document error data:", doc.data());
            });
        }}

        titleButton={Constants.STRING.JEFECARRERABUTTON}>
        </Button>

        <Text
        value={this.state.resp}
        style={stylesForm.text}
        >
        holiwis
        </Text>

      </View>
    );
  }
}

const stylesForm = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000'
  },
  text:{
    color:'white',
    fontSize:20,
  },

});
