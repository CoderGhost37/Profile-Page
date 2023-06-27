import React from 'react';

import image from '@/constant/image';

interface CardProps {
  icon?: string;
  img?: string;
  name: string;
  location: string;
  duration: string;
  company?: string;
  degree?: string;
  desc?: string;
  responsibilities?: string[];
}

const Card = ({
  icon,
  img,
  name,
  location,
  duration,
  company,
  degree,
  desc,
  responsibilities,
}: CardProps) => {
  return (
    <div className='mt-12 flex w-full rounded-lg border border-solid border-gray-100 px-4 py-4'>
      <div className='mr-5'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {img && <img src={img} alt={name} width={45} height={45} />}
        {icon && image(icon)}
      </div>
      <div className='flex w-full flex-col'>
        <h3>{name}</h3>
        <div className='flex w-full flex-col justify-between md:flex-row md:items-center'>
          <div className='flex flex-wrap md:text-lg'>
            <p className='mr-1'>{location}</p>
            {company && <p>• {company}</p>}
            {degree && <p>• {degree}</p>}
          </div>
          <h4>{duration}</h4>
        </div>
        {desc && (
          <p className='mt-4 text-base text-gray-500 md:text-lg'>{desc}</p>
        )}
        {responsibilities && (
          <div className=''>
            <h4 className='mt-4 text-base md:text-lg'>Job responsibilities:</h4>
            <ul className='list-inside list-disc text-base text-gray-500 md:text-lg'>
              {responsibilities?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
