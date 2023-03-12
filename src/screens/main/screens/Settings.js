import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import global from '../../../utility/global';
import styles from '../../../styles/styles';
import Ripple from 'react-native-material-ripple';
import constants from '../../../utility/constants';
import colors from '../../../styles/colors';
import fonts from '.././../../utility/fonts.js';
import Header from '../../../components/Header';
import {launchImageLibrary} from 'react-native-image-picker';
const list = [
  {
    name: 'Add User Data',
    screen: 'AddUser',
    icon: 'external-link',
  },
  {
    name: 'Existing User',
    screen: 'ExistingUser',
    icon: 'credit-card',
  },
];

const accountInfo = {
  name: 'Nihal',
  mobile: '+91 9136263741',
  email: 'nihalng786@gmail.com',
  location: 'Kolkata, India',
};
export default function Settings({navigation}) {
  const [logo, setLogo] = React.useState(null);

  useEffect(() => {
    drawToolbar();
  }, []);

  const drawToolbar = () => {
    navigation.setOptions({
      header: () => <Header title="Profile" navigation={navigation} />,
    });
  };

  const navigateTo = screen => {
    navigation.navigate(screen);
  };
  const showLogoutAlert = () => {
    global.showAlert('Logout', 'Are you sure you want to logout?', () => {
      global.storeItem(constants.USER_DATA, null);

      global.showMessage('Logout successfully', false);

      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'OnBoard'}],
        });
      }, 1000);
    });
  };

  const handleImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('response', response['assets'][0]);
        setLogo(response['assets'][0]);
        console.log('logo', logo);
      }
    });
  };

  const invitefriend = () => {
    console.log('invitefriend');
  };

  const getAccountInfo = () => {
    return (
      <View
        style={[
          internalStyles.twoColumn,
          {
            marginBottom: 29,
          },
        ]}>
        <View style={{flexDirection: 'row'}}>
          <Ripple
            style={internalStyles.rippleCamera}
            onPress={handleImagePicker}>
            {logo ? (
              <Image
                source={logo}
                style={internalStyles.logo}
                resizeMode="contain"
              />
            ) : (
              global.drawIcon(constants.IC_FEATHER, 'camera', 34, '#A6A6A6')
            )}
            <View style={internalStyles.plus}>
              <Text style={internalStyles.plusText}>+</Text>
            </View>
          </Ripple>

          <View>
            <Text style={internalStyles.name}>{accountInfo.name}</Text>

            <Text style={internalStyles.infoText}>{accountInfo.mobile}</Text>
            <Text style={[internalStyles.infoText]}>{accountInfo.email}</Text>
            <Text style={[internalStyles.infoText]}>
              {accountInfo.location}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        styles.styleFull,
        {
          paddingHorizontal: 15,
          marginTop: 10,
        },
      ]}>
      {getAccountInfo()}

      {list.map((item, index) => {
        return (
          <Ripple
            key={index}
            style={[
              internalStyles.twoColumn,
              internalStyles.ripple,
              {
                backgroundColor: colors.WHITE,
                paddingStart: 9,
              },
            ]}
            onPress={() => navigateTo(item.screen)}>
            <View style={{flexDirection: 'row'}}>
              {global.drawIcon(
                constants.IC_FEATHER,
                item.icon,
                19,
                colors.PRIMARY,
              )}

              <Text
                style={[
                  internalStyles.text,
                  {
                    color: colors.BLACK,
                    marginLeft: 19,
                  },
                ]}>
                {item.name}
              </Text>
            </View>
            {global.drawIcon(
              constants.IC_FEATHER,
              'chevron-right',
              20,
              '#A6A6A6',
            )}
          </Ripple>
        );
      })}

      <Ripple
        style={[
          internalStyles.twoColumn,
          internalStyles.ripple,
          {
            backgroundColor: colors.WHITE,
            paddingStart: 10,
          },
        ]}
        onPress={() => invitefriend()}>
        <View style={{flexDirection: 'row'}}>
          {global.drawIcon(constants.IC_FEATHER, 'link', 19, colors.PRIMARY)}

          <Text
            style={[
              internalStyles.text,
              {
                color: colors.BLACK,
                marginLeft: 19,
              },
            ]}>
            Invite A Friend
          </Text>
        </View>
        {global.drawIcon(constants.IC_FEATHER, 'chevron-right', 20, '#A6A6A6')}
      </Ripple>

      <Ripple
        style={[
          internalStyles.twoColumn,
          internalStyles.ripple,
          {
            backgroundColor: colors.SECONDARY,
            marginTop: 28,
            marginBottom: 10,
            paddingLeft: 18,
          },
        ]}
        onPress={() => showLogoutAlert()}>
        <Text
          style={[
            internalStyles.text,
            {
              color: colors.WHITE,
              fontWeight: 'bold',
            },
          ]}>
          {constants.TXT_LOGOUT}
        </Text>
        {global.drawIcon(constants.IC_FEATHER, 'log-out', 20, colors.WHITE)}
      </Ripple>
    </ScrollView>
  );
}

const internalStyles = StyleSheet.create({
  twoColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 12,
    alignItems: 'center',
  },
  rippleCamera: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    width: 69,
    height: 69,
    marginRight: 22,
  },
  logo: {
    width: 69,
    height: 69,
  },
  plus: {
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    borderRadius: 36,
    backgroundColor: colors.PRIMARY,
  },
  plusText: {
    fontSize: fonts._9,
    fontFamily: fonts.FONT_FAMILY.Bold,
    color: colors.WHITE,
  },
  name: {
    fontSize: fonts._12,
    fontFamily: fonts.FONT_FAMILY.Medium,
    fontWeight: '500',
    color: colors.BLACK,
  },
  infoText: {
    fontSize: fonts._9,
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '400',
    color: colors.BLACK,
  },
  ripple: {
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.FONT_FAMILY.Regular,
    marginLeft: 10,
  },
});
