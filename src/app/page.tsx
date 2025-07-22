'use client'

import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from 'next/dynamic'
import PageData from "./data.json"
import Link from "next/link";
import About from "../components/About";
import Panels from "../components/Panels";
import Benefits from "../components/Benefits";
import Plans from "../components/Plans";
import Offer from "../components/Offer";
import Features from "../components/Features";
import FaqSection from "../components/FaqSection ";
import ClientTestimonial from "../components/ClientsTestimonials";
import { HiAcademicCap } from "react-icons/hi2";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FcOk } from "react-icons/fc";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import Login from "../components/Login";
import Signup from "../components/SignUp";
import { FaUserPlus } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion"
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})

// const About = dynamic(()=>import('../components/About'),{
//   loading:()=> <p>Loading...</p>
// })
// const Panels = dynamic(()=>import('../components/Panels'),{
//   loading:()=> <p>Loading...</p>
// })

// const Benefits = dynamic(()=>import('../components/Benefits'),{
//   loading:()=> <p>Loading...</p>
// })

// const Plans = dynamic(()=>import('../components/Plans'),{
//   loading:()=> <p>Loading...</p>
// })

// const Offer = dynamic(()=>import('../components/Offer'),{
//   loading:()=> <p>Loading...</p>
// })

// const Features = dynamic(()=>import('../components/Features'),{
//   loading:()=> <p>Loading...</p>
// })

// const FaqSection = dynamic(()=>import('../components/FaqSection '),{
//   loading:()=> <p>Loading...</p>
// })
const plans = [
  {
    "title": "Basic Plan",
    "decs": "Perfect for Small Institutions or Startups (Upto 300 Students)",
    "items": [
      {
        "subtitle": "Included:",
        "content": [

          {
            icon: <FcOk />,
            name: "Student, Teacher & Staff Records Management"
          },
          {
            icon: <FcOk />,
            name: "Attendance Tracking (Manual Entry)"
          },
          {
            icon: <FcOk />,
            name: "Timetable & Scheduling Tool"
          },
          {
            icon: <FcOk />,
            name: "Email & SMS Notification System"
          },
          {
            icon: <FcOk />,
            name: "Document Management (Limited)"
          },
          {
            icon: <FcOk />,
            name: "Basic Reporting & Analytics"
          },
          {
            icon: <FcOk />,
            name: "Web Admin Portal"
          }
        ]
      },
      {
        "subtitle": "Not Included:",
        "content": [
          {
            icon: <ImCross size={12} />,
            name: "Mobile App Access"
          },
          {
            icon: <ImCross size={12} />,
            name: "Online Fee Collection"
          },
          {
            icon: <ImCross size={12} />,
            name: "Exam & Grading Modules"
          },
          {
            icon: <ImCross size={12} />,
            name: "Biometric Integration"
          },
          {
            icon: <ImCross size={12} />,
            name: "Transport, Library & Hostel Modules"
          }
        ]
      }
    ],
    "btnName": "Starting Price: ₹5,000/year"
  },
  {
    "title": "Advanced Plan",
    "decs": "Recommended for Medium to Large Schools (Upto 300 Students)",
    "items": [
      {
        "subtitle": "Included:",
        "content": [
          {
            icon: <FcOk />,
            name: "All Essential Plan Features",
          },
          {
            icon: <FcOk />,
            name: "Fee Management System with Online Payment Gateway Integration",
          },
          {
            icon: <FcOk />,
            name: "Exam Management & Auto Grading",
          },
          {
            icon: <FcOk />,
            name: "Parent-Teacher Communication Portal",
          },
          {
            icon: <FcOk />,
            name: "Mobile App (Android) – Branded Access",
          },
          {
            icon: <FcOk />,
            name: "Library Management System",
          },
          {
            icon: <FcOk />,
            name: "Inventory & Asset Tracking",
          },
          {
            icon: <FcOk />,
            name: "Notification Scheduler",
          },
          {
            icon: <FcOk />,
            name: "Certificate Generation (TC, Bonafide, etc.)"
          }
        ]
      },
      {
        "subtitle": "Not Included:",
        "content": [
          {
            icon: <ImCross size={12} />,
            name: "Transport with GPS",
          },
          {
            icon: <ImCross size={12} />,
            name: "Biometric & RFID Integration",
          },
          {
            icon: <ImCross size={12} />,
            name: "Multi-Branch / Campus Management",
          },
          {
            icon: <ImCross size={12} />,
            name: "Hostel & Meal Plans",
          },
          {
            icon: <ImCross size={12} />,
            name: "API Integrations / Custom Features"
          }
        ]
      }
    ],
    "btnName": "Starting Price: ₹7,500/year"
  }
]


