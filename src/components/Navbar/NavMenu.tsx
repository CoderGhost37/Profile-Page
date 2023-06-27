import React from 'react';
import { MdElectricBolt } from 'react-icons/md';
import { VscBell } from 'react-icons/vsc';

const NavMenu = () => {
  return (
    <nav className='flex items-center justify-between'>
      <div className='flex items-center'>
        <MdElectricBolt className='text-3xl font-bold text-[#6366F1]' />
        <span className='font-semibold text-gray-500'>2</span>
      </div>
      <div className='relative mx-4 sm:mx-6 lg:mx-10'>
        <VscBell className='text-2xl' />
        <span className='absolute -right-1 -top-2 rounded-full bg-red-500 px-1.5 py-0.5 text-xs font-semibold text-white'>
          2
        </span>
      </div>
      <div className='relative'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/images/profile-img.jpg'
          alt='profile image'
          className='h-9 w-9 rounded-full object-cover'
        />
        <span className='hexagon-small absolute -right-6 -top-10 flex items-center justify-center border border-solid border-gray-500 bg-black text-[8px] font-semibold text-white md:text-[12px]'>
          2
        </span>
      </div>
    </nav>
  );
};

export default NavMenu;
