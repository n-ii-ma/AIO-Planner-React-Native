import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Card} from 'react-native-paper';

import {selectTransactions} from '../features/transaction/transactionsSlice';

const IncomeExpenses = () => {
  const transactions = useSelector(selectTransactions);

  // Get the amount of each transaction
  const transactionAmount = transactions.map(transaction => transaction.amount);

  // Add the positive income values together
  const income = transactionAmount
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // Add the negative expense values together
  const expense = (
    transactionAmount
      .filter(item => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <Card elevation={10} style={styles.card}>
      <View style={styles.container}>
        <View style={styles.incomeContainer}>
          <Text style={styles.incomeExpenseTitle}>Income</Text>
          <Text style={styles.incomeAmount}>${income}</Text>
        </View>
        <View style={styles.expenseContainer}>
          <Text style={styles.incomeExpenseTitle}>Expense</Text>
          <Text style={styles.expenseAmount}>${expense}</Text>
        </View>
      </View>
    </Card>
  );
};

export default IncomeExpenses;

const styles = StyleSheet.create({
  card: {
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  incomeContainer: {
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#dedede',
    width: '50%',
  },
  expenseContainer: {
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  incomeExpenseTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  incomeAmount: {
    color: '#2ecc71',
    fontSize: 22,
  },
  expenseAmount: {
    color: '#c0392b',
    fontSize: 22,
  },
});
