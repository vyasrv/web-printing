import Image from "next/image";
import React from "react";
import {motion}  from "framer-motion"

const WhyChooseSection = ({title,Choose, iconUrl }) => {
  return (
    <motion.section  initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className="py-16 px-4 max-w-7xl mx-auto font-nunito space-y-10">
      <h2  className="text-3xl font-bold text-primary">
        {title}
      </h2>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {Choose?.map((feature, index) => {
          const isHighlight = feature.highlight;
          const isLast = feature.span === true;

          return (
            <React.Fragment key={index}>
            <div
              
              className={`bg-white border-2  rounded-xl p-6 shadow-sm text-gray-800  rounded-t-3xl rounded-b-3xl rounded-tr-none rounded-bl-none hover:rounded-t-3xl hover:rounded-b-3xl hover:rounded-br-none hover:rounded-tl-none  transition-all duration-500 ease-in-out hover:border-primary  ${isHighlight ? "lg:row-span-2" : ""
                } ${isLast
                  ? "lg:col-span-2 lg:block hidden" // visible only on lg
                  : ""
                }`}
            >
              {iconUrl ? <Image height={30} width={40} alt={feature.title} src={feature.icon} className="mb-4"/> : <div className="text-3xl mb-4">{feature.icon}</div>}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-base">{feature.description}</p>
            </div>
            {isLast && <div className="bg-white border-2 rounded-xl p-6 shadow-sm text-gray-800 lg:hidden  rounded-t-3xl rounded-b-3xl rounded-tr-none rounded-bl-none hover:rounded-t-3xl hover:rounded-b-3xl  hover:rounded-br-none hover:rounded-tl-none hover:border-primary  transition-all duration-500 ease-in-out ">
          <div className="text-3xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm">
            {feature.description}

          </p>
        </div>}
            
            </React.Fragment>
          );
        })}

        {/* Mobile-only version of the last card */}

        {/* <div className="bg-white border-2 rounded-xl p-6 shadow-sm text-gray-800 lg:hidden  rounded-t-3xl rounded-b-3xl rounded-tr-none rounded-bl-none hover:rounded-t-3xl hover:rounded-b-3xl  hover:rounded-br-none hover:rounded-tl-none hover:border-primary  transition-all duration-500 ease-in-out ">
          <div className="text-3xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-2">{featureMobileTitle}</h3>
          <p className="text-sm">
            {featureMobiledesc}

          </p>
        </div> */}
      </div>
    </motion.section>
  );
};

export default WhyChooseSection;
