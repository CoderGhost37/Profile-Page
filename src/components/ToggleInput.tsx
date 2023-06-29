import React from 'react';

interface InputProps {
  label: string;
  note?: string;
  value: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleInput = ({ label, note, value, handleChange }: InputProps) => {
  return (
    <div className='mt-5 flex w-full items-center justify-between'>
      <div className=''>
        <label className='font-semibold'>{label}</label>
        <p className='mt-1 text-xs font-medium text-gray-500 md:text-sm'>
          {note}
        </p>
      </div>

      <label className='ml-4 flex items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            className='sr-only'
            checked={value}
            onChange={handleChange}
          />
          <div
            className={`${
              value ? 'bg-[#4F46E5]' : 'bg-gray-200'
            } flex h-6 w-12 cursor-pointer items-center rounded-full transition-colors`}
          >
            <div
              className={`${
                value ? 'translate-x-7' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </div>
        </div>
      </label>
    </div>
  );
};

export default ToggleInput;
