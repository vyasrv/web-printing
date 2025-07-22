"use client"

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import {motion} from "framer-motion"

// const features = [
//     {
//         id: 1,
//         title: 'Smart Attendance Tracking (Real-Time & Subject-Wise)',
//         description: 'The primary and most important feature of this system is managing attendance in a smart way to reduce paperwork and the management of bulky registers. By using smart approaches like biometric fingerprint scanners, RFID cards, QR code scanning, or facial recognition, this system streamlines attendance operations. Management for subject-wise attendance is also one of the prominent features of this system. To reduce manual errors like missed entries and proxy attendance, this system uses advanced approaches.',
//         image: '/images/exam-management-info.webp ',
//     },
//     {
//         id: 2,
//         title: 'In-Depth Attendance Analytics & Reports',
//         description: 'Generation of attendance reports is also now a process of just a few clicks for schools, all thanks to this system. These reports are visually understandable, which makes them comparative. All data ranging from daily to yearly is accessible with the system, while accessing student-wise reports is also an average task, now. Further, percentage-based auto-calculations of absences for eligibility to stay in school are also a smart addition to this system. All these reports are accessible in the form of bar graphs, heat maps and downloadable Excel/PDF files, which make this system even more efficient.',
//         image: '/images/exam-management-info.webp',
//     },
//     {
//         id: 3,
//         title: 'Attendance Management for Faculty & Staff',
//         description: 'This system is precisely designed for adjusting the attendance operations, whether it is about students or staff. It’s a specific module that is perfectly designed for non-teaching and faculty staff let us track and manage their attendance. This module offers everything about clock-in/clock-out times, while data about leaves and half leaves of staff is also accessible with this tool. The integration of this module into all systems helps administration in payroll operations like salary calculations.  Through automated calculation of all salary on based on staff attendance, this module really helps large institutes.',
//         image: '/images/exam-management-info.webp',
//     },
//     {
//         id: 4,
//         title: ' Anytime-Anywhere Access via Web & Mobile',
//         description: 'The real-time accessibility of this system is one of the prominent features that keep everyone aware of real-time happenings. Rather than admins and teachers, parents also have the authority to access the database and check the real-time attendance status of their children. For teachers, this module is a game changer, and they can track attendance even on the go due to its seamless accessibility. When we count students, they can just open their attendance sheets and check their eligibility to apply for a leave. In the form of this accessible module, we really bring transparent access to the attendance database to each stakeholder.',
//         image: '/images/exam-management-info.webp',
//     },
//     {
//         id: 5,
//         title: 'Real-Time Notifications to Parents & Admins',
//         description: 'To maintain enhanced transparency, this module has the next-gen attendance database sharing feature. Specifically, parents who really care too much about their children will now get instant notifications about whether their children are attending class or missing it. This is really a cool approach to this system to encourage students to register the highest possible accountability while keeping parents aware of every small happening. In additional functionalities of this module, notifications sending for low attendance warnings, departmental absence and late arrival summaries are all available. ',
//         image: '/images/exam-management-info.webp',
//     },
//     {
//         id: 6,
//         title: 'Hardware Integration Across Devices',
//         description: 'We make our system highly compatible with a wide range of attendance-tracking tools. This helps in upgrading the system by integrating modern technologies like RFID-based smart ID cards, biometric devices and AI-based facial recognition cameras. In further integrations, GPS-based attendance for field activities and the use of personal phones or school tablets to mark attendance remotely or within the classroom via secure login are also possible with this system. No need for costly adjustments; you can start the process by just integrating used items like cameras and existing biometric/RFID devices.',
//         image: '/images/exam-management-info.webp',
//     },
// ];

const ScrollFeatures = ({features ,heading}) => {
    const [currentFeature, setCurrentFeature] = useState(features[0]);
    const [scrollProgress, setScrollProgress] = useState(0);
    const featureRefs:any = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = featureRefs.current.findIndex((ref) => ref === entry.target);
                        if (index !== -1) {
                            setCurrentFeature(features[index]);
                            setScrollProgress(((index + 1) / features.length) * 100);
                        }
                    }
                });
            },
            { threshold: 0.6 }
        );

        featureRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            featureRefs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, []);

    return (
        <div className='bg-primary relative my-10'>
            <div className="lg:flex block lg:w-5/6 w-11/12 mx-auto min-h-[100dvh]">
                {/* Sidebar */}
                <div className="lg:w-1/2 w-full lg:p-10 sticky top-0 h-screen flex flex-col justify-center ">
                    <motion.h2 initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className="text-white md:text-3xl text-2xl font-bold mb-4">{heading}</motion.h2>
                    <p className="text-gray-300 mb-8 text-sm">
                        {/* Discover the power of our tools, tailored to help you optimize performance and productivity. */}
                    </p>
                    <div className="relative pl-6">
                        {/* Vertical progress bar */}
                        <div
                            className="absolute left-0 w-1 bg-secondary transition-all duration-300 ease-in-out"
                            style={{ height: `${scrollProgress}%`, top: 0 }}
                        />
                        <div className="absolute -left-10 -top-[80%] lg:block hidden circle-motion">
                            <Image src="/images/tri1.png" alt="" width={50} height={200} className="orbit " />
                        </div>

                        <div className="absolute -right-20 -top-[95%] lg:block hidden">
                            <Image src="/images/sq.png" alt="" width={20} height={200} className="orbit " />
                        </div>

                        <div className="absolute -right-40 -bottom-40 lg:block hidden half-circle-motion">
                            <Image src="/images/tri1.png" alt="" width={50} height={200} className="orbit " />
                        </div>

                        <div  className="absolute left-10 -bottom-[60%] lg:block hidden ">
                            <Image src="/images/tri4.png" alt="" width={20} height={200} className="orbit" />
                        </div>
                        <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}}>
                            <div className="text-4xl font-bold text-white">
                                {currentFeature.id < 10 ? `0${currentFeature.id}` : currentFeature.id}.
                            </div>
                            <div  className="text-xl font-semibold mt-2 text-white">{currentFeature.title}</div>
                            <p className="text-sm text-white mt-3 font-nunito">{currentFeature.description}</p>
                        </motion.div>
                    </div>
                </div>


                {/* Features on right */}
                <div className="w-1/2 ">
                    {features.map((feature, index) => (
                        <section
                            key={feature.id}
                            ref={(el) => { featureRefs.current[index] = el }}
                            className="min-h-screen flex items-center justify-center md:p-8"
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="rounded-lg shadow-xl w-4/5 max-w-md lg:block hidden"
                            />
                        </section>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ScrollFeatures;

