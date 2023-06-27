import React from 'react';

import image from '@/constant/image';

interface SkillProps {
  name: string;
  icon: string;
}

const Skill = ({ name, icon }: SkillProps) => {
  return (
    <div className='col-span-1 flex items-center rounded-lg border border-solid border-gray-100 px-2 py-1'>
      {image(icon)}
      <p className='ml-3 font-semibold'>{name}</p>
    </div>
  );
};

export default Skill;
