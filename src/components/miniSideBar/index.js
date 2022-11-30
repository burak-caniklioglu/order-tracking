import React from 'react';
import Logo from '../../constants/icons/logo';
import Cube from '../../constants/icons/cube';
import Files from '../../constants/icons/files';
import Settings from '../../constants/icons/settings';

function MiniSideBar() {
  return (
    <aside className="flex flex-col items-center h-[100vh] fixed bg-[#EDEDED] w-[85px] " >
      <div className="m-[1rem] cursor-pointer">
        <Logo />
      </div>
      <div className="flex justify-center py-[20px]  w-full bg-[#F6F6F6] cursor-pointer">
        <Cube />
      </div>
      <div className='py-[20px] cursor-pointer'>
        <Files />
      </div>
      <div className='py-[20px] cursor-pointer'>
        <Settings />
      </div>
    </aside>
  );
}

export default MiniSideBar;
