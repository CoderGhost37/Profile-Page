import React from 'react';
import toast from 'react-hot-toast';

import ButtonGroup from '@/components/ButtonGroup';
import Input from '@/components/Input';

import { useProfile } from '@/context/ProfileContext';

const Socials = () => {
  const { socials, updateSocials } = useProfile();
  const [form, setForm] = React.useState(socials);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setForm(socials);
  };

  const handleSave = () => {
    updateSocials(form);
    toast.success('Socials updated successfully');
  };

  return (
    <div className='w-full px-6'>
      <div className='flex flex-col items-center justify-between space-y-8'>
        <Input
          label='Github'
          name='githubUrl'
          type='text'
          placeholder='Github profile URL'
          value={form.githubUrl}
          handleChange={handleOnChange}
        />
        <Input
          label='LinkedIn'
          name='linkedinUrl'
          type='text'
          placeholder='LinkedIn profile URL'
          value={form.linkedinUrl}
          handleChange={handleOnChange}
        />
        <Input
          label='Facebook'
          name='facebookUrl'
          type='text'
          placeholder='Facebook profile URL'
          value={form.facebookUrl}
          handleChange={handleOnChange}
        />
        <Input
          label='Instagram'
          name='instagramUrl'
          type='text'
          placeholder='Instagram profile URL'
          value={form.instagramUrl}
          handleChange={handleOnChange}
        />
        <Input
          label='Dribbble'
          name='dribbbleUrl'
          type='text'
          placeholder='Dribbble profile URL'
          value={form.dribbbleUrl}
          handleChange={handleOnChange}
        />
        <Input
          label='Behance'
          name='behanceUrl'
          type='text'
          placeholder='Behance profile URL'
          value={form.behanceUrl}
          handleChange={handleOnChange}
        />

        <div className='flex w-full justify-end'>
          <ButtonGroup
            button1_text='Cancel'
            button2_text='Save Changes'
            button2_disabled={JSON.stringify(form) === JSON.stringify(socials)}
            button1_onClick={handleCancel}
            button2_onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
};

export default Socials;
