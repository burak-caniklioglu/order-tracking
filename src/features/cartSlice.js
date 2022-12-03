import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  cartItems: Cookies.get('cartItems')
    ? JSON.parse(Cookies.get('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
      }
      Cookies.set('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        );

        state.cartItems = nextCartItems;
      }

      Cookies.set('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id,
          );

          state.cartItems = nextCartItems;
        }
        Cookies.set('cartItems', JSON.stringify(state.cartItems));
        return state;
      });
    },
    clearCart(state) {
      state.cartItems = [];
      Cookies.set('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
