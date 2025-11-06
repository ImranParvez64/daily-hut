// src/redux/slice/addtocartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const addtocartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === product.id && item.size === product.size);

      const qtyToAdd = product.quantity || 1;
      const totalPriceToAdd = product.price * qtyToAdd;

      if (existingItem) {
        existingItem.quantity += qtyToAdd;
        existingItem.totalPrice += totalPriceToAdd;
      } else {
        state.cartItems.push({
          ...product,
          quantity: qtyToAdd,
          totalPrice: totalPriceToAdd,
        });
      }

      state.totalQuantity += qtyToAdd;
      state.totalAmount += totalPriceToAdd;
    },

    removeFromCart: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.totalPrice;
      }
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = addtocartSlice.actions;
export default addtocartSlice.reducer;
