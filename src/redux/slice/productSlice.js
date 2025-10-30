import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await fetch("/products.json");
  return await res.json();
});

const ProductSlice = createSlice({
  name: "products",
  initialState: { items: [], loading: false, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ProductSlice.reducer; // ✅ default export