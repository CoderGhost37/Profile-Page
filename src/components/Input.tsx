import React from 'react';

interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  note?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  name,
  type,
  placeholder,
  note,
  value,
  handleChange,
}: InputProps) => {
  return (
    <div className='flex w-full flex-col'>
      <label className='font-semibold'>{label}</label>
      <input
        name={name}
        className='mt-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-300 focus:outline-none'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <p className='mt-2 text-sm font-medium text-gray-500'>{note}</p>
    </div>
  );
};

export default Input;
