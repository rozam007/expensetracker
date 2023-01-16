import React, { useState} from 'react'
// import { GlobalContext } from '../context/GobalState';
import { uniqueId } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { ADDTRANSACTION } from '../reducer/AddTrans';
// import { type } from '@testing-library/user-event/dist/type';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    // const { addTransaction } = useContext(GlobalContext);

    const dispatch = useDispatch();


    const addtransaction = (type, evt) => {
        evt.preventDefault();

        // const data = {
        //     id: uniqueId(),
        //     name: text,
        //     amount: +amount,
        //     type: type
        // };

        // addTransaction(data);

        dispatch(ADDTRANSACTION({id: uniqueId(), name:text, amount: amount, type: type}))
        setText('');
        setAmount('');
    }

    return (
        <>
            <div>
                <h2>Add New Transactions</h2>
                <form className='transaction-form'>
                    <label>
                        Name
                        <div>
                            <input type="text" value={text}
                                onChange={(e) => setText(e.target.value)} />
                        </div>
                    </label>
                    <label>
                        Amount
                        <div>
                            <input type="number" value={amount}
                                onChange={(e) => setAmount(e.target.value)} />
                        </div>
                    </label>
                    <div>
                        <button type='button' className='income-btn' onClick={(evt) => {addtransaction('income', evt)}}>Add Income</button>
                        <button type='button' className='expense-btn' onClick={(evt) => {addtransaction('expense', evt)}}>Add Expense</button>
                    </div>
                </form>
            </div>
        </>
    )
}
