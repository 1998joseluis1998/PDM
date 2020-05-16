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
            source={Images.FONDO1}
            Titulo={Constants.STRINGS.TITULO1}
            Contenido={Constants.STRINGS.CONTENIDO1}
            onPressNext={()=>{navigation.navigate('ScreenDefensa');}}>
            </Onboarding>
        </View>
    );
};
export default FormScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.appPrimary,
        flex: 1,
    },
});
