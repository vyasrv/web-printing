import React from 'react';
import Button from './Button';

const PopupButton = ({ name, buttonType, margin, bgColor, clipShapeBgColor, bgColorOne, iconColor, openModal,url }) => {
  if (!buttonType) {
    return (
      <Button 
        btnName={name}
        onClickFunc={openModal}
        margin={margin}
        bgColor={bgColor}
        clipShapeBgColor={clipShapeBgColor}
        bgColorOne={bgColorOne}
        iconColor={iconColor} url={url}      />
    );
  } else if (buttonType === 'popup') {//for popup
    return (
      <button id="popup" aria-label="popup" className="inline-flex items-center justify-center text-sm tracking-normal font-semibold hover:text-primary hover:bg-white/90 bg-white text-black  rounded-md cursor-pointer transition duration-300 py-2 px-5" onClick={openModal}>
        <p className='uppercase whitespace-nowrap'>{name}</p>
      </button>
    );
  } else if (buttonType === 'callToAction') { //for gradient button
    return (
      <div className='group'>
        <button id="modal-open" aria-label="modal-open" className='lg:flex justify-center hover:border-none rounded-bl-xl rounded-tr-xl bg-gradient-to-br from-[#3b82f6] to-[#7c3aed] font-semibold xl:text-[14px] text-[12px] py-[7px] 2xl:px-7 px-5 hidden button-with-animation' onClick={openModal}>
          <p className='text-white uppercase whitespace-nowrap'>{name}</p>
        </button>
      </div>
    );
  }
};

export default PopupButton;