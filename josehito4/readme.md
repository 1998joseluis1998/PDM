#Titulo del Proyecto

Onboarding Pumita

## Instalación

Para instalar el paquete realizar el siguiente comando:

```
npm i josehito
```

### Prerequisitos

Necesita tener ultima version de npm para eso ejecutar el siguiente comando:

```
npm install npm@latest -g
```

### Ejemplo de uso

Primero importamos Onboarding del package josehito

```
import Onboarding from 'josehito';
```

Para realizar el envio de datos que te pide el package
se realiza de la siguiente forma:

```
const App: () => React$Node = () => {
  return (
    <>
      <Onboarding data={datos}></Onboarding>
    </>
  );
};

export default App;

```

Los datos se mandan de la siguiente forma:

Primero creamos un archivo js con el nombre de :images.js
obteniendo las rutas de las imagenes que tenemos en la carpeta Img

```
export default{
    IMG:require('./images/img1.png'),
    IMG2:require('./images/img2.png'),
    IMG3:require('./images/img3.png'),
}
```

Luego se importan las constants para los textos
Y seguidamente se importa los Img para las imagenes de las páginas

```
import Constants from './constants';
import Img from './images';

let data = [
  {
    img:Img.IMG,
    titulo:Constants.STRINGS.TITULO4,
    descripcion:Constants.STRINGS.DESCRIPCION4,
  },
  {
    img:Img.IMG2,
    titulo: Constants.STRINGS.TITULOPDM,
    descripcion:Constants.STRINGS.DESCRIPCIONPDM,
  },
  {
    img:Img.IMG3,
    titulo: Constants.STRINGS.TITULOHITO4,
    descripcion:Constants.STRINGS.DESCRIPCIONHITO4,
  },
];

```
El anterior paso genera los datos a mostrar seguidamente pasamos a importar este archivo
al archivo App

```
import datos from './datos';

```

Obteniendo el siguiente resultado

```
import React from 'react';
import Onboarding from 'josehito';

import datos from './datos';


const App: () => React$Node = () => {
  return (
    <>
      <Onboarding data={datos}></Onboarding>
    </>
  );
};

export default App;
```

## Autor

Jose Luis Rodriguez Peredo (Puma)

## Proyecto de ejemplo

Puede pasar a ver de mejor forma el uso del package con el siguiente link

[Example](https://github.com/1998joseluis1998/PDM/tree/master/Pruebajose)
