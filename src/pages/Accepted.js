import React from 'react';
import MiniSideBar from '../components/miniSideBar';
import OrderArea from '../components/OrderArea';
import SideBar from '../components/SideBar';

function Accepted() {
  return (
    <main className="flex w-full ">
      <div className="fixed flex">
        <MiniSideBar />
        <SideBar />
      </div>

      <div className='ml-[394px] basis-full'>
        <OrderArea />
      </div>
    </main>
  );
}

export default Accepted;
