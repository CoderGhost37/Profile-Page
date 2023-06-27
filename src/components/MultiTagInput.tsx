import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const MultiTagInput = ({
  label,
  tags,
  setTags,
}: {
  label: string;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [tag, setTag] = useState('');

  const addTag = () => {
    if (tag === '') return;
    setTags([...tags, tag]);
    setTag('');
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className='flex w-full flex-col'>
      <label className='font-semibold'>{label}</label>
      <input
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        onKeyUp={(e) => (e.key === 'Enter' ? addTag() : null)}
        className='mt-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-300 focus:outline-none'
        placeholder='Press enter to add interests'
      />
      <div className='mt-1 flex flex-wrap'>
        {tags.length > 0 &&
          tags.map((tag, index) => (
            <div
              key={index}
              className='mb-2 mr-2 flex items-center justify-center rounded-md bg-gray-400 px-2 py-1 text-sm font-bold text-white hover:bg-gray-500'
            >
              <p>{tag}</p>
              <div
                className='ml-2 cursor-pointer rounded-full'
                onClick={() => removeTag(index)}
              >
                <AiFillCloseCircle className='h-4 w-4 text-black' />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MultiTagInput;
