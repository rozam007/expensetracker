import { createSlice } from '@reduxjs/toolkit'
import { initialState } from '../InitialState'

export const DelSlice = createSlice({
  name: 'del',
  initialState: initialState,
  reducers: {
    DELTRANSACTION: (state,action) => {
        const de = state.filter(transaction => action.id !== transaction.id);
        state = state + de;
    }
  }
})

// Action creators are generated for each case reducer function
export const { DELTRANSACTION } = DelSlice.actions

export default DelSlice.reducer