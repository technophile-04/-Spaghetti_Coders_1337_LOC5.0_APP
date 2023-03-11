import React, {useEffect, useRef} from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import Header from '../../../components/Header';
import colors from '../../../styles/colors';
import constants from '../../../utility/constants';
import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';

export default function Weather({navigation}) {
  const mapRef = useRef(null);
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
      ref={mapRef}
        style={{
          width: '100%',
          height: '100%',
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 22.629386712429,
          longitude: 88.4354486029795,
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        }}
      >
        <Marker
          coordinate={{
            latitude: 22.629386712429,
            longitude: 88.4354486029795,
          }}
          title={'Manufactured'}
          description={'Manufactured Here by Manufacturer'}
        />
        <Marker
          coordinate={{
            latitude: 23.871795,
            longitude: 80.405937,
          }}
          title={'Supplier'}
          description={'Supplied Here by Suuplier'}
        />
        <Marker
          coordinate={{
            latitude: 21.909939,
            longitude: 75.241906,
          }}
          title={'Vendor'}
          description={'Distributed Here to Vendor'}
        />
        <Marker
          coordinate={{
            latitude: 19.117598,
            longitude: 72.881740,
          }}
          title={'Customer'}
          description={'Sold Here to Customer'}
        />
        <Polyline coordinates={[
          {
            latitude: 22.629386712429,
            longitude: 88.4354486029795,
          },
          {
            latitude: 23.871795,
            longitude: 80.405937,
          },
          {
            latitude: 21.909939,
            longitude: 75.241906,
          },
          {
            latitude: 19.117598, 
            longitude: 72.881740,
          },
        ]} 
        strokeColor={colors.RED}
        strokeWidth={4}
        /> 
      </MapView>
    </View>
  );
}
