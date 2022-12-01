import React from 'react';
import MiniSideBar from '../components/miniSideBar';
import CreateForm from '../components/CreateForm';
import SideBar from '../components/SideBar';

function CreateOrder() {
  return (
    <main className="flex w-full ">
      <div className="fixed flex">
        <MiniSideBar />
        <SideBar />
      </div>

      <div className='ml-[394px] basis-full'>
        <CreateForm />
      </div>
    </main>
  );
}

export default CreateOrder;
