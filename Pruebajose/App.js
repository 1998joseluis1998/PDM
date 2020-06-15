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
