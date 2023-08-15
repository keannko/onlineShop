import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  fieldToChange: '',
  itemToChange: '',
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    addFieldToChange: (state, action) => {
      state.fieldToChange = action.payload;
    },
    addItemToChange: (state, action) => {
      state.itemToChange = action.payload;
    },
  },
});

export const { addProducts, addFieldToChange, addItemToChange } = productsSlice.actions;

export default productsSlice.reducer;
