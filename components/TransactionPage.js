import {StyleSheet, View} from 'react-native';
import React from 'react';

import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';

const TransactionPage = () => {
  return (
    <View style={styles.container}>
      <Balance />
      <IncomeExpenses />
    </View>
  );
};

export default TransactionPage;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '85%',
  },
});
