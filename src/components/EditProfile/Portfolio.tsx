import React from 'react';

import ButtonGroup from '@/components/ButtonGroup';
import Playground from '@/components/Profile/Portfolio/Playground';
import Project from '@/components/Profile/Portfolio/Project';

import { portfolio } from '@/constant/data';

const Portfolio = () => {
  const { projects, playgrounds } = portfolio;
  const [selectedPlayground, setSelectedPlayground] = React.useState<number>();
  const [selectedProject, setSelectedProject] = React.useState<number>();

  const handleCancel = () => {
    setSelectedPlayground(undefined);
    setSelectedProject(undefined);
  };

  const handleSaveChanges = () => {
    //
  };

  return (
    <div className='w-full px-6'>
      <div className=''>
        <div className='flex items-center justify-between'>
          <h2>Playgrounds</h2>
          <p className='cursor-pointer text-base text-gray-500 md:text-lg'>
            See all
          </p>
        </div>
        <div className='mt-5 grid grid-cols-1 gap-4 px-2 md:px-6 lg:grid-cols-2'>
          {playgrounds.map((playground, index) => (
            <div
              key={index}
              className={`${
                index === selectedPlayground
                  ? 'bg-[#4F46E5] bg-opacity-10 ring-2 ring-[#4F46E5]'
                  : ''
              } cursor-pointer rounded-lg`}
              onClick={() => setSelectedPlayground(index)}
            >
              <Playground {...playground} />
            </div>
          ))}
        </div>
      </div>
      <div className='mt-16 flex items-center justify-between'>
        <h2>Projects</h2>
        <p className='cursor-pointer text-base text-gray-500 md:text-lg'>
          See all
        </p>
      </div>
      <div className='mt-5 grid grid-cols-1 gap-4 px-2 md:px-6 lg:grid-cols-2'>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${
              index === selectedProject
                ? 'bg-[#4F46E5] bg-opacity-10 ring-2 ring-[#4F46E5]'
                : ''
            } cursor-pointer rounded-lg p-1`}
            onClick={() => setSelectedProject(index)}
          >
            <Project {...project} />
          </div>
        ))}
      </div>
      <ButtonGroup
        classStyles='mt-12 justify-end'
        button1_text='Cancel'
        button2_text='Save changes'
        button1_onClick={handleCancel}
        button2_onClick={handleSaveChanges}
      />
    </div>
  );
};

export default Portfolio;
