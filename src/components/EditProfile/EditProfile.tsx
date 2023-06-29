import React from 'react';

import Portfolio from '@/components/EditProfile/Portfolio';
import Profile from '@/components/EditProfile/Profile';
import Resume from '@/components/EditProfile/Resume';
import Socials from '@/components/EditProfile/Socials';

const UpdateProfile = ({ active }: { active: string }) => {
  return (
    <section className='w-full'>
      {active === 'profile' && <Profile />}
      {active === 'socials' && <Socials />}
      {active === 'portfolio' && <Portfolio />}
      {active === 'resume' && <Resume />}
    </section>
  );
};

export default UpdateProfile;
