import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import CommonInput from '../../components/CommonInput';
import PrimaryButton from '../../components/PrimaryButton';
import colors from '../../styles/colors';
import styles from '../../styles/styles';
import constants from '../../utility/constants';
import global from '../../utility/global';
import setOfStrings from '../../utility/screenStrings';

const apiKey = {
  USERTYPE: 'userType',
  USERNAME: 'username',
};

export default function ForgotPassword({navigation}) {
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

  const callApi = () => {
    global.showMessage(
      'success',
      'Password reset link has been sent to your email address.',
    );
    navigation.goBack();
  };

  return (
    <View style={[styles.styleFull]}>
      <ImageBackground
        source={require('../../assets/images/background_onboard.jpg')}
        style={styles.styleFull}>
        <View style={{height: '25%'}} />
        <View style={internalstyles.mainContainer}>
          <View style={internalstyles.center}>
            <View style={{width: '20%', alignItems: 'center'}}>
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
            <View style={{width: '65%', alignItems: 'flex-start'}}>
              <Text style={styles.titleOnBoard}>
                {setOfStrings.resetPassword}
              </Text>
            </View>
          </View>

          <View style={{paddingHorizontal: '5%'}}>
            <CommonInput
              name={apiKey.USERNAME}
              title={setOfStrings.username}
              starMark={true}
              control={control}
              errors={errors}
              rules={{
                required: true,
              }}
              otherTextInputProps={{
                editable: !isLoading,
                placeholder: `Enter ${constants.TXT_USERNAME}`,
              }}
              textBoxStyle={{backgroundColor: colors.BACKGROUND}}
              style={{
                marginTop: 26,
              }}
              requiredError={constants.ERROR_USERNAME}
            />
          </View>

          <View style={internalstyles.button}>
            <PrimaryButton
              title={setOfStrings.resetPassword}
              onPress={handleSubmit(callApi)}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const internalstyles = StyleSheet.create({
  center: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingBottom: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  button: {
    position: 'absolute',
    bottom: 41,
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
