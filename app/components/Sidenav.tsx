import Image from 'next/image';
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import SidenavLinks from './SidenavLinks';
const Sidenav = () => {
  const isOpened = useAppSelector((state) => state.menu.value);
  return (
    <div
      className={`min-h-full ${
        isOpened ? 'block' : 'hidden'
      } absolute w-1/2 bg-nWhite-100 text-nBlack shadow-lg text-lg font-serif shadow-slate-300 md:relative md:block md:w-1/3 lg:w-1/4 xl:w-1/5`}
    >
      <div className='bg-nWhite-300 p-5 h-32 shadow-lg w-full relative'>
        <Image
          src='/logo.png'
          alt='betterAmazonLogo'
          fill
          className=' object-cover'
        />
      </div>
      <div className=''>
        <SidenavLinks />
      </div>
    </div>
  );
};

export default Sidenav;
