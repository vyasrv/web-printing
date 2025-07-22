import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



const HomePageSlider = ({ SliderData }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const slider2: any = useRef(null);
    //   const next = () => {
    //     slider2.current.slickNext();
    //   };
    //   const previous = () => {
    //     slider2.current.slickPrev();
    //   };
    const settingstwo = {
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // const next = () => {
    //     slider.current.slickNext();
    // };

    // const previous = () => {
    //     slider.current.slickPrev();
    // };

    // const goToSlide = (slideIndex) => {
    //     setCurrentSlideIndex(slideIndex);
    //     slider.current.slickGoTo(slideIndex);
    // };
    return (
        <section className="">
            <div className="mx-auto w-full py-5" id="layout">
                <div className="flex justify-center items-center bg-lightBg">
                    <div className="relative flex items-center justify-center mx-4 w-full">
                        <Slider ref={slider2}  {...settingstwo} className="flex items-center w-full overflow-hidden">
                            {SliderData?.map((elem, index) => {
                                const { title, num, img, desc } = elem;
                                return (
                                    <div key={num} className='px-2'>
                                        <div className="space-y-2 relative">
                                            <Image
                                                title={title} alt={title} src={img} width={1920} height={463} unoptimized={true} priority={false} loading="lazy" />
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePageSlider;