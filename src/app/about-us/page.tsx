"use client"

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import AOS from "aos";
import "aos/dist/aos.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbBulbFilled, TbTargetArrow } from 'react-icons/tb';
// import { IoLogoGameControllerB } from 'react-icons/io';
   
// import { initialize } from 'next/dist/server/lib/render-server';


const Header = dynamic(() => import('../../components/Header'), {
  loading: () => <p>Loading...</p>,
})


// const PartnersLogo = dynamic(() => import('../../components/PartnersLogo'), {
//   loading: () => <p>Loading...</p>,
// })

const Expertise = [
  { title: "On Demand App Development", img: "/images/about/our-expertise/on-demand-development.svg", imgwidth: 30, imgheight: 30 },
  { title: "School ERP Development", img: "/images/about/our-expertise/school-erp-development.svg", imgwidth: 43, imgheight: 30 },
  { title: "Doctors App Development", img: "/images/about/our-expertise/doctor-app-development.svg", imgwidth: 39, imgheight: 30 },
  { title: "Dating App Development", img: "/images/about/our-expertise/dating-app-development.svg", imgwidth: 49, imgheight: 30 },
  { title: "Fantasy Sports App Development", img: "/images/about/our-expertise/fantasy-sports-app-development.svg", imgwidth: 30, imgheight: 30 },
  { title: "Shopping App Development", img: "/images/about/our-expertise/shopping.svg", imgwidth: 30, imgheight: 30 },
  { title: "Live Streaming App Development", img: "/images/about/our-expertise/live-stream-app-development.svg", imgwidth: 30, imgheight: 30 },
  { title: "Medicine App Development", img: "/images/about/our-expertise/medicine-app-development.svg", imgwidth: 30, imgheight: 30 },
];

// const partnersOne = [
//   { title: "logo", img: "/images/about/team/Neha-Jain.webp", teamName: "Neha Jain", designation: "Practice Lead Vlocity", },
//   { title: "logo", img: "/images/about/team/Neha-Jain.webp", teamName: "Neha Jain", designation: "Practice Lead Vlocity" },
//   { title: "logo", img: "/images/about/team/Neha-Jain.webp", teamName: "Neha Jain", designation: "Practice Lead Vlocity" },
//   { title: "logo", img: "/images/about/team/Neha-Jain.webp", teamName: "Neha Jain", designation: "Practice Lead Vlocity" },
//   { title: "logo", img: "/images/about/team/Neha-Jain.webp", teamName: "Neha Jain", designation: "Practice Lead Vlocity" },
//   { title: "logo", img: "/images/about/team/Neha-Jain.webp", teamName: "Neha Jain", designation: "Practice Lead Vlocity" },
//   { title: "logo", img: "/images/about/team/Neha-Jain.webp", teamName: "Neha Jain", designation: "Practice Lead Vlocity" },
//   { title: "logo", img: "/images/about/team/Neha-Jain.webp", teamName: "Neha Jain", designation: "Practice Lead Vlocity" },

// ]

// const partnersTwo = [
//   { title: "logo", img: "/images/about/team/Neha-Jain.webp", teamName: "Neha Jain", designation: "Practice Lead Vlocity" },
//   { title: "logo", img: "/images/about/team/Neha-Jain.webp", teamName: "Neha Jain", designation: "Practice Lead Vlocity" },
//   { title: "logo", img: "/images/about/team/Neha-Jain.webp", teamName: "Neha Jain", designation: "Practice Lead Vlocity" },

// ]

