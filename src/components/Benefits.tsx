import React from 'react'
import Image from 'next/image';
import {motion} from "framer-motion"
// import { BsDot } from 'react-icons/bs';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Benefits = ({ title, desc, benefits }) => {
    return (
        <div className='mx-auto py-10 w-11/12 max-w-7xl font-nunito '>
            <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className="space-y-4 pb-5 flex flex-col justify-center items-center">
                <h2 className="text-primary text-center sm:text-3xl text-2xl font-semibold font-inter">{title}</h2>
                <Image src={'/images/section-heading.webp'} alt={''} width={200} height={60} className=''/>
                <p className="lg:text-md text-base text-ternary text-center">{desc}</p>
            </motion.div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-2 md:w-full sm:w-4/5 w-full mx-auto">
                {benefits.map((elem, index) => {
                    const { title, icon, decs, img, items } = elem;
                    return (
                        <motion.div initial={{x:-80,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1}}} key={index}>
                            <div className="flex justify-center items-start leading-9 tracking-wide bg-gray-100 md:h-[700px] my-5 rounded-xl">
                                <div className="md:p-5 p-2 md:px-4 text-center rounded-md space-y-4 relative w-full ">
                                    <div className='flex justify-center items-center text-primary hover:text-black absolute top-[-34px] left-2/4 -translate-x-2/4'>
                                        {icon && icon}
                                        {img && (
                                            <Image src={img} alt={title} width={90} height={50} title={title} />
                                        )}
                                    </div>
                                    <div className='w-full space-y-5 mt-10'>
                                        <h3 className="text-md text-ternary font-bold leading-6 mt-16">{title}</h3>
                                        {decs && <p className="text-base text-ternary">{decs}</p>}
                                        {items && items.length > 0 && (
                                            <ul className="text-sm text-ternary list-disc list-inside text-left md:space-y-1 text-[15px]">
                                                {items.map((item, i) => (
                                                    <motion.li initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:i*0.1}}} key={i} className='h-16 md:h-full font-normal border-b border-[#0000003b] md:p-2 flex items-center last-of-type:border-none'>
                                                        <span className="flex items-start gap-2" ><IoIosArrowDroprightCircle className='flex flex-shrink-0 text-secondary' size={18}/>{item}</span>
                                                        </motion.li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Benefits;
