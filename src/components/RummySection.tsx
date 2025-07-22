import Image from 'next/image';
 
const RummySection = ({ data, height, width, imageUrl,heading }) => {
  if (!data) return null;
  const {  features, buttonText } = data;
return(
   <div className="bg-primary px-4 md:px-8 lg:px-16 sm:py-16 py-4 my-8 overflow-hidden">
     <div className="flex flex-col md:flex-row items-center justify-center sm:gap-16 gap-3">
 
      <div className="max-w-xl text-left space-y-4">
         <h2 className="text-4xl md:text-2xl font-bold font-inter">
           <span className="text-white">{heading}</span>
         </h2>
         <ul className="text-white space-y-2 md:text-sm font-nunito">
           {features.map((feature, index) => (
          <li key={index} className="text-white">
          <span className='text-secondary'> &#x2605;</span> {feature}
          </li>
        ))}
         </ul>
         <button className="bg-secondary font-semibold text-white font-nunito rounded-xl px-4 py-2.5 text-xs sm:text-base shadow-md hover:bg-secondary/90 active:scale-95 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary/50">
         {buttonText}</button>
 
         </div>
        <div className="relative px-2 py-2 sm:px-12 sm:py-4 md:px-20">
        <div className="relative group ">
         <div className="hidden sm:block absolute top-0 sm:pt-16 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-28 md:h-28 lg:w-40 lg:h-40
          bg-secondary z-0 -ml-12 -mt-12 sm:-ml-16 sm:-mt-16 md:-ml-14 md:-mt-14 lg:-ml-20 lg:-mt-20
          opacity-90 transition-all duration-500 ease-out group-hover:ml-0 group-hover:mt-0">
         </div>
 
          <div className="relative z-10 w-fit">
            <Image
                src={imageUrl}
                alt={imageUrl}
                width={width}
                height={height}
                className="h-auto border-2 transition-all duration-300 ease-in-out delay-200
                  grayscale group-hover:grayscale-0 group-hover:border-secondary"
              />
          </div>
          <div className="hidden sm:block absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-28 md:h-28 lg:w-40 lg:h-40
          bg-secondary z-0 -mr-12 -mb-12 sm:-mr-16 sm:-mb-16 md:-mr-14 md:-mb-14 lg:-mr-24 lg:-mb-20 opacity-90
          transition-all duration-500 ease-out group-hover:mr-0 group-hover:mb-0">
          </div>
       </div>
      </div>
          </div>
        </div>
)}
export default RummySection;