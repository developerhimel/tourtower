import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}>
      <Text style={styles.spacer}>SplashScreen</Text>
      <Animatable.View animation={'bounceInDown'} duration={1000}>
        <Icon.Button name="facebook" backgroundColor="#3b5998">
          Login with Facebook
        </Icon.Button>
      </Animatable.View>

      <Text style={styles.spacer}>SplashScreen</Text>
      <Animatable.View animation={'bounceIn'} duration={1000}>
        <Icon.Button name="google" backgroundColor="#a5a5a5">
          Login with Google
        </Icon.Button>
      </Animatable.View>

      <Text style={styles.spacer}>SplashScreen</Text>
      <Animatable.View animation={'bounceInUp'} duration={1000}>
        <Button mode="contained" onPress={() => auth().signOut()}>
          Logout
        </Button>
      </Animatable.View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  spacer: {
    color: '#ffffff',
  },
});
