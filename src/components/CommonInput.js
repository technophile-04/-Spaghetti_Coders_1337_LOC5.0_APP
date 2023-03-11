import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { useController } from 'react-hook-form';
import fonts from '../utility/fonts';
import Ripple from 'react-native-material-ripple';
import IONI from 'react-native-vector-icons/Ionicons';
import global from '../utility/global';
import colors from '../styles/colors';

export default function CommonInput({
  title,
  control,
  name,
  errors,
  rules = {},
  otherTextInputProps = {},
  style = {},
  textBoxStyle = {},
  secureTextEntry = false,
  starMark = false,
  requiredError = `Please enter ${title.toLowerCase()}`,
  validationError = `Please enter valid ${title.toLowerCase()}`,
  onChangeText = () => { },
  defaultValue = '',
  placeholder = `Enter ${title}`,
  iconType,
  iconName,
  onIconClick = () => { },
  iconColor,
}) {
  const [isHidePassword, setHidePassword] = useState(true);

  const { field } = useController({
    control: control,
    name: name,
    rules: rules,
    defaultValue: defaultValue
  });



  return (
    <View style={style}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={styles.text}>{title}</Text>

        {starMark && (
          <Text
            style={[
              styles.text,
              {
                paddingHorizontal: 3,
                color: colors.SECONDARY,
                opacity: 1,
              },
            ]}>
            *
          </Text>
        )}
      </View>

      <View style={[styles.boxView, textBoxStyle]}>
        <TextInput
          style={styles.textInput}
          // onChangeText={field.onChange}
          value={field.value}
          secureTextEntry={secureTextEntry ? isHidePassword : false}
          placeholder={placeholder}
          placeholderTextColor={colors.GREY}
          {...otherTextInputProps}
          onChangeText={e => {
            field.onChange(e);
            onChangeText(e);
          }}
        />

        {secureTextEntry && (
          <Ripple
            style={styles.ripple}
            onPress={() => {
              setHidePassword(!isHidePassword);
            }}>
            <IONI
              name={isHidePassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={colors.GREY}
            />
          </Ripple>
        )}

        {iconName && (
          <Ripple
            style={styles.ripple}
            onPress={onIconClick}>
            {global.drawIcon(iconType, iconName, 20,iconColor)}
          </Ripple>
        )}
      </View>

      {errors[name]?.type === 'required' &&
        global.getValidateText(requiredError)}
      {errors[name]?.type === 'pattern' &&
        global.getValidateText(validationError)}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '400',
    fontSize: fonts._10,
    color: colors.BLACK,
    opacity: 0.5,
  },
  boxView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    backgroundColor: colors.WHITE,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#B0B0B0',
    borderStyle: 'solid',
  },

  textInput: {
    marginStart: 10,
    flex: 1,
    fontSize: fonts._13,
    textAlignVertical: 'center',
    color: colors.BLACK,
  },
  ripple: {
    flex: 0.2,
    alignItems: 'center',
  },
});