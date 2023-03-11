import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';
import colors from '../styles/colors';
import global from '../utility/global';
import constants from '../utility/constants';
import fonts from '../utility/fonts';

export default function Header({
  showBackButton,
  title,
  navigation,
  endRippleIcon,
  endRippleIconType,
  endRippleClick = () => {},
  endRippleText,
  endRippleIconStyle = {},
  endRippleSize,
  endRippleTextCLick = () => {},
}) {
  const close = () => {
    navigation.goBack(null);
  };

  const openDrawer = () => {
    console.log('toolbar openDrawer!');
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {showBackButton && (
          <TouchableHighlight
            style={[styles.btnBack, {padding: 0}]}
            onPress={() => close()}
            underlayColor={colors.RIPPLE_EFFECT}>
            {global.drawIcon(
              constants.IC_FEATHER,
              'chevron-left',
              25,
              colors.BLACK,
            )}
          </TouchableHighlight>
        )}
        {title ? (
          <Text numberOfLines={1} style={[styles.title]}>
            {title}
          </Text>
        ) : (
          <View style={{flex: 0.5}}>
            <Image
              source={require('../assets/images/logo_onboard.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
      {endRippleText && (
        <Ripple onPress={() => endRippleTextCLick()} style={{
          height: 45,
          width: "45%",
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
        rippleSize={'25%'}
        >
          <Text style={styles.endRippleText}>{endRippleText}</Text>
        </Ripple>
      )}
      {endRippleIcon && (
        <Ripple
          style={[styles.endIcon, endRippleIconStyle]}
          onPress={() => endRippleClick()}>
          {global.drawIcon(
            endRippleIconType,
            endRippleIcon,
            endRippleSize ? endRippleSize : 16,
            colors.WHITE,
          )}
        </Ripple>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    paddingHorizontal: 15,
    elevation: 5,
  },
  btnBack: {
    alignSelf: 'center',
    height: 40,
    width: 40,
    marginRight: 10,
    marginLeft: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  endICon: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  title: {
    color: colors.BLACK,
    fontSize: fonts._18,
    fontFamily: fonts.FONT_FAMILY.Bold,
    fontWeight: 'bold',
  },

  logo: {
    width: '100%',
  },
  endIcon: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: 4,
  },

  endRippleText: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    color: colors.BLACK,
    fontSize: fonts._13,
    fontFamily: fonts.FONT_FAMILY.REGULAR,
  },
});
