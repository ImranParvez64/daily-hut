import { configureStore } from "@reduxjs/toolkit";
import offersReducer from "./slice/offerSlice";
import productReducer from "./slice/productSlice";
import categoriesReducer from "./slice/categoriesSlice";
import singleProductSliceReducer from "./slice/fetchSlice";


export const store = configureStore({
  reducer: {
    offers: offersReducer,
    products: productReducer,
    categories: categoriesReducer,
    product:singleProductSliceReducer
  },
});
