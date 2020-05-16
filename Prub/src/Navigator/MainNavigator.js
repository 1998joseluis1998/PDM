import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigatior} from '@react-navigation/stack';

import LoginScreen from '../View/login/LoginScreen';


const Stack = createStackNavigatior();

function mainNavigator(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headweShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default mainNavigator;