export default function AboutUs({ }) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [tech, setTech]:any = useState(0);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />

        <title> About Us | Vigorous IT  </title>
        <meta name="description" content="Vigorous IT's web and mobile app development services are available in the UK and India. Our goal is to provide our clients with high-quality software products." />
        <link rel="canonical" href="https://www.vigorousit.com/about-us" />

        <meta property="og:url" content="https://www.vigorousit.com/about-us  " />
        <meta property="og:title" content=" About Us | Vigorous IT  " />
        <meta property="og:site_name" content="Vigorous IT" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Vigorous IT's web and mobile app development services are available in the UK and India. Our goal is to provide our clients with high-quality software products." />
        <meta property="og:image" content="https://www.vigorousit.com/logo/vigorousit_logo.webp" />

        <meta name="twitter:card" content="summary" />
        <meta property="twitter:domain" content="vigorousit.com" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://www.vigorousit.com/about-us " />
        <meta property="twitter:title" content=" About Us | Vigorous IT  " />
        <meta property="twitter:description" content="Vigorous IT's web and mobile app development services are available in the UK and India. Our goal is to provide our clients with high-quality software products." />
        <meta name="twitter:image" content="https://www.vigorousit.com/logo/vigorousit_logo.webp" />
      </Head>
      <section className="overflow-hidden ">
        <div className="max-width w-full bg-[url('/images/about/about-us.webp')] bg-cover font-nunito">
          <Header />
          {/* 1 */}
          <div className="md:space-y-4 space-y-0 md:py-72 py-40 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
            <h1 className="lg:text-5xl text-4xl  py-2 font-bold text-white text-center">About Us</h1>
          </div>
        </div>

        {/* 2 */}
        <section className='py-10 mx-auto xl:w-5/6 w-11/12 md:space-y-10 space-y-4 max-w-7xl font-nunito'>
          <div className='lg:flex block lg:gap-5 gap-0 items-center'>

            <div className='xl:w-3/5 w-full md:space-y-4 space-y-0 m-auto lg:py-0 py-5 ' >
              <div className="relative w-full lg:pt-5">
                <p className="lg:block hidden text-transparent bg-clip-text text-stroke-white text-8xl capitalize -bottom-[1%] md:absolute  md:transform md:-translate-x-5/6">Overview</p>
                <h2 className='lg:text-4xl text-3xl 2xl:w-11/12 w-full font-bold text-primary font-inter capitalize '>Overview</h2>
              </div>
              <p className=' lg:text-md text-base  leading-7 '>Vigorous is a leading and trusted IT company in the market. We have been delivering different IT solutions related to website and app development for 8 years. In this time span, we serve all kinds of businesses including startups, companies, agencies and global enterprises. With such massive experience and a dedicated team, we always stay ahead of the market. We work with an agreement and always try to fulfil every possible facet of it. </p>
            </div>
            <div className='xl:w-2/5 w-full  mx-auto overflow-hidden'>
              <div className="  border-2 border-blue-800  rounded-xl ">
                <div className='bg-blue-800 py-3 text-white flex items-center text-2xl pl-5 rounded-t-lg '><span><FaLinkedinIn size={34} /></span>&nbsp; | &nbsp; Let’s Connect</div>

                <div className='py-8 space-y-5 '>
                  <p className="text-5xl text-center font-bold font-inter">19.7T+ <span className='font-medium text-gray-500 '>followers</span></p>
                  <div className=' flex items-center justify-center gap-8'>
                    <Image src='/images/about/overview.webp' alt='Overview' title='Overview' width={214} height={121} />
                    <div>
                      <button id="about-us" aria-label="about-us" className='bg-blue-800 py-3 px-5 whitespace-nowrap  text-white rounded-md text-xl trackin-wide flex justify-center items-center gap-5'>Linkedin<span><BsFillArrowRightCircleFill size={35} /></span></button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3*/}
        <section className=' mx-auto xl:w-5/6 w-11/12 md:space-y-10 space-y-4 pb-10 max-w-7xl font-nunito'>
          <div className='lg:flex-row flex flex-col-reverse lg:gap-5  items-center lg:space-y-0 space-y-5 '>
            <div className='xl:w-2/5 w-full flex lg:justify-start justify-center '>
              <Image src='/images/about/who-we-are.webp' alt='about' title='about' width={504} height={569} />
            </div>

            <div className='xl:w-3/5 w-full space-y-4  m-auto lg:py-0 py-5 ' >
              <div className="relative w-full">
                <p className="lg:block hidden text-transparent bg-clip-text text-stroke-white text-8xl capitalize font-inter ">About</p>
                <h2 className='lg:text-4xl text-3xl 2xl:w-11/12 w-full font-bold text-primary font-inter capitalize -bottom-[1%] md:absolute xl:left-[46%] left-[50%] md:transform md:-translate-x-2/4'>WHO WE ARE</h2>
              </div>
              <p className=' lg:text-md text-base leading-7 '>The Vigorous, founded in 2016 is a trusted IT company that uses advanced technologies to develop apps and websites for customers. We always provide innovative solutions that are due to our extraordinary market research. At Vigorous, we are a team of 300+ certified professionals who work to bring your ideas into reality. We assist businesses in establishing their robust digital presence with the help of our unmatched expertise. </p>
              <p className='lg:text-md text-base leading-7 '>We believe in evolving which encourage us to accept the changes happening around us. This establishes us and we always stay tuned against every minor change in the industry. Our happy customer reviews and brand preference build our positive portfolio and now, we are ready to serve more business than prior.</p>
              <p className='lg:text-md text-base leading-7 '>Rather than past, today we are experts, well aware of trending technologies and know how to use them to provide your business with a personalized presence in this crowded industry. </p>
            </div>
          </div>
        </section>

        {/* 4 */}
        <section className='lg:py-16 py-5 mx-auto 2xl:w-5/6 w-11/12 md:space-y-10 space-y-4 max-w-7xl font-nunito'>
          <div className='lg:flex block lg:gap-5 gap-0 items-center'>
            <div className='xl:w-1/2 w-full md:space-y-4 space-y-0 m-auto lg:py-0 py-5'>
              <div className="relative w-full">
                <p className="lg:block hidden text-transparent bg-clip-text text-stroke-white text-8xl capitalize font-inter lg:bottom-[60%] md:absolute md:transform md:-translate-x-5/6">history</p>
                <h2 className='lg:text-4xl text-3xl 2xl:w-11/12 w-full font-bold text-primary font-inter capitalize'>
                  We are here to IT Solutions with 5+ years of experience
                </h2>
              </div>
              <div className="py-10">
                <div className="flex items-center lg:space-x-6 space-x-1 w-full slidenone overflow-y-hidden">
                  {['Our Vision', 'Our Mission'].map((label, index) => (
                    <div
                      key={index}
                      onClick={() => setTech(tech === index ? null : index)}
                      className={`rounded-xl text-white md:px-2 px-10 text-center font-bold py-6 capitalize cursor-pointer lg:w-36 md:w-52 ${tech === index ? 'bg-primary underline' : 'bg-black/70'}`}
                    >
                      <div className="flex justify-center items-center">
                        {index === 0 ? <TbBulbFilled size={40} className='text-slate-50' /> : <TbTargetArrow size={40} className='text-slate-50' />}
                      </div>
                      <span className="lg:text-md text-base">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="relative pt-10">
                  {tech !== null && (
                    <div className="px-1 bg-white flex items-center rounded-lg" data-aos="fade-right" data-aos-duration="1000">
                      <div className="space-y-4 rounded-xl">
                        <p className="lg:text-md text-base leading-7 transition duration-200 ease-in-out whitespace-normal">
                          {tech === 0
                            ? "Our vision is to become a premier web solutions provider in the IT sector and continue advancing our market position. We understand that our customers' growth drives our own success, and we are dedicated to helping them achieve their business goals. We prioritize precision and top-quality work in everything we do."
                            : "We always focus on providing top-notch solutions that must become a cause for your business growth. We encourage our teams to strengthen our service standards and also push them to enhance it day by day. It’s all about our mission to deliver higher-quality services with precision and excellence."
                          }
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='xl:w-1/2 w-full flex lg:justify-start relative justify-center'>
              <Image src='/images/about/mission-vision.webp' alt='about' title='about' width={500} height={612} />
            </div>
          </div>
        </section>



        {/* 7 */}
        {/* <section className="w-full bg-black space-y-20 pb-10 lg:pt-0 pt-20">
          <PartnersLogo partnersOne={partnersOne} partnersTwo={partnersTwo} title="Team" para="Meet our esteemed partners and stakeholders, who are the backbone of Cyntexa, have made immense contributions to our growth and success. Their expertise in various domains and industries has made us a reliable partner for technological solutions globally." titleOne="Our Team" type={2} />
        </section> */}

        {/* 5 */}
        <section className='mx-auto w-full md:space-y-10 space-y-4 bg-gray-100 py-8 font-nunito'>
          <div className="relative w-full lg:pt-10 pt-0">
            <p className="lg:block hidden text-transparent bg-clip-text text-stroke-white text-8xl text-center -bottom-[8%] md:absolute font-inter left-[50%] md:transform md:-translate-x-2/4">Expertise</p>
            <h2 className='lg:text-4xl text-3xl md:whitespace-nowrap font-bold text-primary capitalize font-inter text-center'>Our Expertise</h2>
          </div>
          <div className='xl:w-5/6 w-11/12 grid lg:grid-cols-4 grid-cols-2 mx-auto '>
            {Expertise.map((elem, index) => {
              const { title, img, imgwidth, imgheight } = elem;
              return (
                <div key={index} >
                  <div className={`lg:block hidden space-y-5 py-10 ${index % 4 !== 0 ? 'lg:border-l border-black/30  ' : ''} ${index < 4 ? 'lg:border-b  border-black/30' : ''}`}>
                    <div className=' flex justify-center items-center rounded-lg m-auto'>
                      <Image src={img} alt={title} title={title} width={imgwidth} height={imgheight} />
                    </div>
                    <h3 className='lg:text-md text-base text-center font-bold px-4'>{title}</h3>

                  </div>

                  <div key={index}
                    className={`lg:hidden space-y-5 py-10   ${[0, 2, 4, 6,].includes(index) ? 'border-r border-black/30' : ''}  ${[0, 1, 2, 3, 4, 5].includes(index) ? '  border-b border-black/30' : ''}`}
                  >
                    <div className='md:bg-white flex justify-center items-center md:w-28 md:py-6 rounded-lg m-auto'>
                      <Image src={img} alt={title} title={title} width={imgwidth} height={imgheight} />
                    </div>
                    <h3 className='lg:text-md text-base text-center font-bold px-4'>{title}</h3>
                  </div>

                </div>
              );
            })}
          </div>
        </section>
        {/* 8 */}
        {/* <ScrollingGallery /> */}
         
      </section >
    </>
  )
}

  
