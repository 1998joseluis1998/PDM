import React from 'react';
import {TouchableWithoutFeedback,Keyboard} from 'react-native';

const DismissKeyboard = ({children}) =>{
  return(
    <TouchableWithoutFeedback on Press={()=>Keyboard.dismiss()}>
    {children}
    </TouchableWithoutFeedback>
  );
}

export default DismissKeyboard;
