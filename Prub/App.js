

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import LoginScreen from'./src/View/login/LoginScreen';
import Casos from'./src/View/login/cvcasos';
import Ciudad from'./src/View/login/cvciudad';
import Screen from'./src/View/login/cvscreen';

const App: () => React$Node = () => {
  return (
    <Screen></Screen>

  );
};

export default App;
