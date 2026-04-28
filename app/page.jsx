"use client";


import HeroSlider from "./Components/Heroslider";
import HeroCoursol from "./Components/HeroCoursol";     
import BrandSlider from "./Components/Brandslider";
import HeroSection from "./Components/HeroSection";       
import AmazingFlavour from "./Components/AmazingFlavour"; 
import ProductRange from "./Components/ProductRange";     
import Choice from "./Components/Choices";                
import CategorySlider from "./Components/CategorySlider";
import  Cuisine from  "./Components/Cuisine";
import About from "./Components/About";
import SourceSection from "./Components/SourceSection";
import Innovationsection from "./Components/InnovationSection"
import Choose from "./Components/Choose"
import SmoothSlider from "./Components/SmoothSlider";
import Blog from "./Components/Blog";
import Faq from "./Components/Faq";
import CTA from "./Components/CTA";


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
    </>
  );
}