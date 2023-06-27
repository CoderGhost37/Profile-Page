import Link from 'next/link';
import React from 'react';

import image from '@/constant/image';

interface CertificateProps {
  title: string;
  issuedOn: string;
  icon: string;
  link: string;
}

const Certificate = ({ title, issuedOn, icon, link }: CertificateProps) => {
  return (
    <div className='col-span-1 rounded-lg border border-solid border-gray-300 px-5 py-3'>
      <div className=''>{image(icon)}</div>
      <div className='mt-4'>
        <h3 className='text-xl'>{title}</h3>
        <p className='text-gray-500'>Issued On {issuedOn}</p>
        <Link href={link}>
          <p className='mt-2 cursor-pointer text-lg font-medium text-gray-600 hover:text-gray-700'>
            See Credentials
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Certificate;
