'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// public থেকে offers fetch করার async thunk
export const fetchOffers = createAsyncThunk(
  "offers/fetchOffers",
  async () => {
    const res = await fetch("/offer.json"); // public folder থেকে fetch
    const data = await res.json();
    return data;
  }
);

const offersSlice = createSlice({
  name: "offers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default offersSlice.reducer;
