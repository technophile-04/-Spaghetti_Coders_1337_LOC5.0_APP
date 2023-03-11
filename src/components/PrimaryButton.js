import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import fonts from '../utility/fonts';
import Ripple from 'react-native-material-ripple';
import colors from '../styles/colors';

export default function PrimaryButton({title, onPress = () => {}, style = {}}) {
  return (
    <View style={styles.container}>
      <Ripple style={[styles.ripple, style]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Ripple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  ripple: {
    backgroundColor: colors.PRIMARY,
    width: '90%',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '400',
    fontSize: fonts._16,
    color: colors.WHITE,
  },
});
