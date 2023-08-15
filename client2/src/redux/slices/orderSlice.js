import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ContactsInfo: {},
  DeliveryInfo: {
    area: "",
    city: "",
    warehouse: "",
  },
  combinedData: {},
  orderProduct: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addContactsInfo: (state, action) => {
      state.ContactsInfo = action.payload;
    },
    addDeliveryArea: (state, action) => ({
      ...state,
      DeliveryInfo: {
        ...state.DeliveryInfo,
        area: action.payload,
      },
    }),
    addDeliveryCity: (state, action) => ({
      ...state,
      DeliveryInfo: {
        ...state.DeliveryInfo,
        city: action.payload,
      },
    }),
    addDeliveryWarehouse: (state, action) => ({
      ...state,
      DeliveryInfo: {
        ...state.DeliveryInfo,
        warehouse: action.payload,
      },
    }),
    addCombinedData: (state, action) => ({
      ...state,
      combinedData: action.payload
    }),
    addOrderProduct: (state, action) => {
      state.orderProduct = action.payload;
    },
  },
});

export const {
  addContactsInfo,
  addDeliveryArea,
  addDeliveryCity,
  addDeliveryWarehouse,
  addCombinedData,
  addOrderProduct,
} = orderSlice.actions;

export default orderSlice.reducer;
