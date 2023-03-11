import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Ripple from 'react-native-material-ripple';
import global from '../utility/global';
import colors from '../styles/colors';
import { useController } from 'react-hook-form';

export default function CommonDatePicker({
    title,
    style = {},
    control,
    name,
    errors,
    rules = {},
    defaultValue = new Date(),
    disabled,
}) {

    const { field } = useController({
        control: control,
        name: name,
        rules: rules,
        defaultValue: defaultValue,
    });

    const [isShowPicker, setShowPicker] = useState(false);
    return (
        <View style={style}>
            <Text style={[internalStyles.dateTitle]}>{title}</Text>

            <Ripple style={[internalStyles.dateInputBox]}
                onPress={() => {
                    setShowPicker(true);
                }}
                disabled={disabled}>

                <Text
                    style={[internalStyles.value]}
                >
                    {field.value ? global.getReadableDate(field.value) : '00-00-00'}

                </Text>

                {global.drawIcon(constants.IC_FEATHER, 'calendar', 20, colors.BLACK)}
            </Ripple>


            <DatePicker
                modal
                title={`Select ${title}`}
                mode="date"
                open={isShowPicker}
                date={field.value}
                onDateChange={field.onChange}
                onConfirm={(selectedDate) => {
                    field.onChange(selectedDate);
                    setShowPicker(false);
                }}
                onCancel={() => {
                    setShowPicker(false);
                }}
            />

        </View>

    )
}
const internalStyles = StyleSheet.create({

    dateTitle: {
        fontFamily: fonts.FONT_FAMILY.Regular,
        fontWeight: '400',
        fontSize: fonts._10,
        color: colors.BLACK,
        opacity: 0.5,
    },
    dateInputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 45,
        backgroundColor: colors.WHITE,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#B0B0B0',
        borderStyle: 'solid',
        paddingStart: 10,
        paddingEnd: 12,
    },
    value: {
        fontSize: fonts._13,
        fontFamily: fonts.FONT_FAMILY.Regular,
        color: colors.BLACK,
        fontWeight: '400',
    },

})