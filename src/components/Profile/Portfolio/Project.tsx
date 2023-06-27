import Image from 'next/image';
import React from 'react';

import image from '@/constant/image';

interface ProjectProps {
  title: string;
  img: string;
  tech: {
    name: string;
    icon: string;
  }[];
}

const Project = ({ title, img, tech }: ProjectProps) => {
  return (
    <div className='col-span-1 mx-auto p-2'>
      <Image
        src={img}
        alt={title}
        width={450}
        height={300}
        className='h-36 w-auto object-cover sm:h-44 md:h-52'
      />
      <div className='mt-4'>
        <h4 className='text-2xl'>{title}</h4>
        <div className='flex items-center'>
          <div className='flex items-center'>
            {tech.map((item, index) => (
              <div key={index} className='flex items-center'>
                {index !== 0 && <div className='text-grayt-500 mx-2'>•</div>}
                <p className='mr-1'>{image(item.icon)}</p>
                <p className='text-gray-500'>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
