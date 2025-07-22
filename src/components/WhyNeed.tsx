"use client"

import React from 'react'
import Image from 'next/image';
import {motion} from "framer-motion"
// import {motion} from "framer-motion"
// import { uploadcareLoader } from '@uploadcare/nextjs-loader';

const WhyNeed = ({ values, title, para }) => {
    return (

        <section className='py-10 text-white space-y-10' >
            
            {title && (
                <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className="space-y-4  flex flex-col justify-center items-center">
                    <h2 className=" text-center lg:text-3xl text-2xl font-bold font-inter">
                        {title}
                    </h2>

                    <Image src={'/images/section-heading.webp'} alt={''} width={200} height={60} className='' />
                    {para && (
                        <p className="lg:text-md text-base text-center">
                            {para}
                        </p>
                    )}
                </motion.div>
            )}

            <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-9 gap-2`}>
                {values.map((elem: any, index: any) => {
                    const { title, decs } = elem;
                    return (
                        <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:0.5,delay:index*0.2}}} key={index} className={` overflow-y-scroll rounded-lg flex flex-col justify-start items-start leading-9 tracking-wide bg-white xl:h-60 md:h-50 p-4 gap-2 px-3`} >
                            <h3 className="text-md  text-ternary font-bold text-center ">{title}</h3>
                            <p className='w-1/4 h-[1px] bg-black'></p>
                            <p className="text-base text-ternary ">{decs}</p>
                        </motion.div>

                    );
                })}
            </div>

        </section>

    )
}

export default WhyNeed