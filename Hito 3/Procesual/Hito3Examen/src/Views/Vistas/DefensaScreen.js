import React from 'react';
import { StyleSheet, View} from 'react-native';

import Constants from '../../Config/Constants';
import Images from '../../Config/Images';
import Colors from '../../Config/Colors';

import Onboarding from '../../Components/Onboarding/OnboardingFactory';
const FormScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Onboarding
            source={Images.FONDO2}
            Titulo={Constants.STRINGS.TITULO2}
            Contenido={Constants.STRINGS.CONTENIDO2}
            onPressPrev={()=>{navigation.navigate('ScreenPDM');}}
            onPressNext={()=>{navigation.navigate('ScreenFireBase');}}>
            </Onboarding>
        </View>
    );
};
export default FormScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Orange,
        flex: 1,
    },
});
