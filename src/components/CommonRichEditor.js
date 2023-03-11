import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor';
import colors from '../styles/colors';
import fonts from '../utility/fonts';
import { useController } from 'react-hook-form';
import global from '../utility/global';

export default function CommonRichEditor({
    title,
    style = {},
    control,
    name,
    errors,
    requiredError = `Please enter ${title.toLowerCase()}`,
    rules = {},
    defaultValue = '',
    disabled,
}) {

    const rich = React.useRef();

    const { field } = useController({
        control: control,
        name: name,
        rules: rules,
        defaultValue: defaultValue,
    });
    return (
        <View style={style}>
            <Text style={internalStyles.labelText}>{title}</Text>
            <View
                style={internalStyles.container}>
                <RichToolbar
                    editor={rich}
                    actions={[
                        actions.setBold,
                        actions.setItalic,
                        actions.setUnderline,
                        actions.insertBulletsList,
                        actions.insertOrderedList,
                        actions.setStrikethrough,
                        actions.insertLink,
                        actions.keyboard,
                    ]}
                />
                <RichEditor
                    ref={rich}
                    style={internalStyles.richEditor}
                    initialHeight={180}
                    useContainer={false}
                    onChange={value => {
                        field.onChange(value);
                    }}
                    editorStyle={{
                        backgroundColor: colors.BACKGROUND,
                    }}
                    disabled={disabled}
                    androidHardwareAccelerationDisabled={true}
                    initialContentHTML={field.value}
                />

                {errors[name]?.type === 'required' &&
                    global.getValidateText(requiredError)}
            </View>
        </View>


    );
}

const internalStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        padding: 10,
        borderRadius: 10,

    },

    richEditor: {
        height: 180,
        marginTop: 2,
    },
    labelText: {
        fontFamily: fonts.FONT_FAMILY.Regular,
        fontWeight: '400',
        fontSize: fonts._11,
        color: colors.BLACK,
        opacity: 0.5,
    },

});