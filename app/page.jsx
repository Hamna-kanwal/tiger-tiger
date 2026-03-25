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

    </>
  );
}