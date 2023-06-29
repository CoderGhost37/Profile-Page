import React from 'react';

import { Education } from '@/constant/data';

interface EducationModalProps {
  fields: Education;
  setFields: React.Dispatch<React.SetStateAction<Education>>;
  errMsg: string;
}

const EducationModal = ({ fields, setFields, errMsg }: EducationModalProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='mt-4 flex w-full flex-col space-y-2 text-sm'>
      <div className='flex w-full items-center gap-4'>
        <div className='w-full'>
          <label className='font-semibold'>
            Institute Image <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='img'
            placeholder='Enter institute image url'
            className='mt-1 w-full rounded-lg border border-gray-300 px-2 py-1 placeholder:text-sm focus:border-blue-300 focus:outline-none'
            required
            value={fields.img}
            onChange={handleChange}
          />
        </div>
        <div className='w-full'>
          <label className='font-semibold'>
            Institute Name <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='name'
            placeholder='Enter institute name'
            className='mt-1 w-full rounded-lg border border-gray-300 px-2 py-1 placeholder:text-sm focus:border-blue-300 focus:outline-none'
            required
            value={fields.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-full'>
          <label className='font-semibold'>
            Location <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='location'
            placeholder='Enter the location of the institute'
            className='mt-1 w-full rounded-lg border border-gray-300 px-2 py-1 placeholder:text-sm focus:border-blue-300 focus:outline-none'
            required
            value={fields.location}
            onChange={handleChange}
          />
        </div>
        <div className='w-full'>
          <label className='font-semibold'>Degree</label>
          <input
            type='text'
            name='degree'
            placeholder='Enter degree'
            className='mt-1 w-full rounded-lg border border-gray-300 px-2 py-1 placeholder:text-sm focus:border-blue-300 focus:outline-none'
            value={fields.degree}
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

export default EducationModal;
