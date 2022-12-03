import { createSlice } from '@reduxjs/toolkit';


const initialState = localStorage.getItem('orderItems')
  ? JSON.parse(localStorage.getItem('orderItems'))
  : [];

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder(state, action) {
      state = [ action.payload,...state,];
      localStorage.setItem('orderItems', JSON.stringify(state));
      return state;
    },
  },
});

export const { addToOrder } = orderSlice.actions;

export default orderSlice.reducer;
