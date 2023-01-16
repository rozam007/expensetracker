import { combineReducers } from "@reduxjs/toolkit";
import AddSlice from "./AddTrans";
import DelSlice from "./DeleteTrans";

const rootReducer =
    combineReducers({
        ADD: AddSlice,
        DEL: DelSlice
    })

export default rootReducer;