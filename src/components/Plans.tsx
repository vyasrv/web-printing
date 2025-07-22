import Image from 'next/image';
import React from 'react';
import {motion} from "framer-motion"


const Plans = ({ title, desc, Plans }) => {
    return (
        <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className='mx-auto py-10 w-11/12 max-w-7xl font-nunito'>
            <div className="space-y-4 pb-5 flex flex-col justify-center items-center">
                <h2 className="text-primary text-center sm:text-3xl text-2xl  font-semibold font-inter">{title}</h2>
                <Image src={'/images/section-heading.webp'} alt={''} width={200} height={60} className=''/>
                <p className="lg:text-md text-base text-ternary text-center">{desc}</p>
            </div>
            <div className="pt-2 w-full mx-auto overflow-x-auto">
                <div className="flex sm:grid sm:grid-cols-2 gap-5 min-w-[600px] sm:min-w-0">
                    {Plans.map((elem, index) => {
                        const { title, decs, items, btnName } = elem;
                        return (
                            <div key={index} className="flex-shrink-0 w-[300px] sm:w-auto">
                                <div className="flex justify-center items-start leading-9 tracking-wide bg-[#f3f4f6] lg:h-[720px] md:h-[780px]  h-[850px] rounded-2xl">
                                    <div className='w-full'>
                                        <div className=''>
                                            <div className='space-y-1 p-6 bg-primary rounded-t-2xl xl:h-24 sm:h-28 h-32'>
                                                <h3 className="text-2xl text-white font-bold leading-6">{title}</h3>
                                                <p className="text-base text-white">{decs}</p>
                                            </div>
                                            {items && items.length > 0 && (
                                                <div className="space-y-3 p-4 lg:h-[530px] md:h-[596px] h-[650px] ">
                                                    {items.map((item, i) => (
                                                        <div key={i}>
                                                            <motion.p initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1,delay:i*0.1}}} className="font-semibold text-md">{item.subtitle}</motion.p>
                                                            <ul className="text-base text-ternary list-disc list-inside text-left md:space-y-1 text-[15px]">
                                                                {Array.isArray(item.content) &&
                                                                    item.content.map((point, idx) => (
                                                                        <motion.li initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1,delay:idx*0.1}}} key={idx} className='font-normal flex items-center last-of-type:border-none'>
                                                                            <span className="flex items-center gap-2">
                                                                                {point.icon}
                                                                                {point.name}
                                                                            </span>
                                                                        </motion.li>
                                                                    ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className='mx-auto w-3/4 lg:mb-0 mb-5'>
                                            <button className='bg-primary hover:bg-primary/90 p-2 text-white font-bold rounded-2xl w-full'>{btnName}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </motion.div>
    );
};

export default Plans;
