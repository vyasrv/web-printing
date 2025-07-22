"use client"
import Head from "next/head"
import Header from "../../components/Header"
import HeroSection from "../../components/HeroSection"
import Image from 'next/image'
import About from '../../components/About'
import ScrollFeatures from "../../components/ScrollFeatures"
import pageData from "./data.json"
import GridSection from "../../components/GridSection"
import WhyNeed from "../../components/WhyNeed"
import Benefits from "../../components/Benefits"
import FaqSection from "../../components/FaqSection "
import WhyChooseSection from "../../components/WhyChooseSection"
import { motion } from "framer-motion"

const HostelManagement = () => {
  const { features, usedFor, needFor, benefits, faqDataOne, faqDataTwo, Choose } = pageData;
  return (

    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title> Hostel Management System for Schools | VigoCamp ERP  </title>
        <meta name="description" content="VigoCamp’s hostel management system helps schools manage student accommodation, room allocation, meal tracking, and attendance—all in one digital platform." />
        <link rel="canonical" href="https://" />
        <meta name="robots" content="noindex" />
        <meta property="og:url" content="https://" />
        <meta property="og:title" content="Hostel Management System for Schools | VigoCamp ERP" />
        <meta property="og:site_name" content="Vigorous IT" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="VigoCamp’s hostel management system helps schools manage student accommodation, room allocation, meal tracking, and attendance—all in one digital platform." />
        <meta property="og:image" content="https:/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vigorousit.com" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://" />
        <meta name="twitter:title" content="Hostel Management System for Schools | VigoCamp ERP" />
        <meta name="twitter:description" content="VigoCamp’s hostel management system helps schools manage student accommodation, room allocation, meal tracking, and attendance—all in one digital platform." />
        <meta name="twitter:image" content="https:/" />
      </Head>

      <section className="">

        <div className="max-width w-full bg-primary">
          <Header />
          <div className=" lg:flex justify-between items-center space-x-5  w-11/12  mx-auto 2xl:pt-[8rem] 2xl:pb-[8rem] pt-[10rem] pb-[3rem] md:space-y-0 space-y-10 max-w-7xl">

            <div className="lg:w-1/2 w-full">
              <HeroSection
                title="School Hostel Management System"
                titleOne=""
                para="Hostel management is really a big concern for schools nowadays due to their number of manual tasks, including allocating rooms, maintaining occupancy logs, ensuring student safety, and managing inventory. Further, some irresponsible operations like misplaced keys and unrecorded entries cause more headaches due to consequences like mismanagement and safety concerns, but it’s all done now."
                para1="With the entry of our school hostel management system into the scene, we let schools transform their hostel operations from chaos to clarity. The software is specifically designed to help educational institutions manage hostel activities smoothly, all from a central digital dashboard."
                callToActionLine="Digitize Your Hostel Operations Today With A Secure, Simple, And Smart System!"
                buttonCount={1}
                buttonNames={["Request Demo"]}
              />
            </div>
            <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }} className=" lg:w-1/2 w-full lg:flex lg:justify-center  ">
              <Image src={'/images/hostel-management-system/hostel-management-system-hero-img.webp'} alt='' width={500} height={200} />
            </motion.div>
          </div>
        </div>

        <About
          title="What Is A School Hostel Management System?"
          paraOne="A School Hostel Management System is a digital solution that helps schools in managing their hostel operations by simplifying, automating, and centralizing hostel-related operations within an educational institution. To care about everything from allotting places to students to managing their payment operations, this system digitalizes everything."
          paraTwo="It also helps staff and administration in monitoring students' behavior, managing hostel inventories, and maintaining order without paperwork hassles. Above all, the system helps institutes maintain transparency and develop a layer of trust by streamlining communication between staff, parents, and students."
          paraThree="Let’s know what else this system can do for you"
          paraFour=""
          btnName="Request Demo"
          img="/images/hostel-management-system/hostel-management-system-about-us-img.webp" type={1}
          bulletPoints={[
            "Make it easy to monitor inventory (Beds, furniture, utilities) in real-time condition",
            "Promotes seamless communication between parents and administration",
            "Hostel fees, ID proofs, or parent approvals are easy to access with the system",
            "Real-time data accessibility makes it trouble-free to access vacant rooms",
            "Reduces manual errors that are due to manual entry/exit records"
          ]} />

        <ScrollFeatures heading="Features Of School Hostel Management System" features={features} />

        <div className=" mx-auto  w-11/12 max-w-7xl font-nunito">
          <GridSection
            values={usedFor}
            title="What Are School Hostel Management Systems Used For?"
            para={`We make this online inventory management system for schools more than just a tool which also helps in operating every area of hostel operations. From student safety and record-keeping to financial management, it has options to let you cover every aspect.
`}
            para1="Let’s take a brief look at its specific key-uses which makes it better in 2025." />
        </div>

        <div className='bg-primary my-10 relative'>
          <div className=" mx-auto  w-11/12 max-w-7xl font-nunito ">
            <WhyNeed
              values={needFor}
              title="Why Does Your Institution Need A School Hostel Management System?"
              para="By playing a vital role in managing a plethora of tasks with AI-powered tools, this system saves the time and energy of school staff while making it cost-effective and effortless to handle all the operations. "
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
          title="Benefits Of School Hostel Management System"
          desc="This system gives you an arranged and modernized way to handle messy hostel management-related tasks."
          benefits={benefits} />
        <WhyChooseSection title={"Why Choose Our School Hostel Management System?"}
          iconUrl={true} Choose={Choose} />

        <FaqSection faqDataOne={faqDataOne} faqDataTwo={faqDataTwo} />


      </section >
    </>
  )
};

export default HostelManagement;
