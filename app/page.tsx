'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggle } from '../features/menuSlice';

const Home = () => {
  const menu = useAppSelector((state) => state.menu.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      Home
      <button onClick={() => dispatch(toggle())}>Menu: {menu}</button>
    </div>
  );
};

export default Home;
