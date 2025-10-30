


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Fetch all products first, then find single
export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id) => {
    const res = await fetch(`/products.json${id}`);
    return res.json();
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    item: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
