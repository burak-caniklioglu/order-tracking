import React from 'react';
import propTypes from 'prop-types';
import { addToCart, removeFromCart } from '../../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function Checkbox({ item }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="flex items-center mb-[12px] ">
      <input
        type="checkbox"
        name="transMethod"
        id={item.name}
        value={item.name}
        checked={
          cartItems?.find((product) => product.name === item.name)
        }
        onClick={
          !cartItems?.find((product) => product.name === item.name)
            ? () => dispatch(addToCart(item))
            : () => dispatch(removeFromCart(item))
        }
        className="mr-[8px] text-[#171719]"
      />
      <label className='cursor-pointer' htmlFor={item.name}>{item.name}</label>
    </div>
  );
}

Checkbox.propTypes = {
  item: propTypes.shape().isRequired,
};
export default Checkbox;
