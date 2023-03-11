import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../styles/colors';
import setOfStrings from '../../utility/screenStrings';

const data = [
  {
    shortForm: 'en',
    longForm: 'English',
  },
  {
    shortForm: 'hi',
    longForm: 'हिंदी',
  },
  {
    shortForm: 'ma',
    longForm: 'मराठी',
  },
];

export default function ChooseLanguage({navigation}) {
  const setText = shortForm => {
    setOfStrings.setLanguage(shortForm);
    navigation.navigate('Login', {JSON_CLICKED_ITEM: shortForm});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          margin: 10,
          color: colors.BLACK,
          fontWeight: 'bold',
        }}>
        Choose Language
      </Text>
      {data.map((item, index) => {
        return (
          <View style={{
            borderWidth: 0.6,
            borderolor: colors.GREY_LESS,
            width: '90%',
            textAlign: 'center',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            borderRadius: 5,
          }}> 
          <Text
            key={index}
            style={{
              fontSize: 20,
              margin: 10,
              color: colors.BLACK,
              
            }}
            onPress={() => setText(item.shortForm)}>
            {item.longForm}
          </Text>
          </View>
        );
      })}
    </View>
  );
}
