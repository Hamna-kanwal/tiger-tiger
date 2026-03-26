"use client";
import HeroSlider from "./Components/Heroslider";
import BrandSlider from "./Components/Brandslider";
import ProductRangeSlider from "./Components/ProductRangeSlider";
import Herosection from "./Herosection/page";
import AmazingFlavour from "./AmazingFlavour/page";
import ProductRange from"./ProductRange/page";
import Crammed from "./Crammed/page";
import CrammedSlider from "./Components/CrammedSlider";
import Wowchow from "./Components/Wowchow";
import Choice from "./Choices/page"
import CategorySlider from "./Components/CategorySlider";
import BrandIntro from "./Components/BrandIntro";
import SmoothSlider from "./Components/SmoothSlider";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <>
      <HeroSlider />
        <BrandSlider/>
      <Herosection />
      <AmazingFlavour/>
      <ProductRange/>
      <ProductRangeSlider/>
      <Crammed/>
      <CrammedSlider/>
      <Wowchow/>
      <Choice/>
<CategorySlider/>
<BrandIntro/>
<SmoothSlider/>
<Footer/>
    </>
  );
}