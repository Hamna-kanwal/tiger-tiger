"use client";

import React, { useEffect, useRef, useState } from "react";
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

// index < allowed ho to poori video load hoti hai, warna sirf pehla frame (metadata)
const QueuedVideo = ({ src, title, index, allowed, onReady }) => {
  const ref = useRef(null);
  const inView = useRef(false);
  const canPlay = useRef(false);

  const tryPlay = () => {
    const el = ref.current;
    if (el && inView.current && canPlay.current) {
      el.play().catch(() => {});
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          el.pause();
        }
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={`${src}#t=0.1`}
      title={title}
      preload={index < allowed ? "auto" : "metadata"}
      muted
      loop
      playsInline
      onCanPlay={() => {
        canPlay.current = true;
        onReady(index);
        tryPlay();
      }}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
};

const ProductGallerySlider = () => {
  const [loaded, setLoaded] = useState(false);
  const [allowed, setAllowed] = useState(2); // shuru mein 2 videos poori load hongi
  const timer = useRef(null);

  // Brand Colors
  const brandPurple = "#4e1a51";

  // Jaise hi ek video chalne ke qabil ho, agli video ko load ki ijazat do
  const handleReady = (index) => {
    setAllowed((prev) => Math.max(prev, index + 2));
  };

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
          Explore Our Social Media
        </h2>

        <p className="text-black text-[16px] md:text-[18px] font-normal mt-3 text-center md:text-left max-w-lg md:max-w-full mx-auto md:mx-0 subHeading">
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
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl md:rounded-[2rem] shadow-sm border-2 border-transparent hover:border-[#d2bf7f] transition-all duration-500 group cursor-pointer bg-gray-100">
                <QueuedVideo
                  src={item.src}
                  title={item.alt}
                  index={index}
                  allowed={allowed}
                  onReady={handleReady}
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
};

export default ProductGallerySlider;