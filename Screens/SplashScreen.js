import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>SplashScreen</Text>
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        Login with Facebook
      </Icon.Button>
      <Text>SplashScreen</Text>
      <Animatable.View animation={'zoomIn'} duration={1000}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}>
          Login
        </Button>
      </Animatable.View>
      <Text>SplashScreen</Text>
      <Animatable.View animation={'zoomIn'} duration={1000}>
        <Button mode="contained" onPress={() => auth().signOut()}>
          Logout
        </Button>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
