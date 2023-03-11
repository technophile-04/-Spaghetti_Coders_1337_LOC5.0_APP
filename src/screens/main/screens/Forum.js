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

const data = [
  {
    id: 1,
    title: 'Tomato Late Blight occured nearby',
    description: 'Learn more about the disease and how to prevent it',
    image: require('../../../assets/sample/late_blight.jpg'),
  },
  {
    id: 2,
    title: 'Tomato Late Blight occured nearby',
    description: 'Learn more about the disease and how to prevent it',
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
          endRippleIcon={'plus-circle'}
          endRippleIconType={constants.IC_FEATHER}
          endRippleSize={25}
          endRippleIconStyle={{
            height: 30,
            width: 30,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.PRIMARY,
            elevation: 10,
          }}
          endRippleClick={() => navigation.navigate('AddPost')}
        />
      ),
    });
  }, []);

  const renderCard = item => {
    return (
      <Ripple style={internalStyles.card}
        onPress={() => navigation.navigate('ViewPost')}
      >
        <View style={internalStyles.cardHeader}>
          <Image
            source={require('../../../assets/images/logo.jpg')}
            style={internalStyles.logoImage}
          />
          <Text style={internalStyles.cardHeaderTitle}>Crop Shield</Text>
        </View>
        <Text style={internalStyles.cardTitle}>{item.title}</Text>
        <Text style={internalStyles.cardDescription}>{item.description}</Text>
        <Image source={item.image} style={internalStyles.cardImage} />
      </Ripple>
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
      />
    </View>
  );
}

const internalStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  logoImage: {
    width: 20,
    height: 20,
    borderRadius: 15,
    marginRight: 10,
  },
  cardHeaderTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.BLACK,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.GREY,
  },
  cardImage: {
    width: '100%',
    height: 150,
    alignSelf: 'center',
    marginTop: 10,
  },
});
