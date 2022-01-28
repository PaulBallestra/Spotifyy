import * as React from 'react'
import {Dimensions, Text, TouchableOpacity, StyleSheet} from 'react-native';

const LandingButton = () => {
    return (
        <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.textButtonRegister}> S'inscrire gratuitement </Text>
        </TouchableOpacity>
    )
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    buttonRegister: {
        marginTop: 25,
        backgroundColor: '#2CF262',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 20
    },
    textButtonRegister: {
        color: 'black',
        fontFamily: 'Signika-VariableFont_wght',
        fontSize: 15
    },

});

export default LandingButton;
