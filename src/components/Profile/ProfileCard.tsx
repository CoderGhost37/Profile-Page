import Link from 'next/link';
import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineBehanceSquare,
  AiOutlineDribbble,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { BiBookmarks, BiEdit } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';

const technologies = [
  'HTML5',
  'CSS3',
  'Javascript',
  'React',
  'Python',
  'C++',
  'Java',
  'Mongo',
  'NodeJs',
];

const ProfileCard = ({ view }: { view: string }) => {
  return (
    <div className='mt-10 rounded-lg border border-solid pb-10'>
      <div className='gradient relative flex h-48 w-full rounded-t-lg'>
        <Link
          href='#'
          className='shadown-sm absolute right-5 top-5 flex items-center rounded-lg bg-gray-300 bg-opacity-30 px-4 py-2 font-semibold text-white hover:bg-opacity-50'
        >
          <BiEdit className='mr-2 text-lg' />
          Edit Profile
        </Link>
      </div>
      <div className='relative flex flex-col rounded-full md:flex-row'>
        <div className='rounded-full'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/images/profile-img.jpg'
            alt='Elon Musk'
            className='absolute -top-20 left-8 h-40 w-40 rounded-full border-2 border-solid border-white object-cover'
          />
          <span className='hexagon absolute left-40 top-10 flex items-center justify-center bg-black text-sm font-semibold text-white'>
            2
          </span>
        </div>

        <div className='mt-20 flex w-full flex-col justify-end px-6 md:mt-5 md:pl-48'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-5'>
            <p className='text-4xl font-bold lg:text-5xl'>Elon Musk</p>
            <div className='mt-2 flex items-center space-x-5 sm:mt-0'>
              <div className='rounded-md bg-[#BEF264] px-2 py-0.5 text-sm font-semibold sm:text-base md:px-3 md:py-1'>
                Pro
              </div>
              <div className='rounded-md bg-blue-100 px-2 py-0.5 text-sm font-semibold text-blue-600 sm:text-base md:px-3 md:py-1'>
                Looking for job
              </div>
            </div>
          </div>
          <p className='mt-4 text-base font-medium text-gray-500 sm:text-xl'>
            Full stack dev at codedamn | Harvard"22
          </p>
          <div className='mt-2 flex items-center'>
            <IoLocationOutline className='mr-2 text-base text-gray-500 sm:text-lg' />
            <p className='text-sm text-gray-500 sm:text-lg'>Mumbai, India</p>
          </div>
          <div className='mt-6 flex w-64 flex-wrap items-center justify-between gap-2 sm:w-80 md:w-96 md:gap-4'>
            <p className='text-sm sm:text-lg'>
              <b>10</b> Followers
            </p>
            <p className='text-sm sm:text-lg'>
              <b>100</b> Following
            </p>
            <p className='text-sm sm:text-lg'>
              <b>10k</b> XP
            </p>
          </div>
          <div className='mt-6 flex flex-wrap gap-2 md:gap-4'>
            {technologies.map((tech, index) => (
              <span
                key={index}
                className='rounded-md bg-gray-200 px-2 py-0.5 text-sm font-semibold md:px-3 md:py-1 md:text-base'
              >
                {tech}
              </span>
            ))}
          </div>
          <div className='mt-10 flex flex-col items-center justify-between sm:flex-row md:mt-16 md:flex-col lg:flex-row'>
            <div className='flex items-center space-x-4'>
              <Link href='#'>
                <AiOutlineGithub className='h-8 w-8 rounded-lg border border-solid p-1 md:h-10 md:w-10' />
              </Link>
              <Link href='#'>
                <AiFillLinkedin className='h-8 w-8 rounded-lg border border-solid p-1 text-blue-800 md:h-10 md:w-10' />
              </Link>
              <Link href='#'>
                <BsFacebook className='h-8 w-8 rounded-lg border border-solid p-1.5 text-blue-500 md:h-10 md:w-10' />
              </Link>
              <Link href='#'>
                <AiOutlineInstagram className='h-8 w-8 rounded-lg border border-solid p-1 text-pink-600 md:h-10 md:w-10' />
              </Link>
              <Link href='#'>
                <AiOutlineDribbble className='h-8 w-8 rounded-lg border border-solid p-1 text-pink-800 md:h-10 md:w-10' />
              </Link>
              <Link href='#'>
                <AiOutlineBehanceSquare className='h-8 w-8 rounded-lg border border-solid p-1 text-blue-700 md:h-10 md:w-10' />
              </Link>
            </div>
            <div className='mt-4 flex items-center space-x-5 lg:mt-0'>
              {view === 'resume' ? (
                <button className='shadown-sm rounded-lg bg-gray-200 px-4 py-2 font-semibold hover:bg-gray-300'>
                  Follow
                </button>
              ) : (
                <>
                  <button className='shadown-sm rounded-lg bg-gray-200 px-4 py-2 font-semibold hover:bg-gray-300'>
                    <BiBookmarks className='text-base sm:text-lg' />
                  </button>
                  <button className='shadown-sm rounded-lg bg-[#4F46E5] px-3 py-1 text-base font-medium text-white hover:bg-[#392fec] sm:text-lg md:px-4 md:py-2'>
                    Contact
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
