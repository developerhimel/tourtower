import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './../HomeScreen';

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
        <MainStacks.Screen
          options={{
            animation: 'slide_from_right',
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
      </MainStacks.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
