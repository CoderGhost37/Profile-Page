import Link from 'next/link';
import React from 'react';

import NavMenu from '@/components/Navbar/NavMenu';
import Searchbar from '@/components/Navbar/Searchbar';

const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-5 py-2 sm:px-8 md:px-12 lg:px-16'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>codedamn</h1>
      </Link>
      <div className='flex items-center justify-between'>
        <Searchbar />
        <NavMenu />
      </div>
    </header>
  );
};

export default Navbar;
