import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {useForm} from 'react-hook-form';
import global from '../../utility/global';
import fonts from '../../utility/fonts';
import colors from '../../styles/colors';
import CommonInput from '../../components/CommonInput';
import PrimaryButton from '../../components/PrimaryButton';
import constants from '../../utility/constants';
import styles from '../../styles/styles';

const apiKey = {
  USERTYPE: 'userType',
  USERNAME: 'username',
  NAME: 'name',
  LOCATION: 'location',
  PASSWORD: 'password',
  MOBILE_NUMBER: 'mobileNumber',
};

export default function Signup({navigation}) {
  const [isLoading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    // drawToolbar();
  }, []);

  const doNavigate = () => {
    navigation.navigate('ForgotPassword');
  };

  const callApi = data => {
    doNavigate();
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background_onboard.jpg')}
      style={styles.styleFull}>
      <View style={{height: '25%', justifyContent: 'center', paddingLeft: 30}}>
        <Text
          style={{
            fontFamily: fonts.FONT_FAMILY.Regular,
            fontSize: fonts._23,
            color: colors.WHITE,
          }}>
          Hello,
        </Text>
        <Text
          style={{
            fontFamily: fonts.FONT_FAMILY.Bold,
            fontSize: fonts._27,
            color: colors.WHITE,
          }}>
          Let’s get Started
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={internalstyles.mainContainer}>
          <View style={internalstyles.center}>
            <View style={{width: '25%', alignItems: 'center'}}>
              <TouchableHighlight
                style={[
                  internalstyles.btnBack,
                  {backgroundColor: colors.PRIMARY},
                ]}
                onPress={() => navigation.goBack()}
                underlayColor={colors.RIPPLE_EFFECT}>
                {global.drawIcon(
                  constants.IC_FEATHER,
                  'chevron-left',
                  20,
                  colors.WHITE,
                )}
              </TouchableHighlight>
            </View>
            <View
              style={{
                width: '65%',
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}>
              <Text
                style={[
                  styles.titleOnBoard,
                  {color: colors.BLACK, fontFamily: fonts.FONT_FAMILY.Regular},
                ]}>
                Start:{' '}
              </Text>
              <Text style={styles.titleOnBoard}>Sign Up</Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 22}}>
            <CommonInput
              name={apiKey.MOBILE_NUMBER}
              title={constants.TXT_MOBILE_NUMBER}
              starMark={true}
              control={control}
              errors={errors}
              rules={{
                required: true,
                pattern: global.getValidPhoneNumberRegex(),
              }}
              otherTextInputProps={{
                editable: !isLoading,
                placeholder: `Enter ${constants.TXT_MOBILE_NUMBER}`,
              }}
              textBoxStyle={{backgroundColor: colors.BACKGROUND}}
              style={{
                marginTop: 26,
              }}
              requiredError={constants.ERROR_MOBILE}
              validationError={constants.ERROR_MOBILEV}
            />
            <CommonInput
              name={apiKey.USERNAME}
              title={constants.TXT_USERNAME}
              starMark={true}
              control={control}
              errors={errors}
              rules={{
                required: true,
              }}
              textBoxStyle={{backgroundColor: colors.BACKGROUND}}
              otherTextInputProps={{
                editable: !isLoading,
                placeholder: `Enter ${constants.TXT_USERNAME}`,
              }}
              style={{
                marginTop: 26,
              }}
              requiredError={constants.ERROR_USERNAME}
            />

            <CommonInput
              name={apiKey.PASSWORD}
              title={constants.TXT_PASSWORD}
              starMark={true}
              control={control}
              errors={errors}
              rules={{
                required: true,
                pattern: global.getPasswordRegex(),
              }}
              textBoxStyle={{backgroundColor: colors.BACKGROUND}}
              secureTextEntry={true}
              otherTextInputProps={{
                editable: !isLoading,
              }}
              style={{
                marginTop: 26,
              }}
              requiredError={constants.ERROR_PASSWORD}
              validationError={constants.ERROR_PASSWORDV}
            />
            <CommonInput
              name={apiKey.NAME}
              title={constants.TXT_NAME}
              starMark={true}
              control={control}
              errors={errors}
              rules={{
                required: true,
              }}
              textBoxStyle={{backgroundColor: colors.BACKGROUND}}
              otherTextInputProps={{
                editable: !isLoading,
                placeholder: `Enter ${constants.TXT_NAME}`,
              }}
              style={{
                marginTop: 26,
              }}
              requiredError={constants.ERROR_NAME}
            />
            <CommonInput
              name={apiKey.LOCATION}
              title={constants.TXT_LOCATION}
              starMark={true}
              control={control}
              errors={errors}
              rules={{
                required: true,
              }}
              textBoxStyle={{backgroundColor: colors.BACKGROUND}}
              otherTextInputProps={{
                editable: !isLoading,
                placeholder: `Enter ${constants.TXT_LOCATION}`,
              }}
              style={{
                marginTop: 26,
              }}
              requiredError={constants.ERROR_LOCATION}
            />

          </View>
            <View style={internalstyles.buttonNext}>
              <PrimaryButton title="Next" onPress={handleSubmit(callApi)} />
            </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const internalstyles = StyleSheet.create({
  center: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingBottom: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  buttonNext: {
    marginTop: '10%',
    width: '100%',
  },
  btnBack: {
    height: 25,
    width: 25,
    marginRight: 10,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -15,
  },
});
