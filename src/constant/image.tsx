import { AiFillHtml5, AiFillTrophy } from 'react-icons/ai';
import { BiBookmarks, BiEdit } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { BsFillHeartPulseFill, BsStars } from 'react-icons/bs';
import {
  FaCss3Alt,
  FaJava,
  FaMedal,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoLocationOutline } from 'react-icons/io5';
import { MdElectricBolt } from 'react-icons/md';
import { SiMongodb } from 'react-icons/si';
import { TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb';

const image = (icon: string) => {
  if (icon.startsWith('http'))
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={icon} alt={icon} width={45} height={45} />;
  switch (icon) {
    case 'lightning':
      return <MdElectricBolt className='text-4xl text-[#6366F1]' />;
    case 'star':
      return <BsStars className='text-4xl text-[#0EA5E9]' />;
    case 'trophy':
      return <AiFillTrophy className='text-4xl text-[#FE6712]' />;
    case 'heart':
      return <BsFillHeartPulseFill className='text-4xl text-[#EC4899]' />;
    case 'google':
      return <FcGoogle className='text-4xl md:text-5xl' />;
    case 'facebook':
      return <BsFacebook className='text-4xl text-blue-500 md:text-5xl' />;
    case 'location':
      return <IoLocationOutline className='h-10 w-10' />;
    case 'bookmark':
      return <BiBookmarks className='h-10 w-10' />;
    case 'edit':
      return <BiEdit className='h-10 w-10' />;
    case 'html-big':
      return <AiFillHtml5 className='text-6xl' />;
    case 'javascript-big':
      return <TbBrandJavascript className='text-6xl' />;
    case 'react-big':
      return (
        <FaReact className='rounded-md bg-black p-0.5 text-6xl text-white' />
      );
    case 'html':
      return <AiFillHtml5 className='text-2xl' />;
    case 'react':
      return (
        <FaReact className='rounded-md bg-black p-0.5 text-2xl text-white' />
      );
    case 'css':
      return <FaCss3Alt className='text-2xl' />;
    case 'javascript':
      return <TbBrandJavascript className='text-2xl' />;
    case 'java':
      return (
        <FaJava className='rounded-md bg-black p-0.5 text-2xl text-white' />
      );
    case 'node':
      return (
        <FaNodeJs className='rounded-md bg-black p-0.5 text-2xl text-white' />
      );
    case 'python':
      return (
        <FaPython className='rounded-md bg-black p-0.5 text-2xl text-white' />
      );
    case 'mongo':
      return (
        <SiMongodb className='rounded-md bg-black p-0.5 text-2xl text-white' />
      );
    case 'next':
      return (
        <TbBrandNextjs className='rounded-md bg-black p-0.5 text-2xl text-white' />
      );
    case 'medal':
      return <FaMedal className='text-6xl' />;
  }
};

export default image;
