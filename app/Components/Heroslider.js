
import Image from "next/image";

import Link from "next/link";

import { motion } from "framer-motion";



// Agar swiper use nahi ho raha to ye CSS delete bhi kar sakte hain

import "swiper/css";

import "swiper/css/navigation";



export default function MySlider() {

  return (

    <section className="relative w-full overflow-hidden bg-white">

      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[50vh] md:h-[100vh]">

       

        {/* LEFT SIDE - Floating Icons */}

        <div className="absolute inset-0 z-10 pointer-events-none">

          {[

            { src: "/yello.png", pos: "bottom-[15%] left-[10%] lg:left-[15%] w-20" },

            { src: "/red.png", pos: "top-[200px] left-[100px] lg:left-[150px] w-20" },

            { src: "/yello.png", pos: "top-[50%] right-[40%] lg:right-[50%] w-20" },

            { src: "/white.png", pos: "top-[30%] right-[60%] w-15" }

          ].map((icon, i) => (

            <motion.div

              key={i}

              animate={{ x: [0, 15, -15, 0], y: [0, -15, 15, 0] }}

              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}

              className={`absolute ${icon.pos} hidden xl:block`}

            >

              <Image src={icon.src} alt="icon" width={120} height={120} className="drop-shadow-2xl" />

            </motion.div>

          ))}

        </div>



        {/* LEFT SIDE - Text Content */}

        <div className="px-6 md:px-16  flex flex-col justify-center">

          <p className="text-[#405305] lg:text-lg font-outft font-semibold">

            Nature’s Best in Every Sip

          </p>

          <h1 className="eczar text-[60px] md:text-[50px] lg:text-[45px] m-0 p-0 font-black tracking-tighter">

            The Champion of <span className="text-[#405305]">Pulp</span>

          </h1>

          <p className="text-sm lg:text-base text-[#405305] font-outfit font-medium">

            Your Thirst’s <span className="text-[#405305] eczar text-[16px] lg:text-[18px] font-bold">New Weakness</span>.

          </p>

          <div className="flex justify-start gap-4 flex-wrap mt-2">

            <Link href="/tt-app" className="border-2 border-[#556D08] px-6 lg:px-8 py-2 lg:py-3 rounded-full font-bold hover:bg-[#556D08] hover:text-white transition-all">

              View Our App

            </Link>

            <Link href="/products" className="bg-[#556D08] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full font-bold border-2 border-transparent hover:bg-white hover:text-[#556D08] hover:border-[#556D08] transition-all">

              Discover all products

            </Link>

          </div>

        </div>


{/* 1. Parent Div: Iska relative hona aur height/width hona zaroori hai */}
<div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:h-screen overflow-hidden">
  
  <Image
    src="/pulp_can.webp" 
    alt="Pulp Cans Full Fit"
    // 2. 'fill' image ko parent div ke chaaron koshon tak phailata hai
    fill
    // 3. 'object-cover' ensures ke poori jagah fill ho (Perfect Fit)
    // Agar aap chahti hain ke image katay nahi balkay poori nazar aaye, 
    // toh 'object-contain' use karein, lekin us se side pe khali jagah aa sakti hai.
    className="object-cover" 
    priority
    sizes="(max-width: 786px) 100vw, 40vw"
  />

</div>


      </div>

    </section>

  );

}