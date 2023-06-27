import React from 'react';

import Certificate from '@/components/Profile/Portfolio/Certificate';
import Playground from '@/components/Profile/Portfolio/Playground';
import Project from '@/components/Profile/Portfolio/Project';
import StatBox from '@/components/Profile/Portfolio/StatBox';

import { portfolio } from '@/constant/data';

const Portfolio = () => {
  const { stats, projects, playgrounds, certificates } = portfolio;
  return (
    <section className='mt-12'>
      <div className=''>
        <h2>Stats</h2>
        <div className='mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4'>
          {stats.map((stat, index) => (
            <StatBox key={index} {...stat} />
          ))}
        </div>
      </div>
      <div className='mt-10'>
        <div className='flex items-center justify-between'>
          <h2>Projects</h2>
          <h4 className='cursor-pointer text-[#4F46E5]'>Create new projects</h4>
        </div>
        <div className='mt-5 grid grid-cols-1 gap-2 px-6 md:grid-cols-2 md:gap-4'>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
      <div className='mt-12'>
        <div className='flex items-center justify-between'>
          <h2>Playgrounds</h2>
          <h4 className='cursor-pointer text-[#4F46E5]'>
            Create new playground
          </h4>
        </div>
        <div className='mt-5 grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:px-6'>
          {playgrounds.map((playground, index) => (
            <Playground key={index} {...playground} />
          ))}
        </div>
      </div>
      <div className='mt-12'>
        <div className='flex items-center justify-between'>
          <h2>Certificates</h2>
          <h4 className='cursor-pointer text-[#4F46E5]'>Add new certificate</h4>
        </div>
        <div className='mt-5 grid grid-cols-1 gap-4 px-6 md:grid-cols-2'>
          {certificates.map((certificate, index) => (
            <Certificate key={index} {...certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
