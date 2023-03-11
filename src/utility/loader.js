import React from 'react'
import { View } from 'react-native'
import colors from '../styles/colors'
import { LoaderScreen } from 'react-native-ui-lib';

export default loader = () => {
  return (
    <View>
      <LoaderScreen color={colors.PRIMARY} message="Loading" overlay />
    </View>
  )
}




