"use client";

import React, { useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const media = [
  { src: "/reels/1.mp4", alt: "Cramm'd BBQ Peas" },
  { src: "/reels/2.mp4", alt: "Wow Chow Pad Thai" },
  { src: "/reels/3.mp4", alt: "Cramm'd Snack Bag" },
  { src: "/reels/4.mp4", alt: "Tiger Tiger Founder Video" },
  { src: "/reels/5.mp4", alt: "Wow Chow Red Curry" },
  { src: "/reels/6.mp4", alt: "Wow Chow Tom Yum" },
];

export default function ProductGallerySlider() {
  const [loaded, setLoaded] = useState(false);
  const timer = useRef(null);

  // Brand Colors
  const brandPurple = "#4e1a51";

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2.2,
      spacing: 8,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3.5, spacing: 10 },
      },
      "(min-width: 768px)": {
        slides: { perView: 4.5, spacing: 12 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 6, spacing: 15 },
      },
    },
    created: (s) => {
      setLoaded(true);
      timer.current = setInterval(() => {
        s.next();
      }, 3500);
    },
    destroyed: () => {
      if (timer.current) clearInterval(timer.current);
    },
  });

  return (
    <section className="py-10 md:py-20 bg-white">
      {/* Centered Heading */}
      <div className="max-w-6xl mx-auto mb-10 px-6">
        <h2 
          style={{ color: brandPurple }}
          className="eczar font-bold text-[32px] md:text-[52px] leading-tight text-center md:text-left"
        >
          What's Cooking?
        </h2>
        
        {/* Second text now Black and font-normal (less bold) */}
        <p 
          className="text-black text-[16px] md:text-[18px] font-normal mt-3 text-center md:text-left max-w-lg md:max-w-full mx-auto md:mx-0 subHeading"
        >
          Discover our social media and connect with us
        </p>
      </div>

      {/* FULL WIDTH SLIDER */}
      <div className="w-full overflow-hidden px-2">
        <div
          ref={sliderRef}
          className={`keen-slider transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {media.map((item, index) => (
            <div
              className="keen-slider__slide flex justify-center items-center p-1"
              key={index}
            >
              {/* Video Card with Gold Border on Hover */}
              <div 
                className="relative aspect-[9/16] w-full overflow-hidden rounded-xl md:rounded-[2rem] shadow-sm border-2 border-transparent hover:border-[#d2bf7f] transition-all duration-500 group"
              >
                <video
                  src={item.src}
                  title={item.alt}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Brand Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Subtle bottom gradient for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}