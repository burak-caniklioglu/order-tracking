import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MiniSideBar from '../components/miniSideBar';
import OrderArea from '../components/OrderArea';
import SideBar from '../components/SideBar';
import useWindowSize from '../hooks/useWindowSize';
import Cancel from '../constants/icons/cancel';
import { changeMode } from '../features/themeSlice';

function Accepted() {
  const [width] = useWindowSize();
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <main className="flex w-full ">
      {width < 1024 ? (
        <>
          {theme && (
            <div className="flex fixed">
              <MiniSideBar />
              <SideBar />
              <div className='mt-[30px] ml-[-40px] cursor-pointer' onClick={() => dispatch(changeMode())}>
                <Cancel />
              </div>
            </div>
          )}

          <div className=" basis-full">
            <OrderArea />
          </div>
        </>
      ) : (
        <>
          <div className="fixed flex">
            <MiniSideBar />
            <SideBar />
          </div>

          <div className="ml-[394px] basis-full">
            <OrderArea />
          </div>
        </>
      )}
    </main>
  );
}

export default Accepted;
