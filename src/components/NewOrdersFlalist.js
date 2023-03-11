import React from 'react';
import {FlatList} from 'react-native';
import colors from '../styles/colors';

const allOrders = [
  {
    orderID: '123456',
    orderName: 'Order Name',
    orderAmount: '$ 100',
    paymentMethod: 'Cash',
    status: 'Accept',
  },
  {
    orderID: '567891',
    orderName: 'Order Name',
    orderAmount: '$ 100',
    paymentMethod: 'Cash',
    status: 'Accept',
  },
  {
    orderID: '234567',
    orderName: 'Order Name',
    orderAmount: '$ 100',
    paymentMethod: 'Cash',
    status: 'Accept',
  },
  {
    orderID: '345676',
    orderName: 'Order Name',
    orderAmount: '$ 100',
    paymentMethod: 'Cash',
    status: 'Accept',
  },
  {
    orderID: '1011125',
    orderName: 'Order Name',
    orderAmount: '$ 100',
    paymentMethod: 'Cash',
    status: 'Accept',
  },
  {
    orderID: '1234562',
    orderName: 'Order Name',
    orderAmount: '$ 100',
    paymentMethod: 'Cash',
    status: 'Accept',
  },
  {
    orderID: '1234566',
    orderName: 'Order Name',
    orderAmount: '$ 100',
    paymentMethod: 'Cash',
    status: 'Accept',
  },
  {
    orderID: '1234563',
    orderName: 'Order Name',
    orderAmount: '$ 100',
    paymentMethod: 'Cash',
    status: 'Accept',
  },
];

export default function NewOrdersFlatlist() {
  const handleChange = value => {
    console.log(value);
  };

  return (
    <FlatList
      data={allOrders}
      style={{
        paddingVertical: 10,
        backgroundColor: colors.BACKGROUND,
      }}
      renderItem={({item}) => (
        <FlatlistOrderItem
          orderID={item.orderID}
          orderName={item.orderName}
          orderAmount={item.orderAmount}
          paymentMethod={item.paymentMethod}
          status={item.status}
          onChange={handleChange}
        />
      )}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.orderID}
    />
  );
}
