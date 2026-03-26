"use client";

import React, { useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Assuming you have images/previews for these videos
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

  const [sliderRef] = useKeenSlider({
    loop: true,
    // Adjusted perView to show more slides like in your reference image
    slides: {
      perView: 2.2, // Mobile
      spacing: 4,   // Tighter spacing
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3.5, spacing: 5 },
      },
      "(min-width: 768px)": {
        slides: { perView: 4.5, spacing: 6 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 6, spacing: 6 }, // Desktop: shows 6 slides like the image
      },
    },
    created: (s) => {
      setLoaded(true);
      timer.current = setInterval(() => {
        s.next();
      }, 3500); // 3.5 seconds auto-play
    },
    destroyed: () => {
      if (timer.current) clearInterval(timer.current);
    },
  });

  return (
    <section className="py-10 md:py-20 bg-white">
      {/* Centered Heading */}
      <div className="max-w-6xl mx-auto mb-10 px-6">
        <h2 className="font-serif font-semibold text-[32px] md:text-[42px] text-[#30523E] leading-tight text-center md:text-left">
          What's Cooking?
        </h2>
        <p className="text-gray-500 mt-2 text-center md:text-left max-w-lg md:max-w-full mx-auto md:mx-0">
          Discover our social media and connect with us
        </p>
      </div>

      {/* FULL WIDTH SLIDER (EDGE-TO-EDGE) */}
      <div className="w-full overflow-hidden">
        {/* Added a subtle transition during load */}
        <div
          ref={sliderRef}
          className={`keen-slider transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {media.map((item, index) => (
            <div
              className="keen-slider__slide flex justify-center items-center"
              key={index}
            >
              {/* Product Card like in the image: Aspect ratio 9:16, tight white border, rounded corners */}
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl md:rounded-[2rem] shadow-sm border-2 border-white group">
                <video
                  src={item.src}
                  title={item.alt}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Optional: Add a soft dark overlay on hover 
                  or an overlay with the 'TIGER TIGER' logo, 
                  matching your reference image style.
                */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}