"use client";


import HeroSlider from "./CompTest/Heroslider";
import BrandSlider from "./CompTest/Brandslider";
import ProductRangeSlider from "./CompTest/ProductRangeSlider";
import HeroSection from "./CompTest/HeroSection";       
import AmazingFlavour from "./CompTest/AmazingFlavour"; 
import ProductRange from "./CompTest/ProductRange";     
import Crammed from "./CompTest/Crammed";               
import CrammedSlider from "./CompTest/CrammedSlider";
import Wowchow from "./CompTest/Wowchow";
import Choice from "./CompTest/Choices";                
import CategorySlider from "./CompTest/CategorySlider";
import BrandIntro from "./CompTest/BrandIntro";
import SmoothSlider from "./CompTest/SmoothSlider";
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
      <Crammed />
      <CrammedSlider />
      <Wowchow />
      <Choice />
      <CategorySlider />
      <BrandIntro />
      <SmoothSlider />
      <Footer />
    </>
  );
}