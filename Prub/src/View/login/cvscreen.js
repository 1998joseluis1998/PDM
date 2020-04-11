import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ButtonLogin from '../../Components/login/Button';
import TextInputLogin from '../../Components/login/TextInput';
import LogoLogin from '../../Components/login/Logo';

import imgUsername from '../../images/username.png';
import imgPassword from '../../images/pass.png';

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';
import Ciudad from'./cvciudad';



export default class Screen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cochaconfi:'',
            cochasosp:'',
            sacruconfi:'',
            sacrusosp:'',
            oruroconfi:'',
            orurososp:'',

            confi:'',
            sospe:''
        };

        this._onPress = this._onPress.bind(this);
        this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
        this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
    }
    _onPress() {
      const cochac=this.state.cochaconfi;
      const cochas=this.state.cochasosp;
        console.log('button preset..!!!');
        console.log(this.state.username);
        console.log(this.state.password);
    }
    _onChangeTextUsername(username) {
        this.setState({
          username: username
        });
    }
    _onChangeTextPassword(password) {
        this.setState({
          password: password
        });
    }
_onChangeTextBusqueda(comparar){
  this.setState({
    comparar:comparar
  })
}
    render() {
        return (
          <View style={stylesLoginScreen.container}>
          <LogoLogin style={stylesLoginScreen.logo} />
            <Ciudad>

            </Ciudad>
            <TextInputLogin
                onChangeText={this._onChangeTextBusqueda}
                source={imgPassword}
                placeholder={Constants.INGRESE}
                secureTextEntry={true}
                autoCorrect={false}>
            </TextInputLogin>
            <ButtonLogin
                onPress={this._onPress}
                titleButton={Constants.CALCULAR}>
            </ButtonLogin>
          </View>
        );
    }
}

const stylesLoginScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
    },
});
