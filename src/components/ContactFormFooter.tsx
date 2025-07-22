import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelopeOpenText, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";
import PopupForm from "./PopupForm";

const locationCards = [
    // {
    //     title: "India",
    //     decs: "250, Janak Marg, Hanuman Nagar Extension, Officers Campus Colony, Jaswant Nagar, Jaipur, Rajasthan 302012",
    //     img: "/images/footer/india.svg",
    //     mail: "contact@vigorousit.com",
    //     number: "+91 82095 14612"
    // },
    {
        title: "United Kingdom",
        decs: "Birmingham, Uk",
        img: "/images/footer/us.svg",
        mail: "sales@vigorousit.com",
        number: "+44 7576 806395"
    },
];

const ContactFormFooter = () => {
 
    return (
        <section className=" lg:py-20 py-5" id="contact">
            <div className="w-full mx-auto space-y-6 2xl:w-9/12  max-w-7xl">
                <h2 className='text-secondary lg:text-4xl text-3xl text-center'>Let’s Get In Touch</h2>
                <p className="lg:text-md text-base text-center text-white">Our expert consultants will reach out within 24 hours.</p>
                <div className="lg:flex items-center lg:divide lg:divide-x-2 py-5">
                    <div className="xl:w-1/2 lg:w-2/5 w-full mx-auto xl:px-2 ">
                        {locationCards.map((elem, index) => {
                            const { title, decs, img, mail, number } = elem;
                            return (
                                <div key={index} className=" py-4 xl:px-2 lg:px-5 px-2 xl:space-y-8 space-y-0  ">
                                    <div className='xl:flex justify-center items-center gap-5 lg:block flex '>
                                        <div className="xl:w-2/5 lg:w-11/12 sm:w-1/2 w-11/12 lg:block sm:flex justify-center hidden">
                                            <Image src={img} alt={title} width={200} height={200} className="grayscale hover:grayscale-0" />
                                        </div>
                                        <div className="text-left xl:w-3/5 lg:w-11/12 sm:w-1/2 w-11/12  space-y-2">
                                            <p className="lg:text-md text-base font-bold text-white/95 uppercase pl-5">{title}</p>
                                            <div className="text-white/60 flex gap-3 w-full items-start">
                                                <span><IoLocationSharp size={17} className="text-white/90 mt-0.5" /></span>
                                                <span className="text-white/90 text-base">{decs}</span>
                                            </div>
                                            <div className="text-white/90 flex gap-3 w-full items-center">
                                                <span><FaEnvelopeOpenText size={17} className="text-white/90" /></span>
                                                <span className="text-white/90 text-base"><Link passHref={true} href="mailto:contact@vigorousit.com">{mail}</Link></span>
                                            </div>
                                            <div className="text-white/90 flex gap-1 w-full items-center">
                                                <FaPhoneAlt size={17} className="text-white/90" />&nbsp;
                                                <span className="text-white/90 text-base"><Link passHref={true} href="tel:+918209514612">{number}</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                    <div className=" lg:space-x-10 space-x-0 lg:space-y-0 space-y-6 xl:w-1/2 lg:w-3/5 w-full xl:px-2 lg:block hidden ">
                        <PopupForm textColor="text-white" beforeSelectOptionTextColor={"text-gray-400"} afterSelectOptionTextColor={"text-gray-300"} />
                    </div>

                    <div className="lg:hidden block w-11/12 mx-auto">
                        <ContactForm />
                    </div>

                </div>
            </div >
        </section>
    );
};
export default ContactFormFooter;