import React, {useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import constants from '../../../utility/constants';
import styles from '../../../styles/styles';
import global from '../../../utility/global';
import Header from '../../../components/Header';
import colors from '../../../styles/colors';
import Ripple from 'react-native-material-ripple';
import Barcode from 'react-native-barcode-builder';
import PrimaryButton from '../../../components/PrimaryButton';

const data = [
  {
    mfdDate: '12/12/2020',
    name: 'Dacarbazine',
    quantity: '10',
    expiryDate: '12/12/2020',
    barcode: '1234567890',
    image: require('../../../assets/sample/late_blight.jpg'),
  },
  {
    mfdDate: '12/12/2020',
    name: 'Dacarbazine',
    quantity: '10',
    expiryDate: '12/12/2020',
    barcode: '1234567890',
    image: require('../../../assets/sample/late_blight.jpg'),
  },
  {
    mfdDate: '12/12/2020',
    name: 'Dacarbazine',
    quantity: '10',
    expiryDate: '12/12/2020',
    barcode: '1234567890',
    image: require('../../../assets/sample/late_blight.jpg'),
  },
  {
    mfdDate: '12/12/2020',
    name: 'Dacarbazine',
    quantity: '10',
    expiryDate: '12/12/2020',
    barcode: '1234567890',
    image: require('../../../assets/sample/late_blight.jpg'),
  },
  {
    mfdDate: '12/12/2020',
    name: 'Dacarbazine',
    quantity: '10',
    expiryDate: '12/12/2020',
    barcode: '1234567890',
    image: require('../../../assets/sample/late_blight.jpg'),
  },
  {
    mfdDate: '12/12/2020',
    name: 'Dacarbazine',
    quantity: '10',
    expiryDate: '12/12/2020',
    barcode: '1234567890',
    image: require('../../../assets/sample/late_blight.jpg'),
  },
  {
    mfdDate: '12/12/2020',
    name: 'Dacarbazine',
    quantity: '10',
    expiryDate: '12/12/2020',
    barcode: '1234567890',
    image: require('../../../assets/sample/late_blight.jpg'),
  },
  {
    mfdDate: '12/12/2020',
    name: 'Dacarbazine',
    quantity: '10',
    expiryDate: '12/12/2020',
    barcode: '1234567890',
    image: require('../../../assets/sample/late_blight.jpg'),
  },
  {
    mfdDate: '12/12/2020',
    name: 'Dacarbazine',
    quantity: '10',
    expiryDate: '12/12/2020',
    barcode: '1234567890',
    image: require('../../../assets/sample/late_blight.jpg'),
  },
  {
    mfdDate: '12/12/2020',
    name: 'Dacarbazine',
    quantity: '10',
    expiryDate: '12/12/2020',
    barcode: '1234567890',
    image: require('../../../assets/sample/late_blight.jpg'),
  },
];

export default function Forum({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          title={'My Products'}
          showBackButton={false}
          navigation={navigation}
        />
      ),
    });
  }, []);

  const navigateTo = (screen, param = null) => {
    navigation.navigate(screen, {
      [constants.PARAM_TITLE]: param
    });
  }

  const renderCard = item => {
    return (
      <View style={internalStyles.recentPrecautionsItem}>
        <View style={internalStyles.recentPrecautionsItemLeft}>
          <Image
            source={item.image}
            style={internalStyles.recentPrecautionsItemImage}
          />
        </View>
        <View style={internalStyles.recentPrecautionsItemRight}>
          <Text style={internalStyles.title}>{item.name}</Text>
          <Text style={internalStyles.crop}>Quantity : {item.quantity}</Text>
          <Text style={internalStyles.crop}>Exp : {item.expiryDate}</Text>
          <Text style={{fontSize: 12}}>Mfd : {item.mfdDate}</Text>
        </View>
        <View style={internalStyles.extremeRight}>
          <Barcode
            value={item.barcode}
            format="CODE128"
            width={1}
            height={40}
          />
          <Ripple style={internalStyles.recentPrecautionsItemRightButton}
            onPress={() => {
              navigateTo('ViewPost', item.name);
            }}
          >
            <Text style={internalStyles.title}>View Detail</Text>
          </Ripple>
        </View>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.styleFull,
        {
          marginTop: 10,
          paddingHorizontal: 15,
        },
      ]}>
      <FlatList
        data={data}
        renderItem={({item}) => renderCard(item)}
        keyExtractor={item => item.id}
        style={internalStyles.list}
      />

      <PrimaryButton
        style={internalStyles.btn}
        title={`+ ${constants.TXT_ADD_NEW_PRODUCT}`}
        onPress={() => {
          navigateTo('AddPost', constants.TXT_ADD_NEW_PRODUCT);
        }}
      />
    </View>
  );
}

const internalStyles = StyleSheet.create({
  recentPrecaution: {
    flex: 1,
  },
  recentPrecautionsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.WHITE,
    elevation: 1,
    marginVertical: 5,
  },
  recentPrecautionsItemLeft: {
    width: '28%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentPrecautionsItemRight: {
    width: '38%',
  },
  extremeRight: {
    width: '30%',
  },
  recentPrecautionsItemImage: {
    width: '100%',
    height: 80,
    marginRight: 5,
  },
  recentPrecautionsItemRightButton: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: 6,
    marginTop: 5,
  },
  title: {
    color: colors.BLACK,
    fontWeight: '800',
    fontSize: 14,
  },
  crop: {
    color: colors.BLACK,
    fontWeight: '500',
  },
  btn: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
  },
  list: {
    paddingBottom: 80,
  },
});
