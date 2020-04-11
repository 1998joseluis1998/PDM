import React, { Component } from 'react';
import { StyleSheet,Text,View } from 'react-native';

import ButtonLogin from '../../Components/login/Button';
import TextInputLogin from '../../Components/login/TextInput';
import LogoLogin from '../../Components/login/Logo';

import imgUsername from '../../images/username.png';
import imgPassword from '../../images/pass.png';

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';

export default class Casos extends Component {
    constructor(props) {
        super(props);

        this.state = {

            confirm:'',
            sospe:''
        };

        this._onPress = this._onPress.bind(this);
        this._onChangeTextConfirmados = this._onChangeTextConfirmados.bind(this);
        this._onChangeTextSospechosos= this._onChangeTextSospechosos.bind(this);
    }
    _onPress() {
        console.log('button preset..!!!');
        console.log(this.state.confirm);
        console.log(this.state.sospe);
    }
    _onChangeTextConfirmados(confirm) {
        this.setState({
          confirm:confirm
        });
    }
    _onChangeTextSospechosos(sospe) {
        this.setState({
          sospe:sospe
        });
    }

    render() {
        return (
            <View style={stylesLoginScreen.container}>

                <View style={stylesLoginScreen.form}>
                    <Text >Casos Confirmados</Text>
                    <TextInputLogin
                        onChangeText={this._onChangeTextConfirmados}
                        source={imgUsername}
                        placeholder={Constants.NCASOS}
                        secureTextEntry={false}
                        autoCorrect={false}>
                    </TextInputLogin>
                    <Text >Casos Sospechosos</Text>

                    <TextInputLogin
                        onChangeText={this._onChangeTextSospechosos}
                        source={imgPassword}
                        placeholder={Constants.NCASOS}
                        secureTextEntry={true}
                        autoCorrect={false}>
                    </TextInputLogin>
                </View>

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
        alignItems:'center'
    },

});
