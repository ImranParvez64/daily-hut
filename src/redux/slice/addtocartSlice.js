import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const addtocartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
<<<<<<< HEAD
    addToCart: (state, action) => {
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
=======
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
>>>>>>> d3d9b06df8d40f53d365696d498957a61a53e569
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },

    // 🔼 Quantity বাড়ানো
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    // 🔽 Quantity কমানো
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = addtocartSlice.actions;

export default addtocartSlice.reducer;
