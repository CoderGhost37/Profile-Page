import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import UpdateProfile from '@/components/EditProfile/EditProfile';
import Seo from '@/components/Seo';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function EditProfile() {
  const router = useRouter();
  const { tab } = router.query;
  const [active, setActive] = React.useState(tab as string);

  React.useEffect(() => {
    setActive(tab as string);
  }, [tab]);

  return (
    <>
      <Seo templateTitle='Edit Profile' />

      <main className='mx-auto mt-4 max-w-7xl px-4 pb-10 md:px-12'>
        <Link
          href='/'
          className='inline-flex items-center justify-start rounded-lg px-2 py-1 hover:bg-gray-100'
        >
          <BsArrowLeft className='text-lg' />
          <p className='ml-2 text-lg font-medium'>Back</p>
        </Link>
        <div className='mt-10 grid grid-cols-5 md:grid-cols-4'>
          <div className='col-span-1'>
            <Sidebar active={active} setActive={setActive} />
          </div>
          <div className='col-span-4 md:col-span-3'>
            <UpdateProfile active={active} />
          </div>
        </div>
      </main>
    </>
  );
}
