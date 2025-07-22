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

const SmartFeeManagement = () => {
  const { features, usedFor, needFor, benefits, faqDataOne, faqDataTwo, Choose } = pageData;
  return (

    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title> Smart Fee Management System for Schools | VigoCamp ERP  </title>
        <meta name="description" content="VigoCamp’s smart fee management system automates fee collection, generates receipts, sends reminders, and offers secure online payment options for schools." />
        <link rel="canonical" href="https://" />
        <meta name="robots" content="noindex" />
        <meta property="og:url" content="https://" />
        <meta property="og:title" content="Smart Fee Management System for Schools | VigoCamp ERP" />
        <meta property="og:site_name" content="Vigorous IT" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="VigoCamp’s smart fee management system automates fee collection, generates receipts, sends reminders, and offers secure online payment options for schools." />
        <meta property="og:image" content="https:/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vigorousit.com" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://" />
        <meta name="twitter:title" content="Smart Fee Management System for Schools | VigoCamp ERP" />
        <meta name="twitter:description" content="VigoCamp’s smart fee management system automates fee collection, generates receipts, sends reminders, and offers secure online payment options for schools." />
        <meta name="twitter:image" content="https:/" />
      </Head>

      <section className="">

        <div className="max-width w-full bg-primary">
          <Header />
          <div className=" lg:flex justify-between items-center space-x-5  w-11/12  mx-auto 2xl:pt-[8rem] 2xl:pb-[8rem] pt-[10rem] pb-[3rem] md:space-y-0 space-y-10 max-w-7xl">

            <div className="lg:w-1/2 w-full">
              <HeroSection
                title="Smart Fee Management System For Schools"
                titleOne=""
                para="The traditional way of fee management is time-consuming, error-prone, and stressful for both school staff and parents, but with the digital fee management system, all things have changed. With features like creating multiple fee structures for different grades, sending timely reminders, recording payments, issuing receipts, and handling late fines, this system automates your entire fee collection and accounting lifecycle with precision. 
"
                para1="This system is also scalable with time and lets schools face challenges like manual ledger entries, missed dues, lost receipts, and delayed reporting that compound with the institution's growth."
                callToActionLine="Streamline Your School's Financial Operations with a Smart Fee Management System"
                buttonCount={1}
                buttonNames={["Request Demo"]}
              />
            </div>
            <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }} className=" lg:w-1/2 w-full lg:flex lg:justify-center  ">
              <Image src={'/images/smartfee-management-system/smartfee-management-system-hero-img.webp'} alt='' width={500} height={200} />
            </motion.div>
          </div>
        </div>

        <About
          title="What Is A Fee Management System?"
          paraOne="A Fee Management System is a specifically designed solution with the aims to handle the fee management-related tasks efficiently. With the use of modern technologies like AI-empowered tools, this system streamlines fee collecting operations of schools in which setting up fee categories, tracking dues, issuing receipts, and generating real-time reports are all included. "
          paraTwo="Further, the integration of reputed gateways lets parents pay school fees through a streamlined, trusted and comfortable source. This digital approach also fulfils physical gaps and eliminates the need to stand in long queues and a lot of paperwork."
          paraThree="In its additional benefits, it offers;"
          paraFour=""
          btnName="Request Demo"
          img="/images/smartfee-management-system/smartfee-management-system-about-us-img.webp" type={1}
          bulletPoints={[
            "Real-time fee status tracking for each student",
            "Instant notifications for dues, payments, and receipts",
            "Auto-generated financial reports for easy audits",
            "Reduced manual labour and zero calculation errors",
            "Make it easy to configure fee types such as tuition, transport"
          ]} />

        <ScrollFeatures heading="Features Of The Fee Management System" features={features} />

        <div className=" mx-auto  w-11/12 max-w-7xl font-nunito">
          <GridSection
            values={usedFor}
            title="What Are Fee Management Systems Used For?"
            para={`Whether it's for one institute or multiple branches, this system lets you handle all the fee-collecting-related operations with a centralized fee management dashboard.Let’s know how it makes the process effortless and makes all the operations effortless.
`}
            para1=""
          />
        </div>

        <div className='bg-primary my-10 relative'>
          <div className=" mx-auto  w-11/12 max-w-7xl font-nunito ">
            <WhyNeed
              values={needFor}
              title="Why Does Your Institution Need A Fee Management System?"
              para="Creating a tech-driven educational environment in this fast-paced world is no longer an option, and to meet modern needs, we have to implement it in our school's ERP software. Here is how automated workflow enhances the efficiency of the whole system.
"
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
          title="Benefits Of Fee Management System"
          desc=""
          benefits={benefits} />
        <WhyChooseSection title={"Why Choose Our Fee Management System?"}
          iconUrl={true}
          Choose={Choose} />

        <FaqSection faqDataOne={faqDataOne} faqDataTwo={faqDataTwo} />


      </section >
    </>
  )
};

export default SmartFeeManagement;
