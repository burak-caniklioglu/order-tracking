import React from 'react';
import { Link } from 'react-router-dom';
import OrderItem from '../OrderItem';
import SubHeader from '../subHeader';

function OrderArea() {
  return (
    <div className="p-[32px]">
      <div className="flex">
        <SubHeader>Accepted</SubHeader>
      </div>

      <div className="flex justify-between mb-[28px] ">
        <div className="secondary">
          <div className="flex justify-center items-center p-2">
            <div className="cursor-pointer mx-[15px]">
              <div className="w-[1rem] rounded-sm bg-black h-[2px] mb-[3px]"></div>
              <div className="w-[1rem] rounded-sm bg-black h-[2px]"></div>
              <div className="w-[1rem] rounded-sm bg-black h-[2px] mt-[3px]"></div>
            </div>

            <div className="font-semibold">Showing 10 Orders</div>
          </div>
        </div>
        <Link to="/createOrder">
          <div className="primary flex items-center px-4 py-2 font-semibold">
            Add New Order
          </div>
        </Link>
      </div>
      <div className="mb-[20px] ">
        <hr />
      </div>

      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
  );
}

export default OrderArea;
