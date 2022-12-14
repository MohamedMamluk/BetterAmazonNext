'use client';
import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { toggle } from '../../features/menuSlice';
const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <header className='p-5 bg-blue-500 text-white'>
      <button
        className='px-2 py-1 bg-slate-500 text-white rounded-md active:scale-95 transition-all z-30 relative'
        onClick={() => dispatch(toggle())}
      >
        Toggle Menu
      </button>
    </header>
  );
};

export default Header;
