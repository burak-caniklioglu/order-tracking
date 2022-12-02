import React from 'react';
import MiniSideBar from '../components/miniSideBar';
import SideBar from '../components/SideBar';

function NotFound() {
  return (
    <main className="flex w-full ">
      <div className="fixed flex">
        <MiniSideBar />
        <SideBar />
      </div>

      <div className="ml-[394px] basis-full">
        <div>Not found</div>
      </div>
    </main>
  );
}

export default NotFound;
