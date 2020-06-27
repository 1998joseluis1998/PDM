import React, { useState, useEffect } from 'react';
import VistaOnboard from './src/Components/Onboarding/OnboardingFactory';

const OnBoarding = ({ data, onPressSkip }) => {
  const [actual, setActual] = useState(0);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const array = [];
    let aux = 0;
    data.forEach(e => {
      // console.log(e)
      const core = e;
      core.id = aux;
      aux = aux + 1;
      array.push(core);
    });
    setInfo(array);

  }, []);


  return (
    <>
      {info ? (
        <>
          {info.map(e => (
            <>

              {e.id == actual ? (

                <VistaOnboard
                  source={e.img}
                  titulo={e.titulo}
                  contenido={e.descripcion}
                  onPressPrev={(() => {
                    if(e.id==0){
                      onPressSkip();

                    }
                    else if (e.id > 0){
                      setActual(e.id - 1);
                    }


                    })}

                  onPressNext={(() => {
                    if (e.id < info.length - 1) {
                      setActual(e.id + 1);
                    }
                    else {
                      onPressSkip()
                    }
                  })}
                />

              ) : null}
            </>
          ))}
        </>
      ) : null}
    </>

  );
};

export default OnBoarding;
