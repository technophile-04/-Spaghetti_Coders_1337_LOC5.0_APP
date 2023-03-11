import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useController } from 'react-hook-form';
import fonts from '../utility/fonts';
import colors from '../styles/colors';
import Ripple from 'react-native-material-ripple';
import global from '../utility/global';
import constants from '../utility/constants';
import ColorPicker from 'react-native-wheel-color-picker';

export default function CommonColorPicker({
    title,
    name,
    control,
    disabled,
    defaultValue = colors.WHITE,
    style = {},
    iconType,
    iconName,
    onIconClick = () => { },
    iconColor,
}) {

    const [showPicker, setShowPicker] = React.useState(false);

    const { field } = useController({
        name: name,
        control: control,
        defaultValue: defaultValue
    });


    return (
        <View style={[styles.container, style]}>

            <View style={styles.row}>
                <Text style={styles.text}>{title}</Text>

                <View style={{
                    flexDirection: 'row',
                }}>
                    <Ripple style={styles.ripple}
                        disabled={disabled}
                        onPress={() => setShowPicker(!showPicker)}>

                        <View style={[styles.colorBox,
                        {
                            backgroundColor: field.value,
                        }]} />

                        {global.drawIcon(constants.IC_FEATHER,
                            showPicker ? 'chevron-up' : 'chevron-down',
                            20, '#7E7E7E')}
                    </Ripple>

                    {iconName && (
                        <Ripple
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onPress={onIconClick}>
                            {global.drawIcon(iconType, iconName, 20, iconColor)}
                        </Ripple>
                    )}
                </View>

            </View>

            {showPicker &&
                <View style={{ marginBottom: 10 }}>
                    <ColorPicker
                        color={field.value}
                        onColorChangeComplete={field.onChange}
                        thumbSize={40}
                        sliderSize={40}
                    />
                </View>

            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        borderRadius: 5,
        borderColor: colors.GREY,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,

    },
    text: {
        fontFamily: fonts.FONT_FAMILY.Regular,
        fontWeight: '400',
        fontSize: fonts._13,
        color: colors.BLACK,
    },
    ripple: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EBEBEB',
        borderRadius: 3
    },
    colorBox: {
        width: 22,
        height: 22,
        borderWidth: .5,
        borderRadius: 3,
        borderColor: '#000000cc',
        marginVertical: 2,
        marginLeft: 3,
    }
});