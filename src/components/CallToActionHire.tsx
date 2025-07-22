import React from 'react'
import Popup from './Popup';

const CallToActionHire = ({ btnName, clipShapeBgColor, title, desc, bgColorOne, bgColor, iconColor, bgImage }) => {
    const sectionStyle = bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    } : {};
    return (
        <section>
            <div className=" md:border-solid md:border-slate-200 py-14 mx-auto w-full  flex justify-center items-center  " style={sectionStyle} >
                <div className='lg:w-2/3 w-11/12 text-center lg:px-10 space-y-8 mx-auto'>
                    <p className=' lg:text-3xl text-xl font-bold text-white md:leading-[3rem] '> {title}</p>
                    <p className='md:text-xl text-md text-white leading-8 '>{desc}</p>
                    <div className='flex justify-center md:w-5/6 w-1/2'>
                        <Popup
                            url={undefined}
                            name={btnName}
                            clipShapeBgColor={clipShapeBgColor} bgColor={bgColor} iconColor={iconColor} bgColorOne={bgColorOne}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CallToActionHire