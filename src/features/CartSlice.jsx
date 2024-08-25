import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, selectedColor, quantity,stocks }  = action.payload;
            const existingItem = state.cart.find(item => item.id === id && item.selectedColor === selectedColor);
      
            if (existingItem) {
              existingItem.quantity = Math.min(existingItem.quantity + quantity, stocks);
            } else {
              state.cart.push({ ...action.payload, quantity: Math.min(quantity, stocks) });
            }
          },
          removeCartItem: (state, action) => {
              const { selectedColor, id } = action.payload;
              state.cart = state.cart.filter(item => item?.id == id ? item?.selectedColor !== selectedColor : item);
          },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeCartItem } = cartSlice.actions

export default cartSlice.reducer