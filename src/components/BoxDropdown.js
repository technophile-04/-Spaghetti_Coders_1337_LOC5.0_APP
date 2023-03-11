import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import global from '../utility/global';
import fonts from '../utility/fonts';
import colors from '../styles/colors';
import {Dropdown} from 'react-native-element-dropdown';
import {useController} from 'react-hook-form';
import styles from '../styles/styles';
export default function BoxDropdown({
  data,
  onChange = () => {},
  title,
  titleNo,
  style,
  control,
  name,
  errors,
  requiredError = `Please select ${title.toLowerCase()}`,
  rules = {},
  placeholder = `Select ${title}`,
  defaultValue='',
}) {
  const {field} = useController({
    control: control,
    name: name,
    rules: rules,
    defaultValue: defaultValue,
  });

  return (
    <View style={[internalStyles.conatiner, style]}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{
          marginEnd: 11,
          marginStart: 16
        }}>
          {titleNo && <Text style={internalStyles.text}>
            {titleNo}
            {'.'}
          </Text>}
        </View>

        <Text style={internalStyles.text}>{title}</Text>
      </View>
      <View style={[internalStyles.boxView]}>
        <Dropdown
          data={data}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={field.value}
          onChange={(value) => {
            field.onChange(value);
            onChange(value);
          }}
          style={internalStyles.dropdown}
          flatListProps={{
            ItemSeparatorComponent: () => <View style={styles.dropdownItemseparator}/>
          }}
        />

        {errors[name]?.type === 'required' &&
          global.getValidateText(requiredError)}
      </View>
    </View>
  );
}

const internalStyles = StyleSheet.create({
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
  boxView: {
    marginStart: 24,
    marginEnd: 22,
    marginTop: 10,
  },
  dropdown: {
    borderBottomColor: '#5B5B5B',
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
  },
});
