"use client"

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// export default function FaqSection({ faqDataOne, faqDataTwo }) {
//   const [currentCountfaqDataOne, setCurrentCountfaqDataOne] = useState("");
//   const [currentCountfaqDataTwo, setCurrentCountfaqDataTwo] = useState("");
//   const dataOne = faqDataOne;
//   const dataTwo = faqDataTwo;

//   if (!dataOne || !dataTwo) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <section className="bg-[url('/images/home/faq.webp')] bg-cover mt-5">
//       <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl lg:px-0 md:px-6 px-0 py-10">
//         <div className="space-y-4 w-full">
//           <h3 className="font-bold sm:text-3xl text-2xl  text-white text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
//             Frequently Asked Questions
//           </h3>
//           <div className='flex justify-center items-center'>
//             <Image src={'/images/section-heading.webp'} alt={''} width={200} height={60} className='' />
//           </div>
//           <div className="lg:flex block gap-20 font-nunito">
//             <div className=" lg:w-1/2 w-full">
//               {faqDataOne.map((elem, index) => {
//                 const { title, desc } = elem;
//                 return (
//                   <div key={index} className="bg-white cursor-pointer w-full my-3">
//                     <div
//                       className={currentCountfaqDataOne === index
//                         ? "flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6  md:text-lg bg-white "
//                         : "flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6  md:text-lg"}
//                       onClick={() => setCurrentCountfaqDataOne(currentCountfaqDataOne === index ? false : index)}
//                     >
//                       <p className="w-full text-base font-semibold">{title}</p>
//                       <svg xmlns="http://www.w3.org/2000/svg" className={currentCountfaqDataOne === index ? "icon icon-tabler icon-tabler-chevron-down rotate-180 transition-all duration-200" : "icon icon-tabler icon-tabler-chevron-down rotate-0 transition-all duration-200"} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                         <polyline points="6 9 12 15 18 9" />
//                       </svg>
//                     </div>
//                     <div
//                       className={`px-6 text-black text-sm md:text-base transition-all duration-300 overflow-hidden ${currentCountfaqDataOne === index ? "max-h-96 py-4" : "max-h-0"
//                         }`}
//                     >
//                       <p className="pb-5">{desc}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="lg:w-1/2 w-full">
//               {faqDataTwo.map((elem, index) => {
//                 const { title, desc } = elem;
//                 return (
//                   <div key={index} className="bg-white cursor-pointer w-full my-3">
//                     <div
//                       className={currentCountfaqDataTwo === index
//                         ? "flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6  md:text-lg bg-white "
//                         : "flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6  md:text-lg"}
//                       onClick={() => setCurrentCountfaqDataTwo(currentCountfaqDataTwo === index ? false : index)}
//                     >
//                       <p className="w-full text-base font-semibold">{title}</p>
//                       <svg xmlns="http://www.w3.org/2000/svg" className={currentCountfaqDataTwo === index ? "icon icon-tabler icon-tabler-chevron-down rotate-180 transition-all duration-200" : "icon icon-tabler icon-tabler-chevron-down rotate-0 transition-all duration-200"} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                         <polyline points="6 9 12 15 18 9" />
//                       </svg>
//                     </div>
//                     <div
//                       className={`px-6 text-black text-sm md:text-base transition-all duration-500 overflow-hidden ${currentCountfaqDataTwo === index ? "max-h-96 py-4" : "max-h-0"
//                         }`}
//                     >
//                       <p className="pb-5">{desc}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//         </div>
//       </div>

//     </section>

//   );
// }

// {-----Above code is Commented because of Faqs has only one ,faqDataTwo is missing when we get faqDataTwo  use above code------}

import Image from "next/image";
import { useState } from "react";
import { motion} from "framer-motion"

export default function FaqSection({ faqDataOne, faqDataTwo }) {
  const [currentCountfaqDataOne, setCurrentCountfaqDataOne] = useState("");
  const [currentCountfaqDataTwo, setCurrentCountfaqDataTwo] = useState("");

  const hasOne = faqDataOne?.length > 0;
  const hasTwo = faqDataTwo?.length > 0;

  if (!hasOne && !hasTwo) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-[url('/images/home/faq.webp')] bg-cover mt-5">
      <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl lg:px-0 md:px-6 px-0 py-10">
        <div className="space-y-4 w-full">
          <motion.h3 initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:0.5}}} className="font-bold sm:text-3xl text-2xl text-white text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
            Frequently Asked Questions
          </motion.h3>
          <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:0.5}}} className="flex justify-center items-center">
            <Image
              src={"/images/section-heading.webp"}
              alt="Section Heading"
              width={200}
              height={60}
            />
          </motion.div>

          <div
            className={`font-nunito flex flex-col  items-center ${
              hasOne && hasTwo
                ? "lg:flex-row lg:gap-10"
                : " justify-center"
            }`}
          >
            {hasOne && (
              <div
                className={`${
                  hasOne && hasTwo ? "lg:w-1/2 w-full" : "w-full lg:w-2/3"
                } max-w-2xl`}
              >
                {faqDataOne.map((elem, index) => (
                  <motion.div
                  initial={{y:80,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1,delay:index*0.1}}}
                    key={index}
                    className="bg-white cursor-pointer w-full my-3 rounded-lg"
                  >
                    <div
                      className={`flex items-start justify-center w-full px-4 py-3 text-base font-medium text-left md:items-center md:px-6 md:text-lg rounded-lg ${
                        currentCountfaqDataOne === index ? "bg-white" : ""
                      }`}
                      onClick={() =>
                        setCurrentCountfaqDataOne(
                          currentCountfaqDataOne === index ? false : index
                        )
                      }
                    >
                      <p className="w-full text-base font-semibold">
                        {elem.title}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`icon icon-tabler icon-tabler-chevron-down ${
                          currentCountfaqDataOne === index
                            ? "rotate-180"
                            : "rotate-0"
                        } transition-all duration-200`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    <div
                      className={`px-6 text-black text-sm md:text-base transition-all duration-300 overflow-hidden ${
                        currentCountfaqDataOne === index
                          ? "max-h-96 py-4"
                          : "max-h-0"
                      }`}
                    >
                      <p className="pb-5">{elem.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {hasTwo && (
              <div
                className={`${
                  hasOne && hasTwo ? "lg:w-1/2 w-full" : "w-full lg:w-2/3"
                } max-w-2xl`}
              >
                {faqDataTwo.map((elem, index) => (
                  <motion.div
                  initial={{y:80,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1,delay:index*0.1}}}
                    key={index}
                    className="bg-white cursor-pointer w-full my-3 rounded-lg"
                  >
                    <div
                      className={`flex items-start justify-center w-full px-3 py-3 text-base font-medium text-left md:items-center md:px-6 md:text-lg rounded-lg ${
                        currentCountfaqDataTwo === index ? "bg-white" : ""
                      }`}
                      onClick={() =>
                        setCurrentCountfaqDataTwo(
                          currentCountfaqDataTwo === index ? false : index
                        )
                      }
                    >
                      <p className="w-full text-base font-semibold">
                        {elem.title}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`icon icon-tabler icon-tabler-chevron-down ${
                          currentCountfaqDataTwo === index
                            ? "rotate-180"
                            : "rotate-0"
                        } transition-all duration-200`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    <div
                      className={`px-6 text-black text-sm md:text-base transition-all duration-300 overflow-hidden  ${
                        currentCountfaqDataTwo === index
                          ? "max-h-96 py-4"
                          : "max-h-0"
                      }`}
                    >
                      <p className="pb-5">{elem.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
