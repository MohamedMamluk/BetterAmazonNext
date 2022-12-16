'use client';

import Image from 'next/image';
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import Search from './Search';
import SidenavLinks from './SidenavLinks';
const Sidenav = () => {
  const isOpened = useAppSelector((state) => state.menu.value);
  return (
    <div
      className={`min-h-full ${
        isOpened ? 'block' : 'hidden'
      } absolute w-2/3 sm:w-1/2 bg-white text-nBlack shadow-xl text-base  font-bold shadow-  lg:relative lg:block  lg:w-1/4 xl:w-1/5 z-10`}
    >
      <div className='bg-nWhite-100 p-5 h-20 lg:h-24 shadow-lg w-full relative'>
        <Image
          src='/logo.png'
          alt='betterAmazonLogo'
          fill
          className='object-contain'
        />
      </div>
      <div className='md:hidden'>
        <Search />
      </div>
      <div className=' '>
        <SidenavLinks />
      </div>
    </div>
  );
};

export default Sidenav;
