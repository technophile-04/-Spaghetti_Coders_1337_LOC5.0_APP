import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useController } from 'react-hook-form';
import fonts from '../utility/fonts';
import colors from '../styles/colors';
import Ripple from 'react-native-material-ripple';
import global from '../utility/global';
import constants from '../utility/constants';
import ColorPicker from 'react-native-wheel-color-picker';

export default function CommonColorPickerBox({
    title,
    textInputName,
    colorPickerName,
    control,
    errors,
    rules = {},
    disabled,
    style = {},
    iconType,
    iconName,
    onIconClick = () => { },
    iconColor,
    otherTextInputProps = {},
    textBoxStyle = {},
    starMark = false,
    placeholder = `Enter ${title}`,
}) {

    const [showPicker, setShowPicker] = React.useState(false);

    const textInputField = useController({
        name: textInputName,
        control: control,
        rules: rules,
    }).field;

    const colorField = useController({
        name: colorPickerName,
        control: control,
        rules: rules,
    }).field;


    return (
        <View style={[style]}>
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

            <View style={[styles.boxView, textBoxStyle,
            ]}>

                <TextInput
                    style={styles.textInput}
                    value={textInputField.value}
                    placeholder={placeholder}
                    {...otherTextInputProps}
                    onChangeText={e => {
                        textInputField.onChange(e);
                        // onChangeText(e);
                    }}
                    editable={!disabled}
                />

                <View style={styles.rightContainer}>

                    <Ripple style={[styles.colorDropDown]}
                        disabled={disabled}
                        onPress={() => setShowPicker(!showPicker)}>

                        <View style={[styles.colorBox,
                        {
                            backgroundColor: colorField.value,
                        }]} />

                        {global.drawIcon(constants.IC_FEATHER,
                            showPicker ? 'chevron-up' : 'chevron-down',
                            20, '#7E7E7E')}
                    </Ripple>

                    {iconName && (
                        <Ripple style={styles.icon}
                            onPress={onIconClick}
                            disabled={disabled}>
                            {global.drawIcon(iconType, iconName, 20, iconColor)}
                        </Ripple>

                    )}

                </View>
            </View>

            {showPicker &&
                <View style={styles.colorContainer}>
                    <ColorPicker
                        color={colorField.value}
                        onColorChangeComplete={colorField.onChange}
                        thumbSize={40}
                        sliderSize={40}
                    />
                </View>

            }
            {errors[textInputName]?.type === 'required' &&
                global.getValidateText(`Please enter ${title.toLowerCase()} name`)}

            {errors[colorPickerName]?.type === 'required' &&
                global.getValidateText(`Please select ${title.toLowerCase()} color`)}

        </View>
    );
}

const styles = StyleSheet.create({

    colorContainer: {
        backgroundColor: colors.WHITE,
        borderColor: colors.GREY,
        paddingHorizontal: 10,
        paddingBottom: 20,
        borderWidth: 0.5,
        borderRadius: 5,
        borderTopWidth: 0,
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        justifyContent: "flex-end"
    },
    colorDropDown: {
        flexDirection: 'row',
        backgroundColor: '#EBEBEB',
        borderRadius: 3,
        alignItems: 'center',
    },
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

    colorBox: {
        width: 22,
        height: 22,
        borderWidth: .5,
        borderRadius: 3,
        borderColor: '#000000cc',
        marginVertical: 2,
        marginLeft: 3,
    },
    icon: {
        marginLeft: 18,
    }
});