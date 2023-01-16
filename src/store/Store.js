import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducer'


// const reducer = {
//     trans: AddSlice
//   }

const store = configureStore({
  reducer: rootReducer
})

export default store;