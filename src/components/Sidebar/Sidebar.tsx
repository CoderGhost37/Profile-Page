import { useRouter } from 'next/router';
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
  const router = useRouter();
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: { name: string }
  ) => {
    const tab = item.name.toLowerCase();
    setActive(tab);
    router.push(`/edit-profile?tab=${tab}`);
  };

  return (
    <section className='flex w-full flex-col items-start justify-start space-y-8 sm:mt-10 sm:space-y-10'>
      {sidebarItems.map((item, index) => (
        <div key={index} className='flex w-full items-center'>
          <div
            className={`h-8 rounded-full bg-black ${
              active === item.name.toLowerCase() ? 'w-0.5' : 'w-0'
            }`}
          />
          <button
            key={index}
            onClick={(e) => handleClick(e, item)}
            className={`flex items-center pl-4 text-sm md:text-lg lg:text-xl ${
              active === item.name.toLowerCase() ? 'font-semibold' : ''
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
