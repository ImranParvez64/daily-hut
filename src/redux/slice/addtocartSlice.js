// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // cart এ থাকা প্রোডাক্টসমূহ
  totalQuantity: 0, // মোট প্রোডাক্টের সংখ্যা
  totalAmount: 0, // মোট মূল্য
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addToCart: (state, action) => {
  const product = action.payload;
  const existingItem = state.items.find(item => item.id === product.id);

  const qtyToAdd = product.quantity || 1;
  const totalPriceToAdd = product.price * qtyToAdd;

  if (existingItem) {
    existingItem.quantity += qtyToAdd;
    existingItem.totalPrice += totalPriceToAdd;
  } else {
    state.items.push({
      ...product,
      quantity: qtyToAdd,
      totalPrice: totalPriceToAdd,
    });
  }

  state.totalQuantity += qtyToAdd;
  state.totalAmount += totalPriceToAdd;
},
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity -= 1;
        state.totalAmount -= existingItem.price;

        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
