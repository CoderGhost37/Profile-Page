import Image from 'next/image';
import React from 'react';

import image from '@/constant/image';

interface PlaygroundProps {
  title: string;
  icon: string;
  tech: string;
  time: string;
  sharedWith: {
    name: string;
    img: string;
  }[];
}

const Playground = ({
  title,
  icon,
  tech,
  time,
  sharedWith,
}: PlaygroundProps) => {
  return (
    <div className='col-span-1 flex rounded-lg border border-solid border-gray-100 px-3 py-2 md:px-4'>
      <div>{image(icon)}</div>
      <div className='ml-2 md:ml-4'>
        <h3>{title}</h3>
        <p className='text-gray-500'>
          {tech} • {time}
        </p>
        <div className='mt-2 flex items-center'>
          <Image
            src={sharedWith[0].img}
            alt='person'
            width={30}
            height={30}
            className='h-6 w-auto rounded-full object-cover'
          />
          <Image
            src={sharedWith[1].img}
            alt='person'
            width={30}
            height={30}
            className='h-6 w-auto rounded-full object-cover'
          />
          <p className='ml-2 text-xs text-gray-500 md:text-sm'>
            Shared with{' '}
            <b>
              {sharedWith[0].name}, {sharedWith[1].name}..
            </b>{' '}
            +{sharedWith.length - 2} more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Playground;
