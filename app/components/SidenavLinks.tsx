'use client';

import Link from 'next/link';
import React from 'react';

const SidenavLinks = () => {
  return (
    <>
      <Link
        href='/products'
        className='flex justify-between px-5 py-3 hover:border-b hover:border-t'
      >
        Products<span> &gt;</span>
      </Link>
      <Link
        href='/products'
        className='flex justify-between px-5 py-3 hover:border-b hover:border-t'
      >
        Products<span> &gt;</span>
      </Link>
      <Link
        href='/products'
        className='flex justify-between px-5 py-3 hover:border-b hover:border-t'
      >
        Products<span> &gt;</span>
      </Link>
      <Link
        href='/products'
        className='flex justify-between px-5 py-3 hover:border-b hover:border-t'
      >
        Products<span> &gt;</span>
      </Link>
    </>
  );
};

export default SidenavLinks;
