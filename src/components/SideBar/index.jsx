import React, { useState } from 'react';

function SideBar() {
  const [subHeader, setSubHeader] = useState({
    activeObject: null,
    objects: [
      { name: 'New Order', count: 0 },
      { name: 'Accepted', count: 3 },
      { name: 'Cooking', count: 3 },
      { name: 'Parcel Ready', count: 3 },
      { name: 'Delivered', count: 3 },
      { name: 'Completed', count: 3 },
    ],
  });

  const toggleActive = (index) => {
    setSubHeader({ ...subHeader, activeObject: subHeader.objects[index] });
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
              className="text-[18px] mb-[27px] font-semibold cursor-pointer"
              onClick={() => toggleActive(index)}
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
