import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../Config/Colors';

import MyApp from '../Views/Register/Register';
import LoginScreen from '../Views/Login/LoginScreen';
import PdmScreen from '../Views/Vistas/PdmScreen';
import DefensaScreen from '../Views/Vistas/DefensaScreen';
import FirebaseScreen from '../Views/Vistas/FirebaseScreen';

const Stack = createStackNavigator();
function mainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ScreenPDM"
                    component={PdmScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ScreenDefensa"
                    component={DefensaScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ScreenFireBase"
                    component={FirebaseScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="LoginScre"
                    component={LoginScreen}
                    options={{
                        title: 'Login Form App',
                        headerStyle: {
                            backgroundColor: Colors.blue
                        },
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: Colors.white,
                        },
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={MyApp}
                    options={{
                        title: 'My App',
                        headerStyle: {
                            backgroundColor: Colors.black2
                        },
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: Colors.white,
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default mainNavigator;
