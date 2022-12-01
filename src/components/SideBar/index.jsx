import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function SideBar() {

  const [subHeader, setSubHeader] = useState({
    objects: [
      { name: 'New Order', count: 0 },
      { name: 'Accepted', count: 3 },
      { name: 'Cooking', count: 3 },
      { name: 'Parcel Ready', count: 3 },
      { name: 'Delivered', count: 3 },
      { name: 'Completed', count: 3 },
    ],
    activeObject: { name: 'Accepted', count: 3 },
  });

  // const navigate = useNavigate();

  const toggleActive = async (index) => {
    setSubHeader({ ...subHeader, activeObject: subHeader.objects[index] });
  };

  const toogleActiveStyle = (index) => {
    if (subHeader.activeObject.name === subHeader.objects[index].name) {
      return 'text-[18px] mb-[27px] font-semibold cursor-pointer text-[#2A71FA]';
    } else {
      return 'text-[18px] mb-[27px] font-semibold cursor-pointer ';
    }
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
              className={toogleActiveStyle(index)}
              onClick={() => {
                toggleActive(index);
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
