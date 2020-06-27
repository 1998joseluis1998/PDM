import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native'
import { size } from 'lodash'
import FirebasePlugin, { firestore } from '../../Plugins/firebase/Firebase';
import Color from '../../Config/Colors'
import Colors from '../../Config/Colors';
export default function pruebita() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const aux = [];
    firestore.collection('Docente').get().then((res) => {
      res.forEach(element => {
        aux.push(element.data())
        setInfo(aux);
      });
    })
  }, [])
  console.log(info);



  return (

    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.head}>Docentes Registrados</Text>
      </View>
      {size(info)>0?(
        <FlatList
        data={info}
        renderItem={(informacion) => <Tarjeta informacion={informacion} />}
        keyExtractor={(item, index) => index.toString()}
      />
      ):(
        <Text>No hay nada</Text>
      )}
    </View>
  );
}

function Tarjeta(props) {
  const { informacion } = props;
  const { apema, apepa, codigo, contra, correo, nombre } = informacion.item;


  return (
    <>
      <View style={styles.contenedorimg}>
        <View style={styles.card}>

          <View style={styles.descripcion}>
            <Text
              style={styles.texto1}
            >
              Nombre Completo: {nombre} {apepa} {apema}
            </Text>
            <Text
              style={styles.texto2}
            >
              Código: {codigo}
            </Text>
            <Text
              style={styles.texto2}
            >
              Correo: {correo}
            </Text>
            <Text
              style={styles.texto2}
            >
              Contrasenia: {contra}
            </Text>
          </View>
        </View>
      </View>
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.blue,
  },
  title: {
    flex: 1,
    alignSelf: 'center',
    paddingVertical: 50,
    color:'white',
  },
  head:{
    fontSize:25,
    fontWeight:'bold',
    color:'white',
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  contenedorimg: {
    flex: 4,
    paddingTop: 10
  },
  card: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '90%',
    height: 170,
    backgroundColor: '#fff',
    borderWidth: 0.1,
    paddingHorizontal: 20,
    borderRadius: 20,

  },
  imageBackground: {
    borderColor: 'white',
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  descripcion: {
    paddingHorizontal: '7%',
    justifyContent: 'center',
    width: '90%'

  },
  texto1: {
    fontWeight: 'bold',
    fontSize: 17
  },
  texto2: {
    color: '#888888',
    fontSize: 15
  },
  boton: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: '5%',
    marginRight: '15%'
  },
  icono: {
    backgroundColor: '#1196BA',
    width: 70,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noData: {
    paddingVertical: '60%',
    paddingHorizontal: '10%'
  },
  textoSinDatos: {
    textAlign: 'center',
    fontSize: 30,
    color: '#d8d8d8',
  },
  boton2: {
    backgroundColor: '#1196BA',
    paddingVertical: '5%',
    marginVertical: '3%',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,
    marginHorizontal: '30%'
  },
  textoBoton: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center'
  },
});
