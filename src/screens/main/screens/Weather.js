import React, {useEffect} from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import Header from '../../../components/Header';
import colors from '../../../styles/colors';
import constants from '../../../utility/constants';

export default function Weather({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          title={'Map'}
          showBackButton={false}
          navigation={navigation}
        />
      ),
    });
  }, []);
  return (
    <View>
      <Text>Map</Text>
    </View>
  );
}
