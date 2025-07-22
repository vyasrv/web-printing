"use client"
import Head from "next/head";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import Image from "next/image";
import About from "../../components/About";
import ScrollFeatures from "../../components/ScrollFeatures";
import pageData from "./data.json"
import GridSection from "../../components/GridSection";
import WhyNeed from "../../components/WhyNeed";
import Benefits from "../../components/Benefits";
import FaqSection from "../../components/FaqSection ";
import WhyChooseSection from "../../components/WhyChooseSection";
import { motion } from "framer-motion"

const onlineAdmissionSystem = () => {

    const { features, usedFor, needFor, benefits, faqDataTwo, faqDataOne, Choose } = pageData;

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="language" content="en" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                <title> Online Admission System for Schools | VigoCamp ERP  </title>
                <meta name="description" content="Streamline student enrollment with VigoCamp’s online admission system. Manage inquiries, applications, document uploads, and approvals digitally with ease." />
                <link rel="canonical" href="https://" />
                <meta name="robots" content="noindex" />
                <meta property="og:url" content="https://" />
                <meta property="og:title" content="Online Admission System for Schools | VigoCamp ERP" />
                <meta property="og:site_name" content="Vigorous IT" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Streamline student enrollment with VigoCamp’s online admission system. Manage inquiries, applications, document uploads, and approvals digitally with ease." />
                <meta property="og:image" content="https:/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="vigorousit.com" />
                <meta name="twitter:site" content="“@vigorousit" />
                <meta property="twitter:url" content="https://" />
                <meta name="twitter:title" content="Online Admission System for Schools | VigoCamp ERP" />
                <meta name="twitter:description" content="Streamline student enrollment with VigoCamp’s online admission system. Manage inquiries, applications, document uploads, and approvals digitally with ease." />
                <meta name="twitter:image" content="https:/" />
            </Head>

            <section>


                <div className="max-width w-full bg-primary">
                    <Header />
                    <div className=" lg:flex justify-between items-center space-x-5  w-11/12  mx-auto 2xl:pt-[8rem] 2xl:pb-[8rem] pt-[10rem] pb-[3rem] md:space-y-0 space-y-10 max-w-7xl">

                        <div className="lg:w-1/2 w-full">
                            <HeroSection
                                title="Online Admission System For Schools – No More Long Queues"
                                titleOne=""
                                para="Admission operations are too time-consuming, while the use of a high amount of paper makes them also costly, which makes them a daily headache for schools, but not anymore. Our online admission system is specifically designed to manage the flood of inquiries, paperwork, misplaced documents, and follow-ups that collectively turn the admission process into a chaotic experience."
                                para1="In the traditional method, there are also some manual errors in the whole play in which missing deadlines, manual data tracking, and incorrect entries are at the top of the list, but this digital admission is beyond this. It takes care of all of it while saving time and making it easy to handle operations for administrations."
                                callToActionLine="Simplify Your School’s Online Admission System With Our Designed System"
                                buttonCount={1}
                                buttonNames={["Request Demo"]}
                            />
                        </div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }} className=" lg:w-1/2 w-full lg:flex lg:justify-center  ">
                            <Image src={'/images/online-admission-system/online-admission-system-hero-img.webp'} alt='' width={500} height={200} />
                        </motion.div>
                    </div>
                </div>

                <About
                    title="What Is An Online Admission System?"
                    paraOne="An online school admission system is a proven software designed to simplify all admission-related operations. Now, there is no hustle to stay in queues or spend plenty of money on paperwork because all is manageable through this digital admission portal. "
                    paraTwo="From publishing application forms online to verifying documents and confirming admissions are all easy to handle through this system. All will be handled in a centralized way through the use of automated tools. By streamlining application processing and analyzing admission data in real time, this system helps the administration manage workload in an effective manner. "
                    paraThree=""
                    paraFour="Additionally, it offers"
                    btnName="Request Demo"
                    img="/images/online-admission-system/online-admission-system-about-us-img.webp" type={1}
                    bulletPoints={[
                        "Faster application processing to handle operations effortlessly",
                        "Reduced paperwork and manual errors that are cost-effective",
                        "24/7 access for students and admin staff for ease ",
                        "Centralized data for easier decision-making for all stakeholders"
                    ]} />

                <ScrollFeatures heading="Features Of E-Learning Management System" features={features} />

                <div className=" mx-auto  w-11/12 max-w-7xl font-nunito">
                    <GridSection
                        values={usedFor}
                        title="What Are Online Admission Systems Used For?"
                        para={`With the development of a modern e-admission management system, we make a full-fledged digital system to innovate the whole admission process. We keep things above than just collecting applications and empower the modern student enrollment journey`}
                        para1="With this, let’s talk about some key-uses of this system in the modern educational system in 2025. "
                    />
                </div>

                <div className='bg-primary my-10 relative'>
                    <div className=" mx-auto  w-11/12 max-w-7xl font-nunito ">
                        <WhyNeed
                            values={needFor}
                            title="Why Does Your Institution Need An Online Admission System?"
                            para="I think I explained well, and if you are still thinking of going with traditional admission systems, it’s an annoying choice, but before that, let’s know some more reasons that make it a must-have for your school."
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

                <WhyChooseSection title={"Why Choose Our Online Admission System?"}
                    iconUrl={true}
                    Choose={Choose} />

                <FaqSection faqDataOne={faqDataOne} faqDataTwo={faqDataTwo} />


            </section>

        </>
    )
}
export default onlineAdmissionSystem;