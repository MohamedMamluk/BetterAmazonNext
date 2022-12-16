'use client';
import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { toggle } from '../../features/menuSlice';
import Search from './Search';
const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <header className='  h-20 lg:h-24 bg-nWhite-100 px-5 text-white flex items-center justify-between'>
      <button
        className='px-2 py-1  text-white rounded-md active:scale-95 transition-all z-30 relative flex flex-col gap-0.5 md:hidden'
        onClick={() => dispatch(toggle())}
      >
        <span className='block h-0.5 w-4 bg-black'></span>
        <span className='block h-0.5 w-4 bg-black'></span>
        <span className='block h-0.5 w-4 bg-black'></span>
      </button>

      <div className=' hidden md:block md:w-2/3 lg:w-1/2 '>
        <Search />
      </div>
      <div className='flex items-center h-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 text-nBlack'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
          />
        </svg>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 text-nBlack'
        >
          <path
            className=''
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
