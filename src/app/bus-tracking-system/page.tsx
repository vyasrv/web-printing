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

const BusTrackingSystem = () => {
  const { features, usedFor, needFor, benefits, faqDataOne, faqDataTwo, Choose } = pageData;
  return (

    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title> Real-Time Bus Tracking System for Schools | VigoCamp ERP  </title>
        <meta name="description" content="VigoCamp’s bus tracking system offers real-time GPS tracking, live location updates, route monitoring, and parent alerts to ensure safe student transportation." />
        <link rel="canonical" href="https://" />
        <meta name="robots" content="noindex" />
        <meta property="og:url" content="https://" />
        <meta property="og:title" content="Real-Time Bus Tracking System for Schools | VigoCamp ERP" />
        <meta property="og:site_name" content="Vigorous IT" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="VigoCamp’s bus tracking system offers real-time GPS tracking, live location updates, route monitoring, and parent alerts to ensure safe student transportation." />
        <meta property="og:image" content="https:/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vigorousit.com" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://" />
        <meta name="twitter:title" content="Real-Time Bus Tracking System for Schools | VigoCamp ERP" />
        <meta name="twitter:description" content="VigoCamp’s bus tracking system offers real-time GPS tracking, live location updates, route monitoring, and parent alerts to ensure safe student transportation." />
        <meta name="twitter:image" content="https:/" />
      </Head>

      <section className="">

        <div className="max-width w-full bg-primary">
          <Header />
          <div className=" lg:flex justify-between items-center space-x-5  w-11/12  mx-auto 2xl:pt-[8rem] 2xl:pb-[8rem] pt-[10rem] pb-[3rem] md:space-y-0 space-y-10 max-w-7xl">

            <div className="lg:w-1/2 w-full">
              <HeroSection
                title="School Bus Tracking System For Safer Fleet Visibility"
                titleOne=""
                para="School transportation management is really a prominent issue for real-time schools and educational institutes. Route planning, resource & fuel management, handling last-minute delays, and bus breakdowns are all triggers of this problem. Due to sudden issues, when buses arrive at their destination, uncountable calls from parents also become an extra burden, but this is going straight this way, even in this realm of huge growth in technology."
                para1="Actually not. School bus tracking management system is something that is giving you break breakthrough here. By bringing automation, transparency, and real-time tracking into play, this system streamlines transportation operations while also building trust among parents by ensuring the safety of students."
                callToActionLine="Know Where Every Ride Begins and Ends Through Our School Transport System!"
                buttonCount={1}
                buttonNames={["Request Demo"]}
              />
            </div>
            <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }} className=" lg:w-1/2 w-full lg:flex lg:justify-center  ">
              <Image src={'/images/bus-tracking-system/bus-tracking-system-hero-img.webp'} alt='' width={500} height={200} />
            </motion.div>
          </div>
        </div>

        <About
          title="What Is A School Bus Tracking Management System?"
          paraOne="A school bus tracking management system is an innovative software solution that helps in monitoring real-time school bus operations. By integrating GPS technology and cloud databases, this system offers real-time locations of buses that enhance transparency. Further prominent integration is parent-school communication tools that help in sharing info with parents in scenarios of facing any inconvenient transport situation like delays. In terms of advanced security, RFID check-ins and geofencing, like student safety tactics, also play a vital role in keeping parents satisfied."
          paraTwo="Moreover, the schools can;"
          paraThree=""
          paraFour=""
          btnName="Request Demo"
          img="/images/bus-tracking-system/bus-tracking-system-about-us.webp" type={1}
          bulletPoints={[
            "Monitor Fleet Movement With Real-Time Precision",
            "Smart Route Planning With AI Assistance That Minimizes Travel Time",
            "Advanced Child Safety With Digital Boarding Logs For Children’s Accountability",
            "Instant Trip Updates For Parents That Eliminate Uncertainty",
          ]} />

        <ScrollFeatures heading="Features Of School Bus Tracking Management System" features={features} />

        <div className=" mx-auto  w-11/12 max-w-7xl font-nunito">
          <GridSection
            values={usedFor}
            title="What Are School Bus Tracking Systems Used For?"
            para={`We modernize the school bus tracking process that ensures the safety of students while also playing a crucial role in promoting punctuality. With simplifying daily transport operations, it makes all the processes effortless and cost-effective for the institute. `}
            para1="Despite this, it provides real-time updates to all stakeholders, especially parents, that promote a positive relationship between the institute and the. Let’s know how it does it;"
          />
        </div>

        <div className='bg-primary my-10 relative'>
          <div className=" mx-auto  w-11/12 max-w-7xl font-nunito ">
            <WhyNeed
              values={needFor}
              title="Why Does Your Institution Need A School Bus Tracking Management System?"
              para="With relying on outdated methods, institutes have to face problems like communication gaps and operational inefficiencies that create huge chaos, but with this system, these things are no more. Here’s how it streamlines your operations;"
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
          title="Benefits Of School Bus Tracking Management System"
          desc=""
          benefits={benefits} />
        <WhyChooseSection iconUrl={true} title={"Why Choose Our School Bus Tracking Management System?"}

          Choose={Choose} />

        <FaqSection faqDataOne={faqDataOne} faqDataTwo={faqDataTwo} />


      </section >
    </>
  )
};

export default BusTrackingSystem;
