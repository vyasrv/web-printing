"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdDonutLarge, MdOutlineWorkOutline } from "react-icons/md";
// import $ from 'jquery';
import { RiPhoneLockLine } from "react-icons/ri";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { PiArrowUpRightBold } from "react-icons/pi";
import { LuScrollText } from "react-icons/lu";
import SignUp from "./SignUp";
import Login from "./Login";
import { IoMdArrowDropdown } from "react-icons/io";

export const company = [
  {
    num: 1,
    icon: <MdDonutLarge size={18} />,
    name: "About Us",
    url: "/",
  },
  {
    num: 2,
    icon: <RiPhoneLockLine size={18} />,
    name: "Contact Us",
    url: "/",
  },
  {
    num: 3,
    icon: <LuScrollText size={18} />,
    name: "Blogs",
    url: "/",
  },
  {
    num: 4,
    icon: <MdOutlineWorkOutline size={22} />,
    name: "Career",
    url: "/",
  },
];

export const services = [
  { name: "Attendance Management", href: "/attendance-system"},        
  { name: "Inventory Management", href: "/inventory-managment"},
  { name: "E-Learning Management", href: '/e-learning-management'},
  { name: "Online Admission System", href: '/online-admission-system'},
  { name: "Hostel Management", href: "/hostel-management-system"},
  { name: "Fee Management", href: '/smart-fee-management-system'},
  { name: "Library Management", href: '/library-management-system'},
  { name: "Transport Management", href: '/transport-management-system'},
  { name: "School Bus Tracking", href: '/bus-tracking-system'},

];

export default function DesktopNav() {
  const [showNav, setShowNav]:any = useState(null);
  // const [hoveredItem, setHoveredItem] = useState(1);
  const [showCompanyNav, setShowCompanyNav]:any = useState(null);

  const handleItemHover = (num:any) => {

    if (num === showNav) {
      // setHoveredItem(num);
    } else {
      // setHoveredItem(num);
      setShowNav(num);
    }
  };

  useEffect(() => {
    setShowNav(1);
    handleItemHover(1);
  },[handleItemHover]);


  // const [menu] = useState(false);
  // function toggleSlideover() {
  //   document.getElementById("slideover-container")?.classList.toggle("invisible");
  //   document.getElementById("slideover-bg")?.classList.toggle("opacity-0");
  //   document.getElementById("slideover-bg")?.classList.toggle("opacity-50");
  //   document.getElementById("slideover")?.classList.toggle("translate-x-full");
  // }

  // useEffect(() => {
  //   $(window).on('scroll', function () {
  //     if ($(window).scrollTop() > 50) {
  //       $('.headered').addClass('activeheader');
  //     } else {
  //       $('.headered').removeClass('activeheader');
  //     }
  //   });
  // }, []);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  
  const openSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false); 
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false); 
  };

  const closeModal = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(false); 
  };

  return (
    <div className="w-full headered fixed ">
      <nav className=" flex items-center justify-between  mx-auto  2xl:w-4/5 md:w-11/12 h-16 ">
        <Link passHref={true} href="/" className="relative flex items-center flex-shrink-0 text-white">
          <Image src="/logo/vigo-camp-logo.svg"
            alt="Vigorous IT Solutions logo"
            title="Vigorous IT Solutions logo"
            width={180}
            height={31}
            loader={uploadcareLoader}
            unoptimized={true}
            priority={true}
            loading="eager" />
        </Link>

        <div className={"lg:flex hidden  md:w-[60%] w-full items-center text-primary 2xl:px-6 xl:px-14 lg:px-10 xl:justify-start justify-center whitespace-nowrap"}>
          <div className="block xl:space-x-8 space-x-2 text-sm font-medium md:flex md:items-center gap-2">
            <Link href="/" passHref={true}>
              <span className="relative block text-base font-bold leading-none transition duration-300 cursor-pointer animated-border-button border-b-2 border-transparent border xl:pl-2 pl-0 py-4   ">
                Home 
              </span>
            </Link>

            {/* <Link href="/about" passHref={true}>
              <span className="relative block text-base font-bold leading-none transition duration-300 cursor-pointer animated-border-button border-b-2 border-transparent border xl:pl-2 pl-0 py-4   ">
                About 
              </span>
            </Link>

            <Link href="/contact" passHref={true}>
              <span className="relative block text-base font-bold leading-none transition duration-300 cursor-pointer animated-border-button border-b-2 border-transparent border xl:pl-2 pl-0 py-4   ">
                Contact 
              </span>
            </Link> */}

            <div className="relative group ">
              <button id="services" aria-label="services"
                onClick={() => setShowCompanyNav(showCompanyNav === 4 ? 0 : 4)}
                className="inline-flex items-center text-base font-bold animated-border-button border-b-2 border-transparent border xl:pl-2 pl-0 py-4 text-primary cursor-pointer ">
                <span
                  className={
                    showNav === 3
                      ? "font-bold text-white/90"
                      : "font-bold flex items-center"
                  }>
                  Special Features <IoMdArrowDropdown/>
                </span>
              </button>
              <div className="z-40 mt-[13px] pt-5 bg-white rounded-b-2xl  text-black capitalize lg:absolute top-[3rem] lg:drop-shadow-xl relative 2xl:-right-[12rem] xl:-right-[6.2rem] right-[6.1rem] transform translate-x-[50%] hidden group-hover:block transition duration-200 ease-in-out origin-top 2xl:w-[90rem] xl:w-[76rem] lg:w-[63rem] w-[40rem] xl:py-10 py-6 mx-auto space-y-8 xl:whitespace-nowrap whitespace-normal">
                <ul className="px-6 grid grid-cols-4 gap-5 font-nunito text-base">
                  {services.map((service, index) => (
                    <li key={index} className="flex xl:items-center items-start gap-2 text-black hover:text-primary p-1">
                     {service.href && ( <><span><PiArrowUpRightBold size={12} className="xl:mt-0 mt-1.5" /></span>
                      <Link className="flex items-center gap-2.5 text-black hover:text-primary" href={service.href}>
                        <b>{service.name}</b>
                      </Link> </> )}
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>

          </div>
        </div>
        <div className="flex space-x-4 items-center text-white text-sm">
          <button className="px-1.5 py-1 rounded-md bg-secondary hover:bg-primary" onClick={openSignup}>
            Signup
          </button>
          <button className="px-1.5 py-1 rounded-md bg-secondary hover:bg-primary" onClick={openLogin}>
            Login
          </button>

          {(isLoginOpen || isSignupOpen) && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg flex relative">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-black" onClick={closeModal}>
                  ✕
                </button>

                <div className="w-full md:w-1/2 p-8 ">
                  {isLoginOpen ? (
                    <Login onSwitch={() => { setIsLoginOpen(false); setIsSignupOpen(true); }} onClose={closeModal} isOpen={openLogin} />
                  ) : (
                    <SignUp onSwitch={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} onClose={closeModal} isOpen={openSignup} />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
