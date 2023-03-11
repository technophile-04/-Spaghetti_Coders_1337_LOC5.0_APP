'use strict';

import {StyleSheet} from 'react-native';

import colors from './colors';
import fonts from '../utility/fonts';
import {Typography} from 'react-native-ui-lib';

import {getStatusBarHeight} from 'react-native-status-bar-height';

const height = getStatusBarHeight(true);
const hasNotch = height > 24 ? true : false;

var styles = StyleSheet.create({
  styleFull: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  bottomTabBarStyle: {
    backgroundColor: colors.WHITE,
    height: 70,
    marginBottom: hasNotch ? -40 : 0,
    elevation: 24,
    shadowColor: '#DBDBDB',
  },
  titleOnBoard: {
    fontSize: fonts._18,
    fontFamily: fonts.FONT_FAMILY.SemiBold,
    color: colors.BLACK,
  },
  titleStep: {
    fontSize: fonts._20,
    fontFamily: fonts.FONT_FAMILY.Bold,
    fontWeight: 'bold',
    color: colors.PRIMARY,
  },
  noteMessage: {
    fontSize:fonts._9,
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: 'normal',
    color: colors.SECONDARY,
  },
  header: {
    fontSize: fonts._16,
    fontFamily: fonts.FONT_FAMILY.Bold,
    fontWeight: 'bold',
    color: colors.HEADER,
  },
  dropdownItemseparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#999',
},
});

Typography.loadTypographies(styles);

module.exports = styles;
