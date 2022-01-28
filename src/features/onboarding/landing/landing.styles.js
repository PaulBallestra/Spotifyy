import React from 'react'
import {StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    main: {
        height,
        width,
        alignItems: 'center',
    },
    logo: {
        width: 44,
        height: 44,
        marginTop: height*0.40
    },
    sloganText: {
        marginTop: 10,
        color: 'white',
        fontSize: 33,
        textAlign: 'center',
        fontFamily: 'Signika-VariableFont_wght'
    },
    buttonConnect: {
        marginTop: 10,
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexDirection: 'row'
    },
    textButtonConnect: {
        color: 'white',
        fontFamily: 'Signika-VariableFont_wght',
        fontSize: 15
    }
});

export default styles;
