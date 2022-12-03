import React, { useState, useMemo } from 'react';
import SubHeader from '../subHeader';
import { useForm } from 'react-hook-form';
import data from '../../utils/data';
import Arrow from '../../constants/icons/arrow';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '../Checkbox';
import CartTemp from '../CartTemp';
import moment from 'moment/moment';
import { addToOrder } from '../../features/orderSlice';
import { clearCart } from '../../features/cartSlice';

function CreateForm() {
  const { meals } = data;
  const tempRandomID = () => {
    return Math.floor(Math.random() * 1000000);
  };
  const randomID = useMemo(() => tempRandomID(), []);
  const date = moment().format('DD/MM/YYYY [ at ] hh:mm a');
  const [transType, setTransType] = useState('Delivery');
  const [isOpen, setIsOpen] = useState(false);
  const [control, setControl] = useState('');
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const submitHandler = ({ name, contact, message, transType }) => {
    if (cartItems.length === 0) {
      return alert('Please add one least meal');
    }

    const orderItem = {
      name,
      contact,
      message,
      transType,
      orderItems: cartItems,
      date: date,
      id: randomID,
    };

    dispatch(addToOrder(orderItem));

    dispatch(clearCart());

    navigate('/');
  };

  return (
    <div className="p-[32px]">
      <div className="flex">
        <SubHeader>Create Order</SubHeader>
      </div>

      <form
        className=" flex flex-col md:flex-row  gap-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div
          className="w-full md:w-1/2 md:border-r
				 border-[#EBEBEB] "
        >
          <div
            className={
              {
                /* mt-[-10px] */
              }
            }
          >
            <table className="w-1/2 ">
              <tbody>
                <tr className="h-[35px] ">
                  <td className="order-answer ">Order Number:</td>
                  <td className="order-header ">#{randomID}</td>
                </tr>
                <tr>
                  <td className="order-answer ">Date & Time:</td>
                  <td className="order-header ">{date}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-[97%] ">
            <div>
              <div className="mt-[32px]">
                <label className="order-answer" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', {
                    required: 'Please enter name',
                    onChange:(e) => setControl(e.target.value)
                  })}
                  
                  className="w-full mt-[8px] rounded-md p-3 outline-none border border-[#CCCCCC]"
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}
                    {console.log(errors.name)}</div>
									
                )}
              </div>
              <div className="mt-[32px]">
                <label className="order-answer" htmlFor="contact">
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  {...register('contact', {
                    required: 'Please enter your phone number',
                    onChange:(e) => setControl(e.target.value)
                  })}
                  className="w-full mt-[8px] rounded-md p-3 outline-none border border-[#CCCCCC]"
                />
                {errors.contact && (
                  <div className="text-red-500">{errors.contact.message}</div>
                )}
              </div>

              <div className="mb-[25px]">
                <div className="text-[23px] text-[#171719] mt-[25px] mb-[20px]">
                  Trans Type
                </div>
                <div className="flex">
                  {['Delivery', 'Takeaway'].map((item, i) => (
                    <div key={i} className="flex items-center  mr-[60px]">
                      <input
                        type="radio"
                        name="transMethod"
                        id={item}
                        value={item}
                        className="mr-[8px] text-[#171719]"
                        {...register('transType', {
                          required: 'Please select at least one',
                        })}
                        checked={transType === item}
                        onChange={() => setTransType(item)}
                      />
                      <label className="cursor-pointer" htmlFor={item}>
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-[25px]">
                <label className="mb-[13px]" htmlFor="message">
                  Message to client
                </label>
                <textarea
                  maxLength="60"
                  type="text"
                  id="message"
                  {...register('message',{
                    onChange:(e) => setControl(e.target.value)
                  })}
                  className="w-full resize-none rounded-md outline-none p-3 h-[141px] border  border-[#CCCCCC]"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <div className="text-[#171719] mb-[13px]">Order Items</div>

                <div className="" onClick={() => setIsOpen(!isOpen)}>
                  <div className="border rounded-md border-[#CCCCCC] min-h-[50px] flex items-center  justify-between px-4 mb-[3px]">
                    <div className="order-header">
                      {isOpen
                        ? cartItems.map((item, i) => (
                          <span key={i}>{item.name}, </span>
                        ))
                        : 'Pending'}
                    </div>
                    <div className="cursor-pointer">
                      <Arrow />
                    </div>
                  </div>
                </div>

                {isOpen ? (
                  <div className="w-full h-[333px] border rounded-sm border-[#CCCCCC] p-[20px] overflow-y-scroll mt-[-3px]">
                    {meals.map((item, i) => (
                      <Checkbox key={i} item={item} />
                    ))}
                  </div>
                ) : (
                  <>
                    {cartItems.map((item, i) => (
                      <CartTemp key={i} item={item} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full md:w-1/2">
          <div className="bg-[#F6F6F6] md:ml-[5%] px-[5%] py-[26px] rounded-md mb-[24px]">
            <div className="order-answer font-[600] mb-[29px]">
              Delivery Details
            </div>
            <table className="w-full">
              <tbody>
                <tr className=" h-[28px] ">
                  <td className="order-header w-[44%]">Order Items</td>
                  <td className="order-header w-[44%]">Number</td>
                  <td className="order-header ">Cost</td>
                </tr>

                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <tr key={item.id} className="h-[28px] ">
                      <td className="order-answer w-[44%]">{item.name}</td>
                      <td className="order-answer w-[44%]">
                        {item.cartQuantity}
                      </td>
                      <td className="order-answer ">
                        {item.price * item.cartQuantity}$
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="h-[28px] ">
                    <td className="order-answer w-[44%]">-</td>
                    <td className="order-answer w-[44%]">-</td>
                    <td className="order-answer ">-</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="bg-[#F6F6F6] md:ml-[5%] px-[5%] py-4 mb-[32px] rounded-md">
            <div className="flex justify-between">
              <div className="text-[24px]">Total Amount:</div>
              <div className="mr-[6%] text-[24px]">
                {cartItems.length > 0 ? (
                  <>
                    <span>
                      {cartItems.reduce(
                        (a, c) => a + c.cartQuantity * c.price,
                        0,
                      )}
                    </span>
                    <span>$</span>
                  </>
                ) : (
                  <span>-</span>
                )}
              </div>
            </div>
          </div>

          <div className=" md:ml-[5%]">
            <div className="flex justify-end ">
              {control  && (
                <button
                  onClick={() => {navigate('/');
                    dispatch(clearCart());}}
                  className=" w-1/2 flex justify-center text-[17px] text-[#737376] py-[20px] border border-[#CCCCCC] rounded-md"
                >
                  Cancel
                </button>
              )}

              <button
                type="submit"
                className="bg-[#2A71FA] w-1/2 ml-4 flex justify-center text-[17px] text-[#FFF] py-[20px] border rounded-md"
                style={{ backgroundColor: control  && '#0DC74E' }}
              >
                Add Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
