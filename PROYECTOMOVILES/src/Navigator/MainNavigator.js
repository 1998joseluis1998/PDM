import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Onboarding from '../../onboardingapp';

//paginas
import Docente from '../View/Paginas/docente';
import Estudiante from '../View/Paginas/estudiante';
import Jefecarrera from '../View/Paginas/jefecarrera';
import Materia from '../View/Paginas/materia';
import VDocente from '../View/Paginas/vdocente';
import VEstudiante from '../View/Paginas/vestudiante';
import VJefecarrera from '../View/Paginas/vjefecarrera';

import LoginScreen from '../View/login/LoginScreen';
import RegisterScreen from '../View/register/Register';
import AppScreen from '../View/App/AppScreen';
import SettingScreen from '../View/Setting/SettingScreen';
import SplashScreen from '../View/Splash/SplashScreen';

import Colors from '../Config/Colors';

const Stack = createStackNavigator();
const StackScreen = ({ route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{ route }}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register Form',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='App'
        component={AppScreen}
        options={{
          title: 'App Main',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
            fontSize: 25,
          },
        }}
      />

      <Drawer.Screen
        name="Docente"
        component={Docente}
        options={{title: 'Crear Docente'}}
      />

      <Drawer.Screen
        name="Estudiante"
        component={Estudiante}
        options={{title: 'Crear Estudiante'}}
      />

      <Drawer.Screen
        name="Jefe de Carrera"
        component={Jefecarrera}
        options={{title: 'Crear Jefe de Carrera'}}
      />

      <Drawer.Screen
        name="Materia"
        component={Materia}
        options={{title: 'Crear Materia'}}
      />

      <Drawer.Screen
        name="VDocente"
        component={VDocente}
        options={{title: 'Ver Docente'}}
      />

      <Drawer.Screen
        name="VEstudiante"
        component={VEstudiante}
        options={{title: 'Ver Estudiante'}}
      />

      <Drawer.Screen
        name="VJefecarrera"
        component={VJefecarrera}
        options={{title: 'Ver Jefe de Carrera'}}
      />

    </Drawer.Navigator>
  );
};

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <MainStack.Navigator headerMode="none">
      {isLoading ? (
        <MainStack.Screen name="Loading" component={SplashScreen} />
      ) : isLogged ? (
          <MainStack.Screen name="DrawerNavigation" component={DrawerScreen} />
        )
        : (
          <MainStack.Screen name="LoginRegister" component={StackScreen} initialParams={{ setIsLogged }}/>
        )
      }
    </MainStack.Navigator>
  );
};

const mainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
};

export default mainNavigator;
