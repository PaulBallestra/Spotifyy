import React from 'react';
import {
    View,
    ImageBackground,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window');

class App extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('./src/assets/bg.jpeg')}
                style={styles.main}
            >

                <Image
                    source={require('./src/assets/logo.png')}
                    style={styles.logo}
                />

                <Text style={styles.sloganText}>
                    Des millions de titres.{'\n'}Gratuits sur Spotify.
                </Text>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.textButtonRegister}> S'inscrire gratuitement </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSocial}>
                    <Image
                        source={require('./src/assets/google.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.textSocialButton}> Continuer avec Google </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSocial}>
                    <Image
                        source={require('./src/assets/facebook.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.textSocialButton}> Continuer avec Facebook </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonConnect}>
                    <Text style={styles.textButtonConnect}> Se Connecter </Text>
                </TouchableOpacity>

            </ImageBackground>
        );

    }
}

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

export default App;
