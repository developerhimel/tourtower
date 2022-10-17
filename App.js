import {StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Provider as PaperProvider} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import RootStack from './Screens/Stacks/RootStack';
import MainStack from './Screens/Stacks/MainStack';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return <ActivityIndicator size={'large'} />;
  return (
    <PaperProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      {/* <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      /> */}
      {!user ? <RootStack /> : <MainStack />}
    </PaperProvider>
  );
};

export default App;
