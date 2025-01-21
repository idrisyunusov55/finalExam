import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/productsSlice";
import wishSlice from "./reducers/wishSlice";




export const store = configureStore({
    reducer:{
        products:productsSlice,
        wish:wishSlice
    }
})


export default store