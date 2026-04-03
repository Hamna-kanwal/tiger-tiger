"use client";


import HeroSlider from "./CompTest/Heroslider";
import BrandSlider from "./CompTest/Brandslider";
import ProductRangeSlider from "./CompTest/ProductRangeSlider";
import HeroSection from "./CompTest/HeroSection";       
import AmazingFlavour from "./CompTest/AmazingFlavour"; 
import ProductRange from "./CompTest/ProductRange";     
            
// import CrammedSlider from "./CompTest/CrammedSlider";
// import Wowchow from "./CompTest/Wowchow";
import Choice from "./CompTest/Choices";                
import CategorySlider from "./CompTest/CategorySlider";
import  Cuisine from  "./CompTest/Cuisine";
import About from "./CompTest/About";
import Work from "./CompTest/WorkSection"
import Choose from "./CompTest/Choose"
import SmoothSlider from "./CompTest/SmoothSlider";
import Blog from "./CompTest/Blog";
import Faq from "./CompTest/Faq";
import CTA from "./CompTest/CTA";
import Footer from "./CompTest/Footer";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <BrandSlider />
      <HeroSection />
      <AmazingFlavour />
      <ProductRange />
      <ProductRangeSlider />
   
      {/* <CrammedSlider /> */}
      {/* <Wowchow /> */}
      <Choice />
      <CategorySlider />
      <Cuisine/>
      {/* <BrandIntro /> */}
      <About/>
      <Work/>
      <Choose/>
     
      <SmoothSlider />
      <Blog/>
      <Faq/>
      <CTA/>
      <Footer />
    </>
  );
}