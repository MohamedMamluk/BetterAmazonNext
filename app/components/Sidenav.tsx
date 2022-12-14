import React from 'react';
import { useAppSelector } from '../../store/hooks';
const Sidenav = () => {
  const isOpened = useAppSelector((state) => state.menu.value);
  return (
    <div
      className={`${
        isOpened ? 'block' : 'hidden'
      } absolute w-1/2 bg-orange-500 text-white min-h-full`}
    >
      Sidenav
    </div>
  );
};

export default Sidenav;
