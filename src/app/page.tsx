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
import HomePageSlider from "@/components/HomePageSlider";
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

const shopNeeds = [
  {
    title: "For Startups",
    image: "/homepage/startup.webp",
  },
  {
    title: "Events and Promotions",
    image: "/homepage/Event-and-Promotions.webp",
  },
  {
    title: "Cafe And Restaurant Essentials",
    image: "/homepage/Cafe-and-Restaurant--Essentials.webp",
  },
  {
    title: "Employee Engagement",
    image: "/homepage/Employee-engagement.webp",
  },
];

const bestSellers = [
  {
    title: "Classic Business Cards",
    image: "/homepage/rudra.webp",
  },
  {
    title: "Packaging Labels",
    image: "/homepage/labels.webp",
  },
  {
    title: "Booklets",
    image: "/homepage/Booklerts.webp",
  },
  {
    title: "Flyers",
    image: "/homepage/Flyer.webp",
  },
  {
    title: "Cards",
    image: "/homepage/Cards.webp",
  },
  {
    title: "Stickers",
    image: "/homepage/Best-sellers.webp",
  },
  {
    title: "Hoodies & Sweatshirts",
    image: "/homepage/winterwears.webp",
  },
  {
    title: "Acrylic Prints",
    image: "/homepage/Acrylic-prints.webp",
  },
  {
    title: "Certificates",
    image: "/homepage/Certificates.webp",
  },
  {
    title: "ID Cards",
    image: "/homepage/Id-cards.webp",
  },
  {
    title: "Tote Bags",
    image: "/homepage/Tote-bag.webp",
  },
  {
    title: "Photo Books",
    image: "/homepage/photo-book.webp",
  },
];

const blogs = [
  {
    // title: "For Startups",
    image: "/homepage/the-blog-title..webp",
  },
  {
    // title: "Events and Promotions",
    image: "/homepage/blog1.webp",
  },
  {
    // title: "Cafe And Restaurant Essentials",
    image: "/homepage/blog2.webp",
  },
];

