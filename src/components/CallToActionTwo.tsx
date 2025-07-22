import Image from 'next/image'
 
const CallToActionTwo = ({ Heading1, Heading2,content, Button1 ,Button2 }) => {
    const logos = [
  { src: "/images/a6.png", alt: "Intercom", style: "top-[10%] left-[5%] rotate-[-12deg] bounce-slow" },
  { src: "/images/tri1.png", alt: "Notion", style: "top-[25%] left-[30%] rotate-[10deg] orbit" },
  { src: "/images/tri1.png", alt: "ActiveCampaign", style: "top-[65%] left-[10%] rotate-[8deg] half-circle-motion" },
  { src: "/images/tri1.png", alt: "Galileo", style: "top-[75%] left-[40%] rotate-[-8deg] bounce-slow" },
  { src: "/images/tri1.png", alt: "Keap", style: "top-[15%] right-[30%] rotate-[6deg] orbit grayscale" },
  { src: "/images/tri1.png", alt: "Marker", style: "top-[35%] right-[5%] rotate-[-10deg] orbit" },
  { src: "/images/laptop-header.png", alt: "HubSpot", style: "top-[80%] right-[35%] rotate-[12deg] orbit grayscale" },
  { src: "/images/mobile1.png", alt: "FreshBooks", style: "top-[60%] right-[10%] rotate-[-6deg] half-circle-motion" },
];
    return(
<div className="relative w-full h-[600px] bg-white flex items-center justify-center px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full block">
        {logos.map((logo, index) => (
          <Image
          width={20} height={200}
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={`w-10 sm:w-12 md:w-14 lg:w-16 absolute ${logo.style} transition-transform duration-300 ease-in-out`}
          />
        ))}
      </div>
 
      <div className="z-10 text-center max-w-2xl">
        <div className="mb-4">
          <span className="inline-block border-2 border-green-300 bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
   
{Heading1}          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
         {Heading2}
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-4">
   {content}
        </p>
 
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-black text-white hover:bg-gray-900 transition">
         {Button1}
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 transition">
            {Button2}
          </button>
        </div>
      </div>
    </div>
    )
}
 
export default  CallToActionTwo;