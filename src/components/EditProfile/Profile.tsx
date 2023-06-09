import React from 'react';
import toast from 'react-hot-toast';
import { BiChevronDown } from 'react-icons/bi';

import ButtonGroup from '@/components/ButtonGroup';
import Input from '@/components/Input';
import Modal from '@/components/Modal/Modal';
import UploadPictureModal from '@/components/Modal/ModalTypes/UploadPictureModal';
import ToggleInput from '@/components/ToggleInput';

import { useProfile } from '@/context/ProfileContext';

const Profile = () => {
  const { profile, updateProfile } = useProfile();
  const [form, setForm] = React.useState(profile);
  const [profilePicUrl, setProfilePicUrl] = React.useState('');
  const [openProfilePicInput, setOpenProfilePicInput] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCancel = () => {
    setForm(profile);
  };

  const handleSave = () => {
    updateProfile(form);
    toast.success('Profile updated successfully');
  };

  return (
    <div className='w-full px-6'>
      <div className='flex flex-col items-center justify-between space-y-8'>
        <div className='flex w-full items-center justify-start'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={form.profilePic}
            alt={profile.name}
            className='h-20 w-20 rounded-full object-cover sm:h-28 sm:w-28'
          />
          <ButtonGroup
            classStyles='ml-5 flex-col flex-col-reverse sm:flex-row-reverse'
            button1_text='Delete'
            button2_text='Upload new picture'
            button1_onClick={() =>
              setForm({ ...form, profilePic: '/images/user.png' })
            }
            button2_onClick={() => setOpenProfilePicInput(true)}
          />
        </div>
        {openProfilePicInput && (
          <div className='h-full'>
            <Modal
              title='Change profile picture'
              Body={
                <UploadPictureModal
                  profilePicUrl={profilePicUrl}
                  setProfilePicUrl={setProfilePicUrl}
                />
              }
              handleClose={() => setOpenProfilePicInput(false)}
              handleSave={() => {
                setForm({ ...form, profilePic: profilePicUrl });
                setOpenProfilePicInput(false);
              }}
            />
          </div>
        )}
        <Input
          label='Display name'
          name='name'
          type='text'
          placeholder='Enter your name'
          note='Name entered above will be used for all issued certificates'
          value={form.name}
          handleChange={handleOnChange}
        />
        <div className='flex w-full flex-col'>
          <label className='font-semibold'>Bio</label>
          <textarea
            name='bio'
            id='bio'
            rows={3}
            className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-300 focus:outline-none'
            placeholder='Enter your bio'
            value={form.bio}
            onChange={() =>
              setForm({
                ...form,
                bio: (document.getElementById('bio') as HTMLTextAreaElement)
                  .value,
              })
            }
          />
        </div>
        <Input
          label='Location'
          name='location'
          type='text'
          placeholder='Enter your location'
          value={form.location}
          handleChange={handleOnChange}
        />
        <Input
          label='Date of birth'
          name='dob'
          type='date'
          placeholder='Enter your date of birth'
          value={form.dob}
          handleChange={handleOnChange}
        />
        <div className='flex w-full flex-col'>
          <label className='font-semibold'>Gender</label>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='mt-1 flex w-full items-center justify-between rounded-lg border border-gray-300 px-4 py-2 focus:border-2 focus:border-blue-300 focus:outline-none'
            placeholder='What is your gender'
          >
            {form.gender ? (
              <p>{form.gender}</p>
            ) : (
              <p className='text-gray-500'>What is your gender</p>
            )}
            <BiChevronDown className='text-2xl text-gray-500' />
          </button>
          {isOpen && (
            <div className='left-1/2 w-full rounded-lg border border-solid border-gray-400 p-2 shadow-md'>
              <div
                onClick={() => {
                  setForm({ ...form, gender: 'Male' });
                  setIsOpen(false);
                }}
                className='cursor-pointer rounded-lg p-1 text-center hover:bg-gray-200'
              >
                Male
              </div>
              <div
                onClick={() => {
                  setForm({ ...form, gender: 'Female' });
                  setIsOpen(false);
                }}
                className='cursor-pointer rounded-lg p-1 text-center hover:bg-gray-200'
              >
                Female
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='mt-12 flex w-full flex-col'>
        <h3>Section Visibility</h3>
        <p className='mt-2 text-gray-500'>
          Select which sections and content should show on your profile page.
        </p>
        <div className='sm:px-4'>
          <ToggleInput
            label='Followers and following'
            note='Shows your followers and the users you follow on codedamn'
            value={form.followersFollowingVisible}
            handleChange={() =>
              setForm({
                ...form,
                followersFollowingVisible: !form.followersFollowingVisible,
              })
            }
          />
          <ToggleInput
            label='XP'
            note='Shows the XP you have earned'
            value={form.xpVisible}
            handleChange={() =>
              setForm({ ...form, xpVisible: !form.xpVisible })
            }
          />
          <ToggleInput
            label='Achievement Badges'
            note='Shows your relative percentile and proficiency'
            value={form.badgesVisible}
            handleChange={() =>
              setForm({ ...form, badgesVisible: !form.badgesVisible })
            }
          />
        </div>
      </div>
      <ButtonGroup
        button1_text='Cancel'
        button2_text='Save changes'
        button2_disabled={JSON.stringify(profile) === JSON.stringify(form)}
        button1_onClick={handleCancel}
        button2_onClick={handleSave}
        classStyles='mt-16 justify-end'
      />
    </div>
  );
};

export default Profile;
