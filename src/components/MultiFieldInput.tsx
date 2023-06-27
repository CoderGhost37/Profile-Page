import React from 'react';

import ButtonGroup from '@/components/ButtonGroup';

import { Education, WorkExperience } from '@/constant/data';

const EducationInput = ({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (fields: Education) => void;
}) => {
  const [fields, setFields] = React.useState({
    img: '',
    name: '',
    location: '',
    degree: '',
    duration: '',
    desc: '',
  });
  const [errMsg, setErrMsg] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const onSaveEducation = () => {
    if (!fields.img || !fields.name || !fields.location || !fields.duration)
      return setErrMsg('Please fill all the required fields');
    onSave(fields);
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
      <ButtonGroup
        classStyles='justify-end mt-1'
        button1_text='Cancel'
        button2_text='Add'
        button1_onClick={onClose}
        button2_onClick={onSaveEducation}
      />
    </div>
  );
};

const WorkExpInput = ({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (fields: WorkExperience) => void;
}) => {
  const [fields, setFields] = React.useState({
    icon: '',
    name: '',
    location: '',
    company: '',
    duration: '',
    desc: '',
    resposibilities: [],
  });
  const [errMsg, setErrMsg] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const onSaveWorkExp = () => {
    if (!fields.icon || !fields.name || !fields.company || !fields.duration)
      return setErrMsg('Please fill all the required fields');
    onSave(fields);
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
      <ButtonGroup
        classStyles='justify-end mt-1'
        button1_text='Cancel'
        button2_text='Add'
        button1_onClick={onClose}
        button2_onClick={onSaveWorkExp}
      />
    </div>
  );
};

const MultiFieldInput = ({
  type,
  handleClose,
  handleSaveEducation,
  handleSaveWorkExp,
}: {
  type: 'Education' | 'Work Experience';
  handleClose: () => void;
  handleSaveEducation: (fields: Education) => void;
  handleSaveWorkExp: (fields: WorkExperience) => void;
}) => {
  return (
    <>
      {type === 'Education' && (
        <EducationInput onClose={handleClose} onSave={handleSaveEducation} />
      )}
      {type === 'Work Experience' && (
        <WorkExpInput onClose={handleClose} onSave={handleSaveWorkExp} />
      )}
    </>
  );
};

export default MultiFieldInput;
