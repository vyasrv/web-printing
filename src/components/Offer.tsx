// import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

const Offer = ({ title, desc, Offer }) => {
    return (
        <div className='mx-auto pt-10 pb-20 lg:w-11/12 w-full max-w-7xl font-nunito'>
            <div className="bg-[url('/images/home/what-we-offer.webp')] bg-cover bg-center">
            <motion.div initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className='bg-black/40 px-4 py-20 text-white text-center flex flex-col justify-center items-center'>
                <h2 className=" sm:text-3xl text-2xl font-semibold font-inter">
                    {title}
                </h2>
                {/* <Image src={'/images/home/what-we-offer.webp'} alt={''} width={200} height={60} className=''/> */}

                <p className="lg:text-md text-base mt-4">
                    {desc}
                </p>
            </motion.div>
            </div>

            <div className='-mt-14 w-full'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 lg:w-5/6 w-[95%] mx-auto justify-items-center'>
                    {Offer.map((elem, index) => (
                        <motion.div initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1,delay:index*0.2}}} key={index} className='sm:p-6 p-3 bg-primary text-white text-center space-y-1 shadow-lg rounded-xl'>
                            <h3 className='font-bold text-lg'>{elem.title}</h3>
                            <p>{elem.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    
    )
}

export default Offer