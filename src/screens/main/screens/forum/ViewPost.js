import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Header from '../../../../components/Header';
import colors from '../../../../styles/colors';
import styles from '../../../../styles/styles';
import constants from '../../../../utility/constants';
import global from '../../../../utility/global';

const accountInfo = {
  name: 'Name',
  location: 'Location',
  image: require('../../../../assets/images/logo.jpg'),
};

const dataOfPost = {
  title: 'Any Medicine',
  description: 'Learn more about the disease and how to prevent it',
  image: require('../../../../assets/sample/late_blight.jpg'),
  status: 'With Vendor',
};

const dataOfTimeline = [
  {
    id: 1,
    name: "Manufacturer's Name",
    date : '12/12/2020',
    location: 'Location',
    image: require('../../../../assets/images/logo.jpg'),
    comment:
      'Successfully delivered to the Supplier. The vendor will contact you soon',
  },
  {
    id: 2,
    name: "Supplier's Name",
    date : '13/12/2020',
    location: 'Location',
    image: require('../../../../assets/images/logo.jpg'),
    comment:
      'Successfully delivered to the Vendor. The vendor will contact you soon',
  },
  {
    id: 3,
    name: "Vendor's Name",
    date : '14/12/2020',
    location: 'Location',
    image: require('../../../../assets/images/logo.jpg'),
    comment:
      'Successfully Recieved',
  },
];

export default function ViewPost({navigation}) {

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          title={'Dacarbazine'}
          showBackButton={true}
          navigation={navigation}
        />
      ),
    });
  }, []);

  const renderTimeline = item => {
    return (
      <View
        style={{
          paddingHorizontal: 15,
          backgroundColor: colors.WHITE,
          marginBottom: 5,
          elevation: 1,
          borderRadius: 3,
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Image
            source={item.image}
            style={internalStyles.logoOfComment}
            resizeMode="contain"
          />
          <View style={{marginLeft: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={internalStyles.name}>{item.name}</Text>
              <Text style={{fontSize: 12, color: colors.GREY}}>
                {'  '}· {item.location}
              </Text>
            </View>
            <Text style={{fontSize: 12, color: colors.GREY}}>{item.date}</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            marginTop: 10,
            color: colors.GREY,
          }}>
          {item.comment}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}>
        </View>
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[styles.styleFull]}>
      <Image
        source={require('../../../../assets/sample/late_blight.jpg')}
        style={{height: 200, width: '100%'}}
      />
      <View style={{paddingHorizontal: 15}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={accountInfo.image}
            style={internalStyles.logo}
            resizeMode="contain"
          />
          <View style={{marginLeft: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={internalStyles.name}>{accountInfo.name}</Text>
              <Text style={{fontSize: 12, color: colors.GREY}}>
                {'  '}· {accountInfo.location}
              </Text>
            </View>
          </View>
        </View>
        <Text style={{fontSize: 16, fontWeight: '900', color: colors.BLACK}}>
          {dataOfPost.title}
        </Text>
        <Text style={{fontSize: 14, color: colors.BLACK}}>
          {dataOfPost.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{fontSize: 16, color: colors.BLACK, fontWeight: '600'}}>
              Timeline
            </Text>
          </View>
          <Ripple
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}
            onPress={() => {
              console.log('Share');
            }}>
            {global.drawIcon(
              constants.IC_MATERIAL_COMMUNITY,
              'share',
              20,
              colors.BLACK,
            )}
          </Ripple>
        </View>
      </View>
      <View style={{marginTop: 10, paddingHorizontal: 5}}>
        <FlatList
          data={dataOfTimeline}
          renderItem={({item}) => renderTimeline(item)}
          keyExtractor={item => item.id}
          scrollEnabled={true}
          style={{paddingBottom: 60, paddingLeft: 15}}
        />
      </View>
    </ScrollView>
  );
}

const internalStyles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'relative',
    top: -15,
    borderColor: colors.BLACK,
    borderWidth: 0.5,
  },
  name: {
    fontSize: 16,
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  logoOfComment: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  fixedBottomTextInput: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.WHITE,
    padding: 10,
    borderTopWidth: 0.5,
    borderTopColor: colors.GREY,
  },
});
