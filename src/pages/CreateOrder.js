import React from 'react';
import MiniSideBar from '../components/miniSideBar';
import CreateForm from '../components/CreateForm';
import SideBar from '../components/SideBar';

function CreateOrder() {
  return (
    <main className="flex w-full ">
      <div className="hidden lg:fixed lg:flex">
        <MiniSideBar />
        <SideBar />
      </div>

      <div className='lg:ml-[394px] basis-full'>
        <CreateForm />
      </div>
    </main>
  );
}

export default CreateOrder;
