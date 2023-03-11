import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import global from '../utility/global';
import fonts from '../utility/fonts';
import colors from '../styles/colors';
import {Dropdown} from 'react-native-element-dropdown';
import styles from '../styles/styles';
import {useController} from 'react-hook-form';

export default function CommonDropdown({
  data,
  onChange = () => {},
  title,
  starMark,
  style,
  control,
  name,
  errors,
  disabled,
  requiredError = `Please select ${title.toLowerCase()}`,
  rules = {},
  placeholder = `Select ${title}`,
  defaultValue = '',
}) {
  const {field} = useController({
    control: control,
    name: name,
    rules: rules,
    defaultValue: defaultValue,
  });

  return (
    <View style={style}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={internalStyles.text}>{title}</Text>

        {starMark && (
          <Text
            style={[
              internalStyles.text,
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
      <View style={[internalStyles.boxView]}>
        <Dropdown
          placeholder={placeholder}
          data={data}
          labelField="label"
          valueField="value"
          value={field.value}
          placeholderStyle={colors.BLACK}
          onChange={value => {
            field.onChange(value.value);
            onChange(value.value);
          }}
          style={{paddingHorizontal: 10}}
          selectedTextStyle={{color: colors.BLACK}}
          activeColor={colors.PRIMARY}
          disable={disabled}
          flatListProps={{
            ItemSeparatorComponent: () => (
              <View style={styles.dropdownItemseparator} />
            ),
          }}
        />
      </View>
      {errors[name]?.type === 'required' &&
        global.getValidateText(requiredError)}
    </View>
  );
}

const internalStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '400',
    fontSize: fonts._11,
    color: colors.BLACK,
    opacity: 0.5,
  },
  boxView: {
    height: 45,
    backgroundColor: colors.WHITE,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#B0B0B0',
    borderStyle: 'solid',
    justifyContent: 'center',
  },
});
