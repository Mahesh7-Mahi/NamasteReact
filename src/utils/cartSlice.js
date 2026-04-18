import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: []
    },
    reducers: {
        //mutating the state here
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        //originalState = {items: ["Pizza"]}
        clearCart: (state) => {
            //RTK- either Mutate the existing state or return the new state
            //state.items.length = 0; // originalState []

            return {items: []}; //this new [] will be replaced inside originalState = []
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer