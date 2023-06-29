import React from 'react';

import { WorkExperience } from '@/constant/data';

interface WorkExperienceProps {
  fields: WorkExperience;
  setFields: React.Dispatch<React.SetStateAction<WorkExperience>>;
  errMsg: string;
}

const WorkExperience = ({ fields, setFields, errMsg }: WorkExperienceProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='mt-4 flex w-full flex-col space-y-2 text-sm'>
      <div className='flex w-full items-center gap-4'>
        <div className='w-full'>
          <label className='font-semibold'>
            Company Logo <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='icon'
            placeholder='Enter company logo url'
            className='mt-1 w-full rounded-lg border border-gray-300 px-2 py-1 placeholder:text-sm focus:border-blue-300 focus:outline-none'
            required
            value={fields.icon}
            onChange={handleChange}
          />
        </div>
        <div className='w-full'>
          <label className='font-semibold'>
            Company Name <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='company'
            placeholder='Enter company name'
            className='mt-1 w-full rounded-lg border border-gray-300 px-2 py-1 placeholder:text-sm focus:border-blue-300 focus:outline-none'
            required
            value={fields.company}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-full'>
          <label className='font-semibold'>
            Role <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='name'
            placeholder='Enter your role'
            className='mt-1 w-full rounded-lg border border-gray-300 px-2 py-1 placeholder:text-sm focus:border-blue-300 focus:outline-none'
            required
            value={fields.name}
            onChange={handleChange}
          />
        </div>
        <div className='w-full'>
          <label className='font-semibold'>Location</label>
          <input
            type='text'
            name='location'
            placeholder='Enter location'
            className='mt-1 w-full rounded-lg border border-gray-300 px-2 py-1 placeholder:text-sm focus:border-blue-300 focus:outline-none'
            value={fields.location}
            onChange={handleChange}
          />
        </div>
        <div className='w-full'>
          <label className='font-semibold'>
            Duration <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='duration'
            placeholder='Enter duration'
            className='mt-1 w-full rounded-lg border border-gray-300 px-2 py-1 placeholder:text-sm focus:border-blue-300 focus:outline-none'
            required
            value={fields.duration}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='flex w-full flex-col'>
        <label className='font-semibold'>Description</label>
        <textarea
          name='desc'
          id='desc'
          rows={3}
          className='mt-1 w-full rounded-lg border border-gray-300 px-2 py-1 placeholder:text-sm focus:border-blue-300 focus:outline-none'
          placeholder='Enter description'
          value={fields.desc}
          onChange={() =>
            setFields({
              ...fields,
              desc: (document.getElementById('desc') as HTMLTextAreaElement)
                .value,
            })
          }
        />
      </div>
      <div className='text-sm text-red-500'>{errMsg}</div>
    </div>
  );
};

export default WorkExperience;
