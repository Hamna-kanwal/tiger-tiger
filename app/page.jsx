import HeroSlider from "./Components/Heroslider";   
import BrandSlider from "./Components/Brandslider";
import HeroSection from "./Components/HeroSection";       
import AmazingFlavour from "./Components/AmazingFlavour"; 
import ProductRange from "./Components/ProductRange";     
import Choice from "./Components/Choices";                        
import CategorySlider from "./Components/CategorySlider";
import Cuisine from "./Components/Cuisine";
import About from "./Components/About";
import SourceSection from "./Components/SourceSection";
import Innovationsection from "./Components/InnovationSection"
import Choose from "./Components/Choose"
import SmoothSlider from "./Components/SmoothSlider";
import Blog from "./Components/Blog";
import Faq from "./Components/Faq";
import CTA from "./Components/CTA";

export default function Home() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tigertigerfoods.com/#webpage",
        "url": "https://www.tigertigerfoods.com/",
        "name": "Tiger Tiger Foods | Pan-Asian Food Wholesale Supplier UK",
        "isPartOf": { "@id": "https://www.tigertigerfoods.com/#website" },
        "about": { "@id": "https://www.tigertigerfoods.com/#organization" },
        "inLanguage": "en-GB"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tigertigerfoods.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where can I find a reliable Pan Asian food supplier in the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tiger Tiger supplies a wide range of authentic pan-Asian ingredients sourced from across Asia. We supply restaurants, retailers and food businesses with high-quality products backed by decades of industry experience."
            }
          },
          {
            "@type": "Question",
            "name": "Do you supply Pan Asian ingredients in bulk for restaurants and wholesalers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Tiger Tiger supplies pan-Asian ingredients in bulk for restaurants, wholesalers and foodservice businesses, meeting high-volume demand while keeping quality consistent."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure the authenticity of your Pan Asian food products?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work directly with trusted suppliers across Asia and follow traditional recipes and sourcing methods, so every product delivers the genuine flavour and quality expected in professional kitchens."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      
      <HeroSlider />
      <BrandSlider />
      <HeroSection />
      <AmazingFlavour />
      <ProductRange />
      <Choice />
      <CategorySlider />
      <Cuisine />
      <About />
      <SourceSection />
      <Innovationsection />
      <Choose />
      <SmoothSlider />
      <Blog />
      <Faq />
      <CTA />
    </>
  );
}