import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useController } from 'react-hook-form';
import fonts from '../utility/fonts';
import colors from '../styles/colors';
import CheckBox from '@react-native-community/checkbox';

export default function CommonCheckbox({
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
        <View style={[styles.container, style]}>

            <Text style={styles.text}>{title}</Text>

            <CheckBox
                value={field.value}
                onValueChange={() => field.onChange(!field.value)}
                tintColors={{ true: colors.PRIMARY, false: '#929292' }}
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
});