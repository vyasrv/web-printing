import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";

const testimonial = [
  {
    desc: "Vigo just proved itself a game-changer for Our School operations. Whether it's about creating admissions forms or assembling exam reports, everything is just so easy for me.",
    fullName: "Principal, Green Valley International School"
  },
  {
    desc: "Vigo saves me from burning my daily time on a lot of paperwork. Now, my school operations are effortless, and I have enough time to focus on new happenings.",
    fullName: "School Administrator, Sunrise Public School"
  },
  {
    desc: "Ohh, it’s a very amazing experience of freedom and joy for me because I am free from bulky registers. Vigo brings all my class data to my screen, which is all sorted and organized.",
    fullName: "Class Teacher, Wisdom Scholars Academy"
  },
  {
    desc: "Vigo really brings relief for us because now, we have access to detailed performance reports of our children and their behaviors that help us cover our and our children’s vulnerabilities for better growth.",
    fullName: "Parent Of Grade 6 Student"
  },
  {
    desc: "We accept Vigo as a compulsion, but now, it is an integral part of our system. It helps us in managing high-quality virtual classes in which we can also create and share digital report cards.",
    fullName: "Parent & PTA Member"
  },
];

const ClientTestimonial = () => {
  const slider3: any = useRef(null);

  const next = () => {
    slider3.current.slickNext();
  };
  const previous = () => {
    slider3.current.slickPrev();
  };
  const settingstwo = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
  };
  return (
    <section className='w-full '>
      <div className="xl:w-2/3 lg:w-3/4  w-11/12 mx-auto md:py-16 py-10 text-black">
        <p className="text-base font-normal text-black text-center pb-5">Trusted by Clients</p>
        <p className=" sm:text-3xl text-2xl  font-normal text-primary text-center pb-5">What Our Users Say About VigoCamp ERP?</p>
        <div className='flex justify-center items-center'>
      <Image src={'/images/section-heading.webp'} alt={''} width={200} height={60} className=''/>
      </div>
        <div className="flex md:justify-between justify-center md:gap-0 gap-10 items-center sm:w-4/5  mx-auto  md:flex-nowrap flex-wrap ">
          <div className="flex flex-col justify-center items-center py-5">
            <Image src="/images/testimonial/review-01.png" alt="" title="" width={130} height={200} />
            <p className="text-4xl pt-2">4.8</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/testimonial/review-02.png" alt="" title="" width={100} height={200} />
            <p className="text-4xl pt-2">5.0</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/testimonial/review-03.png" alt="" title="" width={100} height={200} />
            <p className="text-4xl pt-2">4.8</p>
          </div>
          {/* <div className="flex flex-col justify-center items-center">
            <Image src="/images/testimonial/review-04.png" alt="" title="" width={100} height={200} />
            <p className="text-4xl pt-2">8</p>
          </div> */}
        </div>
        <p className="border-b border-[#22222442] w-5/6 h-[2px] mx-auto"></p>
        <div className=" flex items-center justify-center space-x-5 pt-10 font-nunito">
          <button title="previous" onClick={previous} className=" md:block hidden px-1 py-1 text-black border rounded-full hover:text-white transition-all duration-200 bg-[#F0F2FA] hover:bg-secondary">
            <BiChevronLeft className='text-[1.9rem]' />
          </button>

          <Slider ref={slider3} {...settingstwo} className="flex items-center w-full overflow-hidden">
            {testimonial.map((elem,index) => {
              const { desc, fullName } = elem;
              return (
                <div key={index} className=' text-black text-center  space-y-3'>
                  <p className=" md:w-11/12 w-full mx-auto font-light text-base  leading-7  md:px-1 px-0">{desc}</p>
                  <p className="text-base font-bold mt-3">{fullName}</p>
                </div>
              );
            })}
          </Slider>
          <button title="next" onClick={next} className="px-1 py-1 text-black border rounded-full hover:text-white transition-all duration-200 bg-[#F0F2FA] hover:bg-secondary md:block hidden">
            <BiChevronRight className='text-[1.9rem]' />
          </button>
        </div>
      </div>
    </section>
  );
};
export default ClientTestimonial;