import React from 'react';
import { useSelector } from 'react-redux';
import { initialState } from '../InitialState';


export const IncomeExpenses = () => {
  const {ADD, DEL} = useSelector(state =>state);
  // initialState = initialState + ADD;
  // initialState = initialState + DEL;
  let income = 0;
  let expense = 0;

  const calculate = (Transactions) => {
    if(Transactions.type === 'income'){
      income += Transactions.amount;
    }
    else if(Transactions.type === 'expense'){
      expense += Transactions.amount;
    }
  } 

  initialState.map((transaction) => {calculate(transaction)})
  
  return (
    <div className='row row-expense'>
      <div className='col col-income'>
        <h3>Income</h3>
        <div className='income-text'>Rs {income}</div>
      </div>
      <div className='col col-expense'>
        <h3>Expense</h3>
        <div className='expense-text'>Rs {expense}</div>
      </div>
    </div>
  )
}
