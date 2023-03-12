import React, {useEffect} from 'react';
import {LogBox, Platform, SafeAreaView, StatusBar, View} from 'react-native';
import {AlanView} from '@alan-ai/alan-sdk-react-native';

import SnackBar from '@prince8verma/react-native-snackbar';

import RootContainer from './src/screens/RootContainer';
import styles from './src/styles/styles';
import '@walletconnect/react-native-compat';

const showStatusBar = Platform.OS === 'ios' ? true : false;

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
    LogBox.ignoreLogs(['Warning: This synthetic']);
  }, []);

  return (
    <View style={styles.styleFull}>
      <SafeAreaView style={styles.styleFull}>
        {showStatusBar && <StatusBar barStyle={'dark-content'} />}

        <RootContainer />
        <AlanView
          projectid={
            'a04a541b0ab99fb328f5db1e1723d8fe2e956eca572e1d8b807a3e2338fdd0dc/stage'
          }
        />
      </SafeAreaView>

      <SnackBar id={'Root_App'} />
    </View>
  );
};

export default App;
