import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../features/themeSlice';

function SubHeader({ children }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center  mb-[30px]">
      <div className="cursor-pointer mr-[22px]" onClick={() => dispatch(changeMode())}>
        <div className="w-[1rem] rounded-sm bg-black h-[2px] mb-[3px]"></div>
        <div className="w-[16px] rounded-sm bg-black h-[2px]"></div>
        <div className="w-[1rem] rounded-sm bg-black h-[2px] mt-[3px]"></div>
      </div>
      <div className="text-[30px]">{children}</div>
    </div>
  );
}

SubHeader.propTypes = {
  children: propTypes.node.isRequired,
};
export default SubHeader;
