import {createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: [],
  reducers: {
    addTransaction: (state, action) => {
      const newTransaction = {
        id: uuid.v4(),
        text: action.payload.text,
        amount: +action.payload.amount,
      };
      state.push(newTransaction);
    },
    deleteTransaction: (state, action) => {
      const transactionIndex = state.findIndex(
        transaction => transaction.id === action.payload.id,
      );

      if (transactionIndex !== -1) {
        state.splice(transactionIndex, 1);
      }
    },
  },
});

// Selector
export const selectTransactions = state => state.transactions;

// Actions
export const {addTransaction, deleteTransaction} = transactionsSlice.actions;

// Reducer
export default transactionsSlice.reducer;
