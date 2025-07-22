import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RxCross1 } from "react-icons/rx";
import PopupForm from './PopupForm';
import { FaArrowRight } from 'react-icons/fa';
import PopupButton from './PopupButton';

const Popup = (props) => {
  const { name, buttonType, margin, bgColor, clipShapeBgColor, bgColorOne, iconColor,url } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isModalOpen);
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      <PopupButton 
        name={name}
        margin={margin}
        bgColor={bgColor}
        clipShapeBgColor={clipShapeBgColor}
        bgColorOne={bgColorOne}
        iconColor={iconColor}
        openModal={openModal} url={undefined} buttonType={buttonType} />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <div className="absolute bg-black opacity-80 inset-0" onClick={closeModal}></div>
          <div className="2xl:w-[58%] xl:w-3/4 lg:w-11/12 w-11/12 rounded z-50 max-w-7xl max-h-full overflow-y-auto">
            <div className='w-full lg:flex justify-center'>
              <div className='lg:w-1/2 w-full lg:bg-transparent bg-blue'>
                <button id="close-modal" aria-label="close-modal" onClick={closeModal} className='absolute z-[999999] transform lg:translate-x-6 translate-x-4 lg:translate-y-5 lg:block hidden'>
                  <RxCross1 className='lg:text-white/80' size={30} />
                </button>
                <Image src='/images/home/pop-up.webp' alt='contact' title='contact' width={650} height={800} className='lg:block hidden' />
                <p className='text-white absolute transform -translate-y-16 text-3xl font-bold 2xl:px-16 px-10 lg:flex items-center gap-2 uppercase hidden'>
                  Grab The Offer Now!<FaArrowRight size={30} />
                </p>
              </div>
              <div className='bg-white lg:py-2 px-2 py-5 lg:w-1/2 w-full space-y-3 lg:rounded-none rounded-lg relative'>
                <button id="close-modal" aria-label="close-modal" onClick={closeModal} className='absolute z-[999999] transform lg:translate-x-6 lg:translate-y-5 right-5 lg:hidden'>
                  <RxCross1 className='lg:text-white/50' size={20} />
                </button>
                <h2 className="md:text-3xl text-xl text-ternary font-bold text-center">
                  Talk to Our Expertise Now !!
                </h2>
                <p className='md:text-base lg:pl-8 pl-3 text-red-600 font-nunito'>Mandatory Field *</p>
                <PopupForm textColor = 'text-ternary/60' beforeSelectOptionTextColor = "text-gray-400" afterSelectOptionTextColor = "text-black" />
              </div>  
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;