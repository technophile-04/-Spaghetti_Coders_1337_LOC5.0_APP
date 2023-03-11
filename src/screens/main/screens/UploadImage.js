import React, {useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Linking, Alert} from 'react-native';
import ImagePicker from '../../../components/ImagePicker';
import constants from '../../../utility/constants';
import styles from '../../../styles/styles';
import global from '../../../utility/global';
import {useForm} from 'react-hook-form';
import Header from '../../../components/Header';
import PrimaryButton from '../../../components/PrimaryButton';
import Collapsible from 'react-native-collapsible';
import Ripple from 'react-native-material-ripple';
import colors from '../../../styles/colors';
import repos from '../../../repos/repos';
import setOfStrings from '../../../utility/screenStrings';
import BarcodeScanner from 'react-native-scan-barcode';


const apikey = {
  IMAGE: 'image',
};

export default function UploadImage({navigation}) {
  const [isLoading, setLoading] = React.useState(false);
  const [output, setOutput] = React.useState(null);
  const [isCollapsible, setCollapsible] = React.useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    drawToolbar();
  }, []);

  const drawToolbar = () => {
    navigation.setOptions({
      header: () => (
        <Header title="Check QR" navigation={navigation} />
      ),
    });
  };

  const onCheck = data => {
    console.log(data);
  };

  const check = data => {
    const data2 = new FormData();
    data2.append('image', data.image.uri);
    // console.log(data2);
    // global.isOnline().then(isNetworkAvailable => {
    //   if (!isNetworkAvailable)
    //     global.showMessage(constants.NO_INTERNET_SNACKBAR_MESSAGE, true, false);
    //   else {
    //     console.log('data2', data2);
    //     repos.doPredict(data2, onCheck);
    //   }
    // });
    setOutput({
      status: 'Success',
      result: 'With Vendor',
      manufacturer:
        'The manufacturer of the product is not known.�',
      product:
        'The product is not known.�',
    });
  };


  const getKeyValue = (key, value) => {
    return (
      <View style={internalStyles.inRow}>
        <View style={internalStyles.keyView}>
          <Text style={internalStyles.key}>{key} : </Text>
        </View>
        <View style={internalStyles.valueView}>
          <Text style={internalStyles.value}>{value}</Text>
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
          marginTop: 10,
          paddingHorizontal: 15,
          marginBottom: 10,
        },
      ]}>
      <ImagePicker
        name={apikey.IMAGE}
        title={'Image'}
        control={control}
        errors={errors}
        rules={{
          required: true,
        }}
        recomText={setOfStrings.recomSize}
        style={{marginBottom: 17}}
        disabled={isLoading}
      />
      {/* <BarcodeScanner
        style={{height: 500, width: '100%'}}
        onBarCodeRead={code => {
          Alert.alert(code.data);
        }}
        cameraType="back"
      /> */}
      <PrimaryButton
        title="Check"
        onPress={handleSubmit(check)}
        style={{marginBottom: 10, width: '100%'}}
      />

      {output && (
        <View style={internalStyles.whiteBgView}>
          <View style={internalStyles.inRowAndEnd}>
            <View style={{width: '90%'}}>
              <Text style={internalStyles.title}>
                Result : {output.result}
              </Text>
            </View>
            {isCollapsible ? (
              <Ripple
                onPress={() => {
                  setCollapsible(!isCollapsible);
                }}>
                {global.drawIcon(
                  constants.IC_FEATHER,
                  'chevron-down',
                  20,
                  colors.BLACK,
                )}
              </Ripple>
            ) : (
              <View>
                <Ripple
                  onPress={() => {
                    setCollapsible(!isCollapsible);
                  }}>
                  {global.drawIcon(
                    constants.IC_FEATHER,
                    'chevron-up',
                    20,
                    colors.BLACK,
                  )}
                </Ripple>
              </View>
            )}
          </View>
          <Collapsible collapsed={isCollapsible}>
            <View style={{marginTop: 10}}>
              {getKeyValue('Status', output.status)}
              {getKeyValue('Manufacturer', output.manufacturer)}
              {getKeyValue('Product', output.product)}
            </View>
          </Collapsible>
          <View style={{marginTop: 15, alignItems: 'center'}}>
            <Text style={{color:colors.BLACK}}>If you are not satisfied with the this result</Text>
              <Text style={{textDecorationLine:'underline',color:colors.RED}}>Don't Buy the Product</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const internalStyles = StyleSheet.create({
  whiteBgView: {
    backgroundColor: colors.WHITE,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  inRowAndEnd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  inRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  keyView: {
    width: '40%',
  },
  key: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  valueView: {
    width: '60%',
  },
  value: {
    fontSize: 14,
    color: colors.BLACK,
  },
});
