import React from 'react';
import {
    ImageBackground,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import styles from './landing.styles'

import LandingButton from '../components/landing-button'
import LandingSocialButton from '../components/landing-social-button'

class Landing extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/bg.jpeg')}
                style={styles.main}
            >

                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}
                />

                <Text style={styles.sloganText}>
                    Des millions de titres.{'\n'}Gratuits sur Spotify.
                </Text>

                <LandingButton/>

                <LandingSocialButton type={"google"}/>

                <LandingSocialButton type={"facebook"}/>

                <TouchableOpacity style={styles.buttonConnect}>
                    <Text style={styles.textButtonConnect}> Se Connecter </Text>
                </TouchableOpacity>

            </ImageBackground>
        );
    }
}

export default Landing;
