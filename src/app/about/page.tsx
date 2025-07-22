"use client"

import { useState } from "react";
import Header from "../../components/Header";
// import { CiStar } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

const Page = () => {
    const [isClicked, setIsClicked] = useState(false);
   
    return (
        <>
            <Header />
            <div className="relative w-full">
                <div
                    className="bg-[url('https://cdn.cmsfly.com/63db6562d421f900564a6030/about_hdr_img1-hP_90F.png')] relative h-[400px] lg:h-[500px] w-full bg-cover bg-center flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <h1 className="relative text-white text-4xl font-bold z-10 font-inter">
                        About us
                    </h1>
                    <div className="absolute md:-bottom-1 bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            style={{ transform: "rotate(180deg)" }}
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                fill="#ffffff"
                                stroke="#ffffff"
                                stroke-width="1"
                            />
                        </svg>
                    </div>
                </div>
            </div>


            {/* {-----Next Section------} */}

            <div className="max-w-6xl mx-auto pb-10 font-nunito">
                <div className="flex  flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white">
                    <div className="relative w-full bg-white md:w-1/2">
                        <img
                            src="https://cdn.cmsfly.com/63db6562d421f900564a6030/group-1000004332-7EDZX6.png"
                            alt="Chef preparing sushi"
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                    <div className="w-full md:w-1/2 spafce-y-6">
                        <h4 className="text-secondary font-semibold font-inter">WHY CHOOSE US</h4>
                        <h2 className="text-3xl font-bold text-gray-800 font-inter">
                            Why we are the best
                        </h2>
                        <p className="text-gray-600 space-x-2">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout, the
                            point of using more-or-less normal.
                        </p>

                        {/* <div className="grid grid-cols-2  pt-4 sm:grid-cols-1 gap-4"> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">

                            <div className="bg-pink-100 p-4 rounded-lg flex items-center gap-3">
                                <img
                                    src="https://cdn.cmsfly.com/63db6562d421f900564a6030/icon-rN5Dsy.png"
                                    alt="Fresh Food"
                                    className="w-6 h-6"
                                />
                                <span className="font-medium text-gray-800">Fresh Food</span>
                            </div>
                            <div className="bg-pink-100 p-4 rounded-lg flex items-center gap-3">
                                <img
                                    src="https://cdn.cmsfly.com/63db6562d421f900564a6030/icon2-UZBdNF.png"
                                    alt="Clean Kitchen"
                                    className="w-6 h-6"
                                />
                                <span className="font-medium text-gray-800">Clean Kitchen</span>
                            </div>
                            <div className="bg-pink-100 p-4 rounded-lg flex items-center gap-3">
                                <img
                                    src="https://cdn.cmsfly.com/63db6562d421f900564a6030/icon3-81mCMB.png"
                                    alt="24/7 Services"
                                    className="w-6 h-6"
                                />
                                <span className="font-medium text-gray-800">24/7 Service</span>
                            </div>
                            <div className="bg-pink-100 p-4 rounded-lg flex items-center gap-3">
                                <img
                                    src="https://cdn.cmsfly.com/63db6562d421f900564a6030/icon4-Xe8ujl.png"
                                    alt="Online Order"
                                    className="w-6 h-6"
                                />
                                <span className="font-medium text-gray-800">Online Order</span>
                            </div>
                        </div>

                        <div className="border-t pt-4 mt-4 flex items-center gap-4">
                            <img
                                src="https://cdn.cmsfly.com/63db6562d421f900564a6030/ellipse-15-TAb1gN.png"
                                alt="Yamoto Shohito"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-secondary font-semibold">Yamoto Shohito</p>
                                <p className="text-sm text-gray-600">Founder of Sushima</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {-------Next Section------} */}
            <div className="relative w-full font-nunito">
                <div className="bg-[url('https://cdn.cmsfly.com/63db6562d421f900564a6030/frame-311-Me7sWj.png')] relative min-h-[500px] w-full bg-cover bg-center flex items-center justify-center py-8           ">
                    <div className="relative flex flex-col md:flex-row items-center justify-between px-8 py-8 space-y-6 md:space-y-0 md:space-x-8 w-full md:w-3/4">
                        <div className="md:w-1/2  md:text-left">
                            <h1 className="text-secondary text-xl font-bold font-inter">
                                OUR FEATURES
                                <br />
                                <span className="text-slate-800 text-4xl font-bold font-inter">
                                    Why we are the best
                                </span>
                            </h1>
                            <p className="text-slate-500 text-md mt-4 ">
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout,
                                the point of using more-or-less normal.
                            </p>
                            <ul className="space-y-2 mt-4 text-slate-500">
                                <li>
                                    <span className="text-secondary">&#10004;</span> Japanese
                                    cuisine, also known as washoku.
                                </li>
                                <li>
                                    <span className="text-secondary">&#10004;</span> Sushi is a dish
                                    made of vinegared rice combined.
                                </li>
                                <li>
                                    <span className="text-secondary">&#10004;</span> Yakitori is
                                    skewered and grilled chicken.
                                </li>
                            </ul>
                            <button className="bg-secondary font-semibold text-white font-nunito rounded-xl px-4 py-2.5 text-xs sm:text-base shadow-md hover:bg-secondary/90 active:scale-95 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary/50 mt-6">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* {-----Next Section------} */}

            <div className="flex flex-col items-center justify-center py-10 bg-white px-4 font-nunito">
                <p className="text-secondary uppercase text-sm font-medium mb-2">
                    Watch a recipe
                </p>
                <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6 font-inter">
                    Japanese food in your town
                </h1>

                {/* <div
                    className={`relative transition-all duration-300  shadow-lg p-4 rounded-[30px] max-w-[95vw] ${isClicked ? "border-2 border-green-500" : "border-2 border-secondary"
                        }`}
                    onClick={() => setIsClicked(true)}
                >
                    <iframe
                        // className="w-[90vw] max-w-3xl h-[300px] md:h-[400px]"
                        className="w-full  md:w-[90vw] h-[300px] md:h-[400px] max-w-3xl rounded-[20px]"
                        src="https://www.youtube.com/embed/_zzeCWqLo0k?si=8uDuEnHnnD0A00lp"
                        title="Japanese Recipe Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div> */}
                <div className={`relative transition-all  duration-300 shadow-lg p-4 rounded-[30px] max-w-[95vw] transform rotate-[1deg] ${isClicked ? "border-2 border-primary" : "border-2 border-secondary"}`}
               onClick={() => setIsClicked(true)}
                 >
         <div className="transform -rotate-[2deg]">
              <iframe
                  className="w-full md:w-[90vw] h-[300px] md:h-[400px] max-w-3xl rounded-[20px]"
                  src="https://www.youtube.com/embed/_zzeCWqLo0k?si=8uDuEnHnnD0A00lp"
                  title="Japanese Recipe Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              />
          </div>
         </div>

            </div>
            {/* {-----Next Section------} */}

            <div className="max-w-6xl mx-auto pb-10 ">
                <div className="flex  flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white">
                    <div className="relative w-full bg-white md:w-1/2">
                        <img
                            src="https://cdn.cmsfly.com/63db6562d421f900564a6030/img-mLXr38.png"
                            alt="Chef preparing sushi"
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                    <div className="w-full md:w-1/2 space-y-6">
                        <h4 className="text-secondary font-inter font-semibold">TESTOMONIALS</h4>
                        <h2 className="text-3xl font-bold text-gray-800 font-inter">
                            Our lovely customer loves our food
                        </h2>
                        <p className="text-gray-600 font-nunito">
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form, by
                            injected humour or randomised words which dont look even
                            slightly believable. If you are going to use a passage.
                        </p>
                        <div className="border-t pt-4 mt-4 flex items-center gap-4">
                            <div>
                                <div className="flex items-center gap-2 justify-start">
                                    {Array(5).fill(0).map((_, i) => (
                                        // <img
                                        //   key={i}
                                        //   src="https://cdn.cmsfly.com/63db6562d421f900564a6030/frame-252-dP-d_q.png"
                                        //   alt="Jenny Wilson"
                                        //   className="w-8 h-8 rounded-full object-cover"
                                        // />
                                        <FaStar key={i} className="w-8 h-8  text-secondary" />

                                    ))}
                                </div>

                                <div className="mt-2">
                                    <p className="text-secondary font-semibold">Jenny Wilson</p>
                                    <p className="text-sm text-gray-600">Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {-----Next Section------} */}

            <div className="text-center md:text-left font-nunito">
                <h1 className="text-primary text-3xl md:text-4xl font-inter font-bold flex justify-center">
                    TEAM MEMBERS
                </h1>
                <p className="text-xl md:text-2xl text-secondary mb-6 flex font-inter justify-center">
                    Meet our expert chefs
                </p>

                <div className="flex flex-wrap gap-10 justify-center sm:gap-6 md:gap-20">
                    <div className="flex flex-col items-center sm:w-full md:w-auto transform transition-all duration-500 hover:scale-105 group">
                        <div className="relative rounded-3xl overflow-hidden w-full max-w-[260px] h-[300px] mb-2 transition-all duration-700 hover:shadow-xl hover:shadow-amber-100/50 animate-float hover:animate-stop-float">
                            <img
                                src="https://cdn.cmsfly.com/63db6562d421f900564a6030/3-v5CCRy.png"
                                alt="Akira Borohato"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        <h2 className="text-black text-xl font-semibold transition-all duration-500 
      group-hover:text-transparent group-hover:bg-clip-text 
      group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-rose-600">
                            Akira Borohato
                        </h2>
                        <p className="text-gray-600 transition-all duration-500 
      group-hover:text-amber-700 group-hover:font-medium">
                            Head of the Chef
                        </p>
                    </div>

                    <div className="flex flex-col items-center sm:w-full md:w-auto transform transition-all duration-500 hover:scale-105 group">
                        <div className="relative rounded-3xl overflow-hidden w-full max-w-[260px] h-[300px] mb-2 transition-all duration-700 hover:shadow-xl hover:shadow-amber-100/50 animate-float hover:animate-stop-float">
                            <img
                                src="https://cdn.cmsfly.com/63db6562d421f900564a6030/1-Wn7uvF.png"
                                alt="Akira Borohato"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        <h2 className="text-black text-xl font-semibold transition-all duration-500 
      group-hover:text-transparent group-hover:bg-clip-text 
      group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-rose-600">
                            Kochin Noboga
                        </h2>
                        <p className="text-gray-600 transition-all duration-500 
      group-hover:text-amber-700 group-hover:font-medium">
                            Executive Chef
                        </p>
                    </div>

                    <div className="flex flex-col items-center sm:w-full md:w-auto transform transition-all duration-500 hover:scale-105 group">
                        <div className="relative rounded-3xl overflow-hidden w-full max-w-[260px] h-[300px] mb-2 transition-all duration-700 hover:shadow-xl hover:shadow-amber-100/50 animate-float hover:animate-stop-float">
                            <img
                                src="https://cdn.cmsfly.com/63db6562d421f900564a6030/2-XbaORg.png"
                                alt="Akira Borohato"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        <h2 className="text-black text-xl font-semibold transition-all duration-500 
      group-hover:text-transparent group-hover:bg-clip-text 
      group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-rose-600">
                            Chan Mingxia
                        </h2>
                        <p className="text-gray-600 transition-all duration-500 
      group-hover:text-amber-700 group-hover:font-medium">
                            Dessert & Drink Expert
                        </p>
                    </div>


                </div>
            </div>

            {/* {-----Next Section------} */}

            {/* <div className="flex flex-wrap gap-4 justify-center py-8">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-4 lg:gap-12">
          <img
            src="https://cdn.cmsfly.com/63db6562d421f900564a6030/rectangle-748-FvpiEF.png"
            alt="Akira Borohato"
            className="rounded-3xl w-full h-auto object-cover lg:w-3/5"
          />
          <img
            src="https://cdn.cmsfly.com/63db6562d421f900564a6030/rectangle-751-F1nmib.png"
            alt="Akira Borohato"
            className="rounded-3xl w-full h-auto object-cover lg:w-2/5"
          />
        </div>

        <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-4 lg:gap-12">
          <img
            src="https://cdn.cmsfly.com/63db6562d421f900564a6030/rectangle-749-zK2OQo.png"
            alt="Akira Borohato"
            className="rounded-3xl w-full h-auto object-cover lg:w-2/5"
          />
          <img
            src="https://cdn.cmsfly.com/63db6562d421f900564a6030/rectangle-750-oMS3kS.png"
            alt="Akira Borohato"
            className="rounded-3xl w-full h-auto object-cover lg:w-3/5 "
          />
        </div>
      </div> */}

            {/* {-----Next Section------} */}
            <div className="relative mt-10 font-nunito">
                <div className="absolute -top-1 left-0 w-full overflow-hidden  z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            fill="#ffffff"
                            stroke="#ffffff"
                            stroke-width="1"
                        />
                    </svg>
                </div>
                <div
                    // className="relative bg-cover bg-center text-white min-h-[600px] flex items-center justify-center"
                    className="relative bg-cover bg-center text-white min-h-[600px] flex items-center justify-center bg-[url('https://cdn.cmsfly.com/63db6562d421f900564a6030/frame-319-mlCUIo.png')] "

                >
                    <div className="absolute inset-0 " />
                    {/* <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-10 text-center items-center justify-center"></div> */}
                    <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center items-center justify-center">
                        {[
                            {
                                title: "12.2k+",
                                subtitle: "Customer Served",
                                d: "M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368H480c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256 216zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z",
                            },
                            {
                                title: "100+",
                                subtitle: "Experienced Chefs",
                                d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c10 0 18.8-4.9 24.2-12.5l-99.2-99.2c-14.9-14.9-23.3-35.1-23.3-56.1v-33c-15.9-4.7-32.8-7.2-50.3-7.2H178.3zM384 224c-17.7 0-32 14.3-32 32v82.7c0 17 6.7 33.3 18.7 45.3L478.1 491.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7H384zm24 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z",
                            },
                            {
                                title: "10k+",
                                subtitle: "Coffees Made",
                                d: "M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z",
                            },
                            {
                                title: "150+",
                                subtitle: "Awards Received",
                                d: "M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-white">
                                <div className="mb-2">
                                    <svg
                                        width="40"
                                        height="40"
                                        fill="currentColor"
                                        viewBox="0 0 512 512"
                                    >
                                        {item.d ? (
                                            <path d={item.d} />
                                        ) : (
                                            <circle cx="12" cy="12" r="10" />
                                        )}
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold">{item.title}</h2>
                                <p className="uppercase text-sm tracking-wider">
                                    {item.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        style={{ transform: "rotate(180deg)" }}
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            fill="#ffffff"
                            stroke="#ffffff"
                            stroke-width="1"
                        />
                    </svg>
                </div>
            </div>

        </>
    );
};
export default Page;