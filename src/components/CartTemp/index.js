import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from '../../features/cartSlice';

import Cancel from '../../constants/icons/cancel';

function CartTemp({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };
  return (
    <div key={item.id} className=" flex justify-between my-[21px]">
      <div>{item.name}</div>
      <div className="flex justify-center items-center">
        <div>{item.price}$</div>
        <div className="flex justify-between items-center w-[69px] ml-[46px] px-2 border border-[#0B69FF] rounded-xl">
          <div
            className="order-header cursor-pointer"
            onClick={() => handleDecreaseCart(item)}
          >
            -
          </div>
          <div>{item.cartQuantity}</div>
          <div
            className="order-header cursor-pointer"
            onClick={() => handleAddToCart(item)}
          >
            +
          </div>
        </div>
        <div
          className="ml-[30px] cursor-pointer "
          onClick={() => handleRemoveFromCart(item)}
        >
          <Cancel />
        </div>
      </div>
    </div>
  );
}

CartTemp.propTypes = {
  item: propTypes.shape().isRequired,
};

export default CartTemp;
