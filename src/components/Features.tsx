import Image from 'next/image';
import React, { useState } from 'react'
import {motion} from "framer-motion"

const Features = ({ tabs, title, desc, tabFeatures }:any) => {
  const [activeTab, setActiveTab] = useState("Transportation/Library /Hostel");

  return (
    <div className="min-h-screen  py-12">
      <motion.h1 initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className=" sm:text-3xl text-2xl  font-bold text-center mb-2 text-primary">
        {title}
      </motion.h1>
      <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className='flex justify-center items-center'>
        <Image src={'/images/section-heading.webp'} alt={title} width={200} height={60} />
      </motion.div>
      <motion.p initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className="text-center text-gray-600 mb-6 font-nunito">
        {desc}
      </motion.p>

      {/* Tabs */}
      <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className="flex flex-wrap justify-center sm:gap-4 gap-2.5 font-inter sm:w-11/12 w-full mx-auto lg:p-6">
        {tabs.map((tab:any, index:any) => (
          <div
            
            key={index}
            onClick={() => setActiveTab(tab.title)}
            className={`cursor-pointer px-4 py-2 rounded-xl shadow text-center  sm:w-56 w-[46%] md:h-38 h-36 transition-all duration-300 flex flex-col items-center justify-center hover:bg-[#112e52] hover:text-white hover:border-b-4 hover:border-tranparent
                 ${activeTab === tab.title ? "bg-primary text-white border-b-4 border-transparent" : "bg-white  border-b-4 border-primary"}`}
          >
            {/* <Image src={tab.img} alt={''} width={70} height={50} className='bg-black rounded-2xl p-2 '/> */}
            <p>{tab.icon}</p>
            {tab.title}
          </div>

        ))}
      </motion.div>

      <div className="flex md:flex-row flex-col justify-center items-center relative p-0">
        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1}}} className="md:w-[35%]  xl:block md:hidden relative z-10 md:pt-0 pt-10">
          <div className="bg-primary flex justify-start items-start md:py-10 md:rounded-r-2xl ">
            <Image
              src={tabFeatures[activeTab]?.image}
              className="2xl:w-[80%] sm:w-[95%] w-full"
              alt={activeTab}
              title={activeTab}
              width={600}
              height={900}
            />
          </div>
        </motion.div>

        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1}}} className="w-[95%] xl:w-[68%] flex justify-end items-end py-10 relative 2xl:-ml-24 xl:-ml-10 ml-0 z-50">
          <p className="absolute left-1/2 top-5 transform -translate-x-1/2 w-72 text-center bg-primary text-white px-4 py-2 rounded-xl z-50">
            {activeTab}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1250px] font-nunito border bg-white p-8 rounded-2xl">
            {tabFeatures[activeTab]?.features?.map((feature:any, index:any) => (
              <div
                key={index}
                className="group sm:mt-0 mt-5 relative overflow-hidden bg-white p-3 border border-transparent hover:border-[#FB601C] transition duration-300 text-center sm:h-38 flex flex-col justify-center items-center"
              >
                <div className="text-4xl mb-3 group-hover:hidden transition-opacity duration-300">
                  {feature.img ? <Image
                    src={feature.img}
                    alt={feature.title}
                    title={feature.title}
                    width={35}
                    height={35}
                  /> :
                    <div className="text-4xl mb-3 group-hover:hidden transition-opacity duration-300">
                      {feature.icon}
                    </div>}
                </div>

                <h2 className="text-xl font-semibold mb-2 transform transition-all duration-300 -translate-y-3 group-hover:-translate-y-0">
                  {feature.title}
                </h2>

                <p className='w-1/6 h-[2px] mx-auto bg-transparent group-hover:bg-[#FB601C]'></p>

                <p className="text-gray-600 text-sm line-clamp-2 group-hover:line-clamp-none transform transition-all duration-300 translate-y-2 group-hover:translate-y-1">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default Features