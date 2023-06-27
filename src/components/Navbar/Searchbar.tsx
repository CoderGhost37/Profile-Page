import React from 'react';
import { AiOutlineDown, AiOutlineSearch } from 'react-icons/ai';

const Searchbar = () => {
  const [input, setInput] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='ml-1 mr-6 hidden items-center md:flex lg:mr-10'>
      <div className='relative flex items-center'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <AiOutlineSearch className='text-xl text-gray-500' />
        </span>
        <input
          type='text'
          className='w-96 rounded-md border-none bg-gray-100 py-2 pl-10'
          placeholder='Search'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className='absolute inset-y-0 right-0 flex items-center'>
          <div className='relative'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='flex items-center rounded-md bg-gray-200 px-2 py-2 text-gray-500 md:px-4'
            >
              Courses{' '}
              <span>
                <AiOutlineDown
                  className={`ml-1 text-xs transition ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </span>
            </button>
            {isOpen && (
              <div className='absolute left-1/2 z-10 mt-5 flex -translate-x-1/2'>
                <div className='flex-auto space-y-1 overflow-hidden rounded-md bg-white py-2 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 md:w-40 lg:w-52'>
                  {[
                    'Frontend Learning Path',
                    'Backend Learning Path',
                    'FullStack Learning Path',
                  ].map((item, index) => (
                    <p
                      className='cursor-pointer p-1 text-center font-medium hover:bg-gray-300'
                      key={index}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
