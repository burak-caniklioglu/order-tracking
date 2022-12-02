import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = Cookies.get('orderItems')
  ? JSON.parse(Cookies.get('orderItems'))
  : [];

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder(state, action) {
      state = [ action.payload,...state,];
      Cookies.set('orderItems', JSON.stringify(state));
      return state;
    },
  },
});

export const { addToOrder } = orderSlice.actions;

export default orderSlice.reducer;
