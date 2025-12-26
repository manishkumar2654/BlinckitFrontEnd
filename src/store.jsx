import { configureStore } from "@reduxjs/toolkit";
import myRrducer from "./cartSlice";
const store = configureStore({
    reducer:{
        mycart:myRrducer
    }
})

export default store;