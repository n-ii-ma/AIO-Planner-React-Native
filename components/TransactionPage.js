import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';

import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

const TransactionPage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </View>
    </ScrollView>
  );
};

export default TransactionPage;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 20,
    width: '90%',
    marginBottom: 30,
  },
});
