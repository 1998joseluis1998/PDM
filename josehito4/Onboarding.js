import React, { useState, useEffect } from 'react';
import VistaOnboard from './src/Components/OnboardingFactory';

const OnBoarding = ({ data, onPressSkip }) => {
  const [actual, setActual] = useState(0);
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    var arreglo = [];
    var aux = 0;
    data.forEach(e => {
      var informacion = e;
      informacion.id = aux;
      aux += 1;
      arreglo.push(informacion);
    });
    setDatos(arreglo);
  }, []);
  function recorrerPantallas(){
    datos.map(pantalla =>
        return cargarComponente(pantalla)
    )
  }
  function cargarComponente(pantalla){

      if(pantalla.id == actual)
      return (
        <VistaOnboard
          source={pantalla.img}
          titulo={pantalla.titulo}
          contenido={pantalla.descripcion}
          onPressPrev={(() => {
            if(pantalla.id==0){
              onPressSkip();
            }
            else if (pantalla.id > 0){
              setActual(pantalla.id - 1);
            }
            })}
          onPressNext={(() => {
            if (pantalla.id < datos.length - 1) {
              setActual(pantalla.id + 1);
            }
            else {
              onPressSkip()
            }
          })}
        />
      )
  }
  function generarOnboarding(){
    if(datos)
    {
      return (
        <>
          {
            recorrerPantallas()
          }
        </>
      )
    }
  }
  return (
    <>
      {generarOnboarding()}
    </>
  );
};

export default OnBoarding;
