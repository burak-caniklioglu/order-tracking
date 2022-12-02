import React from 'react';
import MiniSideBar from '../components/miniSideBar';
import SideBar from '../components/SideBar';
import SubHeader from '../components/subHeader';

function NotFound() {
  return (
    <main className="flex w-full ">
      <div className="hidden lg:fixed lg:flex">
        <MiniSideBar />
        <SideBar />
      </div>

      <div className="lg:ml-[394px] basis-full">
        <SubHeader>Not found</SubHeader>
      </div>
    </main>
  );
}

export default NotFound;
