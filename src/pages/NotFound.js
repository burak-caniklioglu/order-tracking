import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MiniSideBar from '../components/miniSideBar';
import SideBar from '../components/SideBar';
import SubHeader from '../components/subHeader';
import Cancel from '../constants/icons/cancel';
import { changeMode } from '../features/themeSlice';
import useWindowSize from '../hooks/useWindowSize';

function NotFound() {
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
              <div
                className="mt-[30px] ml-[-40px] cursor-pointer"
                onClick={() => dispatch(changeMode())}
              >
                <Cancel />
              </div>
            </div>
          )}

          <div className=" basis-full">
            <SubHeader>Not Found Page</SubHeader>
          </div>
        </>
      ) : (
        <>
          <div className="fixed flex">
            <MiniSideBar />
            <SideBar />
          </div>

          <div className="ml-[394px] basis-full">
            <SubHeader>Not Found Page</SubHeader>
          </div>
        </>
      )}
    </main>
  );
}

export default NotFound;
