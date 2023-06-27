import React from 'react';

import image from '@/constant/image';

interface StatBoxProps {
  title: string;
  rating: string;
  icon: string;
}

const StatBox = ({ title, rating, icon }: StatBoxProps) => {
  return (
    <div className='col-span-1 flex items-center rounded-lg border border-solid border-gray-100 px-4 py-2'>
      <div className='mr-4'>{image(icon)}</div>
      <div className='ml-4'>
        <h3>{rating}</h3>
        <p className='text-lg text-gray-500'>{title}</p>
      </div>
    </div>
  );
};

export default StatBox;
