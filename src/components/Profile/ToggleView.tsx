import React from 'react';

interface ToggleViewProps {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
}

const ToggleView = ({ view, setView }: ToggleViewProps) => {
  return (
    <section className='mt-10 rounded-lg border border-solid'>
      <div className='flex items-center px-5 py-4'>
        <button
          className={`${
            view === 'portfolio'
              ? 'bg-[#e4eafd] text-[#4338CA] hover:bg-[#cdd8fc]'
              : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
          } rounded-lg px-4 py-2 font-semibold`}
          onClick={() => setView('portfolio')}
        >
          Portfolio
        </button>
        <button
          className={`${
            view === 'resume'
              ? 'bg-[#e4eafd] text-[#4338CA] hover:bg-[#cdd8fc]'
              : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
          } ml-4 rounded-lg px-4 py-2 font-semibold`}
          onClick={() => setView('resume')}
        >
          Resume
        </button>
      </div>
    </section>
  );
};

export default ToggleView;
