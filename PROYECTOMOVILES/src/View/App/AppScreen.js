import React, {useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';

import ButtonIcon from '../../Components/ButtonIcon';
import FirebasePlugin from '../../Plugins/firebase/Firebase';

import ButtonNuevo from '../../Components/Onboarding/ButtonNav';
import Colors from '../../Config/Colors';
import Images from '../../Config/Images';
import Constants from '../../Config/Constants';

const AppScreen = ({navigation}) => {
  const onPressSetting = () => {
    navigation.navigate('Setting');
  };

  const onPressLogout = () => {
    try {
      FirebasePlugin.auth().signOut()
        .then(() => {
            Alert.alert('Logout App', 'Successfully Logout', [{
              text: 'Login App', onPress: () => {navigation.navigate('Login')}
            }]);
        });
    } catch (e) {
      Alert.alert('Contact admin', e.message);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ButtonIcon imageSrc={Images.SETTING} onPressButton={onPressSetting}/>
      ),
      headerRight: () => (
        <ButtonIcon imageSrc={Images.LOGOUT} onPressButton={onPressLogout}/>
      ),
    });
  });

  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>{Constants.STRING.WELCOME}</Text>
    <Text style={styles.text}> Desliza la pantalla del lado izquierdo</Text>
    <Text style={styles.textt}> al lado derecho para empezar con la creación del personal</Text>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(94,56,234,0.80)',
    alignItems: 'center',
  },
  text:{
    marginTop:150,
    color:'white',
    fontSize:15,
    textAlign:'center',
  },
  textt:{
    color:'white',
    fontSize:15,
    textAlign:'center',
  },
  titulo:{
    fontSize:20,
    textAlign:'center',
    color:'white',
    marginTop:100,
  },
});

export default AppScreen;
