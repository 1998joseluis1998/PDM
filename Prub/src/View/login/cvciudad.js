import React, { Component } from 'react';
import { StyleSheet,Text,View } from 'react-native';

import ButtonLogin from '../../Components/login/Button';
import TextInputLogin from '../../Components/login/TextInput';
import LogoLogin from '../../Components/login/Logo';

import imgUsername from '../../images/username.png';
import imgPassword from '../../images/pass.png';

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';
import Casos from'./cvcasos';

export default class Ciudad extends Component {
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
            <Text> Cochabamba</Text>
              <Casos style={stylesLoginScreen.form}></Casos>
              <Text> Santa Cruz</Text>
                <Casos></Casos>
                <Text> Oruro</Text>
                  <Casos></Casos>
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
