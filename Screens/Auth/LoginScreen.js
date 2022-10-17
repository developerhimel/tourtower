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
import {ActivityIndicator, Snackbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');
  const [processing, setProcessing] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    setProcessing(true);
    if (email === '') {
      setProcessing(false);
      setSnackbarText('Email address field cannot be empty.');
      setSnackbar(true);
    } else if (password === '') {
      setProcessing(false);
      setSnackbarText('Password field cannot be empty.');
      setSnackbar(true);
    } else if (email !== '' && password !== '') {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
          console.log(data.user.email);
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            setProcessing(false);
            setSnackbarText('Invalid email address.');
            setSnackbar(true);
          } else if (error.code === 'auth/user-disabled') {
            setProcessing(false);
            setSnackbarText('User disabled.');
            setSnackbar(true);
          } else if (error.code === 'auth/user-not-found') {
            setProcessing(false);
            setSnackbarText('User not found.');
            setSnackbar(true);
          } else if (error.code === 'auth/wrong-password') {
            setProcessing(false);
            setSnackbarText('Wrong password. Try again.');
            setSnackbar(true);
          }
        });
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 0.5}} />
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
                Sign In To Continue
              </Animatable.Text>
            </View>
            <View style={{paddingHorizontal: 30}}>
              <Animatable.View
                animation={'fadeInUp'}
                duration={1000}
                delay={100}>
                <TextInput
                  placeholder="Email Address"
                  keyboardType="email-address"
                  autoComplete="email"
                  autoCorrect={false}
                  onChangeText={val => setEmail(val)}
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
                delay={200}>
                <TextInput
                  placeholder="Password"
                  keyboardType="default"
                  secureTextEntry={true}
                  autoComplete="password"
                  autoCorrect={false}
                  onChangeText={val => setPassword(val)}
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
                delay={300}>
                <TouchableOpacity
                  disabled={processing}
                  onPress={() => handleSignIn()}
                  style={styles.signinBtn}>
                  <LinearGradient
                    colors={
                      processing
                        ? ['#e0e0e0', '#d1d1d1', '#adadad']
                        : ['#a5a6f6', '#8687f3', '#5d5fef']
                    }
                    style={styles.linearGradient}>
                    <View style={styles.signinBtnWrapper}>
                      {processing ? (
                        <ActivityIndicator size={20} color="#5d5fef" />
                      ) : null}
                      <Text style={styles.buttonText}>
                        {processing ? 'Processing' : 'Sign In'}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </Animatable.View>
              <Animatable.View
                animation={'fadeInUp'}
                duration={1000}
                delay={400}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    auth().sendPasswordResetEmail(
                      'programmer.himelroy@gmail.com',
                    );
                  }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      letterSpacing: 0.5,
                      color: '#8687f3',
                    }}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            </View>
          </View>
          <Animatable.View
            animation={'rubberBand'}
            duration={1000}
            delay={500}
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
                Don't have any account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Text
                  style={{
                    fontWeight: '800',
                    color: '#8687f3',
                    fontSize: 13,
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
        <Snackbar
          visible={snackbar}
          onDismiss={() => setSnackbar(false)}
          duration={5000}
          style={{backgroundColor: '#5d5fef', borderRadius: 5}}
          action={{
            label: 'Ok',
            onPress: () => setSnackbar(false),
          }}>
          {snackbarText}
        </Snackbar>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

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
  signinBtnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
