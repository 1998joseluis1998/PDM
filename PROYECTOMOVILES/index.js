import React from 'react';
import Onboarding from './Onboarding';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);



const index = ({data,onPressSkip}) => {
    return (
        <>
            <Onboarding data={data}  onPressSkip={onPressSkip} />
        </>
    );
}

export default index;
