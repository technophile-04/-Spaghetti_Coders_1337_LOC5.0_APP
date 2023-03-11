import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Ripple from 'react-native-material-ripple';
import colors from '../styles/colors';
import fonts from '../utility/fonts';
import global from '../utility/global';
import {useController} from 'react-hook-form';

export default function ImagePicker({
  title,
  recomText,
  style = {},
  control,
  name,
  errors,
  requiredError = `Please upload ${title.toLowerCase()}`,
  rules = {},
  defaultValue = '',
  disabled,
  uploadBox={},
}) {
  const {field} = useController({
    control: control,
    name: name,
    rules: rules,
    defaultValue: defaultValue,
  });

  const handleImagePicker = () => {
    let options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      let files = response.assets;
      if (files) {
        field.onChange(files[0]);
      }
    });
  };

  return (
    <View style={style}>
      {field.value ? (
        <View style={[internalStyles.imageBox, uploadBox]}>
          <Image source={{uri: field.value.uri}} style={internalStyles.image} />
          <Ripple
            style={internalStyles.inImageUploadIcon}
            disabled={disabled}
            onPress={handleImagePicker}>
            {global.drawIcon(constants.IC_FEATHER, 'camera', 20, colors.WHITE)}
          </Ripple>
        </View>
      ) : (
        <View style={[internalStyles.uploadImageBox, uploadBox]}>
          <Text style={internalStyles.uploadImageTitle}>{`Add ${title}`}</Text>

          <Ripple
            style={internalStyles.uploadIcon}
            disabled={disabled}
            onPress={handleImagePicker}>
            {global.drawIcon(
              constants.IC_FEATHER,
              'camera',
              34,
              colors.PRIMARY,
            )}
          </Ripple>
        </View>
      )}
      {errors[name]?.type === 'required' &&
        global.getValidateText(requiredError)}

      {recomText && <Text style={internalStyles.recomText}>{recomText}</Text>}
    </View>
  );
}

const internalStyles = StyleSheet.create({
  uploadImageBox: {
    height: 400,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadImageTitle: {
    fontSize: fonts._13,
    fontFamily: fonts.FONT_FAMILY.Medium,
    color: '#828282',
  },
  uploadIcon: {
    marginTop: 9,
  },
  imageBox: {
    height: 400,
  },
  image: {
    flex: 1,
    borderRadius: 8,
    resizeMode: 'stretch',
  },
  inImageUploadIcon: {
    position: 'absolute',
    right: 10,
    bottom: 6,
  },
  recomText: {
    fontSize: fonts._12,
    fontFamily: fonts.FONT_FAMILY.Regular,
    color: colors.PRIMARY,
    fontWeight: '400',
    lineHeight: 18,
    paddingTop: 5,
  },
});
