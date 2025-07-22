import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import {motion} from "framer-motion"

const Panels = ({
  title,
  decs,
  PanelOne,
  PanelTwo,
  PanelThree = undefined,
  AdminPanel,
  AdminTech,
  PanelOneTech,
  PanelTwoTech,
  PanelThreeTech = undefined,
  AdminImage,
  PanelOneImage,
  PanelTwoImage,
  PanelThreeImage = undefined,
  PanelIconsOne,
  PanelIconsTwo,
  PanelIconsThree,
  PanelIconsFour = undefined,
  types,
}) => {
  const [admin, setAdmin] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const refs:any = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (isMounted && mediaQuery.matches && hasInteracted) {
      refs[admin]?.current?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [admin, isMounted, hasInteracted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleTabClick = (tabIndex) => {
    setAdmin(tabIndex);
    setHasInteracted(true);
  };

  const renderPanelContent = (panelData, panelIcons) => (
    <div className="w-full grid grid-cols-1  lg:grid-cols-2 py-6 justify-items-start">
      {panelData.map(({ title, desc, icon, img, width, height }, index) => (
        <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} key={index} className="md:block flex justify-center items-center group p-3  gradient-border-bottom">
          <div className="sm:flex  items-center justify-center gap-3 md:bg-transparent bg-white md:space-y-0 space-y-4 md:py-0 py-5 rounded-2xl ">
            <div className="xl:w-1/5  sm:mx-0 mx-auto">
              {icon && (
                <div className="flex-shrink-0 2xl:w-16 w-12 2xl:h-16 h-12 m-auto flex bg-primary group-hover:bg-secondary text-white rounded-full items-center justify-center">
                  {panelIcons[icon]}
                </div>
              )}
              {img && (
                <div className="sm:mx-0 mx-auto flex-shrink-0 w-[90px]  h-[90px]  m-auto flex bg-primary rounded-3xl items-center justify-center">
                  <Image
                    src={img}
                    alt={title}
                    title={title}
                    width={width}
                    height={height}
                    className={types === "white-image" ? "white-image" : ""}
                  />
                </div>
              )}
            </div>
            <div className="xl:w-5/6 w-full space-y-1">
              <h3 className="text-base font-semibold text-ternary sm:text-left text-center">
                {title}
              </h3>
              <p className="text-base tracking-wide leading-6 text-gray-600 font-nunito sm:text-left text-center">
                {desc}
              </p>
            </div>

          </div>
          {/* <p className="w-full h-[1px] border-transparent bg-gradient-to-r from-[#ffffff] via-black/50 to-[#ffffff] bg-clip-border"></p> */}
        </motion.div>
      ))}
    </div>
  );

  // Remove undefined panels
  const filteredPanels = [
    {
      tech: PanelOneTech,
      image: PanelOneImage,
      alt: PanelOneTech,
      data: PanelOne,
      icons: PanelIconsOne,
    },
    {
      tech: PanelTwoTech,
      image: PanelTwoImage,
      alt: PanelTwoTech,
      data: PanelTwo,
      icons: PanelIconsTwo,
    },
    {
      tech: AdminTech,
      image: AdminImage,
      alt: AdminTech,
      data: AdminPanel,
      icons: PanelIconsThree,
    },
    {
      tech: PanelThreeTech,
      image: PanelThreeImage,
      alt: PanelThreeTech,
      data: PanelThree,
      icons: PanelIconsFour,
    },
  ].filter(panel => panel.tech);

  return (
    <section className="md:py-10 py-5" id="panel">
      <div className="mx-auto w-full font-nunito">
        <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className="flex flex-col items-center justify-center space-y-2 text-center">
          <h2 className="sm:text-3xl text-2xl font-semibold text-primary xl:leading-[2.5rem] font-inter">
            {title}
          </h2>
          <Image src={'/images/section-heading.webp'} alt={''} width={200} height={60} className=''/>
          <p className="lg:text-md text-base text-ternary">{decs}</p>
        </motion.div>
        <div className="pt-10">
          <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className={`md:flex md:justify-between md:bg-transparent bg-White items-center border md:border-gray-700 md:rounded-full md:mx-auto overflow-x-auto slidenone ${filteredPanels.length > 3 ? "md:w-[50rem]" : "md:w-[36rem]"
            } w-[99%] mx-auto`}>

            {filteredPanels.map((panel, index) => (
              <React.Fragment key={index}>
                <p
                  ref={refs[index]}
                  onClick={() => handleTabClick(index)}
                  className={`whitespace-nowrap px-6 py-2 lg:text-lg text-md font-bold capitalize cursor-pointer md:text-left md:border-none border-b text-center ${admin === index
                    ? "bg-primary text-white "
                    : "bg-transparent text-ternary"
                    }`}
                >
                  {panel.tech}
                </p>
              </React.Fragment>
            ))}
          </motion.div>
          <div className="2xl:px-10">
            <div
              className="xl:flex block justify-between items-center w-full pt-10 "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className="group 2xl:w-[30%] xl:w-1/3 md:w-[40%] w-[80%] mx-auto flex justify-center items-center relative mt-10 hover:-mt-10 transition-all duration-300">
                <Image
                  src={filteredPanels[admin].image}
                  alt={filteredPanels[admin].alt}
                  title={filteredPanels[admin].alt}
                  width={800}
                  height={200}
                  loader={uploadcareLoader}
                  unoptimized={true}
                  priority={false}
                  loading="lazy"
                  className="object-contain"
                />
                {/* White bar at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b  from-transparent via-white/85 to-white opacity-100 group-hover:opacity-0  transition-opacity duration-500 pointer-events-none ease-in-out" />
              </motion.div>


              <div className="xl:w-[70%] w-[99%] flex items-center justify-center ">
                {renderPanelContent(filteredPanels[admin].data, filteredPanels[admin].icons)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panels;
