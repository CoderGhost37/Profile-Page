import React from 'react';

import Portfolio from '@/components/EditProfile/Portfolio';
import Profile from '@/components/EditProfile/Profile';
import Resume from '@/components/EditProfile/Resume';
import Socials from '@/components/EditProfile/Socials';

const UpdateProfile = ({ active }: { active: string }) => {
  return (
    <section className='w-full'>
      {active === 'Profile' && <Profile />}
      {active === 'Socials' && <Socials />}
      {active === 'Portfolio' && <Portfolio />}
      {active === 'Resume' && <Resume />}
    </section>
  );
};

export default UpdateProfile;
