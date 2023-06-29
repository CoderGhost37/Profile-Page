import React from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlinePlus } from 'react-icons/ai';

import ButtonGroup from '@/components/ButtonGroup';
import Card from '@/components/EditProfile/Card';
import Modal from '@/components/Modal/Modal';
import EducationModal from '@/components/Modal/ModalTypes/EducationModal';
import WorkExperienceModal from '@/components/Modal/ModalTypes/WorkExperienceModal';
import MultiTagInput from '@/components/MultiTagInput';

import { Education, WorkExperience } from '@/constant/data';
import { useProfile } from '@/context/ProfileContext';

const Resume = () => {
  const { resume, updateResume } = useProfile();
  const [form, setForm] = React.useState(resume);
  const [tags, setTags] = React.useState<string[]>(resume.interests);
  const [addEducation, setAddEducation] = React.useState(false);
  const [addWorkExperience, setAddWorkExperience] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState('');
  const [eduErrMsg, setEduErrMsg] = React.useState('');
  const [fields, setFields] = React.useState<WorkExperience>({
    icon: '',
    name: '',
    location: '',
    company: '',
    duration: '',
    desc: '',
    responsibilities: [],
  });
  const [eduFields, setEduFields] = React.useState<Education>({
    img: '',
    name: '',
    location: '',
    degree: '',
    duration: '',
    desc: '',
  });

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

  const onSaveEducation = () => {
    if (
      !eduFields.img ||
      !eduFields.name ||
      !eduFields.location ||
      !eduFields.duration
    ) {
      setEduErrMsg('Please fill all the required fields');
      return;
    }
    setForm({
      ...form,
      education: [eduFields, ...form.education],
    });
    setAddEducation(false);
  };

  const onSaveWorkExp = () => {
    if (!fields.icon || !fields.name || !fields.company || !fields.duration) {
      setErrMsg('Please fill all the required fields');
      return;
    }
    setForm({
      ...form,
      workExp: [fields, ...form.workExp],
    });
    setAddWorkExperience(false);
  };

  const handleCancel = () => {
    setForm(resume);
  };

  const handleSave = () => {
    setForm({
      ...form,
      interests: tags,
    });
    updateResume(form);
    toast.success('Resume updated successfully');
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
            className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-300 focus:outline-none sm:text-base md:text-lg'
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
            <div className='h-full'>
              <Modal
                title='Add Work Experience'
                handleClose={() => setAddWorkExperience(false)}
                handleSave={onSaveWorkExp}
                Body={
                  <WorkExperienceModal
                    fields={fields}
                    setFields={setFields}
                    errMsg={errMsg}
                  />
                }
              />
            </div>
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
            <div className='h-full'>
              <Modal
                title='Add Education'
                handleClose={() => setAddEducation(false)}
                handleSave={onSaveEducation}
                Body={
                  <EducationModal
                    fields={eduFields}
                    setFields={setEduFields}
                    errMsg={eduErrMsg}
                  />
                }
              />
            </div>
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
