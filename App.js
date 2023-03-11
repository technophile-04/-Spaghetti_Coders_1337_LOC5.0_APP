
import React, { useEffect } from 'react';
import {
  LogBox,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import SnackBar from '@prince8verma/react-native-snackbar';

import RootContainer from './src/screens/RootContainer';
import styles from './src/styles/styles';
const showStatusBar = Platform.OS === 'ios' ? true : false;

const App = () => {
  

  useEffect(() => {
    LogBox.ignoreAllLogs();
    LogBox.ignoreLogs(["Warning: This synthetic"]);
  }, []);

  return (
    <View
    style={styles.styleFull}
    >

      <SafeAreaView style={styles.styleFull} >

        {
          showStatusBar &&
          <StatusBar barStyle={"dark-content"} />
        }

        <RootContainer />

      </SafeAreaView>


      <SnackBar id={"Root_App"} />

    </View>
  );
};


export default App;
