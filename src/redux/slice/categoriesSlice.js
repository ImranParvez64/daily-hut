// src/redux/slices/CategorySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async fetch for categories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const res = await fetch("/categories.json"); // public ফোল্ডারের categories.json
    return await res.json();
  }
);

const CategorySlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    loading: false,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.items = [];
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default CategorySlice.reducer; // ✅ default export
