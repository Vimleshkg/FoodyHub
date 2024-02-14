import { createSlice } from "@reduxjs/toolkit";
 
   /*return arrItem.filter((e,i)=>{
          return e!==item;
    })
    */
const remove=(item, arrItem)=>{
    
  for(let i=arrItem.length-1 ; i>=0; i--)
  {
        if(arrItem[i].card?.info?.name == item)
         {
            arrItem.splice(i,1);
            break;
         }
  }
    
   return arrItem;
}

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state, action)=> { state.items.push(action.payload) },
        removeItem: (state,action) =>{state.items = remove(action.payload, state.items)},
        clearCart : (state, action ) => {state=[] } 
    }

})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;