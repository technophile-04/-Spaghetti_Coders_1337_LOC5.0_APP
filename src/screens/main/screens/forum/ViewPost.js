import React, {useEffect} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Header from '../../../../components/Header';
import colors from '../../../../styles/colors';
import styles from '../../../../styles/styles';
import constants from '../../../../utility/constants';
import global from '../../../../utility/global';

const accountInfo = {
  name: "Farmer's Name",
  location: 'Location',
  image: require('../../../../assets/images/logo.jpg'),
};

const dataOfPost = {
  title: 'Tomato Late Blight occured nearby',
  description: 'Learn more about the disease and how to prevent it',
  image: require('../../../../assets/sample/late_blight.jpg'),
  numberOfLikes: 10,
};

const dataOfComments = [
  {
    id: 1,
    name: "Farmer's Name",
    location: 'Location',
    image: require('../../../../assets/images/logo.jpg'),
    comment:
      'Your Idea should be based on the problem statements which will be released by the Hackanova 2.0 Organizing team.',
    noOfLikes: 10,
  },
  {
    id: 2,
    name: "Farmer's Name",
    location: 'Location',
    image: require('../../../../assets/images/logo.jpg'),
    comment:
      'Your Idea should be based on the problem statements which will be released by the Hackanova 2.0 Organizing team',
    noOfLikes: 10,
  },
  {
    id: 3,
    name: "Farmer's Name",
    location: 'Location',
    image: require('../../../../assets/images/logo.jpg'),
    comment:
      'Your Idea should be based on the problem statements which will be released by the Hackanova 2.0 Organizing team',
    noOfLikes: 10,
  },
];

export default function ViewPost({navigation}) {
  const [isLiked, setIsLiked] = React.useState(false);

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          title={'Potato Late Blight'}
          showBackButton={true}
          navigation={navigation}
        />
      ),
    });
  }, []);

  const changeLiked = () => {
    setIsLiked(!isLiked);
  };

  const renderComments = item => {
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
              <Text style={{fontSize: 12,color:colors.GREY}}>
                {'  '}· {item.location}
              </Text>
            </View>
          </View>
        </View>
        <Text style={{fontSize: 14, fontWeight: 'normal', marginTop: 10,color:colors.GREY}}>
          {item.comment}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}>
          {isLiked ? (
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
                changeLiked();
              }}>
              {global.drawIcon(
                constants.IC_FEATHER,
                'thumbs-up',
                20,
                colors.PRIMARY,
              )}
            </Ripple>
          ) : (
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
                changeLiked();
              }}>
              {global.drawIcon(
                constants.IC_FEATHER,
                'thumbs-up',
                20,
                colors.GREY,
              )}
            </Ripple>
          )}
          <Text style={{fontSize: 14, color: colors.BLACK}}>
            {item.noOfLikes} Likes
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={[styles.styleFull]}>
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
              <Text style={{fontSize: 12}}>
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
            {isLiked ? (
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
                  changeLiked();
                }}>
                {global.drawIcon(
                  constants.IC_FEATHER,
                  'thumbs-up',
                  20,
                  colors.PRIMARY,
                )}
              </Ripple>
            ) : (
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
                  changeLiked();
                }}>
                {global.drawIcon(
                  constants.IC_FEATHER,
                  'thumbs-up',
                  20,
                  colors.GREY,
                )}
              </Ripple>
            )}
            <Text style={{fontSize: 14, color: colors.BLACK}}>
              {dataOfPost.numberOfLikes} Likes
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
          data={dataOfComments}
          renderItem={({item}) => renderComments(item)}
          keyExtractor={item => item.id}
          scrollEnabled={true}
          style={{paddingBottom: 60}}
        />
      </View>
      <View style={internalStyles.fixedBottomTextInput}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={accountInfo.image}
            style={internalStyles.logoOfComment}
            resizeMode="contain"
          />
          <View style={{marginLeft: 10, flex: 1}}>
            <TextInput
              placeholder="Write a comment..."
              placeholderTextColor={colors.GREY}
              style={{
                fontSize: 14,
                color: colors.BLACK,
                flex: 1,
                height: 40,
                padding: 0,
              }}
            />
          </View>
        </View>
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
