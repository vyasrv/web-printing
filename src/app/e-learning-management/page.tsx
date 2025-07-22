'use client'
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
import { motion } from "framer-motion"

const ELearningManagement = () => {

  const { features, usedFor, needFor, benefits, faqDataOne, faqDataTwo } = pageData;

  return (

    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title> E-Learning Management System | VigoCamp School ERP  </title>
        <meta name="description" content="VigoCamp’s e-learning management system for schools offers online classes, digital content, assignment tracking, and student performance monitoring in one platform" />
        <link rel="canonical" href="https://" />
        <meta name="robots" content="noindex" />
        <meta property="og:url" content="https://" />
        <meta property="og:title" content="E-Learning Management System | VigoCamp School ERP" />
        <meta property="og:site_name" content="Vigorous IT" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="VigoCamp’s e-learning management system for schools offers online classes, digital content, assignment tracking, and student performance monitoring in one platform" />
        <meta property="og:image" content="https:/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vigorousit.com" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://" />
        <meta name="twitter:title" content="E-Learning Management System | VigoCamp School ERP" />
        <meta name="twitter:description" content="VigoCamp’s e-learning management system for schools offers online classes, digital content, assignment tracking, and student performance monitoring in one platform" />
        <meta name="twitter:image" content="https:/" />
      </Head>

      <section className="">

        <div className="max-width w-full bg-primary">
          <Header />
          <div className=" lg:flex justify-between items-center space-x-5  w-11/12  mx-auto 2xl:pt-[8rem] 2xl:pb-[8rem] pt-[10rem] pb-[3rem] md:space-y-0 space-y-10 max-w-7xl">

            <div className="lg:w-1/2 w-full">
              <HeroSection
                title="Revolutionize Learning With Our E-Learning Management System"
                titleOne=""
                para="Do you really think it is an easy job to handle educational institutes especially schools which are offering digital education? They have to deliver content in higher quality, track students and focusing on their performance evaluation. With such managing their feedbacks to make their learning experience also falls under the digital education."
                para1="Handling these many issues keeps these institutes juggling with these tasks that reduce their focus on educational activities, which collectively brings a huge loss in educational gains to students. Due to this, they’re left dealing with scattered learning resources and inconsistent experiences."
                callToActionLine="That’s exactly where the E-Learning Management System (LMS) supercharges your online teaching operations."
                buttonCount={1}
                buttonNames={["Request Demo"]}
              />
            </div>
            <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }} className=" lg:w-1/2 w-full lg:flex lg:justify-center  ">
              <Image src={'/images/e-learning-management/hero.webp'} alt='' width={500} height={200} />
            </motion.div>
          </div>
        </div>

        <About
          title="What Is An E-Learning Management System?"
          paraOne="
Our E-Learning Management System (LMS) is specifically designed to simplify your digital education system. Its integration with modern tools help educators from creating to sharing the educational content to students. "
          paraTwo="The availability of a customized dashboard in this system also helps educators create assignments, conduct quizzes, and give grades. For students, this system makes data accessible (due to cloud integration), whether it is their finalized grade report or course content."
          paraThree="With AI-powered personalization, gamified learning, video lectures, progress tracking, and mobile learning, this system proves itself a modern addition that supports digital education."
          paraFour="Does everything end here? Of course not. In its further offering, it lets."
          btnName="Request Demo"
          img="/images/e-learning-management/about.webp" type={1}
          bulletPoints={[
            "Students access educational content anywhere-anytime",
            "Help students grow through their personalized learning journeys",
            "Teachers do transparent progress tracking with perfect assessments",
            "Administrations Integrate tools for exams, assignments, and certifications",
            "Promotes seamless collaboration between students and instructors"
          ]} />

        <ScrollFeatures heading="Features Of E-Learning Management System" features={features} />

        <div className=" mx-auto  w-11/12 max-w-7xl font-nunito">
          <GridSection
            values={usedFor}
            title="What Are E-Learning Management Systems Used For?"
            para={`We design our E-learning management systems (LMS) more than just digital tools. From simplifying course delivery to tracking student performance, this system plays an important role in managing school operations that collectively prove it the backbone of the modern digital school system.`}
            para1="Let’s know how school systems are embracing it into their system by analyzing its uses." />
        </div>

        <div className='bg-primary my-10 relative'>
          <div className=" mx-auto  w-11/12 max-w-7xl font-nunito ">
            <WhyNeed
              values={needFor}
              title="Why Does Your Institution Need An E-Learning Management System?"
              para="Are you really still thinking about missing this system in your school? Look at how modern educational institutes are modernizing themselves with their integration."
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
          title="Benefits Of E-Learning Management System"
          desc=""
          benefits={benefits} />

        <FaqSection faqDataOne={faqDataOne} faqDataTwo={faqDataTwo} />


      </section >
    </>
  )
};

export default ELearningManagement;
