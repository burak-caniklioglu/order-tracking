import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const order = useSelector((state) => state.order);
  const [subHeader, setSubHeader] = useState({
    objects: [
      { name: 'New Order', count: 0 },
      { name: 'Accepted', count: order.length },
      { name: 'Cooking', count: 3 },
      { name: 'Parcel Ready', count: 3 },
      { name: 'Delivered', count: 3 },
      { name: 'Completed', count: 3 },
    ],
    activeObject:
      window.location.pathname === '/createOrder'
        ? { name: 'New Order', count: 0 }
        : { name: 'Accepted', count: order.length },
  });


  const navigate = useNavigate();

  const toggleActive = (index) => {
    setSubHeader({ ...subHeader, activeObject: subHeader.objects[index] });
  };

  const handleClick = (index) => {
    toggleActive(index);
  };

  return (
    <aside
      className="bg-[#F6F6F6] w-[309px] h-[100vh] border
		border-[#CCCCCC]"
    >
      <div className="px-[29px] mt-[1rem]">
        <h3 className="text-[30px] mb-[27px]">Orders</h3>

        {subHeader.objects.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div
              className="text-[18px] mb-[27px] font-semibold cursor-pointer "
              style={{
                color: subHeader.activeObject.name === item.name && '#2A71FA',
              }}
              onClick={() => {
                handleClick(index);
                item.name === 'Accepted' && navigate('/');
                item.name === 'New Order' && navigate('/createOrder');
              }}
            >
              {item.name}
            </div>
            <div className="text-[18px] text-[#B4B4B5]">{item.count}</div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SideBar;
