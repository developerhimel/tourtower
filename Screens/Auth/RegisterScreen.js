import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {Snackbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [fullnamefocus, setFullnamefocus] = useState(false);
  const [emailfocus, setEmailfocus] = useState(false);
  const [phonenofocus, setPhonenofocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(
        'programmer.himelroy@gmail.com',
        'Ssshhh555%',
      )
      .then(data => {
        console.log(data.user.uid);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
      });
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 0.3}} />
        <View style={{flex: 2, justifyContent: 'space-between'}}>
          <View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Animatable.Image
                animation={'bounceIn'}
                duration={1000}
                source={require('../../assets/logo.png')}
              />
              <Animatable.Text
                animation={'fadeInUp'}
                duration={1000}
                style={styles.titleText}>
                Create New Account
              </Animatable.Text>
            </View>
            <View style={{paddingHorizontal: 30}}>
              <Animatable.View
                animation={'fadeInUp'}
                duration={1000}
                delay={100}>
                <TextInput
                  placeholder="Full Name"
                  keyboardType="default"
                  autoComplete="name"
                  autoCorrect={false}
                  onFocus={() => setFullnamefocus(true)}
                  onBlur={() => setFullnamefocus(false)}
                  style={{
                    backgroundColor: '#F6F7F9',
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    borderRadius: 20,
                    borderColor: fullnamefocus ? '#a3a4f8' : '#F6F7F9',
                    borderWidth: 1,
                    shadowColor: fullnamefocus ? '#5d5fef' : '#ffffff',
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                    marginVertical: 5,
                    fontWeight: 'bold',
                  }}
                />
              </Animatable.View>
              <Animatable.View
                animation={'fadeInUp'}
                duration={1000}
                delay={200}>
                <TextInput
                  placeholder="Email Address"
                  keyboardType="email-address"
                  autoComplete="email"
                  autoCorrect={false}
                  onFocus={() => setEmailfocus(true)}
                  onBlur={() => setEmailfocus(false)}
                  style={{
                    backgroundColor: '#F6F7F9',
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    borderRadius: 20,
                    borderColor: emailfocus ? '#a3a4f8' : '#F6F7F9',
                    borderWidth: 1,
                    shadowColor: emailfocus ? '#5d5fef' : '#ffffff',
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                    marginVertical: 5,
                    fontWeight: 'bold',
                  }}
                />
              </Animatable.View>
              <Animatable.View
                animation={'fadeInUp'}
                duration={1000}
                delay={300}>
                <TextInput
                  placeholder="+880 ---- ---- --"
                  keyboardType="number-pad"
                  maxLength={11}
                  autoCorrect={false}
                  onFocus={() => setPhonenofocus(true)}
                  onBlur={() => setPhonenofocus(false)}
                  style={{
                    backgroundColor: '#F6F7F9',
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    borderRadius: 20,
                    borderColor: phonenofocus ? '#a3a4f8' : '#F6F7F9',
                    borderWidth: 1,
                    shadowColor: phonenofocus ? '#5d5fef' : '#ffffff',
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                    marginVertical: 5,
                    fontWeight: 'bold',
                  }}
                />
              </Animatable.View>
              <Animatable.View
                animation={'fadeInUp'}
                duration={1000}
                delay={400}>
                <TextInput
                  placeholder="Password"
                  keyboardType="default"
                  secureTextEntry={true}
                  autoComplete="password"
                  autoCorrect={false}
                  onFocus={() => setPasswordfocus(true)}
                  onBlur={() => setPasswordfocus(false)}
                  style={{
                    backgroundColor: '#F6F7F9',
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    borderRadius: 20,
                    borderColor: passwordfocus ? '#a3a4f8' : '#F6F7F9',
                    borderWidth: 1,
                    shadowColor: passwordfocus ? '#5d5fef' : '#ffffff',
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                    marginVertical: 5,
                    fontWeight: 'bold',
                  }}
                />
              </Animatable.View>
              <Animatable.View
                animation={'fadeInUp'}
                duration={1000}
                delay={500}>
                <TouchableOpacity
                  onPress={() => handleSignUp()}
                  style={styles.signinBtn}>
                  <LinearGradient
                    colors={['#a5a6f6', '#8687f3', '#5d5fef']}
                    style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </Animatable.View>
            </View>
          </View>
          <Animatable.View
            animation={'rubberBand'}
            duration={1000}
            delay={600}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontWeight: '600',
                  marginRight: 5,
                  fontSize: 13,
                }}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text
                  style={{
                    fontWeight: '800',
                    color: '#8687f3',
                    fontSize: 13,
                  }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
        <Snackbar
          visible={snackbar}
          onDismiss={() => setSnackbar(false)}
          duration={3000}
          style={{backgroundColor: '#ff3c3c', borderRadius: 5}}
          action={{
            label: 'Okay',
            onPress: () => {
              // Do something
            },
          }}>
          Failed | Wrong credentials. Try again
        </Snackbar>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  titleText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#222222',
    marginVertical: 20,
    letterSpacing: 0.1,
  },
  linearGradient: {
    borderRadius: 50,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  signinBtn: {
    marginVertical: 30,
    backgroundColor: '#ffffff',
    shadowColor: '#5d5fef',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 50,
  },
});
