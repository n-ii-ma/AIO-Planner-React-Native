import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {deleteTransaction} from './transactionsSlice';

const Transaction = ({transaction}) => {
  const dispatch = useDispatch();

  // Plus or minus sign
  const sign = transaction.amount > 0 ? '+' : '-';

  return (
    <View style={styles.container}>
      <View style={styles.transactionContainer}>
        <IconButton
          icon="delete"
          color="red"
          size={18}
          onPress={() => dispatch(deleteTransaction(transaction))}
          style={styles.iconButton}
        />
        <Text style={styles.transactionText}>{transaction.text}</Text>
      </View>
      <Text style={styles.transactionAmount}>
        {sign}${Math.abs(transaction.amount).toFixed(2)}
      </Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  transactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  transactionText: {
    fontSize: 18,
    color: 'black',
  },
  transactionAmount: {
    fontSize: 18,
    color: 'black',
  },
});
