import * as React from 'react';

import Portfolio from '@/components/Profile/Portfolio/Portfolio';
import ProfileCard from '@/components/Profile/ProfileCard';
import Resume from '@/components/Profile/Resume/Resume';
import ToggleView from '@/components/Profile/ToggleView';
import Seo from '@/components/Seo';

export default function HomePage() {
  const [view, setView] = React.useState('portfolio');
  return (
    <>
      <Seo templateTitle='Profile' />

      <main className='mx-auto max-w-6xl px-8 py-10 md:px-12 lg:px-20'>
        <ProfileCard view={view} />
        <ToggleView view={view} setView={setView} />
        {view === 'portfolio' ? <Portfolio /> : <Resume />}
      </main>
    </>
  );
}
