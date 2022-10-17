import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../SplashScreen';
import LoadScreen from '../LoadScreen';

const MainStacks = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <MainStacks.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animation: 'flip',
        }}>
        <MainStacks.Screen name="LoadScreen" component={LoadScreen} />
        <MainStacks.Screen
          options={{
            animation: 'slide_from_right',
          }}
          name="SplashScreen"
          component={SplashScreen}
        />
      </MainStacks.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
