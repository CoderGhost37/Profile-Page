import React from 'react';
import { BiBook, BiBriefcase, BiLinkAlt, BiUser } from 'react-icons/bi';

interface SidebarProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const sidebarItems = [
  { name: 'Profile', icon: <BiUser className='text-3xl sm:text-2xl' /> },
  { name: 'Socials', icon: <BiLinkAlt className='text-3xl sm:text-2xl' /> },
  { name: 'Portfolio', icon: <BiBriefcase className='text-3xl sm:text-2xl' /> },
  { name: 'Resume', icon: <BiBook className='text-3xl sm:text-2xl' /> },
];

const Sidebar = ({ active, setActive }: SidebarProps) => {
  return (
    <section className='mt-10 flex w-full flex-col items-start justify-start space-y-10'>
      {sidebarItems.map((item, index) => (
        <div key={index} className='flex w-full items-center'>
          <button
            key={index}
            onClick={() => setActive(item.name)}
            className={`flex items-center pl-4 text-sm md:text-lg ${
              active === item.name
                ? 'border-l-2 border-solid border-black font-semibold'
                : ''
            }`}
          >
            <p>{item.icon}</p>
            <span className='ml-2 hidden sm:inline-block'>{item.name}</span>
          </button>
        </div>
      ))}
    </section>
  );
};

export default Sidebar;
