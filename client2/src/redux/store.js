import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './slices/orderSlice';
import productsSlice from './slices/productsSlice';
import userSlice from './slices/userSlice';



const store = configureStore({
  reducer: {
    products: productsSlice,
    order: orderSlice,
    user: userSlice
  }
});

export default store;
