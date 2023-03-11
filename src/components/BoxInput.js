import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {useController} from 'react-hook-form';
import fonts from '../utility/fonts';
import global from '../utility/global';
import colors from '../styles/colors';

export default function BoxInput({
  titleNo,
  title,
  hint,
  control,
  name,
  errors,
  rules = {},
  otherTextInputProps = {},
  style = {},
  textBoxStyle = {},
  requiredError = `Please enter ${title.toLowerCase()}`,
  validationError = `Please enter valid ${title.toLowerCase()}`,
  onChangeText = () => {},
  defaultValue='',
}) {
  const {field} = useController({
    control: control,
    name: name,
    rules: rules,
    defaultValue:defaultValue
  });

  return (
    <View style={[styles.conatiner, style]}>
      <View
        style={{
          marginStart: 16,
          flexDirection: 'row',
        }}>
        {titleNo && (
          <View
            style={{
              marginEnd: 11,
            }}>
            <Text style={styles.text}>
              {titleNo}
              {'.'}
            </Text>
          </View>
        )}

        <Text style={styles.text}>{title}</Text>
        {hint && <Text style={styles.hint}>{` (${hint})`}</Text>}
      </View>
      <View style={[styles.textInputBox,textBoxStyle]}>
        <TextInput
          style={styles.textInput}
          // onChangeText={field.onChange}
          value={field.value}
          {...otherTextInputProps}
          onChangeText={e => {
            field.onChange(e);
            onChangeText(e);
          }}
        />
        {errors[name]?.type === 'required' &&
          global.getValidateText(requiredError)}
        {errors[name]?.type === 'pattern' &&
          global.getValidateText(validationError)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    paddingTop: 9,
    paddingBottom: 21,
  },
  text: {
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '400',
    fontSize: fonts._13,
    color: colors.BLACK,
  },
  hint: {
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '400',
    fontSize: fonts._9,
    color: '#949494',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textBox: {
    marginStart: 24,
    marginEnd: 11,
  },
  textInputBox: {
    marginStart: 24,
    marginEnd: 22,
    marginTop: 10,
  },
  textInput: {
    fontSize: fonts._13,
    color: colors.BLACK,
    borderBottomColor: '#5B5B5B',
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
  },
});
