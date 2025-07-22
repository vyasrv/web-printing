
// import Image from 'next/image';

import Image from "next/image";

 
const CallToActionService = ({ imageUrl,heading,content , button}) => {
return(
    <div className='my-10'>
<div className="flex flex-col  lg:flex-row items-center justify-between bg-primary text-white px-6 md:px-12 overflow-hidden lg:py-0 py-10 font-nunito">
  <div className=" flex flex-col  sm:flex-row">
    <div className="w-full lg:pt-2 font-inter xl:pl-24 lg:pl-11 justify-center flex flex-col lg:w-1/2 space-y-6 lg:text-left text-center ">
      <h1 className="text-2xl md:text-xl font-bold ">
        {heading}
      </h1>
      <p className="text-md text-gray-300 ">
        {content}
      </p>
      <button className="bg-secondary md:w-1/2 w-full lg:mx-0 mx-auto  whitespace-nowrap text-xs sm:text-base shadow-md font-nunito hover:bg-secondary/90 active:scale-95 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary/50 font-semibold px-6 py-3 rounded-lg">
        {button}
      </button>
    </div>
 
    <div className="md:mt-0 hidden lg:flex justify-center relative overflow-visible md:w-1/2">
      <div className="w-full max-w-[700px] h-[200px] sm:h-[250px] md:h-[391px] transform rotate-6 md:rotate-[12deg] rounded-xl transition-all duration-300 ease-in-out">
        <Image
          src={imageUrl}
          alt="Outseta Dashboard Preview"
          className="w-full h-full object-contain mt-52 sm:mt-20 ml-44 md:mt-[35px] "
        />
      </div>
    </div>
  </div>
</div>
</div>)};
 
export default CallToActionService;