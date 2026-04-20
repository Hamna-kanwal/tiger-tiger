"use client";


import HeroSlider from "./CompTest/Heroslider";
import HeroCoursol from "./CompTest/HeroCoursol";     
import BrandSlider from "./CompTest/Brandslider";
import HeroSection from "./CompTest/HeroSection";       
import AmazingFlavour from "./CompTest/AmazingFlavour"; 
import ProductRange from "./CompTest/ProductRange";     
import Choice from "./CompTest/Choices";                
import CategorySlider from "./CompTest/CategorySlider";
import  Cuisine from  "./CompTest/Cuisine";
import About from "./CompTest/About";
import SourceSection from "./CompTest/SourceSection";
import Innovationsection from "./CompTest/InnovationSection"
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
      <HeroCoursol/>
      <BrandSlider />
      <HeroSection />
      <AmazingFlavour />
      <ProductRange />
      <Choice />
      <CategorySlider />
      <Cuisine/>
      <About/>
      <SourceSection/>
      <Innovationsection/>
      <Choose/>
      <SmoothSlider />
      <Blog/>
      <Faq/>
      <CTA/>
      <Footer />
    </>
  );
}