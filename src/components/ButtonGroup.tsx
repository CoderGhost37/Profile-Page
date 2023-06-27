import React from 'react';

interface ButtonGroupProps {
  classStyles?: string;
  button1_text: string;
  button2_text: string;
  button1_onClick: () => void;
  button2_onClick: () => void;
}

const ButtonGroup = ({
  classStyles,
  button1_text,
  button2_text,
  button1_onClick,
  button2_onClick,
}: ButtonGroupProps) => {
  return (
    <div className={`flex items-center gap-4 ${classStyles}`}>
      <button
        onClick={button1_onClick}
        className='shadown-sm rounded-lg bg-gray-200 px-2 py-1 text-sm font-medium hover:bg-gray-300 sm:text-base md:px-4 md:py-2 md:text-lg'
      >
        {button1_text}
      </button>
      <button
        onClick={button2_onClick}
        className='shadown-sm rounded-lg bg-[#4F46E5] px-2 py-1 text-sm font-medium text-white hover:bg-[#392fec] sm:text-base md:px-4 md:py-2 md:text-lg'
      >
        {button2_text}
      </button>
    </div>
  );
};

export default ButtonGroup;
