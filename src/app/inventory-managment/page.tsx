"use client"
import Head from 'next/head'
import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import Image from 'next/image'
import About from '../../components/About'
import ScrollFeatures from '../../components/ScrollFeatures'
import PageData from "./data.json"
import GridSection from '../../components/GridSection'
import WhyNeed from '../../components/WhyNeed'
import FaqSection from '../../components/FaqSection '
import Benefits from '../../components/Benefits'
import { motion } from "framer-motion"

const inventoryManagement = () => {
    const { features, usedFor, needFor, faqDataOne, faqDataTwo, benefits } = PageData;

    return (

        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="language" content="en" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                <title> Inventory Management System | VigoCamp ERP Module  </title>
                <meta name="description" content="VigoCamp’s inventory system offers real-time tracking, barcode scanning, stock alerts, and item categorization—ideal for efficient school resource management." />
                <link rel="canonical" href="https://" />
                <meta property="og:url" content="https://" />
                <meta property="og:title" content="Inventory Management System | VigoCamp ERP Module" />
                <meta property="og:site_name" content="Vigorous IT" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="VigoCamp’s inventory system offers real-time tracking, barcode scanning, stock alerts, and item categorization—ideal for efficient school resource management." />
                <meta property="og:image" content="https:/" />
                <meta name="robots" content="noindex" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="vigorousit.com" />
                <meta name="twitter:site" content="“@vigorousit" />
                <meta property="twitter:url" content="https://" />
                <meta name="twitter:title" content="Inventory Management System | VigoCamp ERP Module" />
                <meta name="twitter:description" content="VigoCamp’s inventory system offers real-time tracking, barcode scanning, stock alerts, and item categorization—ideal for efficient school resource management." />
                <meta name="twitter:image" content="https:/" />
            </Head>

            <section className="">
                <div className="max-width w-full bg-primary">
                    <Header />
                    <div className=" lg:flex justify-between items-center space-x-5  w-11/12  mx-auto 2xl:pt-[8rem] 2xl:pb-[8rem] pt-[10rem] pb-[3rem] md:space-y-0 space-y-10 max-w-7xl">

                        <div className="lg:w-1/2 w-full">
                            <HeroSection
                                title="School Inventory Management System"
                                titleOne=""
                                para="The relationship between huge inventory and schools has been for centuries, and in the same way, the burden of managing all these assets is also integrated with them, but there is something unique approach. "
                                para1="If you are still struggling to manage a school’s inventory through traditional methods, it’s done. Our inventory management system lets you cover it here. By offering smart school inventory management modules to schools, this system makes asset management effortless for schools."
                                callToActionLine="Without the fear of losing or misusing any asset, this system lets you manage everything about inventory."
                                buttonCount={1}
                                buttonNames={["Request Demo"]}
                            />
                        </div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }} className=" lg:w-1/2 w-full lg:flex lg:justify-center  ">
                            <Image src={'/images/inventory-management-system/inventory-management-system-hero-img.webp'} alt='' width={500} height={200} />
                        </motion.div>
                    </div>
                </div>

                <About
                    title="What Is A School Inventory Management?"
                    paraOne="An inventory management system is a digitalized system which makes it very easy for schools to manage all kinds of physical assets. Whether it is lab equipment or a book in the library, the purpose of this system is to keep everything accountable. "
                    paraTwo="This way, it helps the administration monitor the inventory and offers an optimized way to keep everything arranged. It also helps the administration in assigning items to staff or departments, tracking damaged, lost, or retired assets, and maintaining vendor and purchase history that collectively make it a perfect addition to any school. "
                    paraThree="Rather than traditional methods, where a lot of textbooks were the requirement for handling all that stuff while the administration had to trust word-of-mouth, but today, this modern system gives the exact information, including where the item is, who is using it, and what is maintenance status of this item is."
                    paraFour="In further offerings, the system helps in"
                    btnName="Request Demo"
                    img="/images/inventory-management-system/inventory-management-system-about-us.webp" type={1}
                    bulletPoints={[
                        "Setting minimum and maximum quantity levels for consumables",
                        "Logging damages, losses, replacements, or disposals",
                        "Keeping track of suppliers, purchase dates, costs, warranties",
                        "Producing categorized reports for audits and financial planning",
                        "Detecting discrepancies or stock shortages."
                    ]} />

                <ScrollFeatures heading="Core Features Of Our School Inventory Management System" features={features} />

                <div className=" mx-auto  w-11/12 max-w-7xl font-nunito">
                    <GridSection
                        values={usedFor}
                        title="What Are Inventory Management Systems Used For?"
                        para={`In 2025, the school inventory management system will be an amazing asset for schools. It saves administration time in managing inventory by offering smart solutions while making the management process cost-effective due to a massive reduction in paperwork and manpower. 
Here’s a comprehensive breakdown of how this inventory management system benefits the different sectors of your school..`}
                        para1="" />
                </div>

                <div className='bg-primary my-10 relative'>
                    <div className=" mx-auto  w-11/12 max-w-7xl font-nunito ">
                        <WhyNeed
                            values={needFor}
                            title="Why Is Inventory Management Crucial For Educational Institutes?"
                            para="Modern educational institutes have a modern inventory stack that is beyond chalk and textbooks. Let’s know how this inventory management system is solving the problem"
                        />
                    </div>
                    <div className="absolute left-10 bottom-[10%] lg:block hidden circle-motion">
                        <Image src="/images/tri1.png" alt="" width={50} height={200} className="orbit " />
                    </div>

                    <div className="absolute left-10 bottom-[60%] lg:block hidden">
                        <Image src="/images/sq.png" alt="" width={20} height={200} className="orbit " />
                    </div>

                    <div className="absolute right-10 bottom-[60%] lg:block hidden half-circle-motion">
                        <Image src="/images/tri1.png" alt="" width={50} height={200} className="orbit " />
                    </div>

                    <div className="absolute right-10 bottom-[20%] lg:block hidden ">
                        <Image src="/images/tri4.png" alt="" width={20} height={200} className="orbit" />
                    </div>
                </div>

                <Benefits
                    title="Benefits Of Using Inventory Management Software in Schools"
                    desc=""
                    benefits={benefits} />

                <FaqSection faqDataOne={faqDataOne} faqDataTwo={faqDataTwo} />


            </section>
        </>)
}

export default inventoryManagement