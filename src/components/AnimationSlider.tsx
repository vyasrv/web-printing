import React, { useState, useEffect } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import PropTypes from "prop-types";

const AnimationSlider = ({ 
    items, 
    animationDuration = 10 // Default value set here
}) => {
    const [windowWidth, setWindowWidth] = useState(1024); // Default width for SSR
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => setWindowWidth(window.innerWidth);
            handleResize(); // Initialize with the current window width
            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    // Calculate slides to show based on window width
    const slidesToShow =
        windowWidth >= 1024
            ? 5
            : windowWidth >= 768
            ? 3
            : windowWidth >= 340
            ? 2
            : 1;

    // Duplicate items to enable an infinite scrolling effect
    const duplicatedItems = [...items, ...items];

    // Event handlers
    const togglePause = (state) => setIsPaused(state);

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex slide-content"
                style={{
                    animationDuration: `${animationDuration}s`,
                    animationPlayState: isPaused ? "paused" : "running",
                }}
                onMouseEnter={() => togglePause(true)}
                onMouseLeave={() => togglePause(false)}
                onClick={() => togglePause(true)}
            >
                {duplicatedItems.map((elem, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center px-2"
                        style={{
                            flex: `0 0 ${100 / slidesToShow}%`,
                            padding: "0 10px",
                        }}
                    >
                        <div className="flex justify-center items-center w-full border-r border-white">
                            <Image
                                src={elem.img}
                                alt={elem.alt || elem.title || "Image"}
                                title={elem.title || ""}
                                width={250}
                                height={110}
                                loader={uploadcareLoader}
                                unoptimized
                                className="w-3/5"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

AnimationSlider.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(["image"]),
            img: PropTypes.string.isRequired,
            alt: PropTypes.string,
            title: PropTypes.string,
        })
    ).isRequired,
    animationDuration: PropTypes.number,
};

export default AnimationSlider;