const SliderData = [
  {
    "num": "1",
    "img": "/homepage/slider1.webp"
  },
  {
    "num": "2",
    "img": "/homepage/slider2.webp"
  },
  {
    "num": "3",
    "img": "/homepage/slider3.webp"
  },
];

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
        <title> Online Printing Services | Custom Printing - Printo </title>
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
        {/* 1 */}
        <Header />
        <div className="mt-52 ">
          {/* <div className="max-width w-full bg-cover ">
          <div className="w-11/12 2xl:w-4/5 xl:w-[90%] flex lg:flex-row flex-col md:items-center mx-auto xl:pt-0 pt-28 justify-between md:space-y-0 space-y-10 max-w-7xl">
            <div className="lg:w-1/2">
              <HeroSection
                title="Welcome To Vigorous IT"
                titleOne=" A Destination For Advanced IT Solutions"
                para="We are a trusted IT company that provides unique IT solutions for multiple businesses growth. We enable businesses to forget their boundaries and touch limitless excellence. With the aim to provide services that aligns your business requirements, we guarantee your business growth."
                buttonCount={2}
                buttonNames={["Hire Developer", "View Case Studies"]}
                callToActionLine={undefined}
              />
            </div>

            <div className="lg:w-1/2 lg:flex xl:justify-center justify-end hidden">
              <div className="xl:pt-32 relative">
                <Image src="/images/home/banner-img.webp" alt="banner" title="banner" width={300} height={150} priority={true} className="z-30 h-[87%]" />
                <div className="absolute xl:top-[31%] top-[16%] right-[18px] z-20   ">
                  <MobileBannerForm />
                </div>

                <div className="absolute xl:top-[12rem] top-[3rem] left-2/4 -translate-x-[50%] z-20 text-[1.3rem] font-extrabold text-white ">Get In Touch</div>
              </div>
            </div>
            <div className="w-full lg:hidden  ">
              <ContactForm />
            </div>
          </div>
        </div> */}

          <HomePageSlider SliderData={SliderData} />
          {/* 2 */}
          {/* <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10 lg:py-12 max-w-7xl md:space-y-10 space-y-4 font-nunito flex lg:flex-row flex-col-reverse items-center">
          <div className='md:w-1/2 w-11/12  mx-auto'>
            <Image src='/images/home/about-us-img.webp' alt="About Vigorous IT" title="About Vigorous IT" width={600} height={400} />
          </div>
          <div className='lg:w-1/2 w-full space-y-5 m-auto lg:py-0 py-5'>
            <div className="space-y-5 relative w-full">
              <h2 className="xl:block hidden text-transparent bg-clip-text text-stroke-white text-8xl capitalize font-inter bottom-[1%]  md:absolute  left-[22%] md:transform md:-translate-x-2/4">About</h2>
              <h3 className='lg:text-4xl text-3xl font-bold font-inter capitalize text-primary text-left'>About Vigorous IT</h3>
            </div>
            <p className="lg:text-2xl text-xl md:font-medium md:pr-5 pr-0 text-ternary "> WELCOME DIGITAL TECH IN YOUR BUSINESSES WITH US:</p>
            <p className=' lg:text-md text-base text-ternary'>At Vigorous, we have a team of tech enthusiasts who are dedicated to their commitments.They love innovation and always do research to upgrade their skills. We are shaping a brighter future for different companies, enterprises and organizations through our cutting-edge IT solutions. After working with multiple brands, and serving many individual entrepreneurs, we are a leading IT company in the market. Our client retention and happy customers tell all about our success story about how we win the market and also the hearts of our customers. What else you need when an expert and dedicated team is prepared to grow your business. </p>
            <div className="pt-5 md:block flex justify-left md:w-full w-4/5">
              <Button
                url={"/contact-us"}
                btnName={"Contact Us"}
                clipShapeBgColor={"secondary"} bgColor={'bg-[#F55B14]'} iconColor={'text-white'} onClickFunc={undefined} />
            </div>
          </div>
        </div> */}
          {/* <div className="bg-primary py-10 text-center w-full flex justify-center items-center flex-col ">
          <h2 className="lg:text-3xl text-2xl font-bold text-white xl:leading-[3rem]  pb-5">
            Our Wall of Fame as a Mobile App Development Company
          </h2>

          <div className=" w-[99%] flex flex-wrap xl:flex-nowrap gap-4 justify-center items-center sm:p-4 ">
            <div className="w-full lg:w-auto flex xl:flex-wrap gap-4 xl:overflow-visible overflow-x-auto scroll-smooth snap-x snap-mandatory px-4  slidenone1">

              <div className="bg-transparent border  shadow-lg rounded-3xl sm:p-4 p-2 w-44 h-60 flex flex-col items-center snap-start shrink-0">
                <div className="h-36 w-full flex justify-center items-center">
                  <Image width={200} height={100} src="/images/home/wall-of-fame-logo/good-firm.webp" alt="eCommerce Development Companies" className="object-contain h-36 w-auto" />
                </div>
                <h3 className="text-lg font-semibold mt-3 text-white">GoodFirms</h3>
                <p className="text-sm text-white text-center"></p>
              </div>

              <div className="bg-transparent border  shadow-lg rounded-3xl sm:p-4 p-2 w-44 h-60 flex flex-col items-center snap-start shrink-0">
                <Link href="https://www.c2creview.co/company/betpro-coders">
                  <div className="h-36 w-full flex justify-center items-center">
                    <Image width={200} height={100} src="/images/home/wall-of-fame-logo/game-development-c2c.webp" alt="" className="object-contain h-36 w-auto" />
                  </div>
                </Link>
                <h3 className="text-lg font-semibold mt-3 text-white">C 2 C Review</h3>
                <p className="text-sm text-white text-center"></p>
              </div>

              <div className="bg-transparent border  shadow-lg rounded-3xl sm:p-4 p-2 w-44 h-60 flex flex-col items-center snap-start shrink-0">
                <Link href="https://topfirms.co/companies/ios-app-development/india" target="_blank">
                  <div className="h-36 w-full flex justify-center items-center">
                    <Image width={200} height={100} src="/images/home/wall-of-fame-logo/top-firms.webp" alt="eCommerce Development Companies" className="object-contain h-36 w-auto" />
                  </div>
                </Link>
                <h3 className="text-lg font-semibold mt-3 text-white ">TopFirms</h3>
                <p className="text-sm text-white text-center"></p>
              </div>

              <div className="bg-transparent border  shadow-lg rounded-3xl sm:p-4 p-2 w-44 h-60 flex flex-col items-center snap-start shrink-0">
                <div className="h-40 w-full flex justify-center items-center">
                  <Image width={200} height={80} src="/images/home/wall-of-fame-logo/techbehemoths.webp" alt="eCommerce Development Companies" className="object-contain h-36 w-auto" />
                </div>
                <h3 className="text-lg font-semibold  text-white">Tech Behemoths</h3>
                <p className="text-sm text-white text-center"></p>
              </div>

              <div className="bg-transparent border  shadow-lg rounded-3xl sm:p-4 p-2 w-44 h-60 flex flex-col items-center snap-start shrink-0">
                <div className="h-40 w-full flex justify-center items-center">
                  <Image width={200} height={100} src="/images/home/wall-of-fame-logo/design-awards.webp" alt="eCommerce Development Companies" className="object-contain h-36 w-auto" />
                </div>
                <h3 className="text-lg font-semibold mt-3 text-white">Top Design Awards</h3>
                <p className="text-sm text-white text-center"></p>
              </div>
            </div>
          </div>
        </div> */}
          {/* 4 */}
          {/* <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 pb-10 lg:pb-12 max-w-7xl text-center space-y-5 font-nunito flex flex-col justify-center items-center">
          <div className="relative w-full lg:pt-10 pt-0">
            <h2 className="xl:block hidden text-transparent bg-clip-text md:whitespace-nowrap text-stroke-white text-8xl font-inter bottom-[1%] md:absolute left-[50%] md:transform md:-translate-x-2/4">
              Our Work
            </h2>
            <h3 className="font-inter lg:text-4xl text-3xl font-bold text-primary capitalize">
              We work with Startups, Agencies & Enterprises
            </h3>
          </div>
          <p className="lg:text-md text-base text-ternary lg:px-28 pb-4">
            At Vigorous, we have something for everyone. If you are a startup, we have a robust website development service for you; if you are an agency, we will enable you to cover the additional projects with professionalism; and if you are an enterprise, we enable you to increase your revenue stream through our expertise.
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {workData.map((item, index) => (
              <div key={index} className="group">
                <div className="relative group-hover:scale-110 transition-transform duration-300">
                  <Image src={item.imageSrc} alt={item.altText} title={item.title} width={400} height={400} />
                  <p className="text-center mt-2 px-4 py-1.5 rounded-full border absolute -bottom-4 left-[50%] transform -translate-x-2/4 bg-gray-600 text-white text-base group-hover:bg-black">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
          {/* 
        <OtherExpertise /> */}

          {/* 3 */}
          {/* <ServicesIndex mobile={mobile} website={website} quality={quality} marketing={marketing} infrastructure={infrastructure} consulting={consulting} /> */}
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
            <div className="py-10">
              <div className="flex justify-center items-center w-full">
                <img src="/homepage/Icon-banner.webp" alt="banner" title="banner" />
              </div>
            </div>
          </div>

          {/* <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
            <div className="py-10">
              <div className="flex justify-center items-center w-full">
                <img src="/homepage/Icon-banner.webp" alt="banner" title="banner" />
              </div>
            </div>
          </div> */}


          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
            <div className="py-5">
              <div className="text-center mb-4 flex justify-center items-center gap-4">
                <hr className="w-1/3 bg-gray-400 h-[2px] " />
                <h2 className="text-2xl font-bold text-gray-800 inline-block">
                  Popular Categories
                </h2>
                <hr className="w-1/3 bg-gray-400 h-[2px] " />
              </div>
              <div className="grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-4 w-full">
                <img src="/homepage/App.webp" alt="banner" title="banner" />
                <img src="/homepage/Awards.webp" alt="banner" title="banner" />
                <img src="/homepage/Stationery.webp" alt="banner" title="banner" />
                <img src="/homepage/Corporate-gifts.webp" alt="banner" title="banner" />
                <img src="/homepage/drinkers.webp" alt="banner" title="banner" />
                <img src="/homepage/packaing.webp" alt="banner" title="banner" />
                <img src="/homepage/Photo-gifts.webp" alt="banner" title="banner" />
                <img src="/homepage/Sign-and-marketing.webp" alt="banner" title="banner" />
              </div>
            </div>
          </div>


          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
            <div className="py-5">
              <div className="flex justify-center items-center w-full">
                <img src="/homepage/Strip-banner.webp" alt="banner" title="banner" />
              </div>
            </div>
          </div>

          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
            <div className="px-4 py-5">
              <div className="text-center mb-5 flex justify-center items-center gap-4">
                <hr className="w-1/3 bg-gray-400 h-[2px] " />
                <h2 className="text-2xl font-bold text-gray-800 inline-block">
                  Shop By Needs
                </h2>
                <hr className="w-1/3 bg-gray-400 h-[2px] " />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {shopNeeds?.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-cover shadow"
                    />
                    <h3 className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
            <div className="px-4 py-8">
              <div className="text-center mb-5 flex justify-center items-center gap-4">
                <hr className="w-1/3 bg-gray-400 h-[2px] " />
                <h2 className="text-2xl font-bold text-gray-800 inline-block">
                  Best Sellers
                </h2>
                <hr className="w-1/3 bg-gray-400 h-[2px] " />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
                {bestSellers?.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      title={item.title}
                      className="w-full object-cover shadow"
                    />
                    <h3 className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
            <div className="py-5">
              <img src='/homepage/Bottom-banners.webp' />
            </div>
          </div>

          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
            <div className="py-5">
              <div className="flex flex-col gap-2 justify-center items-center w-full">
                <img src="/homepage/Bottom-banners1.webp" alt="banner" title="banner" />
                <img src="/homepage/Bottom-banners2.webp" alt="banner" title="banner" />
                <img src="/homepage/Bottom-banners3.webp" alt="banner" title="banner" />
              </div>
            </div>
          </div>

          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
            <div className="py-5">
              <img src='/homepage/logo-gif.webp' />
            </div>
          </div>

          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
            <div className="px-4 py-5">
              <div className="grid grid-cols-3 gap-6 text-center">
                {blogs?.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <img
                      src={item.image}
                      // alt={item.title}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 11 */}
          {/* <CallToAction title="Transform Your Business Today" desc="Experience the power of innovative IT solutions. Contact us now for a free consultation and discover how we can help you for your business growth." btnName="Get A Demo" bgImage="/images/home/call-to-action.webp" /> */}

          {/* <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
          <div className="py-5">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-purple-800">From the blog.</h2>
                <p className="text-[17px] text-black font-semibold mt-2">
                  Join us in exploring the world of print through our blog.
                </p>
                <p className="text-gray-700 mt-2 max-w-[500px] leading-relaxed">
                  From choosing the ideal paper to creating remarkable prints, our
                  articles are your compass to navigate the world of print. Whether
                  you're creating cherished memories or business materials, we're here
                  to guide you!{" "}
                  <a href="#" className="text-purple-700 hover:underline">
                    Read More
                  </a>
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Blog 1"
                  className="w-full h-[200px] object-cover rounded"
                />
                <p className="text-gray-800 font-medium mt-4">
                  From eco-friendly labels to AR-powered prints - discover the top 5
                  custom printing trends redefining 2025.
                </p>
                <a
                  href="#"
                  className="text-purple-700 font-medium mt-3 inline-block hover:underline"
                >
                  Read More
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Blog 2"
                  className="w-full h-[200px] object-cover rounded"
                />
                <p className="text-gray-800 font-medium mt-4">
                  Summer’s here, and so are the coolest ways to print your brand into
                  every moment. Curious? Dive in.
                </p>
                <a
                  href="#"
                  className="text-purple-700 font-medium mt-3 inline-block hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div> */}

          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
            <div className="w-full md:flex justify-between items-center py-6">
              <div className="flex justify-center items-center md:w-1/2 gap-2 w-full">
                <img src="/homepage/map.webp" alt="map" title="map" />
              </div>
              <div className="flex justify-center items-center md:w-1/2 w-full">
                <img src="/homepage/gif-demo.webp" alt="banner" title="banner" />
              </div>
            </div>
          </div>

          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl  ">
            <div className="py-8 space-y-5">
              <h2 className="text-[24px] pb-3"> Printo - For You, Making Your Print Experience Hassle-Free</h2>
              <p className="text-black/70"> At Printo, we turn your ideas into real-world print magic.  From custom business cards to employee joining kits, branded signage, corporate gifting and everything in between  -  we've been India's go-to print-on-demand platform since 2006.
              </p>
              <p className="text-black/70">
                Headquartered in Bangalore, we operate a state-of-the-art 50,000+ sq. ft production facility and 28+ retail stores across 6 major cities. Whether you're a startup founder looking to print just 5 T-shirts or an enterprise rolling out 5,000 onboarding kits
              </p>
            </div>
          </div>
          {/* 8 */}
          {/* <Offering /> */}

          {/* 5 */}
          {/* <section className="w-full bg-black space-y-20 pb-10 lg:pt-0 pt-20 xl:block hidden">
          <PartnersLogo partnersOne={partnersOne} partnersTwo={partnersTwo} title="BRANDS" para="We proudly say that we collaborate with some well-known brands. These collaborations build our confidence, expertise and encourage us to provide tailored IT solutions. These collaborations also help us to ready a blueprint for international businesses growth. Now, we have experience, expertise, and roadmap to grow any large scale business. " titleOne="Brands We work" type={1} />
        </section> */}

          {/* <section className="w-full bg-black space-y-20 pb-10 lg:pt-0 pt-20 xl:hidden block">
          <PartnersLogoMobileView title={"Brands We work"} para={"We proudly say that we collaborate with some well-known brands. These collaborations build our confidence, expertise and encourage us to provide tailored IT solutions. These collaborations also help us to ready a blueprint for international businesses growth. Now, we have experience, expertise, and roadmap to grow any large scale business."} partnersOne={partnersOne} partnersTwo={partnersTwo} />
        </section> */}

          {/* 13 */}
          {/* <section className="w-11/12 py-10 mx-auto text-center ">
          <div className="relative w-full lg:pt-10 pt-0">
            <h2 className="xl:block hidden text-transparent bg-clip-text text-stroke-white text-8xl font-inter -bottom-[1%] md:absolute left-[50%] md:transform md:-translate-x-2/4">Process</h2>
            <p className='font-inter lg:text-4xl text-3xl font-bold text-primary capitalize '>
              Our Work <span className="font-extrabold">Process</span>
            </p>
          </div>
          <p className="lg:text-md text-base font-nunito xl:w-3/4 mx-auto py-5">We use our experience, expertise and edge-cutting technologies to develop the most effective IT solution for your business growth. We provide softwares with innovative designs, user friendly interface and data navigation system. Further, we use advanced technologies to make them stronger against potential threats like malware attacks. This way, we encourage businesses to crush the competition.
          </p>
          <div className="xl:w-1/2 w-11/12 mx-auto space-y-10 text-center ">
            <Image src="/images/home/process.png" alt="process" width={900} height={200} />
          </div>
        </section> */}

          {/* 7 */}
          {/* <Industries /> */}

          {/* 6 */}
          {/* <CaseStudy /> */}

          {/* 10 */}
          {/* <Testimonials /> */}

          {/* 14 */}
          {/* <Promotional /> */}

          {/* 9 */}
          {/* <BuildTask /> */}
        </div>
      </section>
    </>
  );
};