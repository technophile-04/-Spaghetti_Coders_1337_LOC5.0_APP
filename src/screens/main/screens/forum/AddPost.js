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
import BoxDropdown from '../../../../components/BoxDropdown';

const apiKey = {
  IMAGE: 'image',
  NAME: 'name',
  DESCRIPTION: 'description',
  MANUFACTURER_NAME: 'manufacturerName',
  MANUFACTURER_EMAIL: 'manufacturerEmail',
  MANUFACTURER_DATE: 'manufacturerDate',
  EXPIRY_DATE: 'expiryDate',
  PRODUCT_TYPE: 'productType',
  IS_BATCH: 'isBatch',
  PRODUCT_QUANTITY: 'productQuantity',
  PRODUCT_PRICE: 'productPrice',
  BARCODE: 'barcodeId',
};

const accountInfo = {
  name: 'Name',
  mobile: '1234567890',
  email: 'username@gmail.com',
  image: require('../../../../assets/images/logo.png'),
  work: 'Manufacturer',
};

const inputs = {
  [apiKey.NAME]: {
    name: apiKey.NAME,
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
  [apiKey.MANUFACTURER_DATE]: {
    name: apiKey.MANUFACTURER_DATE,
    titleNo: 3,
    title: constants.TXT_MANUFACTURER_DATE,
    isNumber: false,
  },
  [apiKey.EXPIRY_DATE]: {
    name: apiKey.EXPIRY_DATE,
    titleNo: 4,
    title: constants.TXT_EXPIRY_DATE,
    isNumber: false,
  },
  [apiKey.PRODUCT_QUANTITY]: {
    name: apiKey.PRODUCT_QUANTITY,
    titleNo: 7,
    title: constants.TXT_PRODUCT_QUANTITY,
    isNumber: true,
  },
  [apiKey.PRODUCT_PRICE]: {
    name: apiKey.PRODUCT_PRICE,
    titleNo: 8,
    title: constants.TXT_PRODUCT_PRICE,
    isNumber: true,
  },
};

const dropdowns = {
  [apiKey.PRODUCT_TYPE]: {
    name: apiKey.PRODUCT_TYPE,
    titleNo: 5,
    title: constants.TXT_PRODUCT_TYPE,
    data: [
      {label: 'Select Product Type', value: ''},
      {label: 'JEWELRY', value: '0'},
      {label: 'CLOTHES', value: '1'},
      {label: 'WINE', value: '2'},
      {label: 'ACCESSORIES', value: '3'},
    ],
    handleChange: value => {
      console.log(value);
    },
  },
  [apiKey.IS_BATCH]: {
    name: apiKey.IS_BATCH,
    titleNo: 6,
    title: constants.TXT_IS_BATCH,
    data: [
      {label: 'Select Batch', value: ''},
      {label: 'YES', value: '0'},
      {label: 'NO', value: '1'},
    ],
    handleChange: value => {
      console.log(value);
    },
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
          title={'Add Product'}
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

  const getDropdown = ({
    name,
    titleNo,
    title,
    data,
    handleChange = () => {},
  }) => {
    return (
      <BoxDropdown
        name={name}
        titleNo={titleNo}
        title={title}
        control={control}
        errors={errors}
        rules={{
          required: true,
        }}
        data={data}
        starMark={true}
        style={[internalStyles.itemBox]}
        onChange={handleChange}
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
            <Text style={internalStyles.infoText}>
              Work : {accountInfo.work}
            </Text>
            <Text style={[internalStyles.infoText]}>{accountInfo.email}</Text>
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
          marginVertical: 10,
          paddingHorizontal: 20,
        },
      ]}>
      {getAccountInfo()}
      <View
        style={{
          marginBottom: 10,
        }}>
        <Text style={internalStyles.title}>Add Your Product Details</Text>
      </View>
      <ImagePicker
        name={apiKey.IMAGE}
        title={'Photo of your Product'}
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
      {getInput(inputs[apiKey.NAME])}
      <View style={{height: 10}} />
      {getInput(inputs[apiKey.DESCRIPTION])}
      <View style={{height: 10}} />
      {getInput(inputs[apiKey.MANUFACTURER_DATE])}
      <View style={{height: 10}} />
      {getInput(inputs[apiKey.EXPIRY_DATE])}
      <View style={{height: 10}} />
      {getDropdown(dropdowns[apiKey.PRODUCT_TYPE])}
      <View style={{height: 10}} />
      {getDropdown(dropdowns[apiKey.IS_BATCH])}
      <View style={{height: 10}} />
      {getInput(inputs[apiKey.PRODUCT_PRICE])}
      <View style={{height: 10}} />

      <PrimaryButton
        title={'Post'}
        onPress={handleSubmit(onSubmit)}
        style={{width: '100%'}}
      />
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
