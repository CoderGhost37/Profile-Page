import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main className='bg-blue-500 font-bold text-center'>
        Hello World
      </main>
    </Layout>
  );
}
