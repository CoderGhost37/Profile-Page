import Image from 'next/image';
import React from 'react';

import Card from '@/components/Profile/Resume/Card';
import Skill from '@/components/Profile/Resume/Skill';

import { resumeData } from '@/constant/data';

const Resume = () => {
  const { skills, languages, about, education, interests, workExperience } =
    resumeData;
  const [readMore, setReadMore] = React.useState(false);
  return (
    <section className='mt-12'>
      <div className='md:px-10'>
        <h2 className='text-center'>About Me</h2>
        <div className='mt-6 rounded-lg border border-solid border-gray-100 px-4 py-2'>
          {/* <p className='text-lg'>{about}</p> */}
          <p className='mt-4 text-lg'>
            {readMore ? `${about}` : `${about.slice(0, 251)} ...`}
          </p>
          <button
            className='mt-5 rounded-lg bg-gray-200 px-4 py-2 font-medium hover:bg-gray-300'
            onClick={() => setReadMore(!readMore)}
          >
            {!readMore ? 'Read more' : 'Read less'}
          </button>
        </div>
      </div>
      <div className='mt-12'>
        <h2 className='text-center'>Work experience</h2>
        <div>
          {workExperience.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
      <div className='mt-16'>
        <h2>Education</h2>
        <div className='mt-6'>
          {education.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
      <div className='mt-16'>
        <h2>Tech Skills</h2>
        <div className='mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6'>
          {skills.map((item, index) => (
            <Skill key={index} {...item} />
          ))}
        </div>
      </div>
      <div className='mt-16'>
        <h2>Interests</h2>
        <div className='mt-6 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-4'>
          {interests.map((item, index) => (
            <p
              key={index}
              className='col-span-1 rounded-lg border border-solid border-gray-100 px-2 py-1 font-bold md:text-lg'
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className='mt-16'>
        <h2>Languages</h2>
        <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-4'>
          {languages.map((item, index) => (
            <div
              key={index}
              className='col-span-1 flex items-center rounded-lg border border-solid border-gray-100 px-2 py-1'
            >
              <Image
                src={item.img as string}
                alt={item.name}
                width={35}
                height={35}
              />
              <p className='ml-2 text-lg font-bold'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
