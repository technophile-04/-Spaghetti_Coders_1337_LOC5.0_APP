import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useController} from 'react-hook-form';
import global from '../utility/global';
import colors from '../styles/colors';
import OtpInputs from 'react-native-otp-inputs';

export default function CustomOTPInput({
  control,
  name,
  errors,
  defaultValue = '',
  requiredError = `Please enter OTP`,
  validationError = 'OTP length should be 6 digits',
  onChangeText = () => {},
}) {
  const {field} = useController({
    control: control,
    name: name,
    rules: {
      required: true,
      pattern: global.getValidOTPRegex(),
    },
    defaultValue: defaultValue,
  });

  return (
    <View>
      <View
        style={{
          height: 50,
        }}>
        <OtpInputs
          handleChange={code => {
            field.onChange(code);
            onChangeText(code);
          }}
          numberOfInputs={6}
          inputStyles={internalstyles.inputStyle}
          inputContainerStyles={internalstyles.inputContainerStyle}
        />
      </View>

      {errors[name]?.type === 'required' &&
        global.getValidateText(requiredError)}
      {errors[name]?.type === 'pattern' &&
        global.getValidateText(validationError)}
    </View>
  );
}
const internalstyles = StyleSheet.create({
  inputStyle: {
    height: 50,
    width: 50,
    borderWidth: 0.5,
    borderColor: colors.GREY,
    backgroundColor: colors.GREY_LESS,
    borderRadius: 5,
    textAlign: 'center',
  },
  inputContainerStyle: {
    height: 50,
    width: 50,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: colors.GREY,
    backgroundColor: colors.GREY_LESS,
    borderRadius: 5,
    textAlign: 'center',
  },
});
