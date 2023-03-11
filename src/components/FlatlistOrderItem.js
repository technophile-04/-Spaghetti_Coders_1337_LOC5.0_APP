import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import global from '../utility/global';
import constants from '../utility/constants';
import fonts from '../utility/fonts';
import colors from '../styles/colors';
import {Dropdown} from 'react-native-element-dropdown';

export default FlatlistOrderItem = ({
  orderID,
  orderName,
  orderAmount,
  paymentMethod,
  status,
  onChange = () => {},
}) => {
  let data = [
    {
      label: 'Accept',
      value: 'Accept',
    },
    {
      label: 'Decline',
      value: 'Decline',
    },
  ];
  getKeyValuePair = (key, value, color, isPayment, isUnderline) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={internalStyles.leftkey}>
          <Text
            style={{
              fontSize: isPayment ? fonts._10 : fonts._12,
              fontFamily: fonts.FONT_FAMILY.Regular,
            }}>
            {key}
          </Text>
        </View>
        <Text
          style={{
            fontSize: isPayment ? fonts._10 : fonts._12,
            color: color,
            fontFamily: isPayment
              ? fonts.FONT_FAMILY.Regular
              : fonts.FONT_FAMILY.SemiBold,
            textDecorationLine: isUnderline ? 'underline' : 'none',
          }}>
          {value}
        </Text>
      </View>
    );
  };

  return (
    <View style={internalStyles.container}>
      <View style={internalStyles.left}>
        {getKeyValuePair('Order ID: ', orderID, colors.PRIMARY, false, true)}
        {getKeyValuePair('Name: ', orderName, colors.BLACK, false, false)}
        {getKeyValuePair('Amount: ', orderAmount, colors.BLACK, false, false)}
      </View>
      <View style={internalStyles.right}>
        <Text
          style={{
            fontSize: fonts._10,
            fontFamily: fonts.FONT_FAMILY.Regular,
            color: colors.BLACK,
          }}>
          {`Payment: ${paymentMethod}`}
        </Text>
        <View style={{height: 20}}></View>
        {status && (
          <Dropdown
            data={data}
            labelField="label"
            valueField="value"
            value={data[0].value}
            onChange={onChange}
            style={internalStyles.dropdown}
            dropdownStyle={internalStyles.dropdownStyle}
            selectedTextStyle={{
              fontSize: fonts._10,
              fontFamily: fonts.FONT_FAMILY.Regular,
              color: colors.WHITE,
            }}
            renderRightIcon={() => {
              return global.drawIcon(
                constants.IC_FEATHER,
                'chevron-down',
                18,
                colors.WHITE,
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

const internalStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    elevation: 0.5,
  },
  dropdown: {
    paddingHorizontal: 15,
    width: 100,
    height: 30,
    backgroundColor: colors.PRIMARY,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownStyle: {
    width: 100,
    height: 60,
    backgroundColor: colors.WHITE,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: '60%',
  },
  leftkey: {
    width: '50%',
    justifyContent: 'flex-start',
  },
  leftValue: {
    width: '50%',
    justifyContent: 'flex-end',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    width: '40%',
    height: '100%',
  },
});
