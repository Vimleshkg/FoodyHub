import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './StoreSlice'

 const store =  configureStore({
     reducer:{
        cart:cartSlice,
     }
 });
 export default store;