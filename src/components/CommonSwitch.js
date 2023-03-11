import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { useController } from 'react-hook-form';
import fonts from '../utility/fonts';
import colors from '../styles/colors';
import Switch from 'react-native-switch-pro'

export default function CommonSwitch({
    title,
    name,
    control,
    disabled,
    defaultValue = false,
    style = {},
}) {

    const { field } = useController({
        name: name,
        control: control,
        defaultValue: defaultValue
    });


    return (
        <View style={[styles.container,style]}>

        <Text style={styles.text}>Active</Text>

        <Switch
          onSyncPress={() => field.onChange(!field.value)}
          value={field.value}
          width={45}
          height={21}
          circleColorActive={colors.PRIMARY}
          circleColorInactive={'#DFDFDF'}
          style={[styles.switch,
            field.value ? { borderColor: colors.PRIMARY } : { borderColor: '#DFDFDF' }
          ]}
          disabled={disabled}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        borderRadius: 5,
        borderColor: colors.GREY,
        paddingHorizontal: 10,
    
      },
      text: {
        fontFamily: fonts.FONT_FAMILY.Regular,
        fontWeight: '400',
        fontSize: fonts._13,
        color: colors.BLACK,
      },
      switch: {
        backgroundColor: colors.WHITE,
        borderWidth: .5,
      },
});