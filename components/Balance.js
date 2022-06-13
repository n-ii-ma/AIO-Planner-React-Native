import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {selectTransactions} from '../features/transaction/transactionsSlice';

const Balance = () => {
  const transactions = useSelector(selectTransactions);

  // Get the amount of each transaction
  const transactionAmount = transactions.map(transaction => transaction.amount);

  // Get the total amount
  const total = transactionAmount.reduce((acc, item) => (acc += item), 0);

  // Minus sign
  const sign = total < 0 && '-';

  return (
    <View>
      <Text style={styles.title}>Your Balance</Text>
      <Text style={styles.total}>
        {sign}${Math.abs(total).toFixed(2)}
      </Text>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
  },
  total: {
    fontSize: 32,
    fontWeight: '500',
    color: 'black',
  },
});
