import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from '../features/onboarding/landing/landing.screen';
import StackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';

const Stack = createNativeStackNavigator();

const rootContainer = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Landing"
                    component={Landing}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default rootContainer;
