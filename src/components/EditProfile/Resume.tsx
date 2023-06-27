import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import ButtonGroup from '@/components/ButtonGroup';
import Card from '@/components/EditProfile/Card';
import MultiFieldInput from '@/components/MultiFieldInput';
import MultiTagInput from '@/components/MultiTagInput';

import { Education, resumeData, WorkExperience } from '@/constant/data';

const Resume = () => {
  const [form, setForm] = React.useState({
    about: resumeData.about,
    education: resumeData.education,
    workExp: resumeData.workExperience,
    interests: resumeData.interests,
  });
  const [tags, setTags] = React.useState<string[]>(resumeData.interests);
  const [addEducation, setAddEducation] = React.useState(false);
  const [addWorkExperience, setAddWorkExperience] = React.useState(false);

  const onDeleteEducation = (index: number) => {
    const newEducation = [...form.education];
    newEducation.splice(index, 1);
    setForm({
      ...form,
      education: newEducation,
    });
  };

  const onDeleteWorkExp = (index: number) => {
    const newWorkExp = [...form.workExp];
    newWorkExp.splice(index, 1);
    setForm({
      ...form,
      workExp: newWorkExp,
    });
  };

  const onSaveEducation = (fields: Education) => {
    if (!fields)
      setForm({
        ...form,
        education: [fields, ...form.education],
      });
    setAddEducation(false);
  };

  const onSaveWorkExp = (fields: WorkExperience) => {
    if (!fields)
      setForm({
        ...form,
        workExp: [fields, ...form.workExp],
      });
    setAddWorkExperience(false);
  };

  const handleCancel = () => {
    setForm({
      about: resumeData.about,
      education: resumeData.education,
      workExp: resumeData.workExperience,
      interests: resumeData.interests,
    });
  };

  const handleSave = () => {
    setForm({
      ...form,
      interests: tags,
    });
  };

  return (
    <div className='w-full px-6'>
      <div className='flex flex-col items-center justify-between space-y-8'>
        <div className='flex w-full flex-col'>
          <label className='font-semibold'>About</label>
          <textarea
            name='about'
            id='about'
            rows={7}
            className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-300 focus:outline-none md:text-lg'
            placeholder='Enter about yourself'
            value={form.about}
            onChange={() =>
              setForm({
                ...form,
                about: (document.getElementById('about') as HTMLTextAreaElement)
                  .value,
              })
            }
          />
        </div>
        <div className='flex w-full flex-col gap-4'>
          <div className='flex w-full items-center justify-between'>
            <label className='text-lg font-semibold'>Work Experience</label>
            {!addWorkExperience && (
              <button
                onClick={() => setAddWorkExperience(true)}
                className='flex items-center rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
              >
                <AiOutlinePlus /> Add
              </button>
            )}
          </div>
          {addWorkExperience && (
            <MultiFieldInput
              type='Work Experience'
              handleClose={() => setAddWorkExperience(false)}
              handleSaveWorkExp={(fields: WorkExperience) =>
                onSaveWorkExp(fields)
              }
              handleSaveEducation={(fields: Education) =>
                onSaveEducation(fields)
              }
            />
          )}
          {form.workExp.map((item, index) => (
            <Card
              key={index}
              {...item}
              handleDelete={() => onDeleteWorkExp(index)}
            />
          ))}
        </div>
        <div className='flex w-full flex-col gap-4'>
          <div className='flex w-full items-center justify-between'>
            <label className='text-lg font-semibold'>Education</label>
            {!addEducation && (
              <button
                onClick={() => setAddEducation(true)}
                className='flex items-center rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
              >
                <AiOutlinePlus /> Add
              </button>
            )}
          </div>
          {addEducation && (
            <MultiFieldInput
              type='Education'
              handleClose={() => setAddEducation(false)}
              handleSaveWorkExp={(fields: WorkExperience) =>
                onSaveWorkExp(fields)
              }
              handleSaveEducation={(fields: Education) =>
                onSaveEducation(fields)
              }
            />
          )}
          {form.education.map((item, index) => (
            <Card
              key={index}
              {...item}
              handleDelete={() => onDeleteEducation(index)}
            />
          ))}
        </div>
        <MultiTagInput label='Interests' tags={tags} setTags={setTags} />
        <ButtonGroup
          classStyles='justify-end w-full mt-4'
          button1_text='Cancel'
          button2_text='Save changes'
          button1_onClick={handleCancel}
          button2_onClick={handleSave}
        />
      </div>
    </div>
  );
};

export default Resume;
