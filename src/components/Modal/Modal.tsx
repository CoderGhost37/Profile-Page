import React, { useRef } from 'react';
import { IoMdClose } from 'react-icons/io';

import ButtonGroup from '@/components/ButtonGroup';

interface ModalProps {
  title: string;
  Body: React.ReactNode;
  handleClose: () => void;
  handleSave: () => void;
}

const Modal = ({ title, Body, handleClose, handleSave }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: React.MouseEvent<HTMLElement>) => {
    if (modalRef?.current && !modalRef?.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  return (
    <div
      className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60'
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className='flex max-h-96 w-4/5 max-w-3xl flex-col overflow-hidden overflow-y-auto rounded-lg bg-white md:max-h-screen md:w-11/12'
      >
        <div className='mr-4 mt-4 flex justify-end'>
          <div
            className='relative h-4 w-4 cursor-pointer rounded-full p-1 hover:bg-gray-100 md:h-8 md:w-8'
            onClick={handleClose}
          >
            <IoMdClose className='h-full w-full' />
          </div>
        </div>
        <div className='flex w-full items-center justify-center p-4 text-center'>
          <h2 className='text-2xl font-bold'>{title}</h2>
        </div>
        <div className='flex flex-col items-center justify-center p-4'>
          {Body}
        </div>
        <div className='flex items-center justify-center space-x-5 p-4'>
          <ButtonGroup
            button1_text='Cancel'
            button2_text='Save'
            button1_onClick={handleClose}
            button2_onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
