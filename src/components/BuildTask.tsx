import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimationSlider from "./AnimationSlider";


const clients = [
  {
    num: "1",
    img: "/images/home/build-task/aws.webp",
    title: "AWS"
  },
  {
    num: "2",
    img: "/images/home/build-task/top-developers.webp",
    title: "Top Developers"
  },

  {
    num: "3",
    img: "/images/home/build-task/google-cloud.webp",
    title: "Google Cloud"
  },
  {
    num: "4",
    img: "/images/home/build-task/goodfirms.webp",
    title: "Goodfirms"
  },
  {
    num: "5",
    img: "/images/home/build-task/design-rush.webp",
    title: "Design Rush"
  },
  {
    num: "6",
    img: "/images/home/build-task/clutch.webp",
    title: "Clutch"
  },

];
const TrustedClients = () => {

  return (
    <div className=" py-10 w-full space-y-8 bg-black text-center">
        <h2 className="text-secondary lg:text-4xl text-3xl md:w-3/5 w-11/12 mx-auto font-semibold font-inter">We Build Trust Through Offering Advanced And Innovative Websites
        </h2>
        <hr className='w-1/12 mx-auto border-t-2 border-white' />
        <p className=" xl:w-1/2  w-11/12 lg:text-md text-base text-white font-thin md:leading-[2rem] leading-5 font-nunito mx-auto">We always offer precise services to our customers. It is because we know every business has unique and personalized requirements. So, there is no need to panic and give us a try to get innovative and optimized websites for your businesses. </p>
      <div className="relative flex items-center justify-center py-4">
        <AnimationSlider items={clients} animationDuration={80} />
      </div>
    </div>
  );
};
export default TrustedClients;