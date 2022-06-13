import {StyleSheet, View} from 'react-native';
import React from 'react';

import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

const TransactionPage = () => {
  return (
    <View style={styles.container}>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </View>
  );
};

export default TransactionPage;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '90%',
    marginBottom: 30,
  },
});
