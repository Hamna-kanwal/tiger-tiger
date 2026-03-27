"use client";

// Saare sections ab "Components" folder se directly aa rahe hain
import HeroSlider from "./Components/Heroslider";
import BrandSlider from "./Components/Brandslider";
import ProductRangeSlider from "./Components/ProductRangeSlider";
import Herosection from "./Components/Herosection";       // Ab direct file hai
import AmazingFlavour from "./Components/AmazingFlavour"; // Ab direct file hai
import ProductRange from "./Components/ProductRange";     // Ab direct file hai
import Crammed from "./Components/Crammed";               // Ab direct file hai
import CrammedSlider from "./Components/CrammedSlider";
import Wowchow from "./Components/Wowchow";
import Choice from "./Components/Choices";                // Check karlein agar file name 'Choices' hai
import CategorySlider from "./Components/CategorySlider";
import BrandIntro from "./Components/BrandIntro";
import SmoothSlider from "./Components/SmoothSlider";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <BrandSlider />
      <Herosection />
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