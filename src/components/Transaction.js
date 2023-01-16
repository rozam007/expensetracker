// import React, { useContext } from 'react';
// import { GlobalContext } from '../context/GobalState';
import { DELTRANSACTION } from '../reducer/DeleteTrans';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

export const Transaction = ({transaction}) => {
  console.log('transaction: ', transaction);
  const dispatch = useDispatch();
  return (
    <>
      <li className='list-item'>
          <div>{transaction.name}</div> <div>{transaction.amount}</div> <div><button onClick={() => {dispatch(DELTRANSACTION({id: transaction.id}))}} className="cross-btn">x</button></div>
      </li>
      <br />
    </>
  )
}
