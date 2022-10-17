import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const LoadScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SplashScreen');
    }, 1500);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} color="#5d5fef" />
    </View>
  );
};

export default LoadScreen;
