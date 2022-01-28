import * as React from 'react'
import {Dimensions, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const LandingSocialButton = ({
    type='facebook'
}) => {

    const socialName = type === 'facebook' ? 'Facebook' : 'Google';
    const socialLogo = type === 'facebook' ? require('../../../assets/facebook.png') : require('../../../assets/google.png')

    return (
        <TouchableOpacity style={styles.buttonSocial}>
            <Image
                source={socialLogo}
                style={styles.icon}
            />
            <Text style={styles.textSocialButton}> Continuer avec {socialName} </Text>
        </TouchableOpacity>
    )
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    buttonSocial: {
        marginTop: 10,
        backgroundColor: 'black',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row'
    },
    icon: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 15
    },
    textSocialButton: {
        color: 'white',
        fontFamily: 'Signika-VariableFont_wght',
        fontSize: 15
    },

});

export default LandingSocialButton;