const { offer, TeachersPanel, ParentsPanel, AdminPanel, tabFeatures, benefits, faqDataOne, faqDataTwo, roles } = PageData;

const tabs = [
  {
    "icon": <HiAcademicCap size={30} className="" />,
    "title": "Academics Management"
  },
  {
    "icon": <PiStudentFill size={30} className="" />,
    "title": "Student Management"
  },
  {
    "icon": <MdOutlineEmojiTransportation size={30} className="" />,
    "title": "Transportation/Library /Hostel"
  },
  {
    "icon": <BiSolidReport size={30} className="" />,
    "title": "Exam Management"
  },
  {
    "icon": <BsCashCoin size={30} className="" />,
    "title": "Payroll & Finance Management"
  },
  {
    "icon": <IoPeopleCircleOutline size={30} className="" />,
    "title": "Employee/HRM Management"
  }
]

export default function Page() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Toggle login/signup modal
  const openSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false); // Ensure login modal is closed
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false); // Ensure signup modal is closed
  };

  const closeModal = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(false); // Close both modals
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        {/* <title> School Management Software | Best School ERP - VigoCamp  </title> */}
        <title> School Management Software | Best School ERP - VigoCamp  </title>
        <meta name="description" content="VigoCamp is an all-in-one cloud-based school ERP with features like e-learning, attendance, fees, transport tracking, and more—streamline your campus operations easily." />
        <link rel="canonical" href="https://" />
        <meta property="og:url" content="https://" />
        <meta property="og:title" content="School Management Software | Best School ERP - VigoCamp" />
        <meta property="og:site_name" content="Vigorous IT" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="VigoCamp is an all-in-one cloud-based school ERP with features like e-learning, attendance, fees, transport tracking, and more—streamline your campus operations easily." />
        <meta property="og:image" content="https://" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vigorousit.com" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://" />
        <meta name="twitter:title" content="School Management Software | Best School ERP - VigoCamp" />
        <meta name="twitter:description" content="VigoCamp is an all-in-one cloud-based school ERP with features like e-learning, attendance, fees, transport tracking, and more—streamline your campus operations easily." />
        <meta name="twitter:image" content="https:/" />
      </Head>

      <section className="overflow-hidden">
        <div className="max-width w-full bg-cover bg-gradient-to-r from-[#09327f] to-[#06183b] text-white  no-repeat md:pt-0 pt-32 relative">
          <div className="relative">
            <Header />
            <div className="w-11/12 xl:w-1/2 mx-auto xl:pt-32 md:pt-28 !text-center max-w-7xl  ">
              <div className="space-y-10 w-full py-5 ">
                <h1 className="md:text-[60px] text-3xl font-bold md:leading-[3.5rem] capitalize font-inter  ">
                  School Management Software
                </h1>
                <p className="lg:text-md text-base font-medium font-nunito relative z-20">
                  VigoCamp is a feature-packed, modern, and cloud-based school management software that manages academic workload through streamlining operations and enhanced efficiency.
                </p>

                <div className="flex justify-center items-center">
                  <div className="flex flex-wrap gap-4 items-center text-white text-sm justify-center">
                    <button className="w-60 h-10 justify-center rounded-md bg-secondary hover:bg-white transition-all duration-500 ease-in hover:text-black flex gap-2 items-center relative z-20" onClick={openSignup}>
                      <FaUserPlus size={15} />Sign Up Now, Its Free
                    </button>
                    <button className="w-52 h-10 justify-center rounded-md hover:bg-white/80 bg-white transition-all duration-500 ease-in text-black flex gap-1 items-center" onClick={openLogin}>
                      <IoIosArrowRoundForward size={25} /> Learn More
                    </button>

                    {(isLoginOpen || isSignupOpen) && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg flex relative">
                          <button className="absolute top-2 right-2 text-gray-500 hover:text-black" onClick={closeModal}>
                            ✕
                          </button>

                          <div className="w-full md:w-1/2 p-8">
                            {isLoginOpen ? (
                              <Login onSwitch={() => { setIsLoginOpen(false); setIsSignupOpen(true); }} onClose={closeModal} isOpen={openLogin} />
                            ) : (
                              <Signup onSwitch={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} onClose={closeModal} isOpen={openSignup} />
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center relative mt-32">
                  <div className="relative w-[90%] max-w-[600px] ">
                    <Image
                      src="/images/home/vigocamp-laptop.webp"
                      alt="Laptop"
                      // className="w-full h-auto"
                      width={600}
                      loading="eager"
                      priority
                      height={200}
                    />
                    <div className="absolute right-2 sm:right-10 top-2 sm:top-5 bounce-slow w-[30%] max-w-[180px]">
                      <Image
                        src="/images/home/vigocamp-mobile.webp"
                        alt="Mobile"
                        // className="w-full h-auto"
                        width={180}
                        loading="eager"
                        priority
                        height={200}
                      />
                    </div>
                  </div>

                  <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, transition: { duration: 1, delay: 2 }, opacity: 1 }} className="absolute left-0 top-40 bounce-slow-one lg:block hidden">
                    <Image src="/images/home/hero-side-two.webp" alt="" width={50} height={200} />
                  </motion.div>
                  <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, transition: { duration: 1, delay: 2 }, opacity: 1 }} className="absolute right-[0px] top-28 bounce-slow-two lg:block hidden">
                    <Image src="/images/home/hero-side-two.webp" alt="" width={50} height={200} />
                  </motion.div>
                </div>
              </div>
            </div>
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, transition: { duration: 1, delay: 2 }, opacity: 1 }} className="absolute right-52 top-3/4 lg:block hidden">
              <Image src="/images/sq.png" alt="" width={20} height={200} className="orbit" />
            </motion.div>
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, transition: { duration: 1, delay: 2 }, opacity: 1 }} className="absolute left-80 top-1/2 half-circle-motion md:block hidden z-10">
              <Image src="/images/circle.png" alt="" width={20} height={200} />
            </motion.div>
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, transition: { duration: 1, delay: 2 }, opacity: 1 }} className="absolute left-40 top-1/3 bounce-slow z-10">
              <Image src="/images/tri1.png" alt="" width={60} height={200} className="orbit grayscale" />
            </motion.div>
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, transition: { duration: 1, delay: 2 }, opacity: 1 }} className="absolute right-40 top-1/3 lg:block hidden">
              <Image src="/images/tri4.png" alt="" width={20} height={200} className="orbit" />
            </motion.div>
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, transition: { duration: 1, delay: 2 }, opacity: 1 }} className="absolute right-1/2 top-1/2 translate-x-1/2 z-10 ">
              <Image src="/images/tri1.png" alt="" width={60} height={200} className="orbit grayscale" />
            </motion.div>
          </div>
          <div className="w-full mt-[-1px]">
            <Image src="/images/white-wave.svg" alt="white-wave" width={60} height={200} className="w-full" loading="eager" priority />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              style={{ transform: 'rotate(180deg)' }}
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
       82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
       906.67,72,985.66,92.83c70.05,18.48,146.53,
       26.09,214.34,3V0H0V27.35A600.21,600.21,
       0,0,0,321.39,56.44Z"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="1"
              />
            </svg> */}
          </div>
        </div>

        <About
          title={"Welcome To VigoCamp: All-In-One School ERP Software"}
          paraOne="We take charge of enhancing the school’s efficiency and letting them manage all school operations with an all-in-one powerful platform. VigoCamp software is specifically helpful in offering a digitally connected school ecosystem, which makes it a perfect software that has the power to fulfil the needs of modern-day educational institutions. It makes the communication process easier with integrations like WhatsApp/SMS APIs, while further integrations play an important role in offering a paperless and centralized administrative system."
          paraTwo=""
          paraFour=""
          paraThree="" btnName={undefined}
          img="/images/home/about-us.webp" type={undefined} />

        <Panels
          title="VigoCamp Management Software Panel Features"
          decs="VigoCamp makes it easy for every stakeholder, including admins, students/parents, and teachers, to contribute to the institute."
          PanelOne={TeachersPanel}
          PanelTwo={ParentsPanel}
          AdminPanel={AdminPanel}
          AdminTech="Admin Panel"
          PanelOneTech="Teachers Panel"
          PanelTwoTech="Student/Parents Panel"
          AdminImage="/images/home/panels/admin-panel.webp"
          PanelOneImage="/images/home/panels/teacher-panel.webp"
          PanelTwoImage="/images/home/panels/student-parent-panel.webp"
          PanelIconsOne={undefined} PanelIconsTwo={undefined} PanelIconsThree={undefined} types={"white-image"}
        />
        <Features title={"Vigo Offers Effortless Operations Handling With Its Advanced Features"} desc={"With a clean and intuitive UX/UI, VigoCamp is a user-friendly and powerful software with a variety of add-ons. "} tabFeatures={tabFeatures} tabs={tabs} />



        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }} className="bg-primary py-10 text-center text-white">
          <h2 className="text-3xl font-bold ">
            Select Your Role To Setup Your School
          </h2>
          <p className=" mt-1">( In 2 Steps Only )</p>

          <div className="flex justify-center flex-wrap xl:gap-6 gap-1 mt-10 ">
            {roles.map((role) => (
              <div
                key={role.label}
                onClick={() => setSelectedRole(role.label)}
                className={`sm:w-52 w-32 sm:h-40 h-32  bg-white text-black rounded-lg shadow-md flex flex-col items-center justify-center border-2 cursor-pointer transition-all duration-300 ${selectedRole === role.label
                  ? "border-blue-500 ring-2 ring-blue-400"
                  : "border-transparent hover:border-gray-200 hover:ring-2 hover:ring-gray-400 "
                  }`}
              >
                {selectedRole === role.label && (
                  <div className="absolute  bg-blue-500 text-white rounded-full p-1 z-50 inline">
                    <TiTick />
                  </div>
                )}
                <Image src={role.image} alt={role.label} width={50} height={10} className="sm:w-10 sm:h-16 mb-2" />
                <p className="font-semibold text-sm">{role.label}</p>
              </div>
            ))}
          </div>

          <button

            className="mt-8 px-6 py-1.5 text-sm bg-white font-normal text-black rounded hover:bg-secondary hover:text-white transition-all"
            disabled={!selectedRole}
          >
            <Link href="/roles" target="blank">
              Next</Link>
          </button>
        </motion.div>

        <Plans
          title="VigoCamp ERP Pricing – Plans That Bring Growth"
          desc="Vigo offers flexible pricing tailored to your needs that allows school of all scales to enjoy their innovative services to reduce their workload."
          Plans={plans} />

        <Offer
          title={"What Do We Offer? Get Exact What Makes Your School Competitive"}
          desc={"VigoCamp is one of India's most appreciated school management software from different kinds of reputed resources."}
          Offer={offer} />
        <Benefits
          title="Benefits Of School ERP Software"
          desc="VigoCamp is a leading school ERP software that brings ease to the lives of all school stakeholders, including admins, teachers, students, and parents."
          benefits={benefits} />

        <FaqSection faqDataOne={faqDataOne} faqDataTwo={faqDataTwo} />

        <ClientTestimonial />

      </section>
    </>
  );
};