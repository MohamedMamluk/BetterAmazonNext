'use client';
import React from 'react';

const Search = () => {
  return (
    <div className=' flex justify-between mt-4 md:mt-0 mx-2 rounded-md  outline outline-1 outline-nWhite-300'>
      <input
        type='text'
        placeholder='I am looking for...'
        className='placeholder:text-gray-400 w-full  py-2 px-4 font-normal '
      />
      <button className='w-24 flex justify-center items-center bg-white text-nBlack'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-5 h-5'
        >
          <path
            fillRule='evenodd'
            d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
