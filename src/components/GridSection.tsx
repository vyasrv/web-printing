import React from 'react'
import Image from 'next/image';
import {motion} from "framer-motion"
// import { uploadcareLoader } from '@uploadcare/nextjs-loader';

// const GridSection = ({ values, title, para, type, types ,para1 })
const GridSection = ({ values, title, para ,para1 }) => {
    return (

        <section className='md:space-y-10 space-y-5' >
            {title && (
                <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className="space-y-4  flex flex-col justify-center items-center">
                    <h2 className="text-primary text-center lg:text-3xl text-2xl font-bold font-inter">
                        {title}
                    </h2>
                    <Image src={'/images/section-heading.webp'} alt={''} width={200} height={60} className='' />
                    {para && (
                          <>
                        <p className="lg:text-md text-base text-ternary text-center">
                            {para}
                        </p>
                        <p className="lg:text-md text-base text-ternary text-center">
                        {para1}
                    </p></>
                    )}
                </motion.div>
            )}

            <div className={`grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-9 gap-2 `}>
                {values.map((elem: any, index: any) => {
                    const { title, decs,decs2 } = elem;
                    return (
                        <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:0.5,delay:index*0.2}}} key={index} className='group  mx-auto text-center  text-ternary border md:border-t-8 md:border-b-8 border-b-2 border-t-2 rounded-2xl border-primary'>
                            <div className='transition-all duration-500 ease-in-out group-hover:bg-[#112e52] group-hover:text-white xl:h-60 lg:h-64 sm:h-48 sm:p-1 p-3 flex flex-col justify-center gap-1 items-center'>
                            <h3 className="text-md font-bold pt-2">{title}</h3>
                            <p className='w-1/4 h-[1px] group-hover:bg-white bg-black '></p>
                            <p className="text-base  ">{decs}</p>
                            <p className="text-base  ">{decs2}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </section>

    )
}

export default GridSection