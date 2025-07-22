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

const LibraryManagement = () => {

  const { features, usedFor, needFor, benefits, faqDataOne, faqDataTwo, Choose } = pageData;

  return (

    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title> Library Management System for Schools | VigoCamp ERP  </title>
        <meta name="description" content="VigoCamp’s library management system helps schools manage book inventories, track issues/returns, and simplify library operations with barcode support." />
        <link rel="canonical" href="https://" />
        <meta name="robots" content="noindex" />
        <meta property="og:url" content="https://" />
        <meta property="og:title" content="Library Management System for Schools | VigoCamp ERP" />
        <meta property="og:site_name" content="Vigorous IT" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="VigoCamp’s library management system helps schools manage book inventories, track issues/returns, and simplify library operations with barcode support." />
        <meta property="og:image" content="https:/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vigorousit.com" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://" />
        <meta name="twitter:title" content="Library Management System for Schools | VigoCamp ERP" />
        <meta name="twitter:description" content="VigoCamp’s library management system helps schools manage book inventories, track issues/returns, and simplify library operations with barcode support." />
        <meta name="twitter:image" content="https:/" />
      </Head>

      <section className="">

        <div className="max-width w-full bg-primary">
          <Header />
          <div className=" lg:flex justify-between items-center space-x-5  w-11/12  mx-auto 2xl:pt-[8rem] 2xl:pb-[8rem] pt-[10rem] pb-[3rem] md:space-y-0 space-y-10 max-w-7xl">

            <div className="lg:w-1/2 w-full">
              <HeroSection
                title="Go Smart With Our Library Management System"
                titleOne=""
                para="Managing school libraries, where issues like tracking issued books, managing returns, maintaining catalog records, and handling late fees are common, is no small feat. Traditional methods like textbooks and a lot of paperwork make these happenings more tedious and complex, but not anymore. It is due to our school library management system, which modernizes these operations and makes them effortless to handle."
                para1="From book inventory and member records to digital cataloguing and auto-notifications, this system not only streamlines day-to-day operations but also enhances the student and staff experience by making the library easily accessible, transparent, and efficient."
                callToActionLine="TStart Your Digital Library Transformation Today – Get In Touch With Professionals."
                buttonCount={1}
                buttonNames={["Request Demo"]}
              />
            </div>
            <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }} className=" lg:w-1/2 w-full lg:flex lg:justify-center  ">
              <Image src={'/images/library-management-system/library-management-system-hero-img.webp'} alt='' width={500} height={200} />
            </motion.div>
          </div>
        </div>

        <About
          title="What Is A Library Management System?"
          paraOne="A Library Management System (LMS) is specifically designed to manage diverse school library operations with just a few clicks. In these operations, cataloguing thousands of books, issuing and returning books, or tracking overdue items and penalties are all included."
          paraTwo="With modernizing library operations it allows administrations and students to access books effortlessly while librarians can use digital data such as book availability, issue status, due dates, fine collections, and inventory stock, which saves time and eliminates the need for manual record-keeping. Further, integrations like automated return reminders also help all stakeholders maintain a fresh environment."
          paraThree="Here is how this system helps schools in managing library functions effectively."
          paraFour=""
          btnName="Request Demo"
          img="/images/library-management-system/library-management-system-about-us-img.webp" type={1}
          bulletPoints={[
            "Offers wider access to the library that helps in accessing a variety of books",
            "It makes it seamless to track individual user histories and overdue books",
            "Calculating late returns and collecting fines becomes easy",
            "Digital logging of issuing and returning books saves valuable time",
            "Books are now easy to track, and the  loss of valuable resources"
          ]} />

        <ScrollFeatures heading="Features Of The Library Management System" features={features} />

        <div className=" mx-auto  w-11/12 max-w-7xl font-nunito">
          <GridSection
            values={usedFor}
            title="What Are Library Management Systems Used For?"
            para={`This LMS is more than a book-issuing tool that supports the academic framework of a school by making knowledge resources easy to manage, access, and optimize. It also enables students to reserve books from their phones while admins can track inventory trends in the same way.
Let’s take a deep look at how this online school library management system helps you to manage things in a better way. 
`}
            para1="" />
        </div>

        <div className='bg-primary my-10 relative'>
          <div className=" mx-auto  w-11/12 max-w-7xl font-nunito ">
            <WhyNeed
              values={needFor}
              title="Why Does Your Institution Need A Library Management System?"
              para="A smart library management system is a modern requirement for schools that empowers institutions to run libraries smoother and smarter. It reduces human error, delays, and inefficiencies while also saving a lot of time. "
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
          title="BBenefits Of The Library Management System"
          desc="This online LMS (Library Management System) lets institutes innovate their operations due to the integration of future-ready technologies that fit seamlessly into your academic ecosystem."
          benefits={benefits} />

        <WhyChooseSection title={" Why Choose Our Library Management System?"}
          iconUrl={false} Choose={Choose} />

        <FaqSection faqDataOne={faqDataOne} faqDataTwo={faqDataTwo} />


      </section >
    </>
  )
};

export default LibraryManagement;
