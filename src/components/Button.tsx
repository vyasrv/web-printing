import Link from 'next/link';
import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const Button = ({
  btnName,
  url,
  onClickFunc,
  bgColor = 'bg-black',
  margin = 'ml-0',
  clipShapeBgColor='transparent',
  bgColorOne = 'bg-black',
  iconColor = 'text-white'
}) => {
  const handleClick = () => {
    if (onClickFunc) {
      onClickFunc();
    }
  };

  // Check if bgColor is a hex code
  const isHexColor = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

  return (
    <div className={`md:w-1/6 ${margin}`}>
      <div className='flex cursor-pointer relative group' onClick={handleClick}>
        <div className={`${bgColorOne} pr-[19.5px] pl-2 py-[7px] rounded-lg`}>
          <FaPlusCircle className={`${iconColor}`} />
        </div>
        <div className='absolute transform translate-x-[7%] -translate-y-1 rounded-lg flex transition-transform duration-700 ease-in-out group-hover:translate-x-[2%]'>
          <div
            className='px-5 py-2.5 inline-block clip-custom-shape transition-transform duration-300 ease-in-out group-hover:translate-x-0'
            style={{ backgroundColor: clipShapeBgColor }}
          >

          </div>
          {url ? (
            <Link href={url} passHref={true} target='_blank'>
              <div
                className={`py-[0.5rem] px-3.5 ${isHexColor(bgColor) ? '' : bgColor} text-white text-sm font-bold rounded-r-lg transition-transform duration-700 ease-in-out -translate-x-2 group-hover:-translate-x-3 whitespace-nowrap`}
                style={isHexColor(bgColor) ? { backgroundColor: bgColor } : {}}
              >
                {btnName || 'Get A Demo'}
              </div>
            </Link>
          ) : (
            <div
              className={`py-2 px-3.5 ${isHexColor(bgColor) ? '' : bgColor} text-white text-sm font-bold rounded-r-lg transition-transform duration-700 ease-in-out -translate-x-2 group-hover:-translate-x-3 whitespace-nowrap`}
              style={isHexColor(bgColor) ? { backgroundColor: bgColor } : {}}
            >
              {btnName || 'Get A Demo'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Button;
