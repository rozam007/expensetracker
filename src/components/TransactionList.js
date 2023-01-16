import { Transaction } from './Transaction';
import { initialState } from '../InitialState';
import { useSelector } from 'react-redux';

export const TransactionList = () => {
  // console.log(initialState.transactions);
  // const {ADD, DEL} = useSelector(state => state);
  // // initialState.push(ADD);
  // // console.log('TransactionList: ',ADD);
  // console.log('ADD:', ADD);
  return (
    <>
      <h3>History</h3>
      <ul className="transactions">
        {initialState.map(Singletransaction => (<Transaction transaction={Singletransaction}/>))}
      </ul>
    </>
  )
}
