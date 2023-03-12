import React, {useEffect, useState} from 'react';

import {View, Text, StyleSheet, Image, ScrollView, Linking} from 'react-native';
import Ripple from 'react-native-material-ripple';
import SplashScreen from 'react-native-splash-screen';
import CommonInput from '../../components/CommonInput';
import PrimaryButton from '../../components/PrimaryButton';
import styles from '../../styles/styles';
import constants from '../../utility/constants';
import {useForm} from 'react-hook-form';
import global from '../../utility/global';
import fonts from '../../utility/fonts';
import colors from '../../styles/colors';
import setOfStrings from '../../utility/screenStrings'

const apiKey = {
  USERTYPE: 'userType',
  USERNAME: 'username',
  PASSWORD: 'password',
};

export default function Login({route,navigation}) {
  const [isLoading, setLoading] = useState(false);
  // accept params from ChooseLanguage.js
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const doLogin = data => {
    global.showMessage('Login Successfully', false);
    global.storeItem(constants.USER_DATA, data);
    setLoading(true);

    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'MainStack'}],
      });
    }, 1000);
  };

  const changeStack = () => {
    
    global.storeItem(constants.USER_DATA, "null");
    Linking.openURL('https://metamask.app.link/dapp/walletconnect.org');
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'MainStack'}],
      });
    }, 1000);
  };

  return (
    <View style={[styles.styleFull]}>
      <View style={{height: '25%'}}>
        <Image
          source={require('../../assets/images/logo_onboard.png')}
          style={internalstyles.image}
          resizeMode="contain"
        />
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={internalstyles.mainContainer}>
          <View style={internalstyles.centerLogin}>
            <Text style={styles.titleOnBoard}>{setOfStrings.login}</Text>
          </View>
          <View style={internalstyles.buttonLogin}>
            <PrimaryButton onPress={changeStack} title={setOfStrings.login} />
          </View>
        </View>
      </ScrollView>
      {isLoading && global.getLoader()}
    </View>
  );
}

const internalstyles = StyleSheet.create({
  image: {
    width: 200,
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingBottom: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  centerLogin: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  forgotPassword: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  forgotPasswordText: {
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '200',
    fontSize: fonts._10,
    color: colors.PRIMARY,
  },
  notSignedUp: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  notSignedUpText: {
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '400',
    fontSize: fonts._12,
    color: colors.BLACK,
  },
  signUpText: {
    fontFamily: fonts.FONT_FAMILY.SemiBold,
    fontWeight: '600',
    fontSize: fonts._11,
    color: colors.PRIMARY,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  buttonLogin: {
    marginTop: '27%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
