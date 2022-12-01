import React from 'react';
import Printer from '../../constants/icons/printer';

function OrderItem() {
  return (
    <div className="border-[1.5px] rounded-md px-[43px] py-[1rem] my-[10px]">
      <div className="grid  gap-5 grid-temp">
        <div>
          <div className="order-header ">Order Number</div>
          <div className="order-answer">#988123</div>
        </div>
        <div>
          <div className="order-header ">Date & Time</div>
          <div className="order-answer">01/01/2020 at 2:14Pm</div>
        </div>
        <div>
          <div className="order-header ">Name</div>
          <div className="order-answer">Devansh Mittale</div>
        </div>
        <div>
          <div className="order-header ">Contact</div>
          <div className="order-answer">+91 5364777157</div>
        </div>
        <div>
          <div className="order-header ">Trans Type</div>
          <div className="order-answer">Delivery</div>
        </div>
        <div>
          <div className="order-header ">Amount</div>
          <div className="order-answer">455$ COD</div>
        </div>
      </div>

      <div className="my-[40px] ">
        <div className="flex flex-wrap gap-2 py-[10px]">
          <div className="order-header w-[80px]">Ordered İtems</div>
          <div className="food-answer">Paneer</div>
          <div className="food-answer">Paneer</div>
          <div className="food-answer">Paneer</div>
          <div className="food-answer">Paneer</div>
          <div className="food-answer">Paneer</div>
        </div>
      </div>

      <div className="">
        <div className="flex justify-between ">
          <div>
            <div className="order-header ">
              Additional information from customer
            </div>
            <div className="order-answer">
              Please send salad and green chantni with 2 paper dish.
            </div>
          </div>
          <div className="flex items-end">
            <div className='mr-10'><Printer /></div>
            <div className="primary flex items-center px-4 py-2 font-semibold">
              Move to Cooking
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
