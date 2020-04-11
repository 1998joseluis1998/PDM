import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';

import ButtonLogin from './Components/login/Button';
import TextInputLogin from './Components/login/TextInput';
import LogoLogin from './Components/login/Logo';

import imgUsername from '../../images/username.png';
import imgPassword from '../../images/pass.png';

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';

export default class cvcasos extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
                    <TextInputLogin
                        onChangeText={this._onChangeTextUsername}
                        source={imgUsername}
                        placeholder={"Confirmados"}
                        secureTextEntry={false}
                        autoCorrect={false}>
                    </TextInputLogin>

                    <Text >Casos sospechosos</Text>

                      <TextInputLogin
                        onChangeText={this._onChangeTextPassword}
                        source={imgPassword}
                        placeholder={"sospechosos"}
                        secureTextEntry={true}
                        autoCorrect={false}>
                    </TextInputLogin>

                    <ButtonLogin
                        onPress={this._onPress}
                        titleButton={Constants.TITLE_BUTTON}>
                    </ButtonLogin>
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
    },
});
