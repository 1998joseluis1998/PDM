import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../../Config/Colors';

const RegisterScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
      <Text style={styles.Text} category='h1'>My App</Text>
      <View>
        <Text style={styles.Text} category='h6'>Bienvenido</Text>
      </View>
    </View>
    )
}
export default RegisterScreen;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
      backgroundColor: Colors.black2,
  },
  Text:{
    color: 'white',
        fontWeight: 'bold',
  },
});
