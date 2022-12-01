import React, { useState } from 'react';
import SubHeader from '../subHeader';
import { useForm } from 'react-hook-form';
import Arrow from '../../constants/icons/arrow';
import Cancel from '../../constants/icons/cancel';

function CreateForm() {
  const [transType, setTransType] = useState('Delivery');
  const [isOpen, setIsOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ name }) => {
    console.log(name);
  };
  return (
    <div className="p-[32px]">
      <div className="flex">
        <SubHeader>Create Order</SubHeader>
      </div>

      <div className=" flex gap-4">
        <div
          className="w-1/2 border-r
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
                  <td className="order-header ">#988123</td>
                </tr>
                <tr>
                  <td className="order-answer ">Date & Time:</td>
                  <td className="order-header ">01/01/2020 at 3:27Pm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-[97%] ">
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="mt-[32px]">
                <label className="order-answer" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  autoFocus
                  {...register('name', {
                    required: 'Lütfen isim ve soyisminizi giriniz',
                  })}
                  className="w-full mt-[8px] rounded-md p-3 outline-none border border-[#CCCCCC]"
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </div>
              <div className="mt-[32px]">
                <label className="order-answer" htmlFor="contact">
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  autoFocus
                  {...register('contact', {
                    required: 'Lütfen isim ve soyisminizi giriniz',
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
                        value="delivery"
                        className="mr-[8px] text-[#171719]"
                        checked={transType === item}
                        onChange={() => setTransType(item)}
                      />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-[25px]">
                <label className="mb-[13px]" htmlFor="message">
                  Message to client
                </label>
                <textarea
                  type="text"
                  id="message"
                  {...register('message')}
                  className="w-full resize-none rounded-md outline-none p-3 h-[141px] border  border-[#CCCCCC]"
                  rows="3"
                ></textarea>
                {errors.message && (
                  <div className="text-red-500">{errors.message.message}</div>
                )}
              </div>

              <div>
                <div className="text-[#171719] mb-[13px]">Order Items</div>

                <div className="" onClick={() => setIsOpen(!isOpen)}>
                  <div className="border rounded-md border-[#CCCCCC] h-[50px] flex items-center  justify-between px-4 mb-[3px]">
                    <div className="order-header"> Pending</div>
                    <div>
                      <Arrow />
                    </div>
                  </div>
                </div>

                {isOpen ? (
                  <div className="w-full h-[333px] border rounded-sm border-[#CCCCCC] p-[20px] overflow-y-scroll mt-[-3px]">
                    {[
                      'Beef Stroganoff',
                      'Reuben',
                      'Sandwich',
                      'Waldorf Salad',
                      'French Fries',
                      'Caesar Salad',
                      'Chicken a la King',
                      'Lobster, Newburg',
                      'Salisbury Steak',
                      'Kebab',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center mb-[12px]">
                        <input
                          type="checkbox"
                          name="transMethod"
                          id={item}
                          value="delivery"
                          className="mr-[8px] text-[#171719]"
                        />
                        <label htmlFor={item}>{item}</label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className=" flex justify-between my-[21px]">
                      <div>Beef Stroganoff</div>
                      <div className="flex justify-center items-center">
                        <div>29$</div>
                        <div className="flex justify-between items-center w-[69px] ml-[46px] px-2 border border-[#0B69FF] rounded-xl">
                          <div className="order-header">-</div>
                          <div>1</div>
                          <div className="order-header">+</div>
                        </div>
                        <div className="ml-[30px]">
                          <Cancel />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between my-[21px]">
                      <div>Beef Stroganoff</div>
                      <div className="flex justify-center items-center">
                        <div>29$</div>
                        <div className="flex justify-between items-center w-[69px] ml-[46px] px-2 border border-[#0B69FF] rounded-xl">
                          <div className="order-header">-</div>
                          <div>1</div>
                          <div className="order-header">+</div>
                        </div>
                        <div className="ml-[30px]">
                          <Cancel />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className=" w-1/2">
          <div className="bg-[#F6F6F6] ml-[5%] px-[5%] py-[26px] rounded-md mb-[24px]">
            <div className="order-answer font-[600] mb-[29px]">
              Delivery Details
            </div>
            <table className="w-full">
              <tr className=" h-[28px] ">
                <td className="order-header w-[44%]">Order Items</td>
                <td className="order-header w-[44%]">Number</td>
                <td className="order-header ">Cost</td>
              </tr>

              <tr className="h-[28px] ">
                <td className="order-answer w-[44%]">Beef Stroganoff</td>
                <td className="order-answer w-[44%]">1</td>
                <td className="order-answer ">29$</td>
              </tr>
              <tr className="h-[28px] ">
                <td className="order-answer w-[44%]">Beef Stroganoff</td>
                <td className="order-answer w-[44%]">1</td>
                <td className="order-answer ">29$</td>
              </tr>
              <tr className="h-[28px] ">
                <td className="order-answer w-[44%]">Beef Stroganoff</td>
                <td className="order-answer w-[44%]">1</td>
                <td className="order-answer ">29$</td>
              </tr>
            </table>
          </div>

          <div className="bg-[#F6F6F6] ml-[5%] px-[5%] py-4 mb-[32px] rounded-md">
            <div className="flex justify-between">
              <div className="text-[24px]">Total Amount:</div>
              <div className="mr-[6%] text-[24px]">84$</div>
            </div>
          </div>

          <div className=" ml-[5%]">
            <div className="flex justify-end ">
              <div className=" w-1/2 flex justify-center text-[17px] text-[#737376] py-[20px] border border-[#CCCCCC] rounded-md">Cancel</div>
              <div className="bg-[#2A71FA] w-1/2 ml-4 flex justify-center text-[17px] text-[#FFF] py-[20px] border rounded-md">Add Order</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
