import { createSlice, current } from '@reduxjs/toolkit'

export const AddSlice = createSlice({
    name: 'add',
    initialState: {transactions:[]},
    reducers: {
        ADDTRANSACTION: (state, action) => {
            let {payload}=action
            // let currState = current(state);
            console.log('AddTrans action: ', action);
            let currentState=current(state)
            return {...currentState,transactions:[...currentState?.transactions,{...payload}]}

            // const data = {
            //     id: action.id,
            //     name: action.name,
            //     amount: action.amount,
            //     type: action.type
            // };
            // state = data;
            // initialState.push(action.payload);
            // initialState = [...currState, {...action.payload}]
            // console.log('Add Trans initialstate: ', state);
            // console.log(initialState);
            // return {
            //     ...currState,
            //     initialState: [...initialState, { ...action.payload }]
            
        }
    }
})

// Action creators are generated for each case reducer function
export const { ADDTRANSACTION } = AddSlice.actions

export default AddSlice.reducer