import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../Config/Colors';


const Descrip = ({ source, titulo, contenido }) => {
    return (
        <View >
            <View style={styles.ContainerImage}>
                <Image source={source} style={styles.Imagen} />
            </View>
            <View style={styles.container}>
                <Text style={styles.TextTitulo} category='h1'>{titulo}</Text>

                <Text style={styles.TextContenido} category='h6'>{contenido}</Text>
            </View>
        </View>
    );
}

export default Descrip;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    ContainerImage: {
      marginTop: -140,
      marginLeft: 60,
    },
    Imagen: {
      width: 500,
      height: 600,
    },
    TextTitulo: {
      color: 'black',
      fontWeight: 'bold',
      backgroundColor: 'transparent',
      fontSize: 34,
      marginBottom:8,
    },
    TextContenido:{
      color: 'black',
      width:'80%',
      backgroundColor: 'transparent',
      fontSize: 18,
      marginBottom:8,
      textAlign: 'center',
    },

});
