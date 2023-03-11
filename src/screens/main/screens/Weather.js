import React, {useEffect} from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import Header from '../../../components/Header';
import colors from '../../../styles/colors';
import constants from '../../../utility/constants';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function Weather({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header title={'Map'} showBackButton={false} navigation={navigation} />
      ),
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.WHITE,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <MapView
        style={{
          width: '100%',
          height: '100%',
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: 72.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
}
