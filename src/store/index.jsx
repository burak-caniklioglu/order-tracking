import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import orderReducer from '../features/orderSlice';
import themeReducer from '../features/themeSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    theme: themeReducer,
  },
});
