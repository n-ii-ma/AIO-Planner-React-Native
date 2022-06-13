import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Card} from 'react-native-paper';

import {selectTransactions} from '../features/transaction/transactionsSlice';
import Transaction from '../features/transaction/Transaction';

const TransactionList = () => {
  const transactions = useSelector(selectTransactions);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      {!transactions.length ? (
        <Text style={styles.noTransaction}>Nothing to Show</Text>
      ) : (
        transactions.map(transaction => (
          <View key={transaction.id} style={styles.transactionList}>
            <Card
              elevation={10}
              style={[
                styles.card,
                {
                  borderRightWidth: transaction.amount ? 5 : 0,
                  borderColor: transaction.amount > 0 ? '#2ecc71' : '#c0392b',
                },
              ]}>
              <Transaction transaction={transaction} />
            </Card>
          </View>
        ))
      )}
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
    marginBottom: 10,
  },
  noTransaction: {
    fontSize: 18,
    color: 'black',
  },
  transactionList: {
    textAlign: 'left',
  },
  card: {
    marginBottom: 10,
    padding: 10,
  },
});
