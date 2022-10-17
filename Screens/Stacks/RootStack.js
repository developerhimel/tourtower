import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../SplashScreen';
import Onboarding from '../../Components/Onboarding/Onboarding';
import LoginScreen from '../Auth/LoginScreen';
import RegisterScreen from '../Auth/RegisterScreen';

const RootStacks = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <RootStacks.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animation: 'flip',
        }}>
        <RootStacks.Screen name="Onboarding" component={Onboarding} />
        <RootStacks.Screen
          options={{
            animation: 'slide_from_right',
          }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <RootStacks.Screen name="LoginScreen" component={LoginScreen} />
        <RootStacks.Screen name="RegisterScreen" component={RegisterScreen} />
      </RootStacks.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
