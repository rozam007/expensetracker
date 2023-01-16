import React from 'react';
import { useSelector } from 'react-redux';
import { initialState } from '../InitialState';


export const Balance = () => {
    const {ADD:{transactions},DEL} = useSelector(state => state);
    console.log(transactions,'consoleState')
    
    let income = 0;
    let expense = 0;

    const calculateAccumaltion=(array)=>{
        let hasIncoms=array()
        let incoms=hasIncoms?[...hasIncoms]:[]
        if(incoms?.length){
            let value=incoms?.reduce((p,c)=>{
                console.log(p,c,'iterat')
              return parseInt(p?.amount) +parseInt(c?.amount) })
            return value
        }
    }
    const filterIncome=()=>{
        if(transactions?.length){
return transactions?.filter((trans)=>trans?.type==='income')
        }
    }
    const fillterExpense=()=>{
        if(transactions?.length){
            return transactions?.filter((trans)=>trans?.type==='expense')
                    }   
    }
    
console.log(calculateAccumaltion(fillterExpense),'netIncome')
    return (
        <>
        {transactions?.map((transaction,ind)=>{
            return (
                <div key={ind}>
{transaction?.amount}
{transaction?.type}
{transaction?.id}
{transaction?.name}

                </div>
            )
        })}
            <div>
                <h2>Your Balance</h2>
                <div className='balance-val'>Rs {income - expense}</div>
            </div>
        </>
    )
}
