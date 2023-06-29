import React from 'react';

import Input from '@/components/Input';

interface UploadPictureModalProps {
  profilePicUrl: string;
  setProfilePicUrl: React.Dispatch<React.SetStateAction<string>>;
}

const UploadPictureModal = ({
  profilePicUrl,
  setProfilePicUrl,
}: UploadPictureModalProps) => {
  return (
    <div className='w-full'>
      <Input
        label='Profile Picture URL'
        name='profilePic'
        type='text'
        placeholder='Enter your profile picture URL'
        value={profilePicUrl}
        handleChange={(e) => setProfilePicUrl(e.target.value)}
      />
    </div>
  );
};

export default UploadPictureModal;
