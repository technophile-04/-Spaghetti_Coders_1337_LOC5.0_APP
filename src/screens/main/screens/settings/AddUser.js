import React, {useState, useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import CommonInput from '../../../../components/CommonInput';
import global from '../../../../utility/global';
import {useForm} from 'react-hook-form';
import Ripple from 'react-native-material-ripple';
import styles from '../../../../styles/styles';
import constants from '../../../../utility/constants';
import colors from '../../../../styles/colors';
import Header from '../../../../components/Header';
import PrimaryButton from '../../../../components/PrimaryButton';

export default function AddUser({navigation}) {
  const apiKey = {
    NAME: 'name',
    EMAIL: 'email',
    ADDRESS: 'address',
  };
  const [isLoading, setLoading] = useState(false);
  // accept params from ChooseLanguage.js
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    drawToolbar();
  }, []);

  const drawToolbar = () => {
    navigation.setOptions({
      header: () => <Header title="Add User" navigation={navigation} />,
    });
  };

  const onSubmit = data => {
    global.showMessage('User Added Successfully', false);
  };

  return (
    <View style={[styles.styleFull]}>
      <View style={{height: '25%'}}>
        <Image
          source={require('../../../../assets/images/logo_onboard.png')}
          style={internalstyles.image}
          resizeMode="contain"
        />
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={internalstyles.mainContainer}>
          <View style={internalstyles.centerLogin}>
            <Text style={styles.titleOnBoard}>Add Your Partner</Text>
          </View>
          <View style={{paddingHorizontal: 22}}>
            <CommonInput
              name={apiKey.NAME}
              title="Name"
              starMark={true}
              control={control}
              errors={errors}
              rules={{
                required: true,
              }}
              textBoxStyle={{backgroundColor: colors.BACKGROUND}}
              otherTextInputProps={{
                editable: !isLoading,
                placeholder: `abcd123`,
              }}
              style={{
                marginTop: 26,
              }}
              requiredError={constants.ERROR_USERNAME}
            />

            <CommonInput
              name={apiKey.EMAIL}
              title="Email"
              starMark={true}
              control={control}
              errors={errors}
              rules={{
                required: true,
                pattern: global.getValidEmailIDRegex(),
              }}
              otherTextInputProps={{
                editable: !isLoading,
              }}
              textBoxStyle={{backgroundColor: colors.BACKGROUND}}
              style={{
                marginTop: 26,
              }}
            />
            <CommonInput
              name={apiKey.ADDRESS}
              title="Address"
              starMark={true}
              control={control}
              errors={errors}
              rules={{
                required: true,
              }}
              otherTextInputProps={{
                editable: !isLoading,
              }}
              textBoxStyle={{backgroundColor: colors.BACKGROUND}}
              style={{
                marginTop: 26,
              }}
            />
          </View>
          <PrimaryButton
            title="Add User"
            onPress={handleSubmit(onSubmit)}
            style={{
              marginTop: 26,
            }}
          />
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
