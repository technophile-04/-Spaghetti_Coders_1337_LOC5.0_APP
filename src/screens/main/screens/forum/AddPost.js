import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Header from '../../../../components/Header';
import ImagePicker from '../../../../components/ImagePicker';
import colors from '../../../../styles/colors';
import styles from '../../../../styles/styles';
import constants from '../../../../utility/constants';
import fonts from '../../../../utility/fonts';
import global from '../../../../utility/global';
import {useForm} from 'react-hook-form';
import BoxInput from '../../../../components/BoxInput';
import PrimaryButton from '../../../../components/PrimaryButton';

const apiKey = {
  IMAGE: 'image',
  TITLE: 'title',
  DESCRIPTION: 'description',
};

const accountInfo = {
  name: "Farmer's Name",
  mobile: '1234567890',
  email: 'username',
  image: require('../../../../assets/images/logo.jpg'),
  credits: '10',
};

const inputs = {
  [apiKey.TITLE]: {
    name: apiKey.TITLE,
    titleNo: 1,
    title: constants.TXT_TITLE,
    isNumber: false,
  },
  [apiKey.DESCRIPTION]: {
    name: apiKey.DESCRIPTION,
    titleNo: 2,
    title: constants.TXT_DESCRIPTION,
    isNumber: false,
  },
};

export default function AddPost({navigation}) {
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          title={'Share You Concerns'}
          showBackButton={true}
          navigation={navigation}
        />
      ),
    });
  }, []);

  const onSubmit = data => {
    console.log(data);
  };

  const getInput = ({
    name,
    titleNo,
    title,
    style,
    textBoxStyle,
    isNumber = true,
  }) => {
    let pattern = isNumber ? global.getPositiveNumberRegex() : null;
    return (
      <BoxInput
        name={name}
        titleNo={titleNo}
        title={title}
        control={control}
        errors={errors}
        rules={{
          required: true,
          pattern: pattern,
        }}
        otherTextInputProps={{
          placeholder: `Enter ${title}`,
          placeholderTextColor: colors.GREY,
        }}
        style={[internalStyles.itemBox, style]}
        textBoxStyle={textBoxStyle}
      />
    );
  };

  const getAccountInfo = () => {
    return (
      <View
        style={[
          internalStyles.twoColumn,
          {
            marginBottom: 10,
          },
        ]}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={accountInfo.image}
            style={internalStyles.logo}
            resizeMode="contain"
          />
          <View style={{marginLeft: 10}}>
            <Text style={internalStyles.name}>{accountInfo.name}</Text>

            <Text style={internalStyles.infoText}>{accountInfo.mobile}</Text>
            <Text style={internalStyles.infoText}>Credits : {accountInfo.credits}</Text>
            <Text style={[internalStyles.infoText]}>
              {accountInfo.email}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView
      style={[
        styles.styleFull,
        {
          marginTop: 10,
          paddingHorizontal: 20,
        },
      ]}>
      {getAccountInfo()}
      <View
        style={{
          marginBottom: 10,
        }}>
        <Text style={internalStyles.title}>Increase Your Credits by adding valuable information to the Community</Text>
      </View>
      <ImagePicker
        name={apiKey.IMAGE}
        title={'Photo of your Crop'}
        control={control}
        errors={errors}
        uploadBox={{height: 200}}
        rules={{
          required: true,
        }}
        style={{marginBottom: 10}}
      />
      <View
        style={{
          marginBottom: 10,
        }}>
        <Text style={internalStyles.title}>Product Details</Text>
      </View>
      {getInput(inputs[apiKey.TITLE])}
      <View style={{height: 10}} />
      {getInput(inputs[apiKey.DESCRIPTION])}

      <View style={{height: 10}} />

      <PrimaryButton title={'Post'} onPress={handleSubmit(onSubmit)} style={{width:"100%"}} />
    </ScrollView>
  );
}

const internalStyles = StyleSheet.create({
  twoColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 12,
    alignItems: 'center',
  },
  logo: {
    width: 69,
    height: 69,
    borderColor: colors.GREY,
    borderWidth: 1,
    borderRadius: 3,
  },
  name: {
    fontSize: fonts._12,
    fontFamily: fonts.FONT_FAMILY.Medium,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  infoText: {
    fontSize: fonts._9,
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '600',
    color: colors.BLACK,
  },
  title: {
    fontSize: fonts._14,
    fontFamily: fonts.FONT_FAMILY.SemiBold,
    fontWeight: '800',
    color: colors.BLACK,
  },
});
