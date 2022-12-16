'use client';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggle } from '../features/menuSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
// SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

import Image from 'next/image';

const Home = () => {
  const menu = useAppSelector((state) => state.menu.value);
  const dispatch = useAppDispatch();
  const pagination = {
    clickable: true,
    renderBullet: function (index: number) {
      return `<div class="w-20  bg-gray-500">${' '}   </div>`;
    },
  };
  return (
    <div className='w-full'>
      <div className=' lg:max-w-3xl xl:max-w-5xl h-[200px]  mx-auto relative md:h-[400px] lg:h-[500px] xl:h-[600px] mt-4 rounded-lg overflow-hidden'>
        <Swiper
          navigation
          pagination={pagination}
          keyboard
          modules={[Pagination, Navigation, Keyboard]}
          centeredSlides
          slidesPerView={1}
          className='w-full h-full'
        >
          <SwiperSlide className='w-full h-full'>
            <div className='relative z-10'>some text</div>
            <Image
              alt='Image'
              src='/tbr23.png'
              fill
              className='object-cover w-full h-full '
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt='Image'
              src='/tbr23.png'
              fill
              className='object-cover w-full h-full block'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt='Image'
              src='/tbr23.png'
              fill
              className='object-cover w-full h-full block'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
