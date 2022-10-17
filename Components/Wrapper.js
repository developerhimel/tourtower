import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import React from 'react';

const Wrapper = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={'height'}
      keyboardVerticalOffset={30}
      style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Wrapper;
