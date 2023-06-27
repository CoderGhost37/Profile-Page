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
        <div key={index} className='flex items-center'>
          <div
            className={`mr-3 h-8 rounded-full bg-black md:mr-5 ${
              active === item.name ? 'w-1' : 'w-0'
            }`}
          />
          <button
            key={index}
            onClick={() => setActive(item.name)}
            className={`flex items-center text-sm md:text-lg ${
              active === item.name ? 'font-semibold' : ''
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
