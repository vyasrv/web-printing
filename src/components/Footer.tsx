"use client"

import Link from 'next/link'
import React from 'react'
import { FaEnvelopeOpenText, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import Image from 'next/image'
import {motion} from "framer-motion"


const navLinks = [
  { href: "/", label: "Home" },
  { href: null, label: "About" },
  { href: null, label: "Contact" },
];

const services = [
  { name: "Attendance Management", href: "/attendance-system"},        
  { name: "Inventory Management", href: "/inventory-managment"},
  { name: "E-Learning Management", href: '/e-learning-management'},
  { name: "Online Admission System", href: '/online-admission-system'},
  { name: "Hostel Management", href: "/hostel-management-system"},
  { name: "Fee Management", href: '/smart-fee-management-system'},
  { name: "Library Management", href: '/library-management-system'},
  { name: "Transport Management", href: '/transport-management-system'},
  { name: "School Bus Tracking", href: '/bus-tracking-system'},
  { name: "Inventory Management", href: null},
  { name: "E-Learning", href: null},
  { name: "Online Admission", href: null},
];

const socialLinks = [
  { href: "https://www.facebook.com/profile.php?id=61576484496372", label: "Facebook", icon: FaFacebook },
  { href: "https://x.com/vigo_camp", label: "Twitter", icon: FaTwitter },
  { href: "https://www.instagram.com/vigo_camp/", label: "Instagram", icon: FaInstagram },
  { href: "https://www.linkedin.com/company/107137430/admin/dashboard/", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://in.pinterest.com/vigocamp/", label: "Pinterest", icon: FaPinterest },
  { href: "https://www.youtube.com/@vigocamp", label: "YouTube", icon: FaYoutube },
];

const contactInfo = [
  {
    icon: <FaPhoneAlt size={17} className="text-white/90 hover:text-white" />,
    href: "tel:+918209514612",
    label: "91 8209514612",
  },
  {
    icon: <FaEnvelopeOpenText size={17} className="text-white/90" />,
    href: "mailto:contact@vigorousit.com",
    label: "contact@vigorousit.com",
  },
  {
    icon: <IoLocationSharp size={17} className="text-white/90 mt-0.5" />,
    href: "www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.3380238326932!2d75.7397929011729!3d26.922265053857455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db367adcc873b%3A0xbe79e60941c05e9a!2s250%2C%20Janak%20Marg!5e0!3m2!1sen!2sin!4v1738127244490!5m2!1sen!2sin",
    label: "250, Janak Marg, Hanuman Nagar Extension, Officers Campus Colony, Jaswant Nagar, Jaipur, Rajasthan 302012",
    target: "_blank",
  },
];

const Footer = () => {
  return (
    <>
      <div className='w-full pt-40 pb-2 mx-auto lg:block hidden relative bg-primary  mt-52 font-nunito'>
        <motion.div initial={{y:80,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className='absolute bg-black text-white 2xl:w-3/4 w-11/12  lg:rounded-2xl rounded-t-none rounded-b-md -top-[20%] left-2/4 -translate-x-2/4 mx-auto'>
          <div className='flex w-full items-center '>
            <div className="space-y-5 w-[40%]  p-[25px]">
              <p className="text-[20px] capitalize font-bold !m-0 text-secondary">Contact</p>

              <div className="text-[16px] flex flex-col md:gap-2 gap-1">
                {contactInfo?.map(({ icon, href, label, target }, index) => (
                  <div key={index} className="text-white flex gap-3 w-full items-center">
                    <span>{icon}</span>
                    <span className="font-medium transition">
                      <Link
                        href={href}
                        passHref={true}
                        target={target || undefined}
                        className="text-white/90 hover:text-white no-underline"
                      >
                        {label}
                      </Link>
                    </span>
                  </div>
                ))}
                <p className="text-lg font-bold text-secondary">Follow Us</p>
                <ul className="flex gap-4 !p-0 list-none justify-start flex-wrap ">
                  {socialLinks?.map(({ href, label, icon: Icon }, index) => (
                    <li key={index}>
                      <Link
                        passHref={true}
                        href={href}
                        rel="noreferrer"
                        aria-label={label}
                        target="_blank"
                        className="text-white/80 transition hover:text-white"
                      >
                        <Icon size={24} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
            <div className='w-[60%] rounded-r-2xl overflow-hidden'>
              <div className="wpb_raw_code wpb_content_element wpb_raw_html " >
                <div className="wpb_wrapper">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.3380238326932!2d75.7397929011729!3d26.922265053857455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db367adcc873b%3A0xbe79e60941c05e9a!2s250%2C%20Janak%20Marg!5e0!3m2!1sen!2sin!4v1738127244490!5m2!1sen!2sin" width="100%" height="290" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
              </div>
            </div>
          </div>
        </motion.div>


        <motion.div initial={{y:80,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className='text-white text-center pt-24 space-y-10 w-11/12 mx-auto ' >
          <div className='flex items-start justify-between text-left w-5/6 mx-auto'>
            <div className="space-y-5 flex-1">
              <p className="text-[20px] capitalize font-bold !m-0 text-secondary">Company</p>

              <div className="text-[16px] flex flex-col md:gap-2 gap-1">
                {navLinks?.map(({ href, label }, index) => (
                 href ? <Link key={index} href={href} className="no-underline ">
                    <motion.p initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:index*0.1}}} className="!m-0 text-[16px] lg:text-[17px]">{label}</motion.p>
                  </Link> : <motion.p initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:index*0.1}}}  key={index} className="!m-0 text-[16px] lg:text-[17px]">{label}</motion.p>
                ))}
              </div>
            </div>
            <div className='space-y-5 flex-1'>
              <p className="text-[20px] capitalize font-bold !m-0 text-secondary">Special Features</p>
              <div className="text-[16px] flex flex-col md:gap-2 gap-1 h-[200px] overflow-auto ">
                {services?.map(({ href, name }, index) => (
                href ?  <Link key={index} href={href} className="no-underline ">
                    <motion.p initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:index*0.1}}}  className="!m-0 text-[16px] lg:text-[17px]">{name}</motion.p>
                  </Link>:      <motion.p initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:index*0.1}}}  key={index} className="!m-0 text-[16px] lg:text-[17px]">{name}</motion.p>
                ))}
              </div>
            </div>
            <div className="pr-2 flex-1">
              <div className="space-y-5 px-2">
                <p className="text-[20px] capitalize font-bold !m-0 text-secondary">Contact</p>

                <div className="text-[16px] flex flex-col md:gap-2 gap-1">
                  {contactInfo?.map(({ icon, href, label, target }, index) => (
                    <motion.div initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:index*0.1}}}  key={index} className="text-white flex gap-3 w-full items-center">
                      <span>{icon}</span>
                      <span className="font-medium transition">
                        <Link
                          href={href}
                          passHref={true}
                          target={target || undefined}
                          className="text-white/90 hover:text-white no-underline"
                        >
                          {label}
                        </Link>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <Image src="/logo/vigo-camp-logo-white.svg" alt='' width={250} height={200} />
            </div>
          </div>

        </motion.div>

      </div>



      {/* Mobile view */}

      <div className='w-full pt-60 pb-4 mx-auto lg:hidden block relative bg-primary sm:mt-60 mt-80 text-white text-sm'>
        <motion.div initial={{y:80,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className='absolute  lg:w-5/6 w-11/12  space-y-5 -top-[44%] left-2/4 -translate-x-2/4 mx-auto '>
          <div className="flex flex-wrap justify-between p-3 gap-4 bg-black rounded-2xl">
            <div className="space-y-5  px-2">
              <p className="text-[20px] capitalize font-bold !m-0 text-secondary">Contact</p>

              <div className="text-[16px] flex flex-col md:gap-2 gap-1">
                {contactInfo?.map(({ icon, href, label, target }, index) => (
                  <div key={index} className="text-white flex gap-3 w-full items-center">
                    <span>{icon}</span>
                    <span className="font-medium transition">
                      <Link
                        href={href}
                        passHref={true}
                        target={target || undefined}
                        className="text-white/90 hover:text-white no-underline"
                      >
                        {label}
                      </Link>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg font-bold ">Follow Us</p>
              <ul className="flex gap-4 !p-0 list-none justify-start flex-wrap ">
                {socialLinks?.map(({ href, label, icon: Icon }, index) => (
                  <li key={index}>
                    <Link
                      passHref={true}
                      href={href}
                      rel="noreferrer"
                      aria-label={label}
                      target="_blank"
                      className="text-white/80 transition hover:text-white"
                    >
                      <Icon size={24} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="wpb_raw_code wpb_content_element wpb_raw_html rounded-2xl overflow-hidden" >
            <div className="wpb_wrapper">
              <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.084485494637!2d-122.41941518468164!3d37.774929779759595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2e44a349%3A0x3c5e3e4f9ffabeed!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1614030258460!5m2!1sen!2sus" width="100%" height="200" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </motion.div>
        <div className="flex  flex-wrap justify-between xl:w-3/5 w-11/12 mx-auto gap-4 text-white ">
          <div className="space-y-3 ">
            <p className="text-[20px] capitalize font-bold !m-0 text-secondary">Company</p>
            <div className=" flex flex-col md:gap-2 gap-1">
              {navLinks?.map(({ href, label }, index) => (
                href  ?(
                <Link key={index} href={href} className="no-underline text-white">
                  <motion.p initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:index*0.1}}} className="!m-0.5 ">{label}</motion.p>
                </Link>) : (<motion.p initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:index*0.1}}} key={index} className="!m-0.5 ">{label}</motion.p>)
              ))}
            </div>
          </div>

          <div className='space-y-3  '>

            <p className="text-[20px] capitalize font-bold !m-0 text-secondary">Special Features</p>
 
            <div className="flex flex-col md:gap-2 gap-1 h-[120px] overflow-auto">
               {services?.map((service, index) => (
                 service.href ? (
                   <Link key={index} href={service.href} className="no-underline text-white">
                     <motion.p initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:index*0.1}}} className="!m-0.5">{service.name}</motion.p>
                   </Link>
                 ) : (
                   <motion.p initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:index*0.1}}} key={index} className="!m-0.5">{service.name}</motion.p>
                 )
               ))}
             </div>

          </div>

          <div className="space-y-5">
            <p className="text-[20px] capitalize font-bold !m-0 text-secondary">Contact</p>
            <div className="flex flex-col md:gap-2 gap-1">
              {contactInfo?.map(({ icon, href, label, target }, index) => (
                <motion.div initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:index*0.1}}} key={index} className="text-white flex gap-3 w-full items-center">
                  <span>{icon}</span>
                  <span className="font-medium transition">
                    <Link
                      href={href}
                      passHref={true}
                      target={target || undefined}
                      className="text-white/90 hover:text-white no-underline"
                    >
                      {label}
                    </Link>
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;