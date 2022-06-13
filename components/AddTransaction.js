import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {TextInput, Button} from 'react-native-paper';

import {addTransaction} from '../features/transaction/transactionsSlice';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!text || !amount) return;

    dispatch(
      addTransaction({
        text,
        amount,
      }),
    );

    setText('');
    setAmount('');
  };

  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Add New Transaction</Text>
      <TextInput
        value={text}
        onChangeText={text => setText(text)}
        label="Enter Text"
        mode="outlined"
        style={styles.textInput}
      />
      <TextInput
        value={amount}
        onChangeText={amount => setAmount(amount.replace(/[^-.0-9]/g, ''))}
        keyboardType="numeric"
        label="Enter Amount"
        mode="outlined"
      />
      <Text>(Positive: Income / Negative: Expense)</Text>
      <Button style={styles.button} mode="contained" onPress={handleSubmit}>
        Add
      </Button>
    </View>
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  constainer: {
    marginTop: 20,
  },
  title: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
    marginBottom: 10,
  },
  textInput: {
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
  },
});
