import React from 'react';
import Printer from '../../constants/icons/printer';
import propTypes from 'prop-types';

function OrderItem({ item }) {
  return (
    <div className="border-[1.5px] rounded-md px-[43px] py-[1rem] my-[10px]">
      <div className="grid  gap-5 grid-temp">
        <div>
          <div className="order-header ">Order Number</div>
          <div className="order-answer">#{item.id}</div>
        </div>
        <div>
          <div className="order-header ">Date & Time</div>
          <div className="order-answer">{item.date}</div>
        </div>
        <div>
          <div className="order-header ">Name</div>
          <div className="order-answer">{item.name}</div>
        </div>
        <div>
          <div className="order-header ">Contact</div>
          <div className="order-answer">{item.contact}</div>
        </div>
        <div>
          <div className="order-header ">Trans Type</div>
          <div className="order-answer">{item.transType}</div>
        </div>
        <div>
          <div className="order-header ">Amount</div>
          <div className="order-answer">
            {item.orderItems.reduce((a, c) => a + c.cartQuantity * c.price, 0)}$
          </div>
        </div>
      </div>

      <div className="my-[40px] ">
        <div className="flex flex-wrap gap-2 py-[10px]">
          <div className="order-header w-[80px]">Ordered İtems</div>
          {item.orderItems.map((product, i) => (
            <div key={i} className="food-answer">
              {product.name} X {product.cartQuantity}
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="flex justify-between ">
          <div>
            <div className="order-header ">
              Additional information from customer
            </div>
            <div className="order-answer">
              {item.message}
            </div>
          </div>
          <div className="flex items-end">
            <div className="mr-10">
              <Printer />
            </div>
            <div className="primary flex items-center px-4 py-2 font-semibold">
              Move to Cooking
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

OrderItem.propTypes = {
  item: propTypes.shape().isRequired,
};

export default OrderItem;
