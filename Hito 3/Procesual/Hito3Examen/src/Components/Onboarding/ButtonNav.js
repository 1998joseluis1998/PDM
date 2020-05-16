import React from 'react';
import { StyleSheet, View, TouchableOpacity,Text } from 'react-native';
import Colors from '../../Config/Colors';

const ButtonNuevo = ({Accion,onPress}) => {
  return (
    <View style={styles.container} level='1'>

      <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text
          style={styles.text}>{Accion}
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default ButtonNuevo;

const styles = StyleSheet.create({
  container: {
    width: 130,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.white,
  },text: {
    color: Colors.white,
    textAlign: 'center',
    fontSize:16,
    fontWeight: 'bold',
},

});
