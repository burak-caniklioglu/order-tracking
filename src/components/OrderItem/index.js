import React from 'react';
import Printer from '../../constants/icons/printer';
import propTypes from 'prop-types';

function OrderItem({ item }) {
  return (
    <div className="border-[1.5px] rounded-md px-[43px] py-[1rem] my-[10px]">
      <div className="grid  gap-5 grid-temp">
        <div>
          <div className="order-header text-sm sm:text-[17px]">Order Number</div>
          <div className="order-answer text-sm sm:text-[18px] ">#{item.id}</div>
        </div>
        <div>
          <div className="order-header text-sm sm:text-[17px] ">Date & Time</div>
          <div className="order-answer text-sm sm:text-[18px]">{item.date}</div>
        </div>
        <div>
          <div className="order-header text-sm sm:text-[17px] ">Name</div>
          <div className="order-answer text-sm sm:text-[18px]">{item.name}</div>
        </div>
        <div>
          <div className="order-header text-sm sm:text-[17px] ">Contact</div>
          <div className="order-answer text-sm sm:text-[18px]">{item.contact}</div>
        </div>
        <div>
          <div className="order-header text-sm sm:text-[17px] ">Trans Type</div>
          <div className="order-answer text-sm sm:text-[18px]">{item.transType}</div>
        </div>
        <div>
          <div className="order-header text-sm sm:text-[17px] ">Amount</div>
          <div className="order-answer text-sm sm:text-[18px]">
            {item.orderItems.reduce((a, c) => a + c.cartQuantity * c.price, 0)}$
          </div>
        </div>
      </div>

      <div className="my-[40px] ">
        <div className="flex flex-wrap gap-2 py-[10px]">
          <div className="order-header text-sm sm:text-[17px] w-[80px]">Ordered İtems</div>
          {item.orderItems.map((product, i) => (
            <div key={i} className="food-answer text-sm sm:text-base">
              {product.name} X {product.cartQuantity}
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="flex flex-col md:flex-row justify-between ">
          <div>
            <div className="order-header text-sm sm:text-[17px] ">
              Additional information from customer
            </div>
            <textarea className="order-answer text-sm sm:text-[18px] w-full overflow-hidden resize-none mb-4 md:mb-0">
              {item.message}
            </textarea>
          </div>
          <div className="flex items-end">
            <div className="mr-10">
              <Printer />
            </div>
            <div className="primary flex items-center px-4 py-2 font-semibold text-sm sm:text-base">
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
