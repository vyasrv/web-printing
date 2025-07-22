import React from 'react';
import Button from "./Button";
import {motion} from "framer-motion"
// import Popup from "./Popup";

const HeroSection = ({ title, titleOne, para, buttonCount, buttonNames, callToActionLine, para1 = "" }) => {
  return (
    <motion.div initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}}  className="space-y-3 text-left  w-full py-5 text-white">
      <h1 className="md:text-[42px] text-3xl font-bold md:leading-[3.5rem] capitalize font-inter text-white ">
        {title}
      </h1>
      <p><span className="text-lg"> {titleOne}</span></p>
      <p className="lg:text-md text-base font-medium  font-nunito lg:pr-16">
        {para}
      </p>
      <p className="lg:text-md text-base font-medium  font-nunito lg:pr-16">
        {para1}
      </p>
      {callToActionLine &&  
        <p className=' text-base font-semibold'>{callToActionLine}</p>}
      <div className="sm:pt-10 pt-5 grid sm:grid-cols-2 w-1/2 xl:gap-24 sm:gap-36 gap-5  ">
        {buttonCount >= 1 && (
          <div className="w-1/2">
            <button className="w-28 h-9 justify-center rounded-md bg-secondary text-white hover:bg-secondary/80 transition-all duration-500 ease-in flex gap-2 items-center relative z-20" >
              Get Demo
            </button>
          </div>
        )}
        {buttonCount === 2 && (
          <div className="w-1/2">
            <Button
              url={"tel:8209514612"}
              btnName={buttonNames[1]}
              onClickFunc={undefined}
              clipShapeBgColor={"secondary"} bgColor={'bg-secondary'}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HeroSection;
