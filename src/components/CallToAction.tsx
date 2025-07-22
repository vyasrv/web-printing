import React from "react";
import Popup from "./Popup";
import Image from "next/image";

const CallToAction = ({ 
  title, 
  desc, 
  bgImage, 
  btnName, 
  img 
}: { 
  title: string; 
  desc: string; 
  bgImage?: string; 
  btnName: string; 
  img?: string; 
}) => {
  const sectionStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }
    : {};

  return (
    <section className="max-width w-full bg-cover bg-no-repeat" style={sectionStyle}>
      <div className="bg-black/90">
          <div className="xl:w-[80%] mx-auto flex xl:justify-end justify-center">
            {img && (
              <div className="xl:block hidden w-1/3 mx-auto">
                <Image src={img} alt="" width={500} height={200} />
              </div>
            )}
            <div className="xl:w-2/3 py-10 px-5 xl:text-left text-center">
              <p className="md:text-3xl text-2xl font-semibold text-white font-inter pt-2">{title}</p>
              <p className="text-lg font-normal text-white pt-4 font-nunito leading-7">{desc}</p>
              <div className="py-10 xl:block flex justify-center xl:w-full sm:w-[83%] w-3/5">
                <Popup
                  url={undefined}
                  name={btnName}
                  clipShapeBgColor="secondary"
                  bgColorOne="bg-gray-300"
                  bgColor="bg-secondary"
                  iconColor="text-black"
                />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default CallToAction;
