import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"
// import { uploadcareLoader } from '@uploadcare/nextjs-loader'

const About = ({ title, paraOne, paraTwo, paraThree, paraFour,  img, type,bulletPoints = []  }:any) => {
    return (
        <section className={`${type === 1 ? "space-y-4 py-16" : ""}`}>
            {type === 1 ? (<motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className='text-center flex flex-col justify-center items-center gap-5'><h2 className="font-semibold sm:text-3xl text-2xl text-primary font-inter  ">
                {title}
            </h2><Image src={'/images/section-heading.webp'} alt={''} width={200} height={60} className='' /></motion.div>) : null}

            <div className={`${type === 1 ? "" : "space-y-4 py-16"} mx-auto   xl:w-4/5 w-11/12 max-w-7xl font-nunito lg:flex items-center gap-5 `}>

                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1,transition:{duration:1}}} className="lg:w-1/2 lg:block hidden">
                    <Image src={img}
                        alt="about-us"
                        title={title}
                        width={600}
                        height={600}
                        // loader={uploadcareLoader}
                        unoptimized={true}
                        priority={true}
                        loading="eager" />
                </motion.div>
                <motion.div className='lg:w-1/2 space-y-5 ' initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} >
                    <div className="lg:text-md text-base text-ternary">
                        <div className='space-y-7' >
                            {type === 1 ? null : <h2 className="font-semibold  sm:text-3xl text-2xl text-primary font-inter text-center lg:text-left">
                                {title}
                            </h2>}
                            <div className="lg:hidden flex justify-center">
                                <Image src={img}
                                    alt="about-us"
                                    title={title}
                                    width={600}
                                    height={600}
                                    // loader={uploadcareLoader}
                                    unoptimized={true}
                                    priority={true}
                                    loading="eager" />
                            </div>
                            <p>
                                {paraOne &&
                                    paraOne}
                            </p>
                            <p>
                                {paraTwo && paraTwo}
                            </p>
                            <p>
                                {paraThree && paraThree}
                            </p>
                            <p>
                                {paraFour && paraFour}
                            </p>
                            {bulletPoints.length > 0 && (
                                <ul className="list-disc list-inside space-y-1 text-start">
                                    {bulletPoints.map((point:any, index:any) => (
                                        <motion.li initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:index*0.2}}} key={index}>{point}</motion.li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <button className="w-28 h-9 justify-center rounded-md bg-primary text-white hover:bg-primary/80 transition-all duration-500 ease-in flex gap-2 items-center relative z-20" >
                        Get Demo
                    </button>
                    {/* <Button btnName={btnName} url={"tel:+918209514612"} onClickFunc={undefined} clipShapeBgColor={"secondary"} bgColor={'bg-secondary'} bgColorOne={undefined} iconColor={undefined} /> */}
                </motion.div>

            </div>
        </section>
    )
}

export default About