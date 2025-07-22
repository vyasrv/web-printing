"use client"
import Head from 'next/head'
import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import Image from 'next/image'
import About from '../../components/About'
import PageData from "./data.json"
import GridSection from '../../components/GridSection'
import WhyNeed from '../../components/WhyNeed'
import FaqSection from '../../components/FaqSection '
import ScrollFeatures from '../../components/ScrollFeatures'
import WhyChooseSection from '../../components/WhyChooseSection'
// import BenefitsPages from '../../components/BenefitsPages'
// import RummySection from '../../components/RummySection'
// import CallToActionService from '../../components/CallToActionService'
// import CallToActionTwo from '../../components/CallToActionTwo'
import Benefits from '../../components/Benefits'
import { motion } from "framer-motion"

// const { estimation, usedFor, needFor, faqDataOne, faqDataTwo, innerBenefits, rummySection, features, Choose, benefits } = PageData;
const { usedFor, needFor, faqDataOne, faqDataTwo, features, Choose, benefits } = PageData;
const attendanceSystem = () => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="robots" content="noindex" />
                <meta name="language" content="en" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                <title> VigoCamp | Smart Attendance System for Schools </title>
                <meta name="description" content="Track student and staff attendance with VigoCamp’s cloud-based ERP. Supports biometric, RFID, and real-time reports for efficient attendance management." />
                <link rel="canonical" href="https://" />
                <meta name="robots" content="noindex" />
                <meta property="og:url" content="https://" />
                <meta property="og:title" content="VigoCamp | Smart Attendance System for Schools" />
                <meta property="og:site_name" content="Vigorous IT" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Track student and staff attendance with VigoCamp’s cloud-based ERP. Supports biometric, RFID, and real-time reports for efficient attendance management." />
                <meta property="og:image" content="https:/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="vigorousit.com" />
                <meta name="twitter:site" content="“@vigorousit" />
                <meta property="twitter:url" content="https://" />
                <meta name="twitter:title" content="VigoCamp | Smart Attendance System for Schools" />
                <meta name="twitter:description" content="Track student and staff attendance with VigoCamp’s cloud-based ERP. Supports biometric, RFID, and real-time reports for efficient attendance management." />
                <meta name="twitter:image" content="https:/" />

            </Head>

            <section className="">
                <div className="max-width w-full bg-primary">
                    <Header />
                    <div className=" lg:flex justify-between items-center space-x-5  w-11/12  mx-auto 2xl:pt-[8rem] 2xl:pb-[8rem] pt-[10rem] pb-[3rem] md:space-y-0 space-y-10 max-w-7xl">

                        <div className="lg:w-1/2 w-full">
                            <HeroSection
                                title="Smart Attendance Management System For Schools"
                                titleOne=""
                                para="Schools, especially teachers, have to deal with numerous tasks in a single day. Attendance management is one of the most common among these tasks because teachers have to do it in their every entry in the class while the school also manages attendance to keep staff regular.We, with our attendance management system for schools, make it effortless for schools to manage attendance-related operations. From students to staff attendance, the process is seamless where there is no fear of manual errors and the use & management of a lot of registers. This reduces the need for traditional paper-based systems, making it cost-effective, while cloud-based integration in AMS allows every stakeholder access real-time access to all this database."
                                callToActionLine="You Wanna Know More About Our Attendance Management System! Let’s Deep Dive"
                                buttonCount={1}
                                buttonNames={["Request Demo"]}
                            />
                        </div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }} className=" lg:w-1/2 w-full lg:flex lg:justify-center  ">
                            <Image src={'/images/attendance-management/attendance-management-home.webp'} alt='' width={500} height={200} />
                        </motion.div>
                    </div>
                </div>

                <About
                    title="What is an Attendance Management System?"
                    paraOne="An Attendance Management System is a powerful solution specially designed for educational institutes to help them track and record attendance effortlessly. With the help of automated tools integration, both schools and teachers are now free from the huge burden of managing all attendance processes."
                    paraTwo="It reduces paperwork by reducing the use of physical registers for roll calls, as well as tracking the attendances accurately in real-time. Further, this system also reduced the need for humans by providing operational efficiency with instant access to records."
                    paraThree=""
                    paraFour=""
                    btnName="Request Demo"
                    img="/images/attendance-management/attendance-management-about.webp" type={1}
                    bulletPoints={[
                        "Ensuring hardware compatibility  with RFID scanners and biometric devices)",
                        "Handling the process of training staff faculty to use the system efficiently",
                        "Integrating the tool with existing ERP or LMS solutions",
                        "Managing privacy concerns and data protection",
                        "Customizing workflows as per specific institutional policies"
                    ]} />
                <ScrollFeatures heading="Features Of Attendance Management System (AMS)" features={features} />
                <div className=" mx-auto  w-11/12 max-w-7xl font-nunito">
                    <GridSection
                        values={usedFor}
                        title="What Are Attendance Management Systems Used For?"
                        para={`The Attendance Management System is a true game changer for managing discipline, accountability, and efficiency in schools, campuses, or any educational institution. By reducing paperwork and providing real-time insights through automation of attendance-related tasks, it elevates the entire process far beyond simply marking students as "present" or "absent".`}
                        para1=""
                    />
                </div>

                <div className='bg-primary my-10 relative'>
                    <div className=" mx-auto  w-11/12 max-w-7xl font-nunito ">

                        <WhyNeed
                            values={needFor}
                            title="Why Does Your Institution Need an Attendance Management System?"
                            para="Days are gone when managing attendance manually was the only option. Now, it is easy to handle all attendance-related tasks with this system. Let’s know some deep reasons why you really need it"
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
                    title="Benefits Of Attendance Management System"
                    desc="With features like real-time attendance with the help of automated tools and centralized data to boost accuracy, this system lets schools jump from registers to modern screens for roll calls. "
                    benefits={benefits} />

                <WhyChooseSection iconUrl={true}
                    title={"Why Choose MasterSoft’s Learning Management Software (LMS)?"}
                    // featureMobileTitle={"Smart Integrations "}
                    // featureMobiledesc={"With the integration of biometric devices, RFID, and facial recognition tools, we offer smart attendance management systems to schools that make all operations effortless and seamless."}
                    Choose={Choose} />

                {/* <RummySection heading={"Why CHOOSE VIGOCamp?"} data={rummySection} imageUrl="/images/RFID-banner.png" width={500} height={200} /> */}



                {/* <CallToActionService heading={"Get started with Outseta today "} content={" Try Outseta free for 7 days you'll have access to every feature. Cancel any time."} imageUrl="/images/Student-Attendance-System.webp" button={"Start your free trial"} /> */}
                {/* <CallToActionTwo  Heading1={"Live on Passionfroot &#x2600;"} Heading2={"Thousands of campaigns launched to date"} content={"with 60% lower CPC than Linkedin Ads* "} Button1={"Get access &rarr;"} Button2={"Book a call"}/> */}





                {/* <BenefitsPages
                    heading="We Are A Leading App Development Company"
                    description="At Vigorous, we know the trends and what technologies your app must have to crush the competition..."
                    buttonText="Get Demo"
                    onButtonClick={() => console.log('Demo clicked')}
                    benefits={innerBenefits}
                /> */}

                <FaqSection faqDataOne={faqDataOne} faqDataTwo={faqDataTwo} />

            </section>
        </>
    )
}

export default attendanceSystem