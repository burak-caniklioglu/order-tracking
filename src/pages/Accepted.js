import React from 'react';
import MiniSideBar from '../components/miniSideBar';
import OrderArea from '../components/OrderArea';
import SideBar from '../components/SideBar';

function Accepted() {
  return (
    <main className="flex ">
      <div className='mr-[85px]'>
        <MiniSideBar />
      </div>

      <SideBar />
      <OrderArea />
    </main>
  );
}

export default Accepted;
