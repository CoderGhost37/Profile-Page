import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

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
  handleDelete: () => void;
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
  handleDelete,
}: CardProps) => {
  return (
    <div className='mt-2 flex w-full'>
      <div className='mr-4'>
        {img && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img} alt={name} className='mt-2 h-7 w-7 rounded-full' />
        )}
        {icon && image(icon)}
      </div>
      <div className='flex w-full flex-col'>
        <div className='flex w-full items-center justify-between'>
          <h4>{name}</h4>
          <AiOutlineDelete
            onClick={handleDelete}
            className='ml-2 cursor-pointer rounded-full p-0.5 text-2xl text-red-500 hover:bg-gray-100'
          />
        </div>
        <div className='flex w-full flex-col justify-between md:flex-row md:items-center'>
          <div className='flex flex-wrap text-sm'>
            <p className='mr-1'>{location}</p>
            {company && <p>• {company}</p>}
            {degree && <p>• {degree}</p>}
          </div>
          <h5 className='text-sm font-semibold'>{duration}</h5>
        </div>
        {desc && (
          <p className='mt-2 text-sm text-gray-500 md:text-base'>{desc}</p>
        )}
        {responsibilities && responsibilities.length > 0 && (
          <div className=''>
            <h4 className='mt-2 text-base'>Job responsibilities:</h4>
            <ul className='list-inside list-disc text-base text-gray-500'>
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
