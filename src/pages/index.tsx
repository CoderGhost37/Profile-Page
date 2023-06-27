import * as React from 'react';

import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Home' />

      <main className='bg-blue-500 text-center font-bold'>Hello World</main>
    </>
  );
}
