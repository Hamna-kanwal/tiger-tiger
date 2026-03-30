"use client";

// Saare sections ab "Components" folder se directly aa rahe hain
import HeroSlider from "./CompTest/Heroslider";
import BrandSlider from "./CompTest/Brandslider";
import ProductRangeSlider from "./CompTest/ProductRangeSlider";
import HeroSection from "./CompTest/HeroSection";       // Ab direct file hai
import AmazingFlavour from "./CompTest/AmazingFlavour"; // Ab direct file hai
import ProductRange from "./CompTest/ProductRange";     // Ab direct file hai
import Crammed from "./CompTest/Crammed";               // Ab direct file hai
import CrammedSlider from "./CompTest/CrammedSlider";
import Wowchow from "./CompTest/Wowchow";
import Choice from "./CompTest/Choices";                // Check karlein agar file name 'Choices' hai
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