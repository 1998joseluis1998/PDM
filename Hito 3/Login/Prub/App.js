

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

const App: () => React$Node = () => {
  return (
    <LoginScreen></LoginScreen>

  );
};

export default App;
