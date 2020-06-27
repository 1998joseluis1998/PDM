import {Dimensions} from 'react-native';

const config = {
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,
  HEADER_HEIGHT: Dimensions.get('window').height - 46,
};

const strings = {
  NAME_APP: 'GooWia Solutions',
  PASSWORD: 'Password',
  USERNAME: 'Username',
  TITLE_BUTTON: 'LOG IN',
  REGISTER: 'Register',
  EMAIL: 'Email',
  EMAIL_ERROR: 'Email invalid!',
  PASSWORD_ERROR: 'Password invalid!',
  EMPTY_TITLE: 'Review Email/Password values',
  EMPTY_VALUES: 'Empty values detected',
  ADD_EMAIL: 'Enter Email',
  ADD_EMAIL_BUTTON: 'ADD',
  REVIEW_EMAIL: 'Please review email data',
  ENTER_EMAIL: 'Enter email value',
  REGISTER_FORM: 'REGISTER FORM',
  NETX: 'Next',
  PREV: 'Prev',
  WELCOME:'BIENVENIDO ADMINISTRADOR',
  //hito 4
  TITULO4:'Hito 5',
  DESCRIPCION4:'PROYECTO INTEGRADOR III',
  //PDM
  TITULOPDM:'SYSCOPY',
  DESCRIPCIONPDM:'Sistema de gestor de archivos',
  //Defensa 4
  TITULOHITO4:'DOCENTE',
  DESCRIPCIONHITO4:' William Barra                            Gestion: 2020',
  //Hito5
  CREARDOCENTE:'Crear Docente',
  CREARESTUDIANTE:'Crear Estudiante',
  CREARJEFE:'Crear Jefe de Carrera',
  //BOTONES
  DOCENTEBUTTON:'CREAR DOCENTE',
  ESTUDIANTEBUTTON:'CREAR ESTUDIANTE',
  JEFECARRERABUTTON:'CREAR JEFE CARRERA',

  //CREARPERSONAEJEMPLO
  NOMBREEJE:'Ejemplo: Jose Luis',
  CODIGOEJE:'Ejemplo: SIS13892306',
  CORREOEJE:'Ejemplo: user@gmail.com',
  CONTRAEJE:'Ejemplo: secreto:V',
  APELLIDOPATERNOEJE:'Ejemplo: Rodriguez',
  APELLIDOMATERNOEJE:'Ejemplo: Peredo',

  //CREARPERSONA
  NOMBRE:'Nombre',
  CODIGO:'Código',
  CORREO:'Correo Electrónico',
  CONTRA:'Contraseña',
  APELLIDOPATERNO:'Apellido Paterno',
  APELLIDOMATERNO:'Apellido Materno',


};

export default {
  CONFIG: config,
  STRING: strings,
};
