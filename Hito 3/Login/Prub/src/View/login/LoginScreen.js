import React, { Component } from 'react';
import { StyleSheet, View,SafeAreaView,KeyboardAvoidingView } from 'react-native';

import Boton from '../../Components/login/Button';
import TextInputLogin from '../../Components/login/TextInput';
import LogoLogin from '../../Components/login/Logo';
import EmailTextField from '../../Components/login/EmailTextField';
import DismissKeyboard from '../../Components/login/DismissKeyboard';


import Images from '../../Config/Images';
import Utils from '../../Utils/utils';

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            password:''
        };

        this._onPress = this._onPress.bind(this);
        this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
        this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
    }
    _onPress() {
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

    _validateEmailAddress(email){
      //Utils.isValidEmail(email);
    }
    _onChangeTextEmail(){
      //onChangeTextEmail
    }
    render() {
        return (
          <DismissKeyboard>
            <KeyboardAvoidingView style={stylesLoginScreen.container} behavior="padding"enabled>
              <View style={stylesLoginScreen.container}>
                <SafeAreaView>
                  <LogoLogin style={stylesLoginScreen.logo} />
                  <View style={stylesLoginScreen.form}>

                    <EmailTextField
                      onChangeText={this.onChangeTextEmail}
                      onEndEditing={this._validateEmailAddress}
                      placeholder={Constants.STRING.EMAIL}
                      secureTextEntry={false}
                      autoCorrect={false}>
                    </EmailTextField>
                    <TextInputLogin
                      onChangeText={this._onChangeTextUsername}
                      source={Images.USERNAME}
                      placeholder={Constants.STRING.USERNAME}
                      secureTextEntry={false}
                      autoCorrect={false}>
                    </TextInputLogin>
                    <Boton
                      onPress={this._onPress}
                      titleButton={Constants.TITLE_BUTTON}>
                    </Boton>
                  </View>
                </SafeAreaView>
              </View>
            </KeyboardAvoidingView>
          </DismissKeyboard>
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
