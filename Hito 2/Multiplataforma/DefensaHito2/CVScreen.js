import React,{Component} from 'react';
import {StyleSheet,View, TextInput} from 'react-native';

import CVLogo from './CVLogo';
import CVCiudad from './CVCiudad';

import Colors from '../../src/Config/Colors';
import Constants from '../../src/Config/Constants';
import Button from '../Components/login/Button';

export default class CVScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      confCB:0,
      sospCB:0,

      confOR:0,
      sospOR:0,

      confSC:0,
      sospSC:0,

      search:''
    };

    this._onChangeTextSospCb=this._onChangeTextSospCb.bind(this);
    this._onChangeTextConfCb=this._onChangeTextConfCb.bind(this);

    this._onChangeTextSospSc=this._onChangeTextSospSc.bind(this);
    this._onChangeTextConfSc=this._onChangeTextConfSc.bind(this);

    this._onChangeTextSospOr=this._onChangeTextSospOr.bind(this);
    this._onChangeTextConfOr=this._onChangeTextConfOr.bind(this);

    this._onChangeTextInputSearch =this._onChangeTextInputSearch.bind(this);
    this._onPressCalcular=this._onPressCalcular.bind(this);
  }

  _onChangeTextConfCb(confCB){
    this.setState({
        confCB:confCB
      });
  }
  _onChangeTextSospCb(sospCB){
    this.setState({
      sospCB:sospCB

    });
  }

  _onChangeTextConfSc(confSC){
    this.setState({
        confSC:confSC

      });
  }
  _onChangeTextSospSc(sospSC){
    this.setState({
      sospSC:sospSC

    });
  }

  _onChangeTextConfOr(confOR){
    this.setState({
        confOR:confOR

      });
  }
  _onChangeTextSospOr(sospOR){
    this.setState({
      sospOR:sospOR

    });

  }

  _onChangeTextInputSearch(search){
    this.setState({
      search:search
    });
  }

  _onPressCalcular(){
    let n1CB, n2SC, n3OR, busqueda;

        if ( this.state.search === 'Conf'){
            n1CB= parseInt(this.state.confCB);
            n2SC= parseInt(this.state.confSC);
            n3OR= parseInt(this.state.confOR);


        }

        if (this.state.search === 'Sosp'){

            n1CB=parseInt(this.state.sospCB);
            n2SC= parseInt(this.state.sospSC);
            n3OR= parseInt(this.state.sospSC);
        }

        let mayor = Math.max(n1CB, n2SC, n3OR);


        console.log('boton calcular');
        console.log(this.state);
        console.log(mayor);
  }
render(){
    return(
        <View style={styles.container}>
          <CVLogo style={styles.logo}></CVLogo>
            <View>
              <CVCiudad
                Ciudad={Constants.CB}
                onChangeTextConf={this._onChangeTextConfCb}
                onChangeTextSosp={this._onChangeTextSospCb}>
              </CVCiudad>
              <CVCiudad
                Ciudad={Constants.SC}
                onChangeTextConf={this._onChangeTextConfSc}
                onChangeTextSosp={this._onChangeTextSospSc}>
              </CVCiudad>
              <CVCiudad
                Ciudad={Constants.OR}
                onChangeTextConf={this._onChangeTextConfOr}
                onChangeTextSosp={this._onChangeTextSospOr}>
              </CVCiudad>

            </View>
            <TextInput
            style={styles.textInput}
            onChangeText={this._onChangeTextInputSearch}
            selectionColor={Colors.blue}
            placeholder={Constants.INGRESE}
            secureTextEntry={false}
            autoCorrect={false}
            placeholderTextColor={Colors.silver}
            underlineColorAndroid="transparent">
            </TextInput>
            <Button
            style={styles.boton}
            onPress={this._onPressCalcular}
            titleButton={Constants.CALCULAR}>
            </Button>
        </View>



    );
  }
}


const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo:{
      flex: 1,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    text:{
      color:Colors.black,
      fontSize:20,
      fontWeight:'bold',
    },
    textInput:{
      backgroundColor:Colors.blue,
      borderColor:Colors.white,
      alignItems: 'center',
      height: 40,
      paddingLeft: 40,
      borderRadius: 15,
      color:Colors.black,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom: 15,
      marginLeft:50,
    },
    boton:{
      borderBottomWidth: StyleSheet.hairlineWidth,
      backgroundColor:Colors.blue,
      color:Colors.blue,
      borderRadius:15,
      borderColor:Colors.black
    },
});
